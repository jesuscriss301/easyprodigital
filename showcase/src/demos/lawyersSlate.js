// STYLE VARIANT of lawyers.js — same brand/content/photos, different
// palette + typography. See salonBellezaModern.js for the original pattern.
import base from './lawyers.js'

export default {
  ...base,
  slug: 'lawyers-slate',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for Law Firms & Attorneys — Slate Blue Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#43536b',
    primaryDark: '#2f3b4d',
    accent: '#b5742f',
    bg: '#f5f6f8',
    surface: '#ffffff',
    ink: '#1e242e',
    muted: '#656f80',
    line: '#dfe2e8',
    headingFont: "'Outfit', system-ui, sans-serif",
    bodyFont: "'Source Sans 3', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700&family=Source+Sans+3:wght@300;400;500;600&display=swap',
  },
}
