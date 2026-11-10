import Reveal from './Reveal.jsx'
import { useLanguage } from '../i18n.jsx'
import systems from '../demos/systems.js'

const WHATSAPP = 'https://wa.me/573238816434'

const COPY = {
  en: {
    eyebrow: 'Beyond the website',
    lead: 'A system built for your business',
    note: 'Built around how you work · price based on scope · add it to your website or use it on its own.',
    cta: 'Ask for a demo of this system',
    message: (name) => `Hi Jesús! I saw the demo and I’m interested in the ${name} for my business.`,
  },
  es: {
    eyebrow: 'Más allá de la web',
    lead: 'Un sistema hecho para tu negocio',
    note: 'Hecho a la medida de cómo trabajas · precio según alcance · se suma a tu web o funciona por separado.',
    cta: 'Quiero ver una demo de este sistema',
    message: (name) => `Hola Jesús, vi la demo y me interesa el sistema “${name}” para mi negocio.`,
  },
}

/**
 * Oferta de un sistema dedicado por nicho (agenda, CRM, cotizador, etc.),
 * debajo del bloque de diseño web. El texto vive en demos/systems.js; el
 * mensaje de WhatsApp lleva el nombre del sistema para saber de qué demo
 * y de qué oferta llega cada conversación.
 */
export default function NicheSystem({ demo }) {
  const { lang } = useLanguage()
  const entry = systems[demo.slug] || systems[demo.styleVariants?.[0]?.slug]
  if (!entry) return null

  const l = lang === 'es' ? 'es' : 'en'
  const s = entry[l]
  const c = COPY[l]
  const href = `${WHATSAPP}?text=${encodeURIComponent(c.message(s.name))}`

  return (
    <section id="niche-system" className="demo-section demo-niche-system">
      <div className="demo-container">
        <Reveal as="div" className="demo-owner-pitch-card demo-niche-system-card">
          <span className="demo-eyebrow">{c.eyebrow}</span>
          <h2>
            <span className="demo-niche-system-lead">{c.lead}:</span> {s.name}
          </h2>
          <p className="demo-owner-pitch-intro">{s.intro}</p>
          <ul>
            {s.features.map((f) => (
              <li key={f}>{f}</li>
            ))}
          </ul>
          <p className="demo-owner-pitch-price">{c.note}</p>
          <div className="demo-cta-actions">
            <a href={href} className="demo-btn demo-btn-primary" target="_blank" rel="noopener noreferrer">
              {c.cta} →
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
