// STYLE VARIANT of electricians.js — same brand/content/photos, different
// palette + typography. See salonBellezaModern.js for the original pattern.
import base from './electricians.js'

export default {
  ...base,
  slug: 'electricians-navy',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for Electricians — Circuit Navy Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#12395c',
    primaryDark: '#0a2440',
    accent: '#e8940c',
    bg: '#f4f7fa',
    surface: '#ffffff',
    ink: '#16222e',
    muted: '#5d6b78',
    line: '#dde5ec',
    headingFont: "'Oswald', sans-serif",
    bodyFont: "'Source Sans 3', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Source+Sans+3:wght@300;400;500;600&display=swap',
  },
}
