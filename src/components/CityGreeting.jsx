import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import useVisitorCity from './useVisitorCity.js'

// Zonas donde el negocio atiende en persona, solo para el saludo en español.
// Los nombres se comparan sin tildes y sin mayúsculas (ver fold).
const CITY_ZONES = [
  {
    path: '/paginas-web-medellin/',
    labelKey: 'cityLinkValleAburra',
    cities: [
      'medellin', 'envigado', 'itagui', 'sabaneta', 'bello', 'la estrella',
      'copacabana', 'rionegro', 'caldas', 'girardota',
    ],
  },
  {
    path: '/consultoria-ia-cucuta/',
    labelKey: 'cityLinkCucuta',
    cities: ['cucuta', 'villa del rosario', 'los patios', 'el zulia'],
  },
  {
    path: '/consultoria-ia-bucaramanga/',
    labelKey: 'cityLinkBucaramanga',
    cities: ['bucaramanga', 'floridablanca', 'giron', 'piedecuesta'],
  },
]

function fold(value) {
  return value
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .trim()
}

function zoneFor(city) {
  if (!city) return null
  const target = fold(city)
  return CITY_ZONES.find((zone) => zone.cities.includes(target)) || null
}

/**
 * Saludo con la ciudad detectada. El contenedor existe siempre (aunque esté
 * vacío) para reservar su altura y no mover el hero al aparecer el texto.
 */
export default function CityGreeting() {
  const { lang, t, href } = useLanguage()
  const city = useVisitorCity()
  const zone = lang === 'es' ? zoneFor(city) : null

  return (
    <p className="city-greeting" aria-live="polite">
      {city && (
        <span className="city-greeting-text">
          {t.home.cityGreeting.replace('{city}', city)}
          {zone && (
            <>
              {' '}
              <Link className="city-greeting-link" to={href(zone.path)}>
                {t.home[zone.labelKey]}
              </Link>
            </>
          )}
        </span>
      )}
    </p>
  )
}
