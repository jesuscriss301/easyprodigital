// STYLE VARIANT of church.js — same brand/content/photos, different
// palette + typography. See salonBellezaModern.js for the original pattern.
import base from './church.js'

export default {
  ...base,
  slug: 'church-dawn',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for Churches & Ministries — Morning Light Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#886a9e',
    primaryDark: '#644a78',
    accent: '#e8b04b',
    bg: '#faf8fc',
    surface: '#ffffff',
    ink: '#2a2430',
    muted: '#7d7387',
    line: '#eae4f0',
    headingFont: "'Fraunces', Georgia, serif",
    bodyFont: "'Karla', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Karla:wght@300;400;500;600&display=swap',
  },
}
