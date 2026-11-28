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

const enUrl = (slug) => `${DOMAIN}/blog/${slug}/`
const esUrl = (slug) => `${DOMAIN}/es/blog/${slug}/`

function urlEntry({ loc, date, alternates }) {
  return [
    '  <url>',
    `    <loc>${loc}</loc>`,
    `    <lastmod>${date}</lastmod>`,
    '    <priority>0.7</priority>',
    ...alternates.map(([code, href]) => `    <xhtml:link rel="alternate" hreflang="${code}" href="${href}" />`),
    '  </url>',
  ].join('\n')
}

// Artículos bilingües: dos URLs y los alternates completos. Artículos con
// `onlyLang`: una sola URL, con alternates únicamente del idioma que existe.
const bilingualAlternates = (slug) => [
  ['en', enUrl(slug)],
  ['en-US', enUrl(slug)],
  ['en-CA', enUrl(slug)],
  ['es', esUrl(slug)],
  ['es-CO', esUrl(slug)],
  ['es-US', esUrl(slug)],
  ['x-default', enUrl(slug)],
]

const block = articles
  .flatMap((a) => {
    if (a.onlyLang === 'es') {
      return [
        urlEntry({
          loc: esUrl(a.slug),
          date: a.date,
          alternates: [
            ['es', esUrl(a.slug)],
            ['es-CO', esUrl(a.slug)],
            ['x-default', esUrl(a.slug)],
          ],
        }),
      ]
    }
    if (a.onlyLang === 'en') {
      return [
        urlEntry({
          loc: enUrl(a.slug),
          date: a.date,
          alternates: [
            ['en', enUrl(a.slug)],
            ['en-US', enUrl(a.slug)],
            ['en-CA', enUrl(a.slug)],
            ['en-GB', enUrl(a.slug)],
            ['x-default', enUrl(a.slug)],
          ],
        }),
      ]
    }
    return ['en', 'es'].map((lang) =>
      urlEntry({
        loc: lang === 'es' ? esUrl(a.slug) : enUrl(a.slug),
        date: a.date,
        alternates: bilingualAlternates(a.slug),
      }),
    )
  })
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
const bilingual = articles.filter((a) => !a.onlyLang).length
const onlyEs = articles.filter((a) => a.onlyLang === 'es').length
const onlyEn = articles.filter((a) => a.onlyLang === 'en').length
console.log(
  `[sitemap] ${articles.length} artículos (${bilingual} bilingües, ${onlyEs} solo ES, ${onlyEn} solo EN) — ${total} URLs en total`,
)
