// STYLE VARIANT of construction.js — same brand/content/photos, different
// palette + typography. See salonBellezaModern.js for the original pattern.
import base from './construction.js'

export default {
  ...base,
  slug: 'construction-orange',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for General Contractors & Construction Companies — Safety Orange Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#e0501c',
    primaryDark: '#a83a12',
    accent: '#1f3a52',
    bg: '#fbf6f2',
    surface: '#ffffff',
    ink: '#241a12',
    muted: '#8a7768',
    line: '#f0ddd0',
    headingFont: "'Anton', sans-serif",
    bodyFont: "'Inter', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Anton&family=Inter:wght@300;400;500;600&display=swap',
  },
}
