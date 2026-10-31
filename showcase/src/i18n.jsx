import { createContext, useContext, useEffect, useMemo, useState } from 'react'

// Lightweight i18n for the showcase. Covers two things:
// 1) The shared chrome (index page, nav language toggle, footer, disclosure
//    CTAs, style switcher label) via the STRINGS dict below.
// 2) Each niche demo's own marketing copy (hero, services, features,
//    gallery, testimonials, map, cta, disclosure) via per-niche ES content
//    packs under demos/i18n/es/*.js, applied at render time with
//    `mergeLang` — see demos/i18n/es/index.js for the lookup + helper.
const STRINGS = {
  en: {
    nav: { openMenu: 'Open menu', closeMenu: 'Close menu' },
    switcher: { label: 'Same website, another style:' },
    disclosure: {
      offerHeading: 'This could be your website in 7 days',
      offerText: (brand, niche) =>
        `"${brand}" is a sample business — but the design, speed and booking flow are real. Send me your logo and 3 photos and I'll put your ${niche} business on this exact page, free, so you can see it before paying anything. Websites like this start at $450. One developer, direct WhatsApp, no agency markup.`,
      defaultWhatsapp: (niche) => `Hi Jesús! I saw the ${niche} demo and I'd like one for my business.`,
      ctaPrimary: 'Put my business on this demo',
      ctaPricing: 'See pricing',
    },
    valueProps: {
      heading: (niche) => `Why this layout works for ${niche}`,
    },
    stickyCta: {
      label: 'Want this for your business?',
      sub: 'WhatsApp',
    },
    sample: { label: 'Sample' },
    footer: { createdBy: 'sample site created by' },
    badge: { label: 'Sample template — Easy Pro Digital' },
    relatedDemos: {
      heading: 'More demos',
      tagline: 'Explore other industries built the same way — real pages, real prices, real booking flows.',
      readTag: 'View demo',
      more: 'See all demos',
    },
    home: {
      title: 'Sample Websites by Industry — Easy Pro Digital',
      eyebrow: 'Easy Pro Digital · Demo Gallery',
      heroTitle: 'Sample websites by industry',
      heroSubtitleBefore: 'Real web design examples for different types of businesses, built by',
      heroSubtitleAfter: '. Pick an industry to see the full demo — every one ships in at least 3 color palettes, dark mode included.',
      viewDemo: 'View demo',
      palettes: (n) => `${n} color palettes`,
      langToggleTo: 'Ver en español',
      // Nuevo diseño
      navHome: 'Gallery',
      navNiches: 'Industries',
      navProspects: 'Custom builds',
      navProjects: 'Live projects',
      navContact: 'Hire me',
      heroKicker: 'Freelance full-stack · Medellín 🇨🇴',
      heroPitch: 'Fast, modern websites for local businesses and small teams — from a $299 landing page to a full-stack SaaS. Every card below is a real page you can click through.',
      heroCtaPrimary: 'Start a project',
      heroCtaSecondary: 'What I charge',
      stats: [
        { n: '19', l: 'live demos' },
        { n: '60+', l: 'color variants' },
        { n: '48 h', l: 'first draft' },
        { n: '4.9', l: 'client rating' },
      ],
      sectionNichesEyebrow: '01 — Industry templates',
      sectionNichesTitle: 'Sample websites, by industry',
      sectionNichesLead: 'One page per trade, with real photos, prices and a booking flow. Every template ships in 3–4 color palettes — click the swatches on any card to jump into a variant.',
      sectionProspectsEyebrow: '02 — Custom prospect mockups',
      sectionProspectsTitle: 'One-of-a-kind builds',
      sectionProspectsLead: 'Redesigns of real businesses, built from their own photos, menus and voice. Not indexed — private previews I send to prospects.',
      sectionProjectsEyebrow: '03 — Real production work',
      sectionProjectsTitle: 'Live products shipped to clients',
      sectionProjectsLead: 'Not demos — actual apps running in production, from multi-tenant SaaS to e-commerce and government-health integrations.',
      viewLive: 'Open →',
      viewCode: 'Code',
      privateProject: 'Private project',
      footerTag: 'Web design, full-stack development and AI integrations',
      footerRights: 'All rights reserved',
      footerLinks: { home: 'Main site', portfolio: 'Portfolio', blog: 'Blog', contact: 'Contact' },
      previewOf: (n) => `Preview ${n}`,
    },
  },
  es: {
    nav: { openMenu: 'Abrir menú', closeMenu: 'Cerrar menú' },
    switcher: { label: 'Mismo sitio, otro estilo:' },
    disclosure: {
      offerHeading: 'Esta puede ser tu web en 7 días',
      offerText: (brand, niche) =>
        `"${brand}" es un negocio de ejemplo, pero el diseño, la velocidad y las reservas son reales. Mándame tu logo y 3 fotos y pongo tu negocio de ${niche} en esta misma página, gratis, para que la veas antes de pagar. Webs como esta desde USD 450. Un solo desarrollador, WhatsApp directo, sin sobrecostos de agencia.`,
      defaultWhatsapp: (niche) => `Hola Jesús, vi la demo de ${niche} y quiero una para mi negocio.`,
      ctaPrimary: 'Quiero ver mi negocio aquí',
      ctaPricing: 'Ver precios',
    },
    valueProps: {
      heading: (niche) => `Por qué este diseño funciona para ${niche}`,
    },
    stickyCta: {
      label: '¿Quieres esto para tu negocio?',
      sub: 'WhatsApp',
    },
    sample: { label: 'Ejemplo' },
    footer: { createdBy: 'sitio de muestra creado por' },
    badge: { label: 'Plantilla de muestra — Easy Pro Digital' },
    relatedDemos: {
      heading: 'Más demos',
      tagline: 'Explora otros nichos hechos con el mismo cuidado — páginas reales, precios reales, flujo de reserva real.',
      readTag: 'Ver demo',
      more: 'Ver todas las demos',
    },
    home: {
      title: 'Webs de muestra por rubro — Easy Pro Digital',
      eyebrow: 'Easy Pro Digital · Galería de demos',
      heroTitle: 'Webs de muestra por rubro',
      heroSubtitleBefore: 'Ejemplos reales de diseño web para distintos tipos de negocio, hechos por',
      heroSubtitleAfter: '. Elegí un rubro para ver la demo completa — todas incluyen al menos 3 paletas de color, con versión dark incluida.',
      viewDemo: 'Ver demo',
      palettes: (n) => `${n} paletas de color`,
      langToggleTo: 'View in English',
      // Nuevo diseño
      navHome: 'Galería',
      navNiches: 'Rubros',
      navProspects: 'A medida',
      navProjects: 'Proyectos reales',
      navContact: 'Contratar',
      heroKicker: 'Full-stack freelance · Medellín 🇨🇴',
      heroPitch: 'Webs modernas y rápidas para negocios locales y equipos pequeños — desde una landing de $299 hasta un SaaS completo. Cada tarjeta de abajo es una página real que podés visitar.',
      heroCtaPrimary: 'Iniciar un proyecto',
      heroCtaSecondary: 'Ver precios',
      stats: [
        { n: '19', l: 'demos en vivo' },
        { n: '60+', l: 'variantes de color' },
        { n: '48 h', l: 'primer borrador' },
        { n: '4.9', l: 'calificación' },
      ],
      sectionNichesEyebrow: '01 — Plantillas por rubro',
      sectionNichesTitle: 'Webs de muestra por rubro',
      sectionNichesLead: 'Una página por oficio, con fotos reales, precios y flujo de reservas. Cada plantilla viene en 3–4 paletas — tocá los swatches de cada tarjeta para saltar a la variante.',
      sectionProspectsEyebrow: '02 — Maquetas a medida',
      sectionProspectsTitle: 'Rediseños de negocios reales',
      sectionProspectsLead: 'Rediseños de sitios reales, construidos con sus propias fotos, cartas y voz. No indexados — vistas privadas que le envío a prospectos.',
      sectionProjectsEyebrow: '03 — Trabajo real en producción',
      sectionProjectsTitle: 'Productos vivos entregados a clientes',
      sectionProjectsLead: 'No son demos — apps corriendo en producción, desde SaaS multi-tenant hasta e-commerce e integraciones del sector salud.',
      viewLive: 'Abrir →',
      viewCode: 'Código',
      privateProject: 'Proyecto privado',
      footerTag: 'Diseño web, desarrollo full-stack e integraciones con IA',
      footerRights: 'Todos los derechos reservados',
      footerLinks: { home: 'Sitio principal', portfolio: 'Portafolio', blog: 'Blog', contact: 'Contacto' },
      previewOf: (n) => `Vista ${n}`,
    },
  },
}

