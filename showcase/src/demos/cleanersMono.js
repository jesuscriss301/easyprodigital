// STYLE VARIANT of cleaners.js — same brand/content/photos, different
// palette + typography. See salonBellezaModern.js for the original pattern.
import base from './cleaners.js'

export default {
  ...base,
  slug: 'cleaners-mono',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for Cleaning Companies — Modern Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#2b2d34',
    primaryDark: '#151619',
    accent: '#5ee6c4',
    bg: '#f6f6f7',
    surface: '#ffffff',
    ink: '#202124',
    muted: '#6b6d75',
    line: '#e3e3e6',
    headingFont: "'Manrope', system-ui, sans-serif",
    bodyFont: "'Manrope', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;600;700;800&display=swap',
  },
}
