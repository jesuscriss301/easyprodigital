// STYLE VARIANT of bakery.js — same brand/content/photos, different palette + typography (bold modern: pistachio green + apricot).
import base from './bakery.js'

export default {
  ...base,
  slug: 'bakery-pistachio',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for Bakeries & Pastry Shops — Pistachio Modern Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#5f7d2c',
    primaryDark: '#435a1c',
    accent: '#d9694b',
    bg: '#f6f7ef',
    surface: '#ffffff',
    ink: '#252a1b',
    muted: '#646b55',
    line: '#e1e6d2',
    frosting: '#cfe0a9',
    sprinkles: ['#5f7d2c', '#d9694b', '#f6d365', '#ffffff', '#f2a7b8'],
    silk: { color: '#d6e5b6', sheenColor: '#fbfff2', lightMode: true, opacity: 0.6 },
    headingFont: "'Bricolage Grotesque', system-ui, sans-serif",
    bodyFont: "'Hanken Grotesk', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:wght@500;600;700;800&family=Hanken+Grotesk:wght@400;500;600&display=swap',
  },
}
