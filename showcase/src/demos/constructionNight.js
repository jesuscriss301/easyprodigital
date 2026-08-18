// STYLE VARIANT of construction.js — same brand/content/photos, dark palette.
// Built with complementary-hue color theory (never pure black, no pastel):
// background/surface/text stay tinted with the brand hue, while the accent
// rotates to the complementary hue for contrast. See salonBellezaModern.js
// for the original style-variant pattern.
import base from './construction.js'

export default {
  ...base,
  slug: 'construction-night',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for General Contractors & Construction Companies — Site Lights Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#4b98dd',
    primaryDark: '#296fae',
    accent: '#d48b49',
    bg: '#11171d',
    surface: '#1c242c',
    ink: '#edf0f2',
    muted: '#9ca9b4',
    line: '#2e3b48',
    headingFont: "'Archivo Black', sans-serif",
    bodyFont: "'Inter', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@300;400;500;600&display=swap',
  },
}
