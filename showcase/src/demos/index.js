import salonBelleza from './salonBelleza.js'
import salonBellezaModern from './salonBellezaModern.js'
import salonBellezaBotanical from './salonBellezaBotanical.js'
import salonBellezaNight from './salonBellezaNight.js'
import carWash from './carWash.js'
import carWashTurbo from './carWashTurbo.js'
import carWashEco from './carWashEco.js'
import carWashNight from './carWashNight.js'
import cleaners from './cleaners.js'
import cleanersSunny from './cleanersSunny.js'
import cleanersMono from './cleanersMono.js'
import cleanersNight from './cleanersNight.js'
import carpenters from './carpenters.js'
import carpentersRustic from './carpentersRustic.js'
import carpentersModern from './carpentersModern.js'
import carpentersNight from './carpentersNight.js'
import gardeners from './gardeners.js'
import gardenersTerracotta from './gardenersTerracotta.js'
import gardenersSage from './gardenersSage.js'
import gardenersNight from './gardenersNight.js'
import plumbers from './plumbers.js'
import plumbersEmergency from './plumbersEmergency.js'
import plumbersSteel from './plumbersSteel.js'
import plumbersNight from './plumbersNight.js'
import realestate from './realestate.js'
import realestateCoastal from './realestateCoastal.js'
import realestateModern from './realestateModern.js'
import realestateNight from './realestateNight.js'
import masons from './masons.js'
import masonsSlate from './masonsSlate.js'
import masonsTerracotta from './masonsTerracotta.js'
import masonsNight from './masonsNight.js'
import construction from './construction.js'
import constructionOrange from './constructionOrange.js'
import constructionGray from './constructionGray.js'
import constructionNight from './constructionNight.js'
import automechanics from './automechanics.js'
import automechanicsYellow from './automechanicsYellow.js'
import automechanicsBlue from './automechanicsBlue.js'
import automechanicsNight from './automechanicsNight.js'
import electricians from './electricians.js'
import electriciansNavy from './electriciansNavy.js'
import electriciansVolt from './electriciansVolt.js'
import electriciansNight from './electriciansNight.js'
import chef from './chef.js'
import chefNoir from './chefNoir.js'
import chefFresh from './chefFresh.js'
import chefNight from './chefNight.js'
import adultCreator from './adultCreator.js'
import adultCreatorSilk from './adultCreatorSilk.js'
import adultCreatorCherry from './adultCreatorCherry.js'
import youtuber from './youtuber.js'
import youtuberPurple from './youtuberPurple.js'
import youtuberMint from './youtuberMint.js'
import youtuberNight from './youtuberNight.js'
import church from './church.js'
import churchModern from './churchModern.js'
import churchDawn from './churchDawn.js'
import churchNight from './churchNight.js'
import foundation from './foundation.js'
import foundationSky from './foundationSky.js'
import foundationSunrise from './foundationSunrise.js'
import foundationNight from './foundationNight.js'

// Registro central de demos QUE SE LISTAN en la página de inicio del
// showcase — una tarjeta por rubro/nicho distinto. Cada entrada se convierte
// en una ruta /<slug>. Ver src/demos/README.md para la guía de cómo agregar
// una nueva.
const demos = [salonBelleza, carWash, cleaners, carpenters, gardeners, plumbers, realestate, masons, construction, automechanics, electricians, chef, adultCreator, youtuber, church, foundation]

// Variantes de estilo (mismo contenido/rubro, distinta paleta + tipografía)
// — deliberadamente fuera de `demos` para no duplicar la tarjeta del mismo
// negocio en la home, pero siguen siendo accesibles por URL directa y se
// enlazan entre sí con el selector de estilo (StyleSwitcher) en DemoPage.
const styleOnlyVariants = [
  salonBellezaModern,
  salonBellezaBotanical,
  salonBellezaNight,
  carWashTurbo,
  carWashEco,
  carWashNight,
  cleanersSunny,
  cleanersMono,
  cleanersNight,
  carpentersRustic,
  carpentersModern,
  carpentersNight,
  gardenersTerracotta,
  gardenersSage,
  gardenersNight,
  plumbersEmergency,
  plumbersSteel,
  plumbersNight,
  realestateCoastal,
  realestateModern,
  realestateNight,
  masonsSlate,
  masonsTerracotta,
  masonsNight,
  constructionOrange,
  constructionGray,
  constructionNight,
  automechanicsYellow,
  automechanicsBlue,
  automechanicsNight,
  electriciansNavy,
  electriciansVolt,
  electriciansNight,
  chefNoir,
  chefFresh,
  chefNight,
  adultCreatorSilk,
  adultCreatorCherry,
  youtuberPurple,
  youtuberMint,
  youtuberNight,
  churchModern,
  churchDawn,
  churchNight,
  foundationSky,
  foundationSunrise,
  foundationNight,
]

const allDemos = [...demos, ...styleOnlyVariants]

export default demos

export function getDemoBySlug(slug) {
  return allDemos.find((d) => d.slug === slug)
}
