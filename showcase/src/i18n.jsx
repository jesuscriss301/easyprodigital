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
      chatWhatsapp: 'Chat on WhatsApp',
      viewMore: 'View more projects',
      whatsappMessage: "Hi, I saw one of Easy Pro Digital's demos and I'd like a website like this for my business",
    },
    footer: { createdBy: 'sample site created by' },
    badge: { label: 'Sample template — Easy Pro Digital' },
    home: {
      title: 'Sample Websites by Industry — Easy Pro Digital',
      eyebrow: 'Easy Pro Digital · Demo Gallery',
      heroTitle: 'Sample websites by industry',
      heroSubtitleBefore: 'Real web design examples for different types of businesses, built by',
      heroSubtitleAfter: '. Pick an industry to see the full demo — every one ships in at least 3 color palettes, dark mode included.',
      viewDemo: 'View demo',
      palettes: (n) => `${n} color palettes`,
      langToggleTo: 'Ver en español',
    },
  },
  es: {
    nav: { openMenu: 'Abrir menú', closeMenu: 'Cerrar menú' },
    switcher: { label: 'Mismo sitio, otro estilo:' },
    disclosure: {
      chatWhatsapp: 'Chatear por WhatsApp',
      viewMore: 'Ver más proyectos',
      whatsappMessage: 'Hola, vi una de las demos de Easy Pro Digital y me gustaría un sitio web así para mi negocio',
    },
    footer: { createdBy: 'sitio de muestra creado por' },
    badge: { label: 'Plantilla de muestra — Easy Pro Digital' },
    home: {
      title: 'Webs de muestra por rubro — Easy Pro Digital',
      eyebrow: 'Easy Pro Digital · Galería de demos',
      heroTitle: 'Webs de muestra por rubro',
      heroSubtitleBefore: 'Ejemplos reales de diseño web para distintos tipos de negocio, hechos por',
      heroSubtitleAfter: '. Elegí un rubro para ver la demo completa — todas incluyen al menos 3 paletas de color, con versión dark incluida.',
      viewDemo: 'Ver demo',
      palettes: (n) => `${n} paletas de color`,
      langToggleTo: 'View in English',
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
