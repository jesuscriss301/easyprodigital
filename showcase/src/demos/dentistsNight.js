// STYLE VARIANT of dentists.js — same brand/content/photos, dark palette.
// Built with complementary-hue color theory (never pure black, no pastel):
// background/surface/text stay tinted with the brand hue, while the accent
// rotates to the complementary hue for contrast. See gardenersNight.js for
// the original dark-variant pattern.
import base from './dentists.js'

export default {
  ...base,
  slug: 'dentists-night',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for Dental Clinics & Dentists — Midnight Mint Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#4fd9c4',
    primaryDark: '#2bab98',
    accent: '#e85c7a',
    bg: '#0f1f1e',
    surface: '#17302e',
    ink: '#eaf6f4',
    muted: '#9bbdb9',
    line: '#254543',
    headingFont: "'Lexend', sans-serif",
    bodyFont: "'Inter', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Lexend:wght@500;600;700&family=Inter:wght@300;400;500;600&display=swap',
  },
}
