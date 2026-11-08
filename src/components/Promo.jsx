import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { PROMO, PROMO_COPY, isPromoActive } from '../data/promo.js'

/** Aviso de la promo. `full` agrega la letra chica y un enlace a precios. */
export function PromoBanner({ full = false, className = '' }) {
  const { lang, href } = useLanguage()
  if (!isPromoActive()) return null
  const copy = PROMO_COPY[lang] ?? PROMO_COPY.en
  return (
    <div className={`promo-banner${className ? ` ${className}` : ''}`} role="note">
      <span className="promo-pct" aria-hidden="true">-{PROMO.percent}%</span>
      <span className="promo-body">
        <strong>{copy.text}</strong>
        {full && <small>{copy.fine}</small>}
      </span>
      {!full && (
        <Link className="promo-link" to={href('/pricing/')}>
          {lang === 'es' ? 'Ver precios' : 'See prices'}
        </Link>
      )}
    </div>
  )
}
