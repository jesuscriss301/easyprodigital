// STYLE VARIANT of chef.js — same brand/content/photos, different
// palette + typography. See salonBellezaModern.js for the original pattern.
import base from './chef.js'

export default {
  ...base,
  slug: 'private-chef-noir',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for Private Chefs & Catering — Fine Dining Noir Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#191714',
    primaryDark: '#000000',
    accent: '#c9a227',
    bg: '#f7f5f2',
    surface: '#ffffff',
    ink: '#191714',
    muted: '#6e675e',
    line: '#e5dfd6',
    headingFont: "'Marcellus', Georgia, serif",
    bodyFont: "'Manrope', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Marcellus&family=Manrope:wght@300;400;500;600&display=swap',
  },
}
