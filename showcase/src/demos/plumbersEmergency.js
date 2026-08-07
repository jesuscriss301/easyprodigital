// STYLE VARIANT of plumbers.js — same brand/content/photos, different
// palette + typography. See salonBellezaModern.js for the original pattern.
import base from './plumbers.js'

export default {
  ...base,
  slug: 'plumbers-emergency',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for Plumbers — Emergency Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#d9531e',
    primaryDark: '#a83c14',
    accent: '#1d6fa5',
    bg: '#fdf6f2',
    surface: '#ffffff',
    ink: '#2c1810',
    muted: '#8a6d5e',
    line: '#f2ddd0',
    headingFont: "'Oswald', sans-serif",
    bodyFont: "'Inter', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Oswald:wght@500;600;700&family=Inter:wght@300;400;500;600&display=swap',
  },
}
