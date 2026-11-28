// STYLE VARIANT of bakery.js — same brand/content/photos, dark palette.
// Complementary-hue rule (see gardenersNight.js): never pure black, no pastel —
// bg/surface/text stay tinted with the strawberry brand hue, the accent
// rotates to the complementary mint for contrast.
import base from './bakery.js'

export default {
  ...base,
  slug: 'bakery-night',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for Bakeries & Pastry Shops — Cocoa Night Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#ff7a9c',
    primaryDark: '#e4507a',
    accent: '#4fd1a5',
    bg: '#1d1316',
    surface: '#2a1c20',
    ink: '#f6ebee',
    muted: '#bfa7ad',
    line: '#452e35',
    frosting: '#ff7a9c',
    sprinkles: ['#ff7a9c', '#4fd1a5', '#f6d365', '#ffffff'],
    flour: '#6b5359',
    wheat: '#d9a24a',
    silk: { color: '#8a2d48', sheenColor: '#ffb3c6', lightMode: false, opacity: 0.75 },
    headingFont: "'Young Serif', serif",
    bodyFont: "'Figtree', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Young+Serif&family=Figtree:wght@400;500;600;700&display=swap',
  },
}
