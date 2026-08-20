import { Suspense } from 'react'
import Reveal from './Reveal.jsx'
import SplitText from './SplitText.jsx'
import { LazyMagicBento } from './reactbits/registry.js'

/**
 * Grid de servicios para Car Wash usando MagicBento (React Bits). El
 * componente original trae 6 tarjetas de ejemplo de un SaaS hardcodeadas —
 * se reescribieron dentro de MagicBento.jsx con los 6 paquetes reales de
 * la demo (ver la nota en ese archivo), así que aquí solo se monta con la
 * paleta de marca del nicho.
 */
export default function BentoServicesSection({ eyebrow, title, intro, theme }) {
  return (
    <section id="services" className="demo-section demo-section--bento">
      <div className="demo-container">
        <Reveal className="demo-section-head">
          {eyebrow && <span className="demo-eyebrow">{eyebrow}</span>}
          <SplitText tag="h2" text={title} textAlign="center" splitType="chars" delay={30} duration={0.8} />
          {intro && <p>{intro}</p>}
        </Reveal>
        <Suspense fallback={null}>
          <LazyMagicBento
            glowColor={hexToRgbTriplet(theme?.accent || theme?.primary)}
            enableTilt={false}
            enableMagnetism
            clickEffect
            enableSpotlight
            enableStars
          />
        </Suspense>
      </div>
    </section>
  )
}

function hexToRgbTriplet(hex) {
  if (!hex) return '15, 126, 163'
  const v = hex.replace('#', '')
  const r = parseInt(v.slice(0, 2), 16)
  const g = parseInt(v.slice(2, 4), 16)
  const b = parseInt(v.slice(4, 6), 16)
  return `${r}, ${g}, ${b}`
}
