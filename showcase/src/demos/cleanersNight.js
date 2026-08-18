// STYLE VARIANT of cleaners.js — same brand/content/photos, dark palette.
// Built with complementary-hue color theory (never pure black, no pastel):
// background/surface/text stay tinted with the brand hue, while the accent
// rotates to the complementary hue for contrast. See salonBellezaModern.js
// for the original style-variant pattern.
import base from './cleaners.js'

export default {
  ...base,
  slug: 'cleaners-night',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for Cleaning Companies — Midnight Shine Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#4bdddc',
    primaryDark: '#29aead',
    accent: '#d4494a',
    bg: '#111d1d',
    surface: '#1c2c2b',
    ink: '#edf2f2',
    muted: '#9cb4b4',
    line: '#2e4847',
    headingFont: "'Quicksand', system-ui, sans-serif",
    bodyFont: "'Inter', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Quicksand:wght@600;700&family=Inter:wght@300;400;500;600&display=swap',
  },
}