const LanguageContext = createContext(null)

function detectInitialLang() {
  if (typeof window === 'undefined') return 'en'
  const saved = window.localStorage?.getItem('showcase-lang')
  if (saved === 'en' || saved === 'es') return saved
  return navigator.language?.toLowerCase().startsWith('es') ? 'es' : 'en'
}

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(detectInitialLang)

  useEffect(() => {
    window.localStorage?.setItem('showcase-lang', lang)
    document.documentElement.lang = lang
  }, [lang])

  const value = useMemo(
    () => ({
      lang,
      t: STRINGS[lang],
      toggleLang: () => setLang((l) => (l === 'en' ? 'es' : 'en')),
    }),
    [lang],
  )

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  const ctx = useContext(LanguageContext)
  if (!ctx) throw new Error('useLanguage must be used within a LanguageProvider')
  return ctx
}

function isPlainObject(v) {
  return typeof v === 'object' && v !== null && !Array.isArray(v)
}

/** Recursively overlays `override` onto `base`: plain objects merge key by
 * key, arrays merge element-by-element by index (so a translated
 * `services.items[2].title` lands on the same item as the English one),
 * and anything else (strings, numbers, missing keys) falls back to `base`.
 * Used to apply a demo's ES content pack (see demos/i18n/es/) on top of its
 * English config without needing every field translated. */
export function mergeLang(base, override) {
  if (override === undefined || override === null) return base
  if (Array.isArray(base)) {
    if (!Array.isArray(override)) return base
    return base.map((item, i) => (i < override.length ? mergeLang(item, override[i]) : item))
  }
  if (isPlainObject(base) && isPlainObject(override)) {
    const result = { ...base }
    for (const key of Object.keys(override)) {
      result[key] = mergeLang(base[key], override[key])
    }
    return result
  }
  return override
}
