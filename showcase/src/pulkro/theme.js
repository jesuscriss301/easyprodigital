// Una sola paleta, la de la marca real de Pulkro Express: el cian de su logo
// (#01D0F0, muestreado de la foto de perfil de Instagram) y el azul de sus
// piezas gráficas. El cian no da contraste sobre blanco para texto, así que
// va como acento (fondos, burbujas, subrayados) y los botones usan un azul
// más profundo (#0B6FD0, 4.9:1 con blanco). Fondo "hielo" claro, como su
// local: paredes turquesa con luz blanca.

export const THEME = {
  primary: '#0b6fd0', // azul de botones (contraste AA con texto blanco)
  primaryDark: '#084f96',
  accent: '#01d0f0', // cian real del logo
  bg: '#f3fafd',
  surface: '#ffffff',
  ink: '#0a2342', // azul marino de los textos de sus piezas
  muted: '#4a6280',
  line: '#d5e8f2',
  headingFont: "'Exo 2', system-ui, sans-serif", // deportiva, cursiva como su wordmark
  bodyFont: "'Nunito Sans', system-ui, sans-serif",
  googleFontsHref:
    'https://fonts.googleapis.com/css2?family=Exo+2:ital,wght@0,700;0,800;1,800;1,900&family=Nunito+Sans:wght@400;600;700&display=swap',
}

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
