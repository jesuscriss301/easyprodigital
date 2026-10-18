// Sección "nuestros pacientes" — usada solo por la demo de veterinaria.
// Monta BounceCards (React Bits, motor gsap) con fotos de mascotas.
import { Suspense } from 'react'
import Reveal from './Reveal.jsx'
import { LazyBounceCards } from './reactbits/registry.js'
import { prefersReducedMotion } from './motionUtils.js'

export default function PatientsSection({ eyebrow, title, intro, items = [] }) {
  const reduced = prefersReducedMotion()
  if (!items.length) return null

  return (
    <section className="demo-section demo-patients" id="patients">
      <div className="demo-section-inner">
        <Reveal>
          {eyebrow && <span className="demo-eyebrow">{eyebrow}</span>}
          <h2>{title}</h2>
          {intro && <p className="demo-section-intro">{intro}</p>}
        </Reveal>
        {reduced ? (
          <div className="demo-patients__fallback">
            {items.slice(0, 5).map((it, i) => (
              <figure key={i}>
                <img src={it.image} alt={it.alt || it.name || 'pet'} loading="lazy" />
                {it.name && <figcaption>{it.name}</figcaption>}
              </figure>
            ))}
          </div>
        ) : (
          <Suspense fallback={null}>
            <LazyBounceCards items={items.slice(0, 5)} containerWidth={560} containerHeight={320} />
          </Suspense>
        )}
      </div>
    </section>
  )
}
