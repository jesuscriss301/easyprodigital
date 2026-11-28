// STYLE VARIANT of bakery.js — same brand/content/photos, different palette + typography (warm classic: crust brown + raspberry jam).
import base from './bakery.js'

export default {
  ...base,
  slug: 'bakery-crust',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for Bakeries & Pastry Shops — Golden Crust Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#a35d22',
    primaryDark: '#7a4115',
    accent: '#9c3b4a',
    bg: '#faf4e8',
    surface: '#fffdf8',
    ink: '#2e2114',
    muted: '#73604a',
    line: '#ecdfc8',
    frosting: '#e6c48a',
    sprinkles: ['#a35d22', '#9c3b4a', '#f6d365', '#ffffff'],
    flour: '#efe3cc',
    silk: { color: '#ecd3a6', sheenColor: '#fffaf0', lightMode: true, opacity: 0.6 },
    headingFont: "'Gloock', serif",
    bodyFont: "'Mulish', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Gloock&family=Mulish:wght@400;500;600;700&display=swap',
  },
}
