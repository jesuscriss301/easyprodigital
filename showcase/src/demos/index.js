import salonBelleza from './salonBelleza.js'
import salonBellezaModern from './salonBellezaModern.js'
import salonBellezaBotanical from './salonBellezaBotanical.js'
import carWash from './carWash.js'
import carWashTurbo from './carWashTurbo.js'
import carWashEco from './carWashEco.js'

// Registro central de demos QUE SE LISTAN en la página de inicio del
// showcase — una tarjeta por rubro/nicho distinto. Cada entrada se convierte
// en una ruta /<slug>. Ver src/demos/README.md para la guía de cómo agregar
// una nueva.
const demos = [salonBelleza, carWash]

// Variantes de estilo (mismo contenido/rubro, distinta paleta + tipografía)
// — deliberadamente fuera de `demos` para no duplicar la tarjeta del mismo
// negocio en la home, pero siguen siendo accesibles por URL directa y se
// enlazan entre sí con el selector de estilo (StyleSwitcher) en DemoPage.
const styleOnlyVariants = [salonBellezaModern, salonBellezaBotanical, carWashTurbo, carWashEco]

const allDemos = [...demos, ...styleOnlyVariants]

export default demos

export function getDemoBySlug(slug) {
  return allDemos.find((d) => d.slug === slug)
}
