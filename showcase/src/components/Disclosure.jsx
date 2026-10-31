import { Suspense } from 'react'
import Reveal from './Reveal.jsx'
import { useLanguage } from '../i18n.jsx'
import { LazyTextLoop } from './reactbits/registry.js'

const DEFAULT_WHATSAPP = 'https://wa.me/573238816434'

/**
 * Antes era solo un aviso ("this is a sample website"). Ahora también
 * vende: oferta (7 dias, USD 450, sin costo para verlo con tu marca) + un
 * mensaje de WhatsApp prellenado unico por nicho (demo.niche), para poder
 * distinguir de que demo llega cada conversacion (ver doc de estrategias,
 * Parte 1.1 y 1.3). heading/text/whatsappMessage siguen pudiendose pisar
 * por demo si alguna necesita un texto distinto al generico.
 *
 * El aviso ahora se presenta como una cinta animada (ReactBits "Text Loop",
 * curviness=0 / tilt=-8 / ribbonWidth=90 -> una franja diagonal recta, no
 * una curva) que corre encima de la oferta, para que destaque como un
 * "sticker" sobre la pagina en vez de pasar desapercibido como texto plano.
 */
export default function Disclosure({
  id = 'want-this',
  heading,
  text,
  whatsappMessage,
  brand,
  niche,
}) {
  const { t } = useLanguage()
  const d = t.disclosure

  const finalHeading = heading || d.offerHeading
  const finalText = text || d.offerText(brand, niche)
  const finalWhatsapp = whatsappMessage || d.defaultWhatsapp(niche)
  const whatsappHref = `${DEFAULT_WHATSAPP}?text=${encodeURIComponent(finalWhatsapp)}`
  const ribbonText = d.ribbonText(niche)

  return (
    <section id={id} className="demo-section demo-section--tight demo-section--alt demo-disclosure-section">
      <div className="demo-ribbon-wrap" aria-hidden="true">
        <Suspense fallback={null}>
          <LazyTextLoop
            text={ribbonText}
            shape="wave"
            curviness={0}
            tilt={-8}
            ribbonWidth={90}
            ribbonColor="var(--demo-primary)"
            fontSize={22}
            fontWeight={800}
            letterSpacing={1.5}
            speed={38}
            separator="✦"
          />
        </Suspense>
      </div>
      <div className="demo-container">
        <Reveal as="div" className="demo-disclosure">
          <h3>{finalHeading}</h3>
          <p>{finalText}</p>
          <div className="demo-cta-actions">
            <a href={whatsappHref} className="demo-btn demo-btn-primary" target="_blank" rel="noopener noreferrer">
              {d.ctaPrimary} →
            </a>
            <a href="https://easyprodigital.com/pricing/" className="demo-btn demo-btn-outline">
              {d.ctaPricing}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
