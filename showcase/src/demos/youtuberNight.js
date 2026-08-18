// STYLE VARIANT of youtuber.js — same brand/content/photos, dark palette.
// Built with complementary-hue color theory (never pure black, no pastel):
// background/surface/text stay tinted with the brand hue, while the accent
// rotates to the complementary hue for contrast. See salonBellezaModern.js
// for the original style-variant pattern.
import base from './youtuber.js'

export default {
  ...base,
  slug: 'youtuber-night',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for YouTubers & Content Creators — Dark Mode Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#dd4b4e',
    primaryDark: '#ae292b',
    accent: '#49d4d2',
    bg: '#1d1111',
    surface: '#2c1c1c',
    ink: '#f2eded',
    muted: '#b49c9d',
    line: '#482e2e',
    headingFont: "'Space Grotesk', sans-serif",
    bodyFont: "'Inter', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@300;400;500;600&display=swap',
  },
}
