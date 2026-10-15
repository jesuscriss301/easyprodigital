// STYLE VARIANT of dentists.js — same brand/content/photos, different
// palette + typography. See salonBellezaModern.js for the original pattern.
import base from './dentists.js'

export default {
  ...base,
  slug: 'dentists-coral',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for Dental Clinics & Dentists — Warm Coral Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#e07856',
    primaryDark: '#b8573a',
    accent: '#2f8f82',
    bg: '#fdf6f2',
    surface: '#ffffff',
    ink: '#30231e',
    muted: '#86695f',
    line: '#f1ded4',
    headingFont: "'Fraunces', serif",
    bodyFont: "'Inter', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Fraunces:wght@600;700;800&family=Inter:wght@300;400;500;600&display=swap',
  },
}
