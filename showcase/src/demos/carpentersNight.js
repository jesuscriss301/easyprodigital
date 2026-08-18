// STYLE VARIANT of carpenters.js — same brand/content/photos, dark palette.
// Built with complementary-hue color theory (never pure black, no pastel):
// background/surface/text stay tinted with the brand hue, while the accent
// rotates to the complementary hue for contrast. See salonBellezaModern.js
// for the original style-variant pattern.
import base from './carpenters.js'

export default {
  ...base,
  slug: 'carpenters-night',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for Carpenters & Woodworkers — Nightwood Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#dd924b',
    primaryDark: '#ae6a29',
    accent: '#4990d4',
    bg: '#1d1711',
    surface: '#2c241c',
    ink: '#f2f0ed',
    muted: '#b4a89c',
    line: '#483a2e',
    headingFont: "'Bitter', serif",
    bodyFont: "'Work Sans', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Bitter:wght@600;700;800&family=Work+Sans:wght@300;400;500;600&display=swap',
  },
}
