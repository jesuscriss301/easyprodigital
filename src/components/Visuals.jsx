import Reveal from './Reveal.jsx'

/* ---------- Estrella (reseñas) ---------- */
function Star() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2 L15 9 L22 9.5 L16.8 14.3 L18.5 21.5 L12 17.7 L5.5 21.5 L7.2 14.3 L2 9.5 L9 9 Z" fill="#e8a317" />
    </svg>
  )
}

/**
 * Ficha de Google: "Antes" vs "Después". Es una ilustración con un negocio
 * inventado (no es una captura real de Google). El contenido se oculta a los
 * lectores de pantalla y se reemplaza por una descripción en texto.
 */
export function ListingCompare({ copy }) {
  const b = copy.before
  const a = copy.after
  return (
    <figure className="gl-compare">
      <p className="sr-only">{copy.description}</p>
      <div className="gl-cols" aria-hidden="true">
        <div className="gl-col">
          <span className="gl-label gl-label--before">{copy.beforeLabel}</span>
          <div className="gl-card">
            <div className="gl-photo gl-photo--empty">{b.noPhotos}</div>
            <div className="gl-body">
              <div className="gl-name">{copy.name}</div>
              <div className="gl-muted">{b.noReviews}</div>
              <div className="gl-muted">{copy.category}</div>
              <div className="gl-missing">{b.addHours}</div>
              <div className="gl-missing">{b.addAddress}</div>
              <div className="gl-actions">
                <span className="gl-pill gl-pill--off">{a.actions[0]}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="gl-col">
          <span className="gl-label gl-label--after">{copy.afterLabel}</span>
          <div className="gl-card">
            <div className="gl-photo gl-photo--mosaic">
              <span className="gl-tile gl-tile--a" />
              <span className="gl-tile gl-tile--b" />
              <span className="gl-tile gl-tile--c" />
            </div>
            <div className="gl-body">
              <div className="gl-name">{copy.name}</div>
              <div className="gl-rating">
                <b>{a.rating}</b>
                <Star /><Star /><Star /><Star /><Star />
                <span className="gl-muted">({a.reviews})</span>
              </div>
              <div className="gl-muted">{copy.category}</div>
              <div className="gl-open">{a.open}</div>
              <div className="gl-muted">{a.address}</div>
              <div className="gl-actions">
                {a.actions.map((x) => (
                  <span className="gl-pill" key={x}>{x}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
      <figcaption className="visual-caption">{copy.caption}</figcaption>
    </figure>
  )
}

/** Diagrama de pasos con flechas (horizontal en escritorio, vertical en móvil). */
export function FlowDiagram({ steps, caption }) {
  return (
    <figure className="flow-wrap">
      <Reveal as="ol" className="flow">
        {steps.map((s, i) => (
          <li className="flow-step" key={s.title}>
            <span className="flow-num" aria-hidden="true">{i + 1}</span>
            <span className="flow-title">{s.title}</span>
            <span className="flow-text">{s.text}</span>
          </li>
        ))}
      </Reveal>
      {caption && <figcaption className="visual-caption">{caption}</figcaption>}
    </figure>
  )
}
