// STYLE VARIANT of carWash.js — same brand/content/photos, different
// palette + typography. See salonBellezaModern.js for the original pattern.
import base from './carWash.js'

export default {
  ...base,
  slug: 'car-wash-eco',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for Car Washes & Auto Detailing — Eco Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#2f7d4f',
    primaryDark: '#1f5936',
    accent: '#d9a441',
    bg: '#f5f8f4',
    surface: '#ffffff',
    ink: '#1c2620',
    muted: '#5f6f64',
    line: '#dde7de',
    headingFont: "'Poppins', system-ui, sans-serif",
    bodyFont: "'Nunito Sans', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Poppins:wght@600;700;800&family=Nunito+Sans:wght@300;400;600&display=swap',
  },
}
