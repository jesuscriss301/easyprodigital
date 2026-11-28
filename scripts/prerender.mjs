// Pre-renderiza cada ruta de la SPA a un dist/<ruta>/index.html estático real.
//
// Por qué existe este script:
// GitHub Pages, al no encontrar un archivo físico para una ruta profunda
// (p. ej. /services/), sirve el contenido de 404.html (copia de index.html)
// pero con código de estado HTTP 404. Un navegador real no nota nada porque
// React Router toma el control y pinta la página correcta — pero Googlebot
// sí respeta ese 404 y nunca indexa la página, sin importar el contenido.
//
// La solución: generar, en build time, un archivo HTML real por cada ruta
// (con el contenido ya renderizado por React) para que GitHub Pages lo
// sirva como archivo estático normal con status 200. El bundle de JS se
// sigue cargando igual y React hace hidratación/render normal en el
// cliente, así que la interactividad no cambia en nada.
import { chromium } from 'playwright'
import { preview } from 'vite'
import { mkdirSync, writeFileSync, existsSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { articles } from '../src/data/articles.js'

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const distDir = join(root, 'dist')

// Rutas estáticas reales declaradas en src/App.jsx (RouteChildren). Las de
// ES_ONLY_PATHS solo existen en español y se excluyen de la rama inglesa.
// Las rutas de artículos se derivan de articles.js más abajo, respetando
// `onlyLang`; mantener esta lista sincronizada si se agregan páginas.
const ROUTE_PATHS = [
  '',
  'services',
  'services/real-estate-website-design',
  'services/plumber-website-design',
  'services/lawyer-website-design',
  'services/med-spa-website-design',
  'services/dental-website-design',
  'services/google-business-profile-setup',
  'services/get-found-online',
  'services/instant-replies',
  'services/customer-retention',
  'services/web-development',
  'services/mobile-development',
  'services/saas-development',
  'services/seo-services',
  'services/digital-marketing',
  'services/ai-integrations',
  // Páginas por ciudad: existen solo en español (ver ES_ONLY_PATHS).
  'paginas-web-medellin',
  'consultoria-ia',
  'consultoria-ia-medellin',
  'consultoria-ia-cucuta',
  'consultoria-ia-bucaramanga',
  'pricing',
  'portfolio',
  'blog',
  'about',
  'contact',
  'faq',
  'privacy',
  'terms',
  'cookies',
]

// Rutas que solo existen en español (no tienen versión inglesa). Se
// prerenderizan únicamente como /es/<slug>; pedirlas en inglés redirige a
// /es/<slug>/ desde CityPage (src/pages/pages.jsx).
const ES_ONLY_PATHS = [
  'paginas-web-medellin',
  'consultoria-ia',
  'consultoria-ia-medellin',
  'consultoria-ia-cucuta',
  'consultoria-ia-bucaramanga',
]

// Un artículo = una ruta, pero solo en los idiomas en los que existe: los
// artículos con `onlyLang` se prerenderizan únicamente en ese idioma. Se
// derivan de articles.js para que agregar uno allí baste.
const articlePaths = (lang) =>
  articles.filter((a) => !a.onlyLang || a.onlyLang === lang).map((a) => `blog/${a.slug}`)

const ROUTES = [
  ...ROUTE_PATHS.filter((p) => !ES_ONLY_PATHS.includes(p)).map((p) => `/${p}`),
  ...articlePaths('en').map((p) => `/${p}`),
  ...ROUTE_PATHS.map((p) => `/es/${p}`),
  ...articlePaths('es').map((p) => `/es/${p}`),
].map((p) => p.replace(/\/+$/, '') || '/') // sin slash final, salvo la raíz

async function main() {
  if (!existsSync(distDir)) {
    console.error('[prerender] No existe dist/. Corre "vite build" primero.')
    process.exit(1)
  }

  // Servimos el build ya generado (no el dev server) para prerenderizar
  // exactamente lo que se va a publicar.
  const previewServer = await preview({
    root,
    preview: { port: 4173, strictPort: false },
  })
  const address = previewServer.resolvedUrls.local[0]
  console.log(`[prerender] Sirviendo build en ${address}`)

  const browser = await chromium.launch(
    process.env.PLAYWRIGHT_CHROMIUM_PATH
      ? { executablePath: process.env.PLAYWRIGHT_CHROMIUM_PATH }
      : {}
  )
  // reducedMotion: los componentes animados (SplitText, Reveal, CardSwap, LetterGlitch)
  // no dividen ni ocultan el texto, así el HTML guardado queda limpio y visible,
  // y coincide con lo que React espera al hidratar.
  const page = await browser.newPage({ reducedMotion: 'reduce' })
  await page.addInitScript(() => { window.__PRERENDER__ = true })

  let ok = 0
  let failed = 0

  for (const route of ROUTES) {
    // Con barra final, igual que la URL real que abre el visitante (GitHub Pages
    // redirige /ruta a /ruta/): así los enlaces activos del menú y demás detalles
    // que dependen de la URL coinciden al hidratar.
    const url = new URL(route === '/' ? '/' : `${route}/`, address).toString()
    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 })
      // Deja que React termine de montar/pintar contenido dinámico (GSAP, etc.)
      await page.waitForTimeout(300)
      // React necesita un separador <!-- --> entre dos textos seguidos (p. ej.
      // "-" + "50" + "%"). Al serializar el DOM, el navegador los fusiona en uno
      // solo y la hidratación falla; aquí se insertan como lo haría React en el servidor.
      await page.evaluate(() => {
        const root = document.getElementById('root')
        const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT)
        const pairs = []
        for (let n = walker.nextNode(); n; n = walker.nextNode()) {
          if (n.nextSibling && n.nextSibling.nodeType === Node.TEXT_NODE) pairs.push(n)
        }
        for (const n of pairs) n.parentNode.insertBefore(document.createComment(' '), n.nextSibling)
        // Los bloques que se revelan al hacer scroll se guardan sin "is-visible",
        // como los pinta React al arrancar; el hero (data-reveal="now") sí queda visible.
        root.querySelectorAll('.reveal[data-reveal="scroll"]').forEach((el) => el.classList.remove('is-visible'))
        // El contenido de <main> va dentro de un <Suspense> (páginas cargadas por
        // partes, ver App.jsx). React marca esos bloques con <!--$--> ... <!--/$-->
        // en el HTML; sin las marcas, al hidratar descartaría el contenido.
        const main = root.querySelector('main.shell-main')
        if (main) {
          main.insertBefore(document.createComment('$'), main.firstChild)
          main.appendChild(document.createComment('/$'))
        }
      })
      const html = await page.content()

      const outDir = route === '/' ? distDir : join(distDir, route.slice(1))
      mkdirSync(outDir, { recursive: true })
      writeFileSync(join(outDir, 'index.html'), html, 'utf-8')
      console.log(`[prerender] OK   ${route.padEnd(20)} -> ${join(outDir, 'index.html').replace(root + '/', '')}`)
      ok++
    } catch (err) {
      console.error(`[prerender] FAIL ${route}: ${err.message}`)
      failed++
    }
  }

  await browser.close()
  await previewServer.close()

  console.log(`[prerender] Listo: ${ok} ok, ${failed} fallidas de ${ROUTES.length} rutas.`)
  if (failed > 0) process.exit(1)
}

main().catch((err) => {
  console.error(err)
  process.exit(1)
})
