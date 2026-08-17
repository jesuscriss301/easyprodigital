// STYLE VARIANT of electricians.js — same brand/content/photos, different
// palette + typography. See salonBellezaModern.js for the original pattern.
import base from './electricians.js'

export default {
  ...base,
  slug: 'electricians-volt',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for Electricians — High Voltage Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#3d9970',
    primaryDark: '#276a4c',
    accent: '#f5d547',
    bg: '#f5faf7',
    surface: '#ffffff',
    ink: '#1b2b23',
    muted: '#5f7268',
    line: '#dcebe2',
    headingFont: "'Chakra Petch', sans-serif",
    bodyFont: "'Nunito Sans', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Chakra+Petch:wght@500;600;700&family=Nunito+Sans:wght@300;400;600;700&display=swap',
  },
}
