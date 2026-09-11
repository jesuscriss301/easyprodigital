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

const __dirname = dirname(fileURLToPath(import.meta.url))
const root = join(__dirname, '..')
const distDir = join(root, 'dist')

// Todas las rutas reales declaradas en src/App.jsx (RouteChildren, en ambas
// ramas de idioma). Mantener esta lista sincronizada si se agregan rutas.
const ROUTE_PATHS = [
  '',
  'services',
  'portfolio',
  'blog',
  'about',
  'contact',
  'faq',
  'privacy',
  'terms',
  'cookies',
]

const ROUTES = [
  ...ROUTE_PATHS.map((p) => `/${p}`),
  ...ROUTE_PATHS.map((p) => `/es/${p}`),
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
  const page = await browser.newPage()

  let ok = 0
  let failed = 0

  for (const route of ROUTES) {
    const url = new URL(route, address).toString()
    try {
      await page.goto(url, { waitUntil: 'networkidle', timeout: 30000 })
      // Deja que React termine de montar/pintar contenido dinámico (GSAP, etc.)
      await page.waitForTimeout(300)
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
