// STYLE VARIANT of automechanics.js — same brand/content/photos, dark palette.
// Built with complementary-hue color theory (never pure black, no pastel):
// background/surface/text stay tinted with the brand hue, while the accent
// rotates to the complementary hue for contrast. See salonBellezaModern.js
// for the original style-variant pattern.
import base from './automechanics.js'

export default {
  ...base,
  slug: 'automechanics-night',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for Auto Mechanics & Repair Shops — Night Garage Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#dd4b63',
    primaryDark: '#ae293e',
    accent: '#49d4be',
    bg: '#1d1113',
    surface: '#2c1c1e',
    ink: '#f2edee',
    muted: '#b49ca0',
    line: '#482e32',
    headingFont: "'Teko', sans-serif",
    bodyFont: "'Inter', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Teko:wght@500;600;700&family=Inter:wght@300;400;500;600&display=swap',
  },
}
