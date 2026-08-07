// STYLE VARIANT of salonBelleza.js — same brand/content/photos, different
// palette + typography. See salonBellezaModern.js for the pattern.
import base from './salonBelleza.js'

export default {
  ...base,
  slug: 'salon-belleza-botanical',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for Beauty Salons & Spas — Botanical Spa Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#4a5d43',
    primaryDark: '#333f2e',
    accent: '#c97b5f',
    bg: '#f6f3ec',
    surface: '#ffffff',
    ink: '#2b2b25',
    muted: '#6e6a5d',
    line: '#e3ddcf',
    headingFont: "'Fraunces', Georgia, serif",
    bodyFont: "'Nunito Sans', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,500;9..144,600&family=Nunito+Sans:wght@300;400;600&display=swap',
  },
}
