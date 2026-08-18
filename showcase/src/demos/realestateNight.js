// STYLE VARIANT of realestate.js — same brand/content/photos, dark palette.
// Built with complementary-hue color theory (never pure black, no pastel):
// background/surface/text stay tinted with the brand hue, while the accent
// rotates to the complementary hue for contrast. See salonBellezaModern.js
// for the original style-variant pattern.
import base from './realestate.js'

export default {
  ...base,
  slug: 'realestate-night',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for Real Estate Agents — Midnight Listing Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#4b91dd',
    primaryDark: '#2968ae',
    accent: '#d49249',
    bg: '#11171d',
    surface: '#1c232c',
    ink: '#edf0f2',
    muted: '#9ca8b4',
    line: '#2e3a48',
    headingFont: "'Libre Baskerville', serif",
    bodyFont: "'Lato', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Lato:wght@300;400;500;600;700&display=swap',
  },
}
