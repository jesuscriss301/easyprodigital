// STYLE VARIANT of plumbers.js — same brand/content/photos, dark palette.
// Built with complementary-hue color theory (never pure black, no pastel):
// background/surface/text stay tinted with the brand hue, while the accent
// rotates to the complementary hue for contrast. See salonBellezaModern.js
// for the original style-variant pattern.
import base from './plumbers.js'

export default {
  ...base,
  slug: 'plumbers-night',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for Plumbers — Night Call Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#4ba3dd',
    primaryDark: '#2979ae',
    accent: '#d48049',
    bg: '#11181d',
    surface: '#1c252c',
    ink: '#edf0f2',
    muted: '#9cabb4',
    line: '#2e3d48',
    headingFont: "'Barlow Condensed', sans-serif",
    bodyFont: "'Inter', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700;800&family=Inter:wght@300;400;500;600&display=swap',
  },
}
