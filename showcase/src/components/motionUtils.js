// Pequeño helper compartido por los efectos opt-in (React Bits, adaptaciones
// CSS/JS sin dependencias nuevas) que usan mousemove/click en vez de CSS
// puro: los que animan vía inline style (custom properties, transform)
// no se pueden apagar con la media query de prefers-reduced-motion sola,
// así que cada handler la consulta antes de tocar el DOM.
export const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches
