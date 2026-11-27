import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { getServiceBlocks, getMaintenancePlans } from '../data/serviceBlocks.js'

// Igual que el helper de pages.jsx: el visitante solo pulsa enviar.
function waLink(base, text) {
  return `${base}?text=${encodeURIComponent(text)}`
}

/* ---------- Iconos del bloque de soporte (SVG en línea, decorativos) ---------- */
function BackupIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <ellipse cx="12" cy="5" rx="7" ry="3" />
      <path d="M5 5v6c0 1.7 3.1 3 7 3s7-1.3 7-3V5" />
      <path d="M5 11v6c0 1.7 3.1 3 7 3s7-1.3 7-3v-6" />
    </svg>
  )
}

function UpdateIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <path d="M12 3l7 3v6c0 4.2-2.9 7.4-7 9-4.1-1.6-7-4.8-7-9V6l7-3z" />
      <path d="M9 12l2 2 4-4" />
    </svg>
  )
}

function ErrorIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <rect x="8" y="8" width="8" height="10" rx="4" />
      <path d="M9 8V6a3 3 0 0 1 6 0v2M4 11h4M16 11h4M4 16h4M16 16h4M6 6l2 2M18 6l-2 2M6 20l2-2M18 20l-2-2" />
    </svg>
  )
}

function HoursIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true" focusable="false">
      <circle cx="12" cy="12" r="8" />
      <path d="M12 8v4l2.5 2" />
    </svg>
  )
}

const SUPPORT_ICONS = [BackupIcon, UpdateIcon, ErrorIcon, HoursIcon]

/**
 * Comparativa de tiendas: tabla real en escritorio y una tarjeta por
 * plataforma en móvil (< 720px). Todo el texto viene de serviceBlocks.js.
 */
export function StoreCompare() {
  const { lang, data } = useLanguage()
  const copy = getServiceBlocks(lang).storeCompare

  return (
    <div className="store-cmp">
      <h2 className="section-title">{copy.title}</h2>

      <div className="store-cmp__table-wrap">
        <table className="store-cmp__table">
          <caption className="sr-only">{copy.caption}</caption>
          <thead>
            <tr>
              <th scope="col">{copy.criteriaLabel}</th>
              {copy.platforms.map((platform) => (
                <th scope="col" key={platform}>{platform}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            {copy.rows.map((row) => (
              <tr key={row.label}>
                <th scope="row">{row.label}</th>
                {row.values.map((value, i) => (
                  <td key={copy.platforms[i]}>{value}</td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="store-cmp__cards">
        {copy.platforms.map((platform, i) => (
          <article className="store-cmp__card" key={platform}>
            <h3>{platform}</h3>
            <dl>
              {copy.rows.map((row) => (
                <div key={row.label}>
                  <dt>{row.label}</dt>
                  <dd>{row.values[i]}</dd>
                </div>
              ))}
            </dl>
          </article>
        ))}
      </div>

      <p className="store-cmp__note">{copy.note}</p>

      <div className="store-cmp__cta">
        <p>{copy.honest}</p>
        <a
          className="btn btn-primary"
          href={waLink(data.profile.whatsapp, copy.whatsappText)}
          target="_blank"
          rel="noopener noreferrer"
        >
          {copy.whatsappLabel}
        </a>
      </div>
    </div>
  )
}

/**
 * Soporte y control de errores. Los planes son los de pricing*.js; en la
 * variante "infra" (consultoría) no se muestran planes, solo la línea de
 * cotización. No promete tiempos de respuesta ni disponibilidad.
 */
export function SupportBlock({ variant }) {
  const { lang, href } = useLanguage()
  const copy = getServiceBlocks(lang).support
  const isInfra = variant === 'infra'
  const content = isInfra ? copy.infra : copy
  const maintenance = isInfra ? null : getMaintenancePlans(lang)

  return (
    <div className={`support-blk${isInfra ? ' support-blk--infra' : ''}`}>
      <h2 className="section-title">{content.title}</h2>
      <p className="page-intro support-blk-intro">
        <img
          className="support-blk-photo"
          src="/photo-jesus-cristancho-sq.webp"
          alt=""
          width="56"
          height="56"
          loading="lazy"
          decoding="async"
        />
        <span>{content.intro}</span>
      </p>

      <ul className="support-blk__grid">
        {content.points.map((point, i) => {
          const Icon = SUPPORT_ICONS[i % SUPPORT_ICONS.length]
          return (
            <li className="support-blk__item" key={point.title}>
              <span className="support-blk__icon" aria-hidden="true">
                <Icon />
              </span>
              <h3>{point.title}</h3>
              <p>{point.text}</p>
            </li>
          )
        })}
      </ul>

      {isInfra ? (
        <p className="support-blk__quote">{copy.infra.quote}</p>
      ) : maintenance && (
        <div className="support-blk__plans">
          <div className="support-blk__plans-head">
            <h3>{maintenance.title}</h3>
            <Link className="support-blk__link" to={href('/pricing/')}>
              {copy.plansLink}
            </Link>
          </div>
          <div className="support-blk__plan-grid">
            {maintenance.plans.map((plan) => (
              <div className="support-blk__plan" key={plan.name}>
                <h4 className="support-blk__plan-name">{plan.name}</h4>
                <p className="support-blk__price">
                  <strong>{plan.currency === 'USD' ? '$' : ''}{plan.price}</strong>
                  <span>{plan.currency} {maintenance.monthly}</span>
                </p>
                <ul className="support-blk__plan-features">
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  )
}
