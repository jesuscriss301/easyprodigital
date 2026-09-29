import * as esData from '../data/profile.js'
import * as enData from '../data/profile.en.js'
import { pricing as pricingEs } from '../data/pricing.js'
import { pricing as pricingEn } from '../data/pricing.en.js'
import { getStrings } from './strings.js'

/** Datos estructurados (profile/services/projects/experience/education/site/pricing) por idioma. */
export function getData(lang) {
  const base = lang === 'es' ? esData : enData
  const pricing = lang === 'es' ? pricingEs : pricingEn
  return { ...base, pricing }
}

export { getStrings }

export const LANGUAGES = ['en', 'es']
export const DEFAULT_LANGUAGE = 'en'
