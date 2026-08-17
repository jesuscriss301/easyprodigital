// STYLE VARIANT of adultCreator.js — same brand/content/tiles, different
// palette + typography. See salonBellezaModern.js for the original pattern.
import base from './adultCreator.js'

export default {
  ...base,
  slug: 'adult-creator-cherry',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Bio-Link Page Design for Adult Content Creators 18+ — Cherry Pop Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#e0264f',
    primaryDark: '#ab1638',
    accent: '#ff8fa3',
    bg: '#fff5f7',
    surface: '#ffffff',
    ink: '#2b141b',
    muted: '#8c6b74',
    line: '#f4dbe1',
    headingFont: "'Poppins', sans-serif",
    bodyFont: "'Inter', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Poppins:wght@500;600;700&family=Inter:wght@300;400;500;600&display=swap',
  },
}
