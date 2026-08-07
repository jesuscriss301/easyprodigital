// STYLE VARIANT of carWash.js — same brand/content/photos, different
// palette + typography. See salonBellezaModern.js for the original pattern.
import base from './carWash.js'

export default {
  ...base,
  slug: 'car-wash-turbo',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for Car Washes & Auto Detailing — Turbo Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#c2261e',
    primaryDark: '#8c1915',
    accent: '#ffb703',
    bg: '#fbf7f4',
    surface: '#ffffff',
    ink: '#221615',
    muted: '#786361',
    line: '#efdcd8',
    headingFont: "'Archivo Black', system-ui, sans-serif",
    bodyFont: "'Inter', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Archivo+Black&family=Inter:wght@300;400;500;600&display=swap',
  },
}
