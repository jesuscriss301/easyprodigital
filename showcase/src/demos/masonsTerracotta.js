// STYLE VARIANT of masons.js — same brand/content/photos, different
// palette + typography. See salonBellezaModern.js for the original pattern.
import base from './masons.js'

export default {
  ...base,
  slug: 'masons-terracotta',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for Masons & Bricklayers — Terracotta Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#b5652f',
    primaryDark: '#8a4a20',
    accent: '#4a4f56',
    bg: '#fdf6ef',
    surface: '#ffffff',
    ink: '#2e2013',
    muted: '#8a7154',
    line: '#f2e2cc',
    headingFont: "'Alegreya', serif",
    bodyFont: "'Nunito Sans', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Alegreya:wght@600;700;800&family=Nunito+Sans:wght@300;400;500;600&display=swap',
  },
}
