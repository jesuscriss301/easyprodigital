// STYLE VARIANT of masons.js — same brand/content/photos, different
// palette + typography. See salonBellezaModern.js for the original pattern.
import base from './masons.js'

export default {
  ...base,
  slug: 'masons-slate',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for Masons & Bricklayers — Slate Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#4a4f56',
    primaryDark: '#2e3236',
    accent: '#8a3324',
    bg: '#f5f6f7',
    surface: '#ffffff',
    ink: '#202225',
    muted: '#6b7176',
    line: '#dfe2e4',
    headingFont: "'Bebas Neue', sans-serif",
    bodyFont: "'Inter', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600&display=swap',
  },
}
