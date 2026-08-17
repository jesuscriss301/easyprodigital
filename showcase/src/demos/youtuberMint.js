// STYLE VARIANT of youtuber.js — same brand/content/photos, different
// palette + typography. See salonBellezaModern.js for the original pattern.
import base from './youtuber.js'

export default {
  ...base,
  slug: 'youtuber-mint',
  kind: 'prospecto',

  seo: {
    ...base.seo,
    title: 'Website Design for YouTubers & Content Creators — Fresh Mint Style (Example) | Easy Pro Digital',
    robots: 'noindex, nofollow', // avoid duplicate-content with the indexed base demo
  },

  theme: {
    primary: '#12a594',
    primaryDark: '#0b7367',
    accent: '#ffb84d',
    bg: '#f4faf9',
    surface: '#ffffff',
    ink: '#15302c',
    muted: '#5d7672',
    line: '#d9ebe8',
    headingFont: "'Outfit', sans-serif",
    bodyFont: "'Nunito Sans', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Outfit:wght@500;600;700&family=Nunito+Sans:wght@300;400;600;700&display=swap',
  },
}
