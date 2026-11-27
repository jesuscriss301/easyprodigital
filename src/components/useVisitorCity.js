import { useEffect, useState } from 'react'

const CACHE_KEY = 'epd_city'
const GEO_URL = 'https://get.geojs.io/v1/ip/geo.json'
const TIMEOUT_MS = 3000

// Una sola promesa por carga de página: varios componentes pueden usar el hook
// y todos esperan la misma petición (y el mismo valor).
let cityPromise = null

function normalizeCity(value) {
  if (typeof value !== 'string') return null
  const city = value.trim()
  return city || null
}

function readCachedCity() {
  try {
    return normalizeCity(sessionStorage.getItem(CACHE_KEY))
  } catch {
    return null
  }
}

function cacheCity(city) {
  try {
    sessionStorage.setItem(CACHE_KEY, city)
  } catch {
    // sessionStorage puede no estar disponible (modo privado, permisos).
  }
}

function loadCity() {
  if (cityPromise) return cityPromise

  cityPromise = (async () => {
    let timer
    try {
      const controller = new AbortController()
      timer = setTimeout(() => controller.abort(), TIMEOUT_MS)
      const response = await fetch(GEO_URL, { signal: controller.signal })
      if (!response.ok) return null
      const data = await response.json()
      const city = normalizeCity(data?.city)
      if (city) cacheCity(city)
      return city
    } catch {
      return null
    } finally {
      clearTimeout(timer)
    }
  })()

  return cityPromise
}

/**
 * Devuelve la ciudad aproximada del visitante (o null). El primer render
 * siempre es null para que coincida con el HTML prerenderizado; la lectura de
 * sessionStorage y el fetch a GeoJS ocurren en useEffect.
 */
export default function useVisitorCity() {
  const [city, setCity] = useState(null)

  useEffect(() => {
    if (typeof window === 'undefined' || window.__PRERENDER__ || navigator.webdriver) return undefined

    const cached = readCachedCity()
    if (cached) {
      setCity(cached)
      return undefined
    }

    let active = true
    loadCity().then((value) => {
      if (active) setCity(value)
    })

    return () => {
      active = false
    }
  }, [])

  return city
}
