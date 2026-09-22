// Una sola paleta, la de la marca Copie BGR, sacada de su sitio:
// verde #01A748 (barra y botones), verde oscuro #007934, azul marino #07345A
// (fondo de sus banners) y el cian del logo. Es un juego que evoca la
// cuatricromía CMYK de una imprenta sin volverse un arcoíris.

export const THEME = {
  primary: '#01a748',
  primaryDark: '#046b32',
  accent: '#08a0d8',        // cian del logo — acento CMYK
  bg: '#0c1a24',            // azul marino muy oscuro (tinta), nunca negro puro
  surface: '#12242f',
  ink: '#eef4f2',
  muted: '#9fb4b0',
  line: '#254050',
  // acentos CMYK para detalles (marcas de registro, chispas de color)
  cyan: '#00aeef',
  magenta: '#ec008c',
  yellow: '#fff200',
  headingFont: "'Space Grotesk', system-ui, sans-serif",
  bodyFont: "'Inter', system-ui, sans-serif",
  googleFontsHref:
    'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@500;600;700&family=Inter:wght@400;500;600&display=swap',
}

/** Base color del LiquidChrome del hero, en 0..1 (verde de marca apagado). */
export const HERO_INK = [0.014, 0.16, 0.10]

export function themeVars(t = THEME) {
  return {
    '--demo-primary': t.primary,
    '--demo-primary-dark': t.primaryDark,
    '--demo-accent': t.accent,
    '--demo-bg': t.bg,
    '--demo-surface': t.surface,
    '--demo-ink': t.ink,
    '--demo-muted': t.muted,
    '--demo-line': t.line,
    '--cmyk-c': t.cyan,
    '--cmyk-m': t.magenta,
    '--cmyk-y': t.yellow,
    '--demo-font-heading': t.headingFont,
    '--demo-font-body': t.bodyFont,
  }
}
