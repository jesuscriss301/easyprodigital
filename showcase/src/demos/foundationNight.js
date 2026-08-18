// STYLE VARIANT of foundation.js — same brand/content/photos, dark palette.
// Built with complementary-hue color theory (never pure black, no pastel):
// background/surface/text stay tinted with the brand hue, while the accent
// rotates to the complementary hue for contrast. See salonBellezaModern.js
// for the original style-variant pattern.
import base from './foundation.js'

export default {
  ...base,
  slug: 'foundation-night',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for Foundations & Nonprofits — Midnight Mission Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#4bdd9e',
    primaryDark: '#29ae74',
    accent: '#d44985',
    bg: '#111d18',
    surface: '#1c2c25',
    ink: '#edf2f0',
    muted: '#9cb4aa',
    line: '#2e483c',
    headingFont: "'Merriweather', Georgia, serif",
    bodyFont: "'Public Sans', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Merriweather:wght@700;900&family=Public+Sans:wght@300;400;500;600&display=swap',
  },
}
