// STYLE VARIANT of dentists.js — same brand/content/photos, different
// palette + typography. See salonBellezaModern.js for the original pattern.
import base from './dentists.js'

export default {
  ...base,
  slug: 'dentists-sky',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for Dental Clinics & Dentists — Sky Blue Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#3f7fc4',
    primaryDark: '#2c5e97',
    accent: '#f0a24b',
    bg: '#f4f8fc',
    surface: '#ffffff',
    ink: '#1c2a38',
    muted: '#5a6e82',
    line: '#dde8f3',
    headingFont: "'Outfit', system-ui, sans-serif",
    bodyFont: "'Inter', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700&family=Inter:wght@300;400;500;600&display=swap',
  },
}
