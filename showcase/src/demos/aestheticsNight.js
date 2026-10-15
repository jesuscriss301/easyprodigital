// STYLE VARIANT of aesthetics.js — same brand/content/photos, dark palette.
// Built with complementary-hue color theory (never pure black, no pastel):
// background/surface/text stay tinted with the brand hue, while the accent
// rotates to the complementary hue for contrast. See gardenersNight.js for
// the original dark-variant pattern.
import base from './aesthetics.js'

export default {
  ...base,
  slug: 'aesthetics-night',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for Medical Aesthetics & Medspas — Midnight Blush Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#e8a9b5',
    primaryDark: '#c77f8d',
    accent: '#d7b267',
    bg: '#211817',
    surface: '#2c201f',
    ink: '#f7ece9',
    muted: '#bba29c',
    line: '#3f2f2d',
    headingFont: "'Cormorant Garamond', serif",
    bodyFont: "'Jost', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@500;600;700&family=Jost:wght@300;400;500;600&display=swap',
  },
}
