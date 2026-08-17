// STYLE VARIANT of chef.js — same brand/content/photos, different
// palette + typography. See salonBellezaModern.js for the original pattern.
import base from './chef.js'

export default {
  ...base,
  slug: 'private-chef-fresh',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for Private Chefs & Catering — Fresh Market Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#4c7a3d',
    primaryDark: '#35592a',
    accent: '#e0a458',
    bg: '#f7faf4',
    surface: '#ffffff',
    ink: '#232b1e',
    muted: '#68725f',
    line: '#e0e8d8',
    headingFont: "'Fraunces', Georgia, serif",
    bodyFont: "'Karla', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,600;9..144,700&family=Karla:wght@300;400;500;600&display=swap',
  },
}
