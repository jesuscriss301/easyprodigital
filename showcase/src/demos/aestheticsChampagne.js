// STYLE VARIANT of aesthetics.js — same brand/content/photos, different
// palette + typography. See salonBellezaModern.js for the original pattern.
import base from './aesthetics.js'

export default {
  ...base,
  slug: 'aesthetics-champagne',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for Medical Aesthetics & Medspas — Champagne Taupe Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#a98a5c',
    primaryDark: '#826a44',
    accent: '#8c6450',
    bg: '#faf7f2',
    surface: '#ffffff',
    ink: '#2b2621',
    muted: '#8c8274',
    line: '#e7ddce',
    headingFont: "'Cormorant Garamond', serif",
    bodyFont: "'Inter', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Inter:wght@300;400;500;600&display=swap',
  },
}
