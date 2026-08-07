// STYLE VARIANT of realestate.js — same brand/content/photos, different
// palette + typography. See salonBellezaModern.js for the original pattern.
import base from './realestate.js'

export default {
  ...base,
  slug: 'realestate-coastal',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for Real Estate Agents — Coastal Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#b08a5a',
    primaryDark: '#8a6a42',
    accent: '#1b3a5c',
    bg: '#faf6ef',
    surface: '#ffffff',
    ink: '#2e2417',
    muted: '#8a7962',
    line: '#f0e6d5',
    headingFont: "'Cormorant Garamond', serif",
    bodyFont: "'Nunito Sans', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Nunito+Sans:wght@300;400;500;600&display=swap',
  },
}
