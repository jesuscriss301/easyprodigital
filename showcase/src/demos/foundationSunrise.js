// STYLE VARIANT of foundation.js — same brand/content/photos, different
// palette + typography. See salonBellezaModern.js for the original pattern.
import base from './foundation.js'

export default {
  ...base,
  slug: 'foundation-sunrise',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for Foundations & Nonprofits — Sunrise Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#c05621',
    primaryDark: '#8f3d13',
    accent: '#2e7d5b',
    bg: '#fbf7f3',
    surface: '#ffffff',
    ink: '#2e2119',
    muted: '#7d6c60',
    line: '#eee0d3',
    headingFont: "'Bitter', Georgia, serif",
    bodyFont: "'Rubik', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Bitter:wght@600;700&family=Rubik:wght@300;400;500;600&display=swap',
  },
}
