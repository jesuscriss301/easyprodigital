// STYLE VARIANT of carWash.js — same brand/content/photos, dark palette.
// Built with complementary-hue color theory (never pure black, no pastel):
// background/surface/text stay tinted with the brand hue, while the accent
// rotates to the complementary hue for contrast. See salonBellezaModern.js
// for the original style-variant pattern.
import base from './carWash.js'

export default {
  ...base,
  slug: 'car-wash-night',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for Car Washes & Auto Detailing — Night Shift Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#4bb8dd',
    primaryDark: '#298cae',
    accent: '#d46c49',
    bg: '#111a1d',
    surface: '#1c282c',
    ink: '#edf1f2',
    muted: '#9caeb4',
    line: '#2e4148',
    headingFont: "'Sora', system-ui, sans-serif",
    bodyFont: "'Inter', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Inter:wght@300;400;500;600&display=swap',
  },
}
