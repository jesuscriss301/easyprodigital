// STYLE VARIANT of automechanics.js — same brand/content/photos, different
// palette + typography. See salonBellezaModern.js for the original pattern.
import base from './automechanics.js'

export default {
  ...base,
  slug: 'automechanics-blue',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for Auto Mechanics & Repair Shops — Midnight Blue Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#1d4e6b',
    primaryDark: '#123244',
    accent: '#f2a900',
    bg: '#f4f7f9',
    surface: '#ffffff',
    ink: '#161f24',
    muted: '#647783',
    line: '#dde6ea',
    headingFont: "'Barlow Condensed', sans-serif",
    bodyFont: "'Inter', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=Inter:wght@300;400;500;600&display=swap',
  },
}
