// STYLE VARIANT of realestate.js — same brand/content/photos, different
// palette + typography. See salonBellezaModern.js for the original pattern.
import base from './realestate.js'

export default {
  ...base,
  slug: 'realestate-modern',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for Real Estate Agents — Modern Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#2b2b2e',
    primaryDark: '#161618',
    accent: '#c9a227',
    bg: '#f6f6f7',
    surface: '#ffffff',
    ink: '#1c1c1e',
    muted: '#6b6b6f',
    line: '#e2e2e4',
    headingFont: "'Poppins', system-ui, sans-serif",
    bodyFont: "'Inter', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&family=Inter:wght@300;400;500;600&display=swap',
  },
}
