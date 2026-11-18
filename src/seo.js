import { PRODUCT, WA_CONTENT, CONTACT, PAGES, PAGE_KEYS, pageUrl } from './content.js'
import { PAGE_COPY } from './pagecopy.js'
import { formatCOP } from './parts.jsx'

export const LASTMOD = '2026-11-18'

/** Título y descripción SEO de cada página en cada idioma. */
export function seoFor(page, lang) {
  const p = PAGE_COPY[lang][page]
  const { total, taken } = PRODUCT.founders
  const left = Math.max(total - taken, 0)
  const description = typeof p.seo.description === 'function' ? p.seo.description(total, left) : p.seo.description
  return { title: p.seo.title, description }
}

const org = () => ({
  '@type': 'Organization',
  '@id': `${CONTACT.companyUrl}/#organization`,
  name: CONTACT.company,
  url: CONTACT.companyUrl,
  email: CONTACT.email,
  areaServed: ['CO', 'US'],
  address: { '@type': 'PostalAddress', addressLocality: 'Medellín', addressCountry: 'CO' },
})

const software = (lang, withOffer) => {
  const c = WA_CONTENT[lang]
  const { total, taken } = PRODUCT.founders
  const node = {
    '@type': 'SoftwareApplication',
    '@id': `${PRODUCT.site}/#software`,
    name: PRODUCT.name,
    applicationCategory: 'BusinessApplication',
    operatingSystem: 'Web',
    inLanguage: lang,
    description: c.seo.description,
    url: pageUrl('home', lang),
    image: PRODUCT.site + PRODUCT.logo,
    provider: { '@id': `${CONTACT.companyUrl}/#organization` },
    areaServed: ['CO', 'US'],
  }
  if (withOffer) {
    node.screenshot = c.panel.tabs.slice(0, 4).map((t) => PRODUCT.site + PRODUCT.img(t.img))
    node.featureList = c.features.groups.map((g) => g.t)
    node.offers = {
      '@type': 'Offer',
      priceCurrency: PRODUCT.price.currency,
      price: PRODUCT.price.setup,
      description: `${c.founders.setupLabel} + ${formatCOP(PRODUCT.price.monthly, lang)} ${c.founders.monthlyLabel}`,
      availability: total - taken > 0 ? 'https://schema.org/LimitedAvailability' : 'https://schema.org/SoldOut',
      url: pageUrl('pricing', lang),
    }
  }
  return node
}

/** Datos estructurados de cada página (JSON-LD). */
export function buildJsonLd(page, lang) {
  const c = WA_CONTENT[lang]
  const p = PAGE_COPY[lang]
  const url = pageUrl(page, lang)
  const { title, description } = seoFor(page, lang)
  const graph = [
    org(),
    {
      '@type': 'WebSite',
      '@id': `${PRODUCT.site}/#website`,
      url: PRODUCT.site + '/',
      name: PRODUCT.name,
      inLanguage: lang,
      publisher: { '@id': `${CONTACT.companyUrl}/#organization` },
    },
    {
      '@type': 'WebPage',
      '@id': `${url}#webpage`,
      url,
      name: title,
      description,
      inLanguage: lang,
      isPartOf: { '@id': `${PRODUCT.site}/#website` },
      about: { '@id': `${PRODUCT.site}/#software` },
      dateModified: LASTMOD,
      primaryImageOfPage: PRODUCT.site + `/og/${lang}.jpg`,
    },
  ]

  if (page === 'home') {
    graph.push(software(lang, false))
  } else {
    graph.push(software(lang, page === 'pricing'))
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: [
        { '@type': 'ListItem', position: 1, name: p.nav.home, item: pageUrl('home', lang) },
        { '@type': 'ListItem', position: 2, name: p[page].crumb, item: url },
      ],
    })
  }

  if (page === 'home') {
    graph.push({
      '@type': 'ItemList',
      name: p.home.explore.title,
      itemListElement: p.home.explore.items.map((i, n) => ({
        '@type': 'ListItem', position: n + 1, name: i.t, url: pageUrl(i.page, lang),
      })),
    })
  }

  if (page === 'how') {
    graph.push({
      '@type': 'HowTo',
      name: c.steps.title,
      description: c.steps.lead,
      step: c.steps.items.map((s, i) => ({ '@type': 'HowToStep', position: i + 1, name: s.t, text: s.d })),
    })
  }

  if (page === 'pricing') {
    graph.push({
      '@type': 'FAQPage',
      mainEntity: c.faq.items.map((f) => ({
        '@type': 'Question',
        name: f.q,
        acceptedAnswer: { '@type': 'Answer', text: f.a },
      })),
    })
  }
  return { '@context': 'https://schema.org', '@graph': graph }
}

const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')

/** Etiquetas del <head> de una página: título, descripción, canonical,
 *  hreflang (par ES/EN por página), Open Graph y datos estructurados. */
export function head(page, lang) {
  const { title, description } = seoFor(page, lang)
  const url = pageUrl(page, lang)
  const es = pageUrl(page, 'es')
  const en = pageUrl(page, 'en')
  const homeEs = pageUrl('home', 'es')
  const og = `${PRODUCT.site}/og/${lang}.jpg`
  return [
    `<title>${esc(title)}</title>`,
    `<meta name="description" content="${esc(description)}" />`,
    `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />`,
    `<link rel="canonical" href="${url}" />`,
    `<link rel="alternate" hreflang="es" href="${es}" />`,
    `<link rel="alternate" hreflang="es-CO" href="${es}" />`,
    `<link rel="alternate" hreflang="en" href="${en}" />`,
    `<link rel="alternate" hreflang="en-US" href="${en}" />`,
    `<link rel="alternate" hreflang="x-default" href="${page === 'home' ? homeEs : es}" />`,
    `<meta property="og:type" content="website" />`,
    `<meta property="og:site_name" content="${PRODUCT.name}" />`,
    `<meta property="og:title" content="${esc(title)}" />`,
    `<meta property="og:description" content="${esc(description)}" />`,
    `<meta property="og:url" content="${url}" />`,
    `<meta property="og:locale" content="${lang === 'es' ? 'es_CO' : 'en_US'}" />`,
    `<meta property="og:locale:alternate" content="${lang === 'es' ? 'en_US' : 'es_CO'}" />`,
    `<meta property="og:image" content="${og}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta property="og:image:alt" content="${esc(PRODUCT.name)}" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${esc(title)}" />`,
    `<meta name="twitter:description" content="${esc(description)}" />`,
    `<meta name="twitter:image" content="${og}" />`,
    `<script type="application/ld+json">${JSON.stringify(buildJsonLd(page, lang)).replace(/</g, '\\u003c')}</script>`,
  ].join('\n    ')
}

export { PAGES, PAGE_KEYS }
