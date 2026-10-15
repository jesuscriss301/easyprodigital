// STYLE VARIANT of aesthetics.js — same brand/content/photos, different
// palette + typography. See salonBellezaModern.js for the original pattern.
import base from './aesthetics.js'

export default {
  ...base,
  slug: 'aesthetics-terracotta',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for Medical Aesthetics & Medspas — Terracotta Clay Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#b5684a',
    primaryDark: '#8f4f37',
    accent: '#c98a4f',
    bg: '#fdf6f1',
    surface: '#ffffff',
    ink: '#2e2420',
    muted: '#8a776a',
    line: '#ecdccd',
    headingFont: "'Fraunces', serif",
    bodyFont: "'Work Sans', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Fraunces:wght@600;700;800&family=Work+Sans:wght@300;400;500;600&display=swap',
  },
}
