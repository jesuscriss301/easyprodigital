import Reveal from '../components/Reveal.jsx'
import { Icon } from '../components/icons.jsx'
import { CONTACT, HOURS } from './content.js'
import { COPY } from './copy.js'
import { GOBLIN_FORK } from './assets.js'

// Contacto con TODAS las vías que ofrece el sitio actual. Hoy están
// repartidas entre el encabezado (teléfono, Facebook, correo) y la página
// "Nous joindre" (reservas, traiteur, Google Maps); aquí van juntas, cada
// una con su para-qué, más los horarios en texto real y el mapa.
//
// A un costado, el duende de la fourchette que la propia Chope dibujó. El
// GIF original viene con fondo blanco, así que se monta sobre un panel de
// pergamino con mix-blend-mode: multiply — el blanco toma el color del
// pergamino y solo queda el trazo, sin recortar nada a mano.

const tel = (n) => `tel:${n.replace(/[^\d]/g, '')}`

export default function Contact({ id = 'location', lang, heading }) {
  const t = COPY[lang].location

  const ways = [
    { icon: 'phone', label: t.ways.phone, note: t.ways.phoneNote, value: CONTACT.phone, href: tel(CONTACT.phone), strong: true },
    { icon: 'utensils', label: t.ways.catering, note: t.ways.cateringNote, value: CONTACT.cateringPhone, href: tel(CONTACT.cateringPhone) },
    { icon: 'mail', label: t.ways.mail, value: CONTACT.bookingEmail, href: `mailto:${CONTACT.bookingEmail}` },
    { icon: 'mail', label: t.ways.info, value: CONTACT.email, href: `mailto:${CONTACT.email}` },
    { icon: 'facebook', label: t.ways.facebook, note: t.ways.facebookNote, value: 'La Chope Gobeline', href: CONTACT.facebook, ext: true },
    { icon: 'sparkle', label: t.ways.order, note: t.ways.orderNote, value: 'order-online.ai', href: CONTACT.order, ext: true },
  ]

  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(CONTACT.mapQuery)}&z=15&output=embed`

  return (
    <section id={id} className="demo-section chope-contact">
      <div className="demo-container">
        {heading}

        <Reveal as="div" className="chope-contact-grid">
          <figure className="chope-goblin-card">
            <img src={GOBLIN_FORK} alt={t.goblinAlt} loading="lazy" />
          </figure>

          <div className="chope-ways">
            {ways.map((w) => (
              <a
                key={w.label + w.value}
                className={`chope-way${w.strong ? ' is-strong' : ''}`}
                href={w.href}
                {...(w.ext ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <span className="chope-way-icon"><Icon name={w.icon} /></span>
                <span className="chope-way-text">
                  <em>{w.label}</em>
                  <strong>{w.value}</strong>
                  {w.note && <small>{w.note}</small>}
                </span>
              </a>
            ))}
          </div>

          <div className="chope-place">
            <div className="chope-map">
              <iframe
                title={t.addressTitle}
                src={mapSrc}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                allowFullScreen
              />
            </div>
            <p className="chope-address">
              <Icon name="mapPin" /> {CONTACT.address}
            </p>

            <h3 className="chope-hours-title">{t.hoursTitle}</h3>
            <ul className="chope-hours">
              {HOURS.map((h) => (
                <li key={h.dow}>
                  <span>{h[lang]}</span>
                  <span>{h.open.replace(':', 'h')} – {h.close.replace(':', 'h')}</span>
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
