// STYLE VARIANT of lawyers.js — same brand/content/photos, different
// palette + typography. See salonBellezaModern.js for the original pattern.
import base from './lawyers.js'

export default {
  ...base,
  slug: 'lawyers-ivory',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for Law Firms & Attorneys — Ivory & Gold Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#2d5540',
    primaryDark: '#1d3a2b',
    accent: '#c9a227',
    bg: '#faf8f1',
    surface: '#ffffff',
    ink: '#242019',
    muted: '#756c5a',
    line: '#ebe3cd',
    headingFont: "'Playfair Display', serif",
    bodyFont: "'Source Sans 3', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Source+Sans+3:wght@300;400;500;600&display=swap',
  },
}
