import Reveal from './Reveal.jsx'
import { useLanguage } from '../i18n.jsx'

const DEFAULT_WHATSAPP = 'https://wa.me/573238816434'

/**
 * Aviso + oferta (7 dias, USD 450, sin costo para verlo con tu marca) +
 * mensaje de WhatsApp prellenado unico por nicho (demo.niche), para poder
 * distinguir de que demo llega cada conversacion (ver doc de estrategias,
 * Parte 1.1 y 1.3). heading/text/whatsappMessage siguen pudiendose pisar
 * por demo si alguna necesita un texto distinto al generico.
 *
 * Sigue siendo una seccion normal dentro del flujo de la pagina (id
 * "want-this") porque TODOS los botones de CTA de cada demo (hero, nav,
 * cta final) y el Badge flotante hacen scroll hasta aca via #want-this.
 * El aviso "flotante que se cierra" vive aparte, en NoticeCard.jsx.
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

  return (
    <section id={id} className="demo-section demo-section--tight demo-section--alt">
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
