import { useRef, useState } from 'react'
import { gsap } from 'gsap'
import Reveal from '../components/Reveal.jsx'
import { prefersReducedMotion } from '../components/motionUtils.js'

// AccordionGallery (React Bits — familia gsap, que ya es el runtime de
// animación DOM del proyecto: 0 KB de dependencias nuevas). Tiras verticales
// que se abren al pasar el cursor o al recibir foco de teclado; el resto se
// encoge. Máximo 5 por fila, así que las fotos se reparten en filas de 5.
//
// En móvil el acordeón no tiene sentido (no hay hover y cinco columnas no se
// leen): por CSS pasa a una cuadrícula de dos columnas con las fotos
// completas.

const PER_ROW = 5
const OPEN = 2.6
const CLOSED = 1

function chunk(arr, size) {
  const out = []
  for (let i = 0; i < arr.length; i += size) out.push(arr.slice(i, i + size))
  return out
}

function Row({ items, lang, startIndex }) {
  const rowRef = useRef(null)
  const [active, setActive] = useState(-1)

  const expand = (i) => {
    setActive(i)
    const row = rowRef.current
    if (!row || prefersReducedMotion()) return
    const panels = Array.from(row.children)
    panels.forEach((p, idx) => {
      gsap.to(p, {
        flexGrow: idx === i ? OPEN : CLOSED,
        duration: 0.55,
        ease: 'power3.out',
        overwrite: 'auto',
      })
    })
  }

  const reset = () => {
    setActive(-1)
    const row = rowRef.current
    if (!row || prefersReducedMotion()) return
    gsap.to(Array.from(row.children), {
      flexGrow: CLOSED,
      duration: 0.5,
      ease: 'power3.out',
      overwrite: 'auto',
    })
  }

  return (
    <div className="chope-accordion-row" ref={rowRef} onMouseLeave={reset}>
      {items.map((item, i) => (
        <button
          type="button"
          key={item.src}
          className={`chope-accordion-panel${active === i ? ' is-open' : ''}`}
          style={{ flexGrow: CLOSED }}
          onMouseEnter={() => expand(i)}
          onFocus={() => expand(i)}
          onBlur={reset}
          aria-label={item[lang]}
        >
          <img src={item.src} alt={item[lang]} loading={startIndex + i < 5 ? 'eager' : 'lazy'} />
          <span className="chope-accordion-label">{item[lang]}</span>
        </button>
      ))}
    </div>
  )
}

export default function AccordionGallery({ id = 'galerie', items = [], lang, heading }) {
  const rows = chunk(items, PER_ROW)
  return (
    <section id={id} className="demo-section chope-gallery">
      <div className="demo-container">
        {heading}
        <Reveal as="div" className="chope-accordion">
          {rows.map((row, r) => (
            <Row key={r} items={row} lang={lang} startIndex={r * PER_ROW} />
          ))}
        </Reveal>
      </div>
    </section>
  )
}
