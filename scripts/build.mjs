// Build con prerender: genera HTML estático real para cada una de las 4
// páginas en español y en inglés (8 archivos). Google y los buscadores con
// IA leen el contenido sin ejecutar JavaScript, y el navegador luego
// "hidrata" la página. También escribe el sitemap con hreflang.
import { build } from 'vite'
import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, join } from 'node:path'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const dist = join(root, 'dist')
const ssrOut = join(root, '.ssr')

await build({ root, logLevel: 'warn' })
await build({ root, logLevel: 'warn', build: { ssr: 'src/entry-server.jsx', outDir: ssrOut, emptyOutDir: true } })

const { render, head, LANGS, PAGES, PAGE_KEYS, LASTMOD } = await import(pathToFileURL(join(ssrOut, 'entry-server.js')).href)
const template = readFileSync(join(dist, 'index.html'), 'utf8')
const SITE = 'https://uchuva.easyprodigital.com'

for (const page of PAGE_KEYS) {
  for (const lang of LANGS) {
    const html = template
      .replace('<html lang="es">', `<html lang="${lang}">`)
      .replace('<!--app-head-->', head(page, lang))
      .replace('<!--app-html-->', render(page, lang))
    const dir = join(dist, PAGES[page][lang])
    mkdirSync(dir, { recursive: true })
    writeFileSync(join(dir, 'index.html'), html)
    console.log(`[build] ${PAGES[page][lang].padEnd(24)} ${html.length} bytes`)
  }
}

// sitemap.xml generado desde las mismas rutas (un <url> por página e idioma)
const today = LASTMOD
const alt = (page) => [
  ['es', PAGES[page].es], ['es-CO', PAGES[page].es],
  ['en', PAGES[page].en], ['en-US', PAGES[page].en],
  ['x-default', PAGES[page].es],
].map(([l, p]) => `    <xhtml:link rel="alternate" hreflang="${l}" href="${SITE}${p}" />`).join('\n')
const urls = PAGE_KEYS.flatMap((page) => LANGS.map((lang) =>
  `  <url>\n    <loc>${SITE}${PAGES[page][lang]}</loc>\n    <lastmod>${today}</lastmod>\n    <changefreq>${page === 'pricing' ? 'weekly' : 'monthly'}</changefreq>\n    <priority>${page === 'home' ? '1.0' : '0.8'}</priority>\n${alt(page)}\n  </url>`))
writeFileSync(join(dist, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n${urls.join('\n')}\n</urlset>\n`)
rmSync(ssrOut, { recursive: true, force: true })
