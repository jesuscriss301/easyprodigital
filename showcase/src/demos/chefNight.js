// STYLE VARIANT of chef.js — same brand/content/photos, dark palette.
// Built with complementary-hue color theory (never pure black, no pastel):
// background/surface/text stay tinted with the brand hue, while the accent
// rotates to the complementary hue for contrast. See salonBellezaModern.js
// for the original style-variant pattern.
import base from './chef.js'

export default {
  ...base,
  slug: 'private-chef-night',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for Private Chefs & Catering — Midnight Kitchen Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#dd5f4b',
    primaryDark: '#ae3b29',
    accent: '#49c1d4',
    bg: '#1d1311',
    surface: '#2c1e1c',
    ink: '#f2eeed',
    muted: '#b4a09c',
    line: '#48312e',
    headingFont: "'Cormorant Garamond', Georgia, serif",
    bodyFont: "'Jost', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Jost:wght@300;400;500;600&display=swap',
  },
}
