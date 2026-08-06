import { useEffect } from 'react'

const SITE = 'https://demos.easyprodigital.com'

function upsertMeta(attr, key, content) {
  let el = document.head.querySelector(`meta[${attr}="${key}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, key)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function upsertLink(rel, href) {
  let el = document.head.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

/**
 * Maneja el <title> y las meta tags de cada demo, sin dependencias externas
 * (mismo enfoque que src/components/Seo.jsx del sitio principal).
 * `robots` debe ser 'index, follow' para demos de nicho o
 * 'noindex, nofollow' para demos hechas a la medida de un prospecto puntual.
 */
export default function Seo({ title, description, path = '/', robots = 'index, follow' }) {
  useEffect(() => {
    const url = SITE + path
    document.title = title
    upsertMeta('name', 'description', description)
    upsertMeta('name', 'robots', robots)
    upsertLink('canonical', url)
    upsertMeta('property', 'og:title', title)
    upsertMeta('property', 'og:description', description)
    upsertMeta('property', 'og:url', url)
    upsertMeta('property', 'og:type', 'website')
  }, [title, description, path, robots])

  return null
}
