// STYLE VARIANT of gardeners.js — same brand/content/photos, different
// palette + typography. See salonBellezaModern.js for the original pattern.
import base from './gardeners.js'

export default {
  ...base,
  slug: 'gardeners-sage',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for Landscapers & Gardeners — Modern Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#6b8f71',
    primaryDark: '#4d6b53',
    accent: '#d98e4a',
    bg: '#f5f7f4',
    surface: '#ffffff',
    ink: '#22291f',
    muted: '#6d7a68',
    line: '#dde5da',
    headingFont: "'Outfit', system-ui, sans-serif",
    bodyFont: "'Inter', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700&family=Inter:wght@300;400;500;600&display=swap',
  },
}
