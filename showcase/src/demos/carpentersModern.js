// STYLE VARIANT of carpenters.js — same brand/content/photos, different
// palette + typography. See salonBellezaModern.js for the original pattern.
import base from './carpenters.js'

export default {
  ...base,
  slug: 'carpenters-modern',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for Carpenters & Woodworkers — Modern Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#3f4a4d',
    primaryDark: '#262f31',
    accent: '#e0a458',
    bg: '#f4f6f6',
    surface: '#ffffff',
    ink: '#1e2426',
    muted: '#647274',
    line: '#dde3e3',
    headingFont: "'Space Grotesk', system-ui, sans-serif",
    bodyFont: "'Inter', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@300;400;500;600&display=swap',
  },
}
