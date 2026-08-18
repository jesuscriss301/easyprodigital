// STYLE VARIANT of salonBelleza.js — same brand/content/photos, dark palette.
// Built with complementary-hue color theory (never pure black, no pastel):
// background/surface/text stay tinted with the brand hue, while the accent
// rotates to the complementary hue for contrast. See salonBellezaModern.js
// for the original style-variant pattern.
import base from './salonBelleza.js'

export default {
  ...base,
  slug: 'salon-belleza-night',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for Beauty Salons & Spas — Midnight Rose Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#dd4b61',
    primaryDark: '#ae293d',
    accent: '#49d4bf',
    bg: '#1d1113',
    surface: '#2c1c1e',
    ink: '#f2edee',
    muted: '#b49ca0',
    line: '#482e32',
    headingFont: "'Playfair Display', Georgia, serif",
    bodyFont: "'Poppins', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Poppins:wght@300;400;500;600&display=swap',
  },
}
