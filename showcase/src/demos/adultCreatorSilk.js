// STYLE VARIANT of adultCreator.js — same brand/content/tiles, different
// palette + typography. See salonBellezaModern.js for the original pattern.
import base from './adultCreator.js'

export default {
  ...base,
  slug: 'adult-creator-silk',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Bio-Link Page Design for Adult Content Creators 18+ — Champagne Silk Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#9a7b4f',
    primaryDark: '#75592f',
    accent: '#c9a227',
    bg: '#faf7f1',
    surface: '#ffffff',
    ink: '#2b241a',
    muted: '#82755f',
    line: '#eae2d2',
    headingFont: "'Cormorant Garamond', Georgia, serif",
    bodyFont: "'Jost', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Jost:wght@300;400;500;600&display=swap',
  },
}
