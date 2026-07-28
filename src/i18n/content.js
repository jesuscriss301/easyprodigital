import * as esData from '../data/profile.js'
import * as enData from '../data/profile.en.js'
import { getStrings } from './strings.js'

/** Datos estructurados (profile/services/projects/experience/education/site) por idioma. */
export function getData(lang) {
  return lang === 'es' ? esData : enData
}

export { getStrings }

export const LANGUAGES = ['en', 'es']
export const DEFAULT_LANGUAGE = 'en'
