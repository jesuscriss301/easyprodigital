import Reveal from './Reveal.jsx'
import SplitText from './SplitText.jsx'
import { prefersReducedMotion } from './motionUtils.js'

// TiltedCard (React Bits usa `motion`; esta adaptación es solo mousemove +
// custom properties para no sumar un segundo runtime DOM al bundle
// compartido): inclinación 3D que sigue al cursor, pensada para una galería
// de oficio manual (carpintería) donde la pieza de trabajo "se voltea" hacia
// quien mira.
function tiltMove(e) {
  if (prefersReducedMotion()) return
  const el = e.currentTarget
  const r = el.getBoundingClientRect()
  const px = (e.clientX - r.left) / r.width - 0.5
  const py = (e.clientY - r.top) / r.height - 0.5
  el.style.setProperty('--tilt-x', `${(-py * 10).toFixed(2)}deg`)
  el.style.setProperty('--tilt-y', `${(px * 10).toFixed(2)}deg`)
}
function tiltReset(e) {
  e.currentTarget.style.setProperty('--tilt-x', '0deg')
  e.currentTarget.style.setProperty('--tilt-y', '0deg')
}

// ChromaGrid (React Bits, gsap ya es el runtime del bundle — el efecto en sí
// no necesita JS de gsap, solo custom properties de mousemove): halo de
// color que sigue al cursor tile a tile, energía de galería de creador.
function chromaMove(e) {
  if (prefersReducedMotion()) return
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--chroma-x', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--chroma-y', `${e.clientY - r.top}px`)
}

/** Genera degradados a partir de la paleta del tema, sin depender de fotos reales. */
function gradientForIndex(i, theme) {
  const combos = [
    [theme.accent, theme.primary],
    [theme.primary, theme.primaryDark],
    [theme.primaryDark, theme.ink],
    [theme.accent, theme.primaryDark],
    [theme.primary, theme.accent],
    [theme.ink, theme.primary],
  ]
  const [a, b] = combos[i % combos.length]
  return `linear-gradient(140deg, ${a}, ${b})`
}

export default function Gallery({ id = 'gallery', eyebrow, title, intro, items = [], hover, theme }) {
  // hover: 'glare' | 'tilt' | 'peel' | 'chroma' | 'blur' | 'float' — un
  // efecto distinto por nicho, ver styles.css "Efectos opt-in por demo".
  const tileHandlers =
    hover === 'tilt'
      ? { onMouseMove: tiltMove, onMouseLeave: tiltReset }
      : hover === 'chroma'
        ? { onMouseMove: chromaMove }
        : {}
  return (
    <section id={id} className="demo-section">
      <div className="demo-container">
        <Reveal className="demo-section-head">
          {eyebrow && <span className="demo-eyebrow">{eyebrow}</span>}
          <SplitText tag="h2" text={title} textAlign="center" splitType="chars" delay={30} duration={0.8} />
          {intro && <p>{intro}</p>}
        </Reveal>
        <Reveal as="div" className={`demo-gallery${hover ? ` demo-gallery--${hover}` : ''}`}>
          {items.map((item, i) => {
            const isMedia = typeof item === 'object' && item !== null
            const label = isMedia ? item.label : item
            return (
              <div
                className="demo-gallery-tile"
                key={label}
                style={isMedia ? undefined : { background: gradientForIndex(i, theme) }}
                {...tileHandlers}
              >
                {isMedia && item.video && (
                  <video src={item.video} poster={item.poster} autoPlay muted loop playsInline aria-label={item.alt || label} />
                )}
                {isMedia && !item.video && item.image && <img src={item.image} alt={item.alt || label} loading="lazy" />}
                <span>{label}</span>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
