import Reveal from './Reveal.jsx'
import { useLanguage } from '../i18n.jsx'
import pitches from '../demos/pitches.js'

const MAIN_SITE = 'https://easyprodigital.com'
const WHATSAPP = 'https://wa.me/573238816434'

const COPY = {
  en: {
    eyebrow: 'For business owners',
    included: 'What your website includes',
    price: 'From USD 450 · ready in 7 days · one developer, direct WhatsApp, no agency markup.',
    primary: 'Get this website for my business',
    secondary: 'See prices and plans',
    message: (k) => `Hi Jesús! I saw your demo (${k.toLowerCase()}) and I’d like one for my business.`,
  },
  es: {
    eyebrow: 'Para dueños de negocio',
    included: 'Qué incluye tu página web',
    price: 'Desde USD 450 · lista en 7 días · un solo desarrollador, WhatsApp directo, sin sobrecostos de agencia.',
    primary: 'Quiero esta web para mi negocio',
    secondary: 'Ver precios y planes',
    message: (k) => `Hola Jesús, vi tu demo (${k.toLowerCase()}) y quiero una para mi negocio.`,
  },
}

/**
 * Bloque de venta para el DUEÑO del negocio que llega desde Google buscando
 * "website design for <nicho>". El resto de la demo le habla al cliente
 * final del negocio (el que necesita un plomero); sin este bloque, Google no
 * encuentra en la página nada sobre diseño web para ese nicho. El texto por
 * nicho vive en demos/pitches.js. Las variantes de estilo usan el de su
 * demo base (primer elemento de styleVariants).
 */
export default function OwnerPitch({ demo }) {
  const { lang } = useLanguage()
  const entry = pitches[demo.slug] || pitches[demo.styleVariants?.[0]?.slug]
  if (!entry) return null

  const l = lang === 'es' ? 'es' : 'en'
  const p = entry[l]
  const c = COPY[l]
  const servicePath = (l === 'es' ? '/es' : '') + (entry.service || '/pricing/')
  const whatsappHref = `${WHATSAPP}?text=${encodeURIComponent(c.message(p.keyword))}`

  return (
    <section id="website-design" className="demo-section demo-owner-pitch">
      <div className="demo-container">
        <Reveal as="div" className="demo-owner-pitch-card">
          <span className="demo-eyebrow">{c.eyebrow}</span>
          <h2>{p.keyword}</h2>
          <p className="demo-owner-pitch-intro">{p.intro}</p>
          <h3>{c.included}</h3>
          <ul>
            {p.bullets.map((b) => (
              <li key={b}>{b}</li>
            ))}
          </ul>
          <p className="demo-owner-pitch-price">{c.price}</p>
          <div className="demo-cta-actions">
            <a href={whatsappHref} className="demo-btn demo-btn-primary" target="_blank" rel="noopener noreferrer">
              {c.primary} →
            </a>
            <a href={MAIN_SITE + servicePath} className="demo-btn demo-btn-outline">
              {c.secondary}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
