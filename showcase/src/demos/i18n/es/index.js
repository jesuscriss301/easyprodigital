// Registro central de paquetes de contenido en español, uno por nicho.
// La clave es `styleVariants[0].slug` del demo base (que coincide con el
// propio `slug` del demo base) — este valor se hereda SIN CAMBIOS por todas
// las variantes de estilo y las variantes oscuras (*Night.js) de ese nicho,
// así que sirve como llave estable para localizar cualquier demo del mismo
// negocio/rubro, sin importar la paleta o el tema que esté usando.
import salonBelleza from './salonBelleza.js'
import carWash from './carWash.js'
import cleaners from './cleaners.js'
import carpenters from './carpenters.js'
import gardeners from './gardeners.js'
import plumbers from './plumbers.js'
import realestate from './realestate.js'
import masons from './masons.js'
import construction from './construction.js'
import automechanics from './automechanics.js'
import electricians from './electricians.js'
import chef from './chef.js'
import adultCreator from './adultCreator.js'
import youtuber from './youtuber.js'
import church from './church.js'
import foundation from './foundation.js'
import { mergeLang } from '../../../i18n.jsx'

const esContentByKey = {
  'salon-belleza': salonBelleza,
  'car-wash': carWash,
  cleaners,
  carpenters,
  gardeners,
  plumbers,
  realestate,
  masons,
  construction,
  automechanics,
  electricians,
  'private-chef': chef,
  'adult-creator': adultCreator,
  youtuber,
  church,
  foundation,
}

// Devuelve el paquete de contenido en español para un demo dado (usando
// `styleVariants[0].slug` como llave), o `undefined` si no existe (no
// debería pasar para ningún demo listado en src/demos/index.js).
export function esContentFor(demo) {
  const key = demo?.styleVariants?.[0]?.slug
  return key ? esContentByKey[key] : undefined
}

// Returns `demo` as-is for English, or `demo` deep-merged with its ES
// content pack (see mergeLang) for Spanish. Falls back to the English demo
// untouched if no ES pack is registered for it, so this is always safe to
// call regardless of `lang`.
export function getLocalizedDemo(demo, lang) {
  if (!demo || lang !== 'es') return demo
  const esContent = esContentFor(demo)
  return esContent ? mergeLang(demo, esContent) : demo
}

export default esContentByKey
