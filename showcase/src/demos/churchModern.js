// STYLE VARIANT of church.js — same brand/content/photos, different
// palette + typography. See salonBellezaModern.js for the original pattern.
import base from './church.js'

export default {
  ...base,
  slug: 'church-modern',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for Churches & Ministries — Modern Sanctuary Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#20415e',
    primaryDark: '#132c42',
    accent: '#d9822b',
    bg: '#f5f8fa',
    surface: '#ffffff',
    ink: '#182633',
    muted: '#5f7181',
    line: '#dde6ec',
    headingFont: "'Montserrat', sans-serif",
    bodyFont: "'Open Sans', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Open+Sans:wght@300;400;500;600&display=swap',
  },
}
