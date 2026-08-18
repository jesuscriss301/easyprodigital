// STYLE VARIANT of electricians.js — same brand/content/photos, dark palette.
// Built with complementary-hue color theory (never pure black, no pastel):
// background/surface/text stay tinted with the brand hue, while the accent
// rotates to the complementary hue for contrast. See salonBellezaModern.js
// for the original style-variant pattern.
import base from './electricians.js'

export default {
  ...base,
  slug: 'electricians-night',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for Electricians — Night Circuit Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#dda54b',
    primaryDark: '#ae7b29',
    accent: '#497ed4',
    bg: '#1d1811',
    surface: '#2c261c',
    ink: '#f2f0ed',
    muted: '#b4ab9c',
    line: '#483e2e',
    headingFont: "'Barlow Condensed', sans-serif",
    bodyFont: "'Inter', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@500;600;700&family=Inter:wght@300;400;500;600&display=swap',
  },
}
