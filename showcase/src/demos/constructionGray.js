// STYLE VARIANT of construction.js — same brand/content/photos, different
// palette + typography. See salonBellezaModern.js for the original pattern.
import base from './construction.js'

export default {
  ...base,
  slug: 'construction-gray',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for General Contractors & Construction Companies — Concrete Gray Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#5a5f66',
    primaryDark: '#3c4046',
    accent: '#e0501c',
    bg: '#f5f5f4',
    surface: '#ffffff',
    ink: '#212326',
    muted: '#75797e',
    line: '#e0e1e2',
    headingFont: "'Saira Condensed', sans-serif",
    bodyFont: "'Inter', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Saira+Condensed:wght@600;700&family=Inter:wght@300;400;500;600&display=swap',
  },
}
