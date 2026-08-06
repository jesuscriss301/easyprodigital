import salonBelleza from './salonBelleza.js'

// Registro central de demos. Cada entrada se convierte en una ruta
// /<slug> y aparece listada en la página de inicio del showcase.
// Ver src/demos/README.md para la guía de cómo agregar una nueva.
const demos = [salonBelleza]

export default demos

export function getDemoBySlug(slug) {
  return demos.find((d) => d.slug === slug)
}
