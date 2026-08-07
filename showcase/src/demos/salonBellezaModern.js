// STYLE VARIANT of salonBelleza.js — same brand/content/photos, different
// palette + typography, so a visitor (or a prospect) can compare looks on
// the same business. Not listed on the showcase home (see demos/index.js);
// reachable directly and via the style switcher rendered on all three.
import base from './salonBelleza.js'

export default {
  ...base,
  slug: 'salon-belleza-modern',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for Beauty Salons & Spas — Modern Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#1c1c1c',
    primaryDark: '#000000',
    accent: '#c9a227',
    bg: '#f7f5f2',
    surface: '#ffffff',
    ink: '#1c1c1c',
    muted: '#6b6b6b',
    line: '#e5e2dd',
    headingFont: "'Space Grotesk', system-ui, sans-serif",
    bodyFont: "'Inter', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@300;400;500;600&display=swap',
  },
}
