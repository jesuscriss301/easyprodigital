// STYLE VARIANT of church.js — same brand/content/photos, dark palette.
// Built with complementary-hue color theory (never pure black, no pastel):
// background/surface/text stay tinted with the brand hue, while the accent
// rotates to the complementary hue for contrast. See salonBellezaModern.js
// for the original style-variant pattern.
import base from './church.js'

export default {
  ...base,
  slug: 'church-night',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for Churches & Ministries — Evening Vespers Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#dd944b',
    primaryDark: '#ae6b29',
    accent: '#498fd4',
    bg: '#1d1711',
    surface: '#2c241c',
    ink: '#f2f0ed',
    muted: '#b4a89c',
    line: '#483b2e',
    headingFont: "'Lora', Georgia, serif",
    bodyFont: "'Source Sans 3', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Lora:wght@600;700&family=Source+Sans+3:wght@300;400;500;600&display=swap',
  },
}
