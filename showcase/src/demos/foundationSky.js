// STYLE VARIANT of foundation.js — same brand/content/photos, different
// palette + typography. See salonBellezaModern.js for the original pattern.
import base from './foundation.js'

export default {
  ...base,
  slug: 'foundation-sky',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for Foundations & Nonprofits — Open Sky Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#2c6e9e',
    primaryDark: '#1c4d70',
    accent: '#f0b03f',
    bg: '#f4f8fb',
    surface: '#ffffff',
    ink: '#1b2a35',
    muted: '#5c7180',
    line: '#dbe7ef',
    headingFont: "'Libre Franklin', sans-serif",
    bodyFont: "'Source Sans 3', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Libre+Franklin:wght@600;700;800&family=Source+Sans+3:wght@300;400;500;600&display=swap',
  },
}
