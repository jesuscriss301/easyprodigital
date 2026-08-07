// STYLE VARIANT of cleaners.js — same brand/content/photos, different
// palette + typography. See salonBellezaModern.js for the original pattern.
import base from './cleaners.js'

export default {
  ...base,
  slug: 'cleaners-sunny',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for Cleaning Companies — Sunny Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#e8871e',
    primaryDark: '#b8630f',
    accent: '#0e9594',
    bg: '#fffaf3',
    surface: '#ffffff',
    ink: '#2c2013',
    muted: '#7d6a54',
    line: '#f3e3cd',
    headingFont: "'Baloo 2', system-ui, sans-serif",
    bodyFont: "'Inter', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Inter:wght@300;400;500;600&display=swap',
  },
}
