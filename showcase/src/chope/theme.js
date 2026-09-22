// Cuatro paletas para el mismo sitio — se cambian con el selector de estilo,
// igual que en las demás demos del showcase. La principal es "Taverne de
// nuit": fondo de madera quemada (nunca negro puro), verde gobelin del logo
// como primario y oro viejo como acento, que es literalmente la moneda con
// la que la Chope pone precio a sus platées ("96 pièces d'or").

const FONTS = {
  headingFont: "'Cinzel', Georgia, serif",
  bodyFont: "'Alegreya Sans', system-ui, sans-serif",
  googleFontsHref:
    'https://fonts.googleapis.com/css2?family=Cinzel:wght@500;600;700&family=Alegreya+Sans:ital,wght@0,400;0,500;0,700;1,400&display=swap',
}

export const STYLES = [
  {
    slug: 'nuit',
    fr: 'Taverne de nuit',
    en: 'Night tavern',
    theme: {
      primary: '#8cc63f', primaryDark: '#4e7c22', accent: '#d9a441',
      bg: '#14110c', surface: '#211b12', ink: '#f2e9d8', muted: '#b3a488', line: '#3a2f1e',
      wood: '#4a371f', woodDark: '#2c2012', parchment: '#e8dcc0', parchmentInk: '#3a2d18',
      swarm: { color: '#fff6e0', accent: '#d9a441' },
      ...FONTS,
    },
  },
  {
    slug: 'parchemin',
    fr: 'Parchemin',
    en: 'Parchment',
    theme: {
      primary: '#4e7c22', primaryDark: '#35561a', accent: '#a9791f',
      bg: '#f3e9d2', surface: '#fbf5e6', ink: '#2e2413', muted: '#6b5b3e', line: '#d8c8a4',
      wood: '#8a6a3c', woodDark: '#5c4426', parchment: '#fbf5e6', parchmentInk: '#2e2413',
      swarm: { color: '#8a6a3c', accent: '#a9791f' },
      ...FONTS,
    },
  },
  {
    slug: 'forge',
    fr: 'Or & forge',
    en: 'Gold & forge',
    theme: {
      primary: '#d9a441', primaryDark: '#a97c23', accent: '#8cc63f',
      bg: '#12100e', surface: '#1e1a15', ink: '#f6efe0', muted: '#a99a80', line: '#3b3224',
      wood: '#3f3527', woodDark: '#241d14', parchment: '#e8dcc0', parchmentInk: '#33291a',
      swarm: { color: '#fff3cf', accent: '#d9a441' },
      ...FONTS,
    },
  },
  {
    slug: 'gobelin',
    fr: 'Vert gobelin',
    en: 'Goblin green',
    theme: {
      primary: '#3f7d32', primaryDark: '#27521e', accent: '#c8892a',
      bg: '#1a2415', surface: '#24301d', ink: '#eef3e4', muted: '#a3b396', line: '#36462c',
      wood: '#4a3a22', woodDark: '#2a2113', parchment: '#e6e2c9', parchmentInk: '#2b3320',
      swarm: { color: '#eaf3d8', accent: '#c8892a' },
      ...FONTS,
    },
  },
]

export const getStyle = (slug) => STYLES.find((s) => s.slug === slug) || STYLES[0]

/** Pasa la paleta a custom properties CSS, como hace DemoPage con las demás demos. */
export function themeVars(t) {
  return {
    '--demo-primary': t.primary,
    '--demo-primary-dark': t.primaryDark,
    '--demo-accent': t.accent,
    '--demo-bg': t.bg,
    '--demo-surface': t.surface,
    '--demo-ink': t.ink,
    '--demo-muted': t.muted,
    '--demo-line': t.line,
    '--demo-font-heading': t.headingFont,
    '--demo-font-body': t.bodyFont,
    '--chope-wood': t.wood,
    '--chope-wood-dark': t.woodDark,
    '--chope-parchment': t.parchment,
    '--chope-parchment-ink': t.parchmentInk,
  }
}
