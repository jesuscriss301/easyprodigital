import { Fragment } from 'react'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { getIllustrationCopy } from '../data/serviceVisuals.js'

/**
 * Ilustraciones animadas de las páginas de servicio y de ciudad.
 *
 * Reglas que hay que mantener:
 *  - Todo el texto y todo el dibujo están en el DOM desde el primer render
 *    (nada de Date, Math.random, fetch ni storage).
 *  - La animación vive solo en CSS y solo con prefers-reduced-motion:
 *    no-preference. Sin movimiento se ve el estado final, que es el estado
 *    base de cada elemento.
 *  - Los negocios son inventados: no hay marcas reales ni cifras de resultados.
 */

/* ---------- 1. Página web en portátil y celular ---------- */
function BusinessSite({ copy, compact = false }) {
  return (
    <div className={`svc-site${compact ? ' svc-site--compact' : ''}`}>
      <div className="svc-site-top">
        <span className="svc-site-dots"><i /><i /><i /></span>
        <span className="svc-site-url">{copy.url}</span>
      </div>
      <div className="svc-site-nav">
        <span className="svc-site-logo">{copy.business.charAt(0)}</span>
        <span className="svc-site-name">{copy.business}</span>
        <span className="svc-site-links">
          {copy.nav.map((item) => <span key={item}>{item}</span>)}
        </span>
      </div>
      <div className="svc-site-photo"><span>{copy.photo}</span></div>
      <div className="svc-site-lines">
        <span className="svc-site-heading">{copy.tagline}</span>
        <span className="svc-site-line svc-site-line--wide" />
        <span className="svc-site-line" />
      </div>
      <span className="svc-wa">{copy.whatsappCta}</span>
    </div>
  )
}

function WebIllustration({ copy }) {
  return (
    <div className="svc-web">
      <div className="svc-laptop">
        <div className="svc-laptop-screen">
          <BusinessSite copy={copy} />
        </div>
        <div className="svc-laptop-base" />
      </div>
      <div className="svc-phone">
        <BusinessSite copy={copy} compact />
      </div>
    </div>
  )
}

/* ---------- 2. Tienda: producto, carrito y pago aprobado ---------- */
function StoreIllustration({ copy }) {
  return (
    <div className="svc-store">
      <div className="svc-store-card">
        <div className="svc-store-thumb"><span>{copy.product}</span></div>
        <div className="svc-store-info">
          <strong>{copy.product}</strong>
          <span className="svc-store-stock">{copy.inStock}</span>
          <span className="svc-store-add">{copy.addToCart}</span>
        </div>
      </div>
      <span className="svc-store-arrow" />
      <div className="svc-store-cart">
        <span className="svc-cart">
          <i className="svc-cart-handle" />
          <i className="svc-cart-basket" />
          <i className="svc-cart-wheel svc-cart-wheel--a" />
          <i className="svc-cart-wheel svc-cart-wheel--b" />
        </span>
        <span className="svc-store-cart-label">{copy.cart}</span>
      </div>
      <span className="svc-store-arrow" />
      <div className="svc-store-paid">
        <span className="svc-store-check" />
        <strong>{copy.approved}</strong>
        <span className="svc-store-pay">{copy.payOnline}</span>
        <span className="svc-store-methods">
          <span>{copy.pse}</span>
          <span>{copy.card}</span>
        </span>
      </div>
    </div>
  )
}

/* ---------- 3. App móvil en iPhone y Android ---------- */
function PhoneApp({ copy, os }) {
  return (
    <div className={`svc-device svc-device--${os}`}>
      <div className="svc-device-screen">
        <div className="svc-app-top">
          <span className="svc-app-logo">{copy.appName.charAt(0)}</span>
          <span>{copy.appName}</span>
        </div>
        <div className="svc-app-title">{copy.appTitle}</div>
        <div className="svc-app-card">
          <span className="svc-app-item">{copy.appItem}</span>
          <span className="svc-app-time">{copy.appTime}</span>
          <span className="svc-app-line" />
        </div>
        <div className="svc-app-tabs"><i /><i /><i /></div>
      </div>
      <span className="svc-device-os">{os === 'ios' ? copy.ios : copy.android}</span>
    </div>
  )
}

function MobileIllustration({ copy }) {
  return (
    <div className="svc-mobile">
      <div className="svc-notif">
        <span className="svc-notif-icon">{copy.appName.charAt(0)}</span>
        <div className="svc-notif-text">
          <strong>{copy.notificationTitle}</strong>
          <span>{copy.notification}</span>
        </div>
      </div>
      <PhoneApp copy={copy} os="ios" />
      <PhoneApp copy={copy} os="android" />
    </div>
  )
}

