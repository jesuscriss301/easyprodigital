import { Suspense } from 'react'
import { LazyScrollExpand } from './reactbits/registry.js'

/**
 * Sección propia para ScrollExpand (React Bits) — a diferencia de los otros
 * 8 fondos ambientales, este componente necesita ser dueño de su propio
 * tramo de scroll (no cabe "detrás" de un hero ya armado), así que se monta
 * como una sección independiente. Usado en Jardineros: la foto del hero de
 * jardinería se expande a pantalla completa a medida que se hace scroll.
 */
export default function ScrollFeatureSection({ src, alt, title, scrollHint }) {
  if (!src) return null
  return (
    <section className="demo-scroll-feature" aria-label={title || alt}>
      <Suspense fallback={null}>
        <LazyScrollExpand
          src={src}
          alt={alt}
          title={title}
          scrollHint={scrollHint}
          startWidth={44}
          startHeight={56}
          startRadius={28}
          scrollDistance={1}
          holdDistance={0.25}
          useWindowScroll
        />
      </Suspense>
    </section>
  )
}
