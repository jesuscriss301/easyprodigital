import Reveal from './Reveal.jsx'
import SplitText from './SplitText.jsx'
import { Icon } from './icons.jsx'
import { prefersReducedMotion } from './motionUtils.js'

// Hover "spotlight" (adaptado de SpotlightCard de React Bits, reescrito sin
// dependencias): un halo radial sigue al cursor dentro de la fila/tarjeta.
// Solo corre en hover (sin bucle rAF) y se desactiva vía CSS con
// prefers-reduced-motion.
function spotlightMove(e) {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--spot-x', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--spot-y', `${e.clientY - r.top}px`)
}

// Magnet (React Bits, adaptación CSS/JS sin deps nuevas): el ícono del
// servicio se deja "atraer" sutilmente por el cursor — coquetería premium
// para salones/spas. Solo mousemove, sin bucle de animación.
function magnetMove(e) {
  if (prefersReducedMotion()) return
  const icon = e.currentTarget.querySelector('.demo-service-icon')
  if (!icon) return
  const r = e.currentTarget.getBoundingClientRect()
  const px = (e.clientX - r.left) / r.width - 0.5
  const py = (e.clientY - r.top) / r.height - 0.5
  icon.style.transform = `translate(${(px * 14).toFixed(1)}px, ${(py * 14).toFixed(1)}px)`
}
function magnetReset(e) {
  const icon = e.currentTarget.querySelector('.demo-service-icon')
  if (icon) icon.style.transform = ''
}

/** variant: 'grid' (tarjetas) | 'list' (fila horizontal)
 *  hover: 'spotlight' | 'magnet' | 'glass' — un efecto distinto por nicho. */
export default function Services({ id = 'services', eyebrow, title, intro, variant = 'grid', hover, items = [] }) {
  const spotlight = hover === 'spotlight'
  const magnet = hover === 'magnet'
  const glass = hover === 'glass'
  const spotProps = spotlight
    ? { onMouseMove: spotlightMove }
    : magnet
      ? { onMouseMove: magnetMove, onMouseLeave: magnetReset }
      : {}
  const itemModifier = `${spotlight ? ' demo-spotlight' : ''}${glass ? ' demo-glass' : ''}`
  return (
    <section id={id} className={`demo-section${glass ? ' demo-section--glass' : ''}`}>
      <div className="demo-container">
        <Reveal className="demo-section-head">
          {eyebrow && <span className="demo-eyebrow">{eyebrow}</span>}
          <SplitText tag="h2" text={title} textAlign="center" splitType="chars" delay={30} duration={0.8} />
          {intro && <p>{intro}</p>}
        </Reveal>

        {variant === 'list' ? (
          <Reveal as="div" className="demo-services demo-services--list">
            {items.map((s) => (
              <div className={`demo-service-row${itemModifier}`} key={s.title} {...spotProps}>
                <div className="demo-service-icon"><Icon name={s.icon} /></div>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
                {s.price && <span className="demo-service-price">{s.price}</span>}
              </div>
            ))}
          </Reveal>
        ) : (
          <Reveal as="div" className="demo-services demo-services--grid">
            {items.map((s) => (
              <div className={`demo-service-card${itemModifier}`} key={s.title} {...spotProps}>
                <div className="demo-service-icon"><Icon name={s.icon} /></div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                {s.price && <span className="demo-service-price">{s.price}</span>}
              </div>
            ))}
          </Reveal>
        )}
      </div>
    </section>
  )
}
