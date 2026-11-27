import { useEffect } from 'react'
import { useLanguage } from '../i18n/LanguageContext.jsx'

/**
 * Manages per-page meta tags with no external dependencies, including
 * bilingual hreflang alternates (en default at "/", es under "/es/...").
 * <Seo title="..." description="..." path="/services/" jsonLd={{...}} />
 * `path` is always the LANGUAGE-NEUTRAL path (no /es prefix) — Seo computes
 * both language URLs from it.
 */
function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, hreflang, href) {
  const selector = hreflang
    ? `link[rel="${rel}"][hreflang="${hreflang}"]`
    : `link[rel="${rel}"]`
  let el = document.head.querySelector(selector)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    if (hreflang) el.setAttribute('hreflang', hreflang)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

// Páginas que no deben aparecer en Google (formulario interno, 404).
// `type` es el og:type: 'website' por defecto, 'article' para el blog.
export default function Seo({
  title,
  description,
  path = '/',
  jsonLd = null,
  image = null,
  imageAlt = null,
  noindex = false,
  type = 'website',
  publishedTime = null,
  esOnly = false,
}) {
  const { lang, data } = useLanguage()
  const { site } = data

  useEffect(() => {
    const enUrl = site.domain + path
    const esUrl = site.domain + '/es' + path
    const url = esOnly || lang === 'es' ? esUrl : enUrl

    // Falls back to the site-wide 1200x630 social preview (site.ogImage) so
    // every page shares a link with a real thumbnail instead of none at all.
    // Cada página tiene su propia tarjeta 1200x630 en /og/<idioma>/<clave>.jpg
    // (se generan con `npm run og`). La portada y las páginas noindex usan la
    // imagen global.
    const key = path.replace(/^\/+|\/+$/g, '').replace(/\//g, '-')
    const cardPath = key && !noindex ? `/og/${lang}/${key}.jpg` : null
    const imagePath = image || cardPath || site.ogImage
    const isDefaultSize = !image
    const imageUrl = imagePath ? site.domain + imagePath : null
    const altText = imageAlt || title

    document.documentElement.lang = lang
    document.title = title
    upsertMeta('name', 'description', description)

    // canonical (current language) + hreflang alternates (both languages)
    upsertLink('canonical', null, url)
    // Inglés para EE. UU. y Canadá, español para Colombia (y el público
    // hispano de EE. UU.). Solo hay dos URLs por página: varios códigos de
    // región pueden apuntar a la misma.
    if (esOnly) {
      // Páginas que solo existen en español: no deben anunciar una versión
      // en inglés que no existe. Se eliminan los enlaces que haya dejado una
      // página anterior; al volver a una página normal, upsertLink los recrea.
      for (const code of ['en', 'en-US', 'en-CA', 'es-US']) {
        const link = document.head.querySelector(`link[rel="alternate"][hreflang="${code}"]`)
        if (link) link.remove()
      }
      upsertLink('alternate', 'es', esUrl)
      upsertLink('alternate', 'es-CO', esUrl)
      upsertLink('alternate', 'x-default', esUrl)
    } else {
      upsertLink('alternate', 'en', enUrl)
      upsertLink('alternate', 'en-US', enUrl)
      upsertLink('alternate', 'en-CA', enUrl)
      upsertLink('alternate', 'es', esUrl)
      upsertLink('alternate', 'es-CO', esUrl)
      upsertLink('alternate', 'es-US', esUrl)
      upsertLink('alternate', 'x-default', enUrl)
    }

    // Open Graph / Twitter
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:type', type)
    upsertMeta('property', 'og:site_name', site.brand)
    upsertMeta(
      'name',
      'robots',
      noindex ? 'noindex, follow' : 'index, follow, max-image-preview:large, max-snippet:-1',
    )
    if (publishedTime) upsertMeta('property', 'article:published_time', publishedTime)
    upsertMeta('property', 'og:locale', esOnly || lang === 'es' ? 'es_CO' : 'en_US')
    if (esOnly) {
      const alternateLocale = document.head.querySelector('meta[property="og:locale:alternate"]')
      if (alternateLocale) alternateLocale.remove()
    } else {
      upsertMeta('property', 'og:locale:alternate', lang === 'es' ? 'en_US' : 'es_CO')
    }
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    if (imageUrl) {
      upsertMeta('property', 'og:image', imageUrl)
      if (isDefaultSize) {
        upsertMeta('property', 'og:image:width', '1200')
        upsertMeta('property', 'og:image:height', '630')
      }
      upsertMeta('property', 'og:image:alt', altText)
      upsertMeta('name', 'twitter:image:alt', altText)
      upsertMeta('name', 'twitter:card', 'summary_large_image')
      upsertMeta('name', 'twitter:image', imageUrl)
    } else {
      upsertMeta('name', 'twitter:card', 'summary')
    }

    // Per-page JSON-LD
    const prev = document.getElementById('page-jsonld')
    if (prev) prev.remove()
    if (jsonLd) {
      const script = document.createElement('script')
      script.type = 'application/ld+json'
      script.id = 'page-jsonld'
      script.textContent = JSON.stringify({ inLanguage: lang, ...jsonLd })
      document.head.appendChild(script)
    }
  }, [title, description, path, jsonLd, image, imageAlt, noindex, type, publishedTime, esOnly, lang, site.domain, site.brand, site.ogImage])

  return null
}
