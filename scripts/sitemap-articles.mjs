// Regenera el bloque de artículos dentro de public/sitemap.xml a partir de
// src/data/articles.js. Es idempotente: reemplaza lo que haya entre los
// marcadores <!-- articles:start --> / <!-- articles:end -->.
//
// Correr después de agregar o cambiar un artículo:  npm run sitemap:articles
//
// Las RUTAS del prerender no necesitan nada: scripts/prerender.mjs las deriva
// del mismo arreglo de artículos.
import { readFileSync, writeFileSync } from 'fs'
import { dirname, join } from 'path'
import { fileURLToPath } from 'url'
import { articles } from '../src/data/articles.js'

const root = join(dirname(fileURLToPath(import.meta.url)), '..')
const sitemapPath = join(root, 'public', 'sitemap.xml')
const DOMAIN = 'https://easyprodigital.com'

const block = articles
  .flatMap((a) =>
    ['', '/es'].map((prefix) =>
      [
        '  <url>',
        `    <loc>${DOMAIN}${prefix}/blog/${a.slug}/</loc>`,
        `    <lastmod>${a.date}</lastmod>`,
        '    <priority>0.7</priority>',
        `    <xhtml:link rel="alternate" hreflang="en" href="${DOMAIN}/blog/${a.slug}/" />`,
        `    <xhtml:link rel="alternate" hreflang="es" href="${DOMAIN}/es/blog/${a.slug}/" />`,
        `    <xhtml:link rel="alternate" hreflang="x-default" href="${DOMAIN}/blog/${a.slug}/" />`,
        '  </url>',
      ].join('\n')
    )
  )
  .join('\n')

const wrapped = `  <!-- articles:start -->\n${block}\n  <!-- articles:end -->\n`

let xml = readFileSync(sitemapPath, 'utf8')
if (/ {2}<!-- articles:start -->[\s\S]*? {2}<!-- articles:end -->\n/.test(xml)) {
  xml = xml.replace(/ {2}<!-- articles:start -->[\s\S]*? {2}<!-- articles:end -->\n/, wrapped)
} else {
  xml = xml.replace('</urlset>', `${wrapped}</urlset>`)
}
writeFileSync(sitemapPath, xml)

const total = (xml.match(/<url>/g) || []).length
console.log(`[sitemap] ${articles.length} artículos x 2 idiomas — ${total} URLs en total`)
