// STYLE VARIANT of gardeners.js — same brand/content/photos, different
// palette + typography. See salonBellezaModern.js for the original pattern.
import base from './gardeners.js'

export default {
  ...base,
  slug: 'gardeners-terracotta',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for Landscapers & Gardeners — Terracotta Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#c1622d',
    primaryDark: '#94491f',
    accent: '#4a7c3f',
    bg: '#fdf5ee',
    surface: '#ffffff',
    ink: '#2e1c10',
    muted: '#8a6d5a',
    line: '#f0ddc9',
    headingFont: "'DM Serif Display', serif",
    bodyFont: "'Nunito', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Nunito:wght@300;400;500;600;700&display=swap',
  },
}
