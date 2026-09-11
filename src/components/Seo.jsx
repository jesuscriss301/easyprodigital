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

export default function Seo({ title, description, path = '/', jsonLd = null, image = null, imageAlt = null }) {
  const { lang, data } = useLanguage()
  const { site } = data

  useEffect(() => {
    const enUrl = site.domain + path
    const esUrl = site.domain + '/es' + path
    const url = lang === 'es' ? esUrl : enUrl

    // Falls back to the site-wide 1200x630 social preview (site.ogImage) so
    // every page shares a link with a real thumbnail instead of none at all.
    const imagePath = image || site.ogImage
    const imageUrl = imagePath ? site.domain + imagePath : null
    const altText = imageAlt || title

    document.documentElement.lang = lang
    document.title = title
    upsertMeta('name', 'description', description)

    // canonical (current language) + hreflang alternates (both languages)
    upsertLink('canonical', null, url)
    upsertLink('alternate', 'en', enUrl)
    upsertLink('alternate', 'es', esUrl)
    upsertLink('alternate', 'x-default', enUrl)

    // Open Graph / Twitter
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:type', 'website')
    upsertMeta('property', 'og:locale', lang === 'es' ? 'es_CO' : 'en_US')
    upsertMeta('name', 'twitter:title', title)
    upsertMeta('name', 'twitter:description', description)
    if (imageUrl) {
      upsertMeta('property', 'og:image', imageUrl)
      upsertMeta('property', 'og:image:width', '1200')
      upsertMeta('property', 'og:image:height', '630')
      upsertMeta('property', 'og:image:alt', altText)
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
  }, [title, description, path, jsonLd, image, imageAlt, lang, site.domain, site.ogImage])

  return null
}
