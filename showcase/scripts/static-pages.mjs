// Corre después de `vite build`. El showcase es una SPA: sin esto, todas las
// URLs devuelven el mismo index.html con el título genérico "Sample Websites"
// y Google tiene que ejecutar el JavaScript para saber de qué trata cada demo.
// Aquí se genera dist/<slug>/index.html con el <title>, la descripción, el
// canonical y el robots de cada demo ya escritos en el HTML, más el
// sitemap.xml y el robots.txt del subdominio. nginx sirve esos archivos
// directo (try_files $uri/) y el bundle de React se hidrata igual que antes.
import { readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { allDemos } from '../src/demos/index.js'

const SITE = 'https://demos.easyprodigital.com'
// Carpeta de salida: dist/ por defecto; se puede pasar otra como argumento.
const dist = process.argv[2]
  ? new URL(`file://${process.argv[2].replace(/\/?$/, '/')}`)
  : new URL('../dist/', import.meta.url)
const template = readFileSync(new URL('index.html', dist), 'utf8')

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;').replace(/>/g, '&gt;')

function withHead(meta) {
  const url = SITE + meta.path
  const tags = [
    `<title>${esc(meta.title)}</title>`,
    `<meta name="description" content="${esc(meta.description)}" />`,
    `<meta name="robots" content="${esc(meta.robots)}" />`,
    `<link rel="canonical" href="${url}" />`,
    `<meta property="og:title" content="${esc(meta.title)}" />`,
    `<meta property="og:description" content="${esc(meta.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:type" content="website" />`,
  ].join('\n    ')
  return template.replace(/<title>[\s\S]*?<\/title>/, tags)
}

// Home del showcase
const home = {
  title: 'Website Design Examples by Industry (Live Demos) | Easy Pro Digital',
  description:
    'Browse live website examples for plumbers, law firms, real estate agents, dentists, med spas and 15+ more industries. Pick one and get it with your brand in 7 days.',
  robots: 'index, follow',
  path: '/',
}
writeFileSync(new URL('index.html', dist), withHead(home))

const indexable = [home.path]
let pages = 0
for (const demo of allDemos) {
  if (!demo?.slug || !demo.seo) continue
  const meta = {
    title: demo.seo.title,
    description: demo.seo.description,
    robots: demo.seo.robots || 'index, follow',
    path: `/${demo.slug}/`,
  }
  const dir = new URL(`${demo.slug}/`, dist)
  mkdirSync(dir, { recursive: true })
  writeFileSync(new URL('index.html', dir), withHead(meta))
  pages += 1
  if (!meta.robots.includes('noindex')) indexable.push(meta.path)
}

const today = new Date().toISOString().slice(0, 10)
const sitemap =
  '<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n' +
  indexable.map((p) => `  <url><loc>${SITE}${p}</loc><lastmod>${today}</lastmod></url>`).join('\n') +
  '\n</urlset>\n'
writeFileSync(new URL('sitemap.xml', dist), sitemap)
writeFileSync(new URL('robots.txt', dist), `User-agent: *\nAllow: /\n\nSitemap: ${SITE}/sitemap.xml\n`)

console.log(`static-pages: ${pages} demos con HTML propio, ${indexable.length} URLs en el sitemap`)
