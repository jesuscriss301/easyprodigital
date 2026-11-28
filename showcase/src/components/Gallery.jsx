import { Suspense } from 'react'
import Reveal from './Reveal.jsx'
import SplitText from './SplitText.jsx'
import { prefersReducedMotion } from './motionUtils.js'
import { VineDecor, speciesFor } from './Vines.jsx'
import { MaterialDecor } from './Materials.jsx'
import { LazyMasonry } from './reactbits/registry.js'

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

// Masonry (React Bits, sin deps): mosaico tipo vitrina de panadería — las
// fotos entran desde abajo con desenfoque, crecen al pasar el mouse y se
// abren en lightbox. Cada foto lleva su crédito visible (`credit`) en la
// leyenda. Solo la usa demos/bakery.js (gallery.variant = 'masonry').
function MasonryGallery({ items }) {
  const data = items.map((item, i) => ({
    id: `${i}-${item.label}`,
    img: item.image,
    width: item.width,
    height: item.height,
    title: item.label,
    description: item.credit,
    alt: item.alt || item.label,
  }))
  const fallback = (
    <div className="demo-masonry-fallback">
      {items.map((item) => <img key={item.label} src={item.image} alt={item.alt || item.label} loading="lazy" />)}
    </div>
  )
  return (
    <Suspense fallback={fallback}>
      <LazyMasonry
        items={data}
        columnWidth={280}
        gap={14}
        radius={18}
        animateFrom="bottom"
        stagger={0.06}
        blurToFocus
        hoverEffect="lift"
        captions="always"
        draggable={false}
        className="demo-masonry"
      />
    </Suspense>
  )
}

export default function Gallery({ id = 'gallery', eyebrow, title, intro, items = [], hover, variant, theme, vines = false, materials = null }) {
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
        {variant === 'masonry' ? (
          <MasonryGallery items={items} />
        ) : (
        <Reveal as="div" className={`demo-gallery${hover ? ` demo-gallery--${hover}` : ''}`}>
          {items.map((item, i) => {
            const isMedia = typeof item === 'object' && item !== null
            const label = isMedia ? item.label : item
            return (
              <div
                className={`demo-gallery-tile${vines || materials ? ' has-vines' : ''}`}
                key={label}
                style={isMedia ? undefined : { background: gradientForIndex(i, theme) }}
                {...tileHandlers}
              >
                {isMedia && item.video && (
                  <video src={item.video} poster={item.poster} autoPlay muted loop playsInline aria-label={item.alt || label} />
                )}
                {isMedia && !item.video && item.image && <img src={item.image} alt={item.alt || label} loading="lazy" />}
                <span>{label}</span>
                {vines && <VineDecor species={speciesFor('gallery', i)} seed={i + 31} side={i === 0 ? 'left' : 'right'} />}
                {materials && <MaterialDecor set={materials} section="gallery" index={i} side={i === 0 ? 'left' : 'right'} />}
              </div>
            )
          })}
        </Reveal>
        )}
      </div>
    </section>
  )
}
