// Una sola paleta, la de la marca real de Ping Pong Club: el naranja de su
// logo (#EB5928, muestreado directamente del wordmark) y el crema de su
// fondo actual (#FFE7DA) — pero llevados a una versión "arcade nocturno"
// (jueves a sábado, 20h a 3h) en vez del fondo claro del sitio actual.
// El verde neón es un guiño a la mesa reglamentaria, sin copiar la paleta
// fría de otras demos del showcase (Copie BGR usa azul/verde marino).

export const THEME = {
  primary: '#eb5928', // naranja real del logo
  primaryDark: '#b8451d',
  accent: '#2bd97c', // verde neón — mesa de ping pong, letrero de arcade
  bg: '#180f0b', // marrón casi negro, nunca negro puro
  surface: '#241610',
  ink: '#fbede3', // eco del crema real de su sitio, como texto sobre oscuro
  muted: '#cbb6aa',
  line: '#3d2a20',
  headingFont: "'Baloo 2', system-ui, sans-serif", // redondeada, como su wordmark
  bodyFont: "'Work Sans', system-ui, sans-serif",
  googleFontsHref:
    'https://fonts.googleapis.com/css2?family=Baloo+2:wght@600;700;800&family=Work+Sans:wght@400;500;600&display=swap',
}

/** Colores que ciclan las pelotas de ping pong animadas del hero. */
export const BALL_COLORS = [THEME.primary, THEME.accent, THEME.ink]

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
    '--demo-font-heading': t.headingFont,
    '--demo-font-body': t.bodyFont,
  }
}
