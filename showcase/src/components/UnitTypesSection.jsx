// Sección "tamaños de unidad" — usada solo por la demo de Self Storage.
// Monta AccordionGallery (React Bits, motor gsap): franjas que se
// expanden al hover revelando cada tamaño disponible.
import { Suspense } from 'react'
import Reveal from './Reveal.jsx'
import { LazyAccordionGallery } from './reactbits/registry.js'

export default function UnitTypesSection({ eyebrow, title, intro, items = [] }) {
  if (!items.length) return null
  return (
    <section className="demo-section demo-unittypes" id="unit-types">
      <div className="demo-section-inner">
        <Reveal>
          {eyebrow && <span className="demo-eyebrow">{eyebrow}</span>}
          <h2>{title}</h2>
          {intro && <p className="demo-section-intro">{intro}</p>}
        </Reveal>
        <Suspense fallback={null}>
          <LazyAccordionGallery items={items} />
        </Suspense>
      </div>
    </section>
  )
}
