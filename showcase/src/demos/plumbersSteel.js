// STYLE VARIANT of plumbers.js — same brand/content/photos, different
// palette + typography. See salonBellezaModern.js for the original pattern.
import base from './plumbers.js'

export default {
  ...base,
  slug: 'plumbers-steel',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for Plumbers — Modern Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#2c3e50',
    primaryDark: '#1a2733',
    accent: '#3fa7d6',
    bg: '#f4f6f8',
    surface: '#ffffff',
    ink: '#1a2229',
    muted: '#5c6b78',
    line: '#dde3e8',
    headingFont: "'Plus Jakarta Sans', sans-serif",
    bodyFont: "'Inter', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@500;600;700&family=Inter:wght@300;400;500;600&display=swap',
  },
}
