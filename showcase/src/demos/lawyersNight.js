// STYLE VARIANT of lawyers.js — same brand/content/photos, dark palette.
// Built with complementary-hue color theory (never pure black, no pastel):
// background/surface/text stay tinted with the brand hue (deep navy, like
// a chambers lit by brass lamps after hours), while the accent rotates to
// the complementary hue for contrast. See gardenersNight.js for the
// original dark-variant pattern.
import base from './lawyers.js'

export default {
  ...base,
  slug: 'lawyers-night',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for Law Firms & Attorneys — Chambers Night Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#d6a74a',
    primaryDark: '#ab7f2f',
    accent: '#5fa8c9',
    bg: '#0f1623',
    surface: '#182840',
    ink: '#eef1f6',
    muted: '#9aa6bb',
    line: '#273551',
    headingFont: "'Playfair Display', serif",
    bodyFont: "'Source Sans 3', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700;800&family=Source+Sans+3:wght@300;400;500;600&display=swap',
  },
}
