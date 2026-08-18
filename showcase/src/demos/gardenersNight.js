// STYLE VARIANT of gardeners.js — same brand/content/photos, dark palette.
// Built with complementary-hue color theory (never pure black, no pastel):
// background/surface/text stay tinted with the brand hue, while the accent
// rotates to the complementary hue for contrast. See salonBellezaModern.js
// for the original style-variant pattern.
import base from './gardeners.js'

export default {
  ...base,
  slug: 'gardeners-night',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for Landscapers & Gardeners — Moonlit Garden Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#64dd4b',
    primaryDark: '#40ae29',
    accent: '#bc49d4',
    bg: '#131d11',
    surface: '#1f2c1c',
    ink: '#eef2ed',
    muted: '#a0b49c',
    line: '#32482e',
    headingFont: "'Fraunces', serif",
    bodyFont: "'Nunito Sans', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Fraunces:wght@600;700;800&family=Nunito+Sans:wght@300;400;500;600&display=swap',
  },
}
