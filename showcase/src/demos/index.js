import salonBelleza from './salonBelleza.js'
import salonBellezaModern from './salonBellezaModern.js'
import salonBellezaBotanical from './salonBellezaBotanical.js'
import carWash from './carWash.js'
import carWashTurbo from './carWashTurbo.js'
import carWashEco from './carWashEco.js'
import cleaners from './cleaners.js'
import cleanersSunny from './cleanersSunny.js'
import cleanersMono from './cleanersMono.js'
import carpenters from './carpenters.js'
import carpentersRustic from './carpentersRustic.js'
import carpentersModern from './carpentersModern.js'
import gardeners from './gardeners.js'
import gardenersTerracotta from './gardenersTerracotta.js'
import gardenersSage from './gardenersSage.js'
import plumbers from './plumbers.js'
import plumbersEmergency from './plumbersEmergency.js'
import plumbersSteel from './plumbersSteel.js'
import realestate from './realestate.js'
import realestateCoastal from './realestateCoastal.js'
import realestateModern from './realestateModern.js'
import masons from './masons.js'
import masonsSlate from './masonsSlate.js'
import masonsTerracotta from './masonsTerracotta.js'
import construction from './construction.js'
import constructionOrange from './constructionOrange.js'
import constructionGray from './constructionGray.js'

// Registro central de demos QUE SE LISTAN en la página de inicio del
// showcase — una tarjeta por rubro/nicho distinto. Cada entrada se convierte
// en una ruta /<slug>. Ver src/demos/README.md para la guía de cómo agregar
// una nueva.
const demos = [salonBelleza, carWash, cleaners, carpenters, gardeners, plumbers, realestate, masons, construction]

// Variantes de estilo (mismo contenido/rubro, distinta paleta + tipografía)
// — deliberadamente fuera de `demos` para no duplicar la tarjeta del mismo
// negocio en la home, pero siguen siendo accesibles por URL directa y se
// enlazan entre sí con el selector de estilo (StyleSwitcher) en DemoPage.
const styleOnlyVariants = [
  salonBellezaModern,
  salonBellezaBotanical,
  carWashTurbo,
  carWashEco,
  cleanersSunny,
  cleanersMono,
  carpentersRustic,
  carpentersModern,
  gardenersTerracotta,
  gardenersSage,
  plumbersEmergency,
  plumbersSteel,
  realestateCoastal,
  realestateModern,
  masonsSlate,
  masonsTerracotta,
  constructionOrange,
  constructionGray,
]

const allDemos = [...demos, ...styleOnlyVariants]

export default demos

export function getDemoBySlug(slug) {
  return allDemos.find((d) => d.slug === slug)
}
