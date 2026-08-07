// STYLE VARIANT of carpenters.js — same brand/content/photos, different
// palette + typography. See salonBellezaModern.js for the original pattern.
import base from './carpenters.js'

export default {
  ...base,
  slug: 'carpenters-rustic',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for Carpenters & Woodworkers — Rustic Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#6b3226',
    primaryDark: '#4a2019',
    accent: '#d98a3d',
    bg: '#fbf3ea',
    surface: '#ffffff',
    ink: '#2c1810',
    muted: '#8a6f5c',
    line: '#ecdcc8',
    headingFont: "'Playfair Display', serif",
    bodyFont: "'Work Sans', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Work+Sans:wght@300;400;500;600&display=swap',
  },
}
