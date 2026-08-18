// STYLE VARIANT of masons.js — same brand/content/photos, dark palette.
// Built with complementary-hue color theory (never pure black, no pastel):
// background/surface/text stay tinted with the brand hue, while the accent
// rotates to the complementary hue for contrast. See salonBellezaModern.js
// for the original style-variant pattern.
import base from './masons.js'

export default {
  ...base,
  slug: 'masons-night',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for Masons & Bricklayers — Firebrick Night Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#dd604b',
    primaryDark: '#ae3c29',
    accent: '#49c0d4',
    bg: '#1d1311',
    surface: '#2c1e1c',
    ink: '#f2eeed',
    muted: '#b4a09c',
    line: '#48322e',
    headingFont: "'Rajdhani', sans-serif",
    bodyFont: "'Inter', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Rajdhani:wght@600;700&family=Inter:wght@300;400;500;600&display=swap',
  },
}
