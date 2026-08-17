// STYLE VARIANT of youtuber.js — same brand/content/photos, different
// palette + typography. See salonBellezaModern.js for the original pattern.
import base from './youtuber.js'

export default {
  ...base,
  slug: 'youtuber-purple',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for YouTubers & Content Creators — Stream Purple Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#6d3bd6',
    primaryDark: '#4f27a3',
    accent: '#f2c14e',
    bg: '#f7f5fc',
    surface: '#ffffff',
    ink: '#1f1730',
    muted: '#6f6685',
    line: '#e6e0f2',
    headingFont: "'Sora', sans-serif",
    bodyFont: "'Inter', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Sora:wght@500;600;700&family=Inter:wght@300;400;500;600&display=swap',
  },
}
