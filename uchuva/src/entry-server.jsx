import { StrictMode } from 'react'
import { renderToString } from 'react-dom/server'
import App from './App.jsx'
import { buildJsonLd } from './ProductPage.jsx'
import { PRODUCT, WA_CONTENT, LANG_PATH, pageUrl } from './content.js'

export function render(lang) {
  return renderToString(
    <StrictMode>
      <App lang={lang} />
    </StrictMode>
  )
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

/** Etiquetas del <head> de cada idioma: título, descripción, canonical,
 *  hreflang, Open Graph y datos estructurados. */
export function head(lang) {
  const c = WA_CONTENT[lang]
  const url = pageUrl(lang)
  const es = pageUrl('es')
  const en = pageUrl('en')
  const og = `${PRODUCT.site}/og/${lang}.jpg`
  return [
    `<title>${esc(c.seo.title)}</title>`,
    `<meta name="description" content="${esc(c.seo.description)}" />`,
    `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1" />`,
    `<link rel="canonical" href="${url}" />`,
    `<link rel="alternate" hreflang="es" href="${es}" />`,
    `<link rel="alternate" hreflang="es-CO" href="${es}" />`,
    `<link rel="alternate" hreflang="es-US" href="${es}" />`,
    `<link rel="alternate" hreflang="en" href="${en}" />`,
    `<link rel="alternate" hreflang="en-US" href="${en}" />`,
    `<link rel="alternate" hreflang="x-default" href="${es}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${PRODUCT.name}" />`,
    `<meta property="og:title" content="${esc(c.seo.title)}" />`,
    `<meta property="og:description" content="${esc(c.seo.description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:locale" content="${lang === 'es' ? 'es_CO' : 'en_US'}" />`,
    `<meta property="og:image" content="${og}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(c.seo.title)}" />`,
    `<meta name="twitter:description" content="${esc(c.seo.description)}" />`,
    `<meta name="twitter:image" content="${og}" />`,
    `<script type="application/ld+json">${JSON.stringify(buildJsonLd(lang)).replace(/</g, '\\u003c')}</script>`,
  ].join('\n    ')
}

export const LANGS = Object.keys(LANG_PATH)
export { LANG_PATH }