/* ---------- 4. Sistema: hoja de cálculo → panel ordenado ---------- */
function SystemIllustration({ copy }) {
  return (
    <div className="svc-system">
      <div className="svc-window">
        <div className="svc-window-bar">
          <i /><i /><i />
          <span>{copy.appName}</span>
        </div>
        <div className="svc-system-body">
          <div className="svc-sheet">
            <span className="svc-sheet-head">{copy.sheetLabel}</span>
            {[0, 1, 2, 3, 4].map((row) => (
              <span className="svc-sheet-row" key={row}>
                {[0, 1, 2, 3].map((col) => (
                  <i className={`svc-cell svc-cell--${(row + col) % 4}`} key={col} />
                ))}
              </span>
            ))}
            <span className="svc-sheet-warn">!</span>
          </div>
          <span className="svc-system-arrow" />
          <div className="svc-panel">
            <div className="svc-panel-cards">
              {[copy.sales, copy.inventory, copy.customers].map((label) => (
                <span className="svc-kpi" key={label}>
                  <i className="svc-kpi-dot" />
                  <b>{label}</b>
                  <i className="svc-kpi-line" />
                </span>
              ))}
            </div>
            <div className="svc-chart">
              <span className="svc-chart-label">{copy.chartLabel}</span>
              <div className="svc-chart-bars">
                <i /><i /><i /><i /><i />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

/* ---------- 5. Búsqueda: "Tu negocio" sube al primer lugar ---------- */
function SearchIllustration({ copy }) {
  return (
    <div className="svc-search">
      <div className="svc-serp">
        <div className="svc-serp-bar">
          <span className="svc-serp-ico" />
          <span>{copy.query}</span>
        </div>
        <div className="svc-serp-list">
          <div className="svc-result svc-result--you">
            <span className="svc-result-title">{copy.business}</span>
            <span className="svc-result-url">{copy.businessUrl}</span>
            <span className="svc-result-desc">
              <i />
              <i className="svc-result-desc-short" />
            </span>
          </div>
          {copy.others.map((item) => (
            <div className="svc-result" key={item.url}>
              <span className="svc-result-title">{item.title}</span>
              <span className="svc-result-url">{item.url}</span>
              <span className="svc-result-desc">
                <i />
                <i className="svc-result-desc-short" />
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

/* ---------- 6. Embudo de anuncio, mensaje y compra ---------- */
function FunnelIllustration({ copy }) {
  return (
    <div className="svc-funnel">
      <span className="svc-funnel-dot svc-funnel-dot--1" />
      <span className="svc-funnel-dot svc-funnel-dot--2" />
      <span className="svc-funnel-dot svc-funnel-dot--3" />
      {copy.steps.map((step, index) => (
        <Fragment key={step}>
          {index > 0 && <span className="svc-funnel-arrow" />}
          <div className={`svc-funnel-level svc-funnel-level--${index + 1}`}>
            <span>{step}</span>
          </div>
        </Fragment>
      ))}
    </div>
  )
}

/* ---------- 7. Asistente de IA con los documentos de la empresa ---------- */
function AiIllustration({ copy }) {
  return (
    <div className="svc-ai">
      <div className="svc-doc">
        <span className="svc-doc-tag">{copy.docLabel}</span>
        <span className="svc-doc-title">{copy.docTitle}</span>
        <span className="svc-doc-line" />
        <span className="svc-doc-line" />
        <span className="svc-doc-line svc-doc-line--short" />
      </div>
      <span className="svc-ai-arrow" />
      <div className="svc-chat">
        <div className="svc-chat-head">
          <span className="svc-chat-avatar">{copy.assistant.charAt(0)}</span>
          <span>{copy.assistant}</span>
        </div>
        <p className="svc-chat-bubble svc-chat-bubble--q">{copy.question}</p>
        <p className="svc-chat-bubble svc-chat-bubble--a">{copy.answer}</p>
      </div>
    </div>
  )
}

/* ---------- 8. Servidor propio, tres equipos y red de 10 Gb ---------- */
function InfraIllustration({ copy }) {
  return (
    <div className="svc-infra">
      <div className="svc-rack">
        <div className="svc-rack-top">
          <span className="svc-rack-label">{copy.rackLabel}</span>
          <span className="svc-chip">
            <span className="svc-chip-ia">{copy.chip}</span>
            <span className="svc-lock" />
          </span>
        </div>
        <div className="svc-rack-units">
          {[0, 1, 2].map((unit) => (
            <span className="svc-rack-unit" key={unit}>
              <i className="svc-led svc-led--green" />
              <i className="svc-led svc-led--amber" />
              <i className="svc-rack-slot" />
              <i className="svc-led svc-led--green" />
            </span>
          ))}
        </div>
        <span className="svc-rack-lock">
          <span className="svc-lock" />
          {copy.lockLabel}
        </span>
      </div>
      <div className="svc-links">
        {[0, 1, 2].map((line) => (
          <span className={`svc-link svc-link--${line + 1}`} key={line}>
            <i className="svc-link-line" />
            <i className="svc-link-dot" />
            {line === 1 && <span className="svc-link-label">{copy.linkLabel}</span>}
          </span>
        ))}
      </div>
      <div className="svc-pcs">
        {[0, 1, 2].map((pc) => (
          <span className="svc-pc" key={pc}>
            <i className="svc-pc-screen"><i className="svc-pc-glow" /></i>
            <i className="svc-pc-stand" />
          </span>
        ))}
      </div>
    </div>
  )
}

const DRAWINGS = {
  web: WebIllustration,
  store: StoreIllustration,
  mobile: MobileIllustration,
  system: SystemIllustration,
  search: SearchIllustration,
  funnel: FunnelIllustration,
  ai: AiIllustration,
  infra: InfraIllustration,
}

export function ServiceIllustration({ kind }) {
  const { lang } = useLanguage()
  const copy = getIllustrationCopy(lang, kind)
  const Drawing = DRAWINGS[kind]
  if (!copy || !Drawing) return null

  return (
    <figure className={`svc-ill svc-ill--${kind}`}>
      <p className="sr-only">{copy.description}</p>
      <div className="svc-ill__stage" aria-hidden="true">
        <Drawing copy={copy} />
      </div>
      <figcaption className="visual-caption">{copy.caption}</figcaption>
    </figure>
  )
}
