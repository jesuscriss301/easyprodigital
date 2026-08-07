// STYLE VARIANT of automechanics.js — same brand/content/photos, different
// palette + typography. See salonBellezaModern.js for the original pattern.
import base from './automechanics.js'

export default {
  ...base,
  slug: 'automechanics-yellow',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for Auto Mechanics & Repair Shops — Shop Yellow Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#f2a900',
    primaryDark: '#b87d00',
    accent: '#1d1d1f',
    bg: '#fbf9f4',
    surface: '#ffffff',
    ink: '#201d14',
    muted: '#7d7566',
    line: '#ece4d2',
    headingFont: "'Bebas Neue', sans-serif",
    bodyFont: "'Inter', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Bebas+Neue&family=Inter:wght@300;400;500;600&display=swap',
  },
}
