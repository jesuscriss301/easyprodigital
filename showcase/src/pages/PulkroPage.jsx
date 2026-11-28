import { useEffect, useState } from 'react'
import Seo from '../components/Seo.jsx'
import BendingMarquee from '../components/BendingMarquee.jsx'
import Reveal from '../components/Reveal.jsx'
import { Icon } from '../components/icons.jsx'
import { prefersReducedMotion } from '../components/motionUtils.js'

import Bubbles from '../pulkro/Bubbles.jsx'
import BeforeAfter from '../pulkro/BeforeAfter.jsx'
import { THEME, themeVars } from '../pulkro/theme.js'
import {
  CONTACT, wa, LOGO, HERO, BEFORE_AFTER, SERVICES, EXTRAS, STEPS,
  PROCESS_PHOTOS, GALLERY, FAQS, DISCLOSURE,
} from '../pulkro/content.js'
import '../pulkro/pulkro.css'

// Maqueta para un prospecto concreto (Pulkro Express, lavado de tenis en
// Belén, Medellín) armada desde su Instagram: no tiene web, solo Linktree.
// Página propia (no DemoPage) porque lleva un comparador antes/después y
// burbujas en el hero; ruta fuera de demos/index.js, sin indexar.

const EPD_WHATSAPP = 'https://wa.me/573238816434'

const NAV = [
  { href: '#antes-despues', label: 'Antes y después' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#como-funciona', label: 'Cómo funciona' },
  { href: '#contacto', label: 'Contacto' },
]

function useGoogleFont(href) {
  useEffect(() => {
    if (!href || document.querySelector(`link[href="${href}"]`)) return
    const link = document.createElement('link')
    link.rel = 'stylesheet'; link.href = href
    document.head.appendChild(link)
  }, [href])
}

function WaIcon({ size = 20 }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="currentColor" aria-hidden="true">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2c-1.5 0-3-.4-4.3-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8-.2-.1-.4-.1-.6.1l-.8 1c-.1.2-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.3-.4.2-.4.7-1.4.1-.2 0-.3 0-.5l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5c-.2 0-.5.1-.7.3-.2.3-.9.9-.9 2.2s.9 2.5 1 2.7c.1.2 1.8 2.8 4.4 3.9 1.6.7 2.3.8 3.1.6.5-.1 1.5-.6 1.7-1.2.2-.6.2-1.1.2-1.2-.1-.1-.2-.2-.5-.3z" />
    </svg>
  )
}

const AGENDA_MSG = 'Hola Pulkro Express, quiero agendar el lavado de mis tenis.'

export default function PulkroPage() {
  const [menu, setMenu] = useState(false)
  const [pairId, setPairId] = useState(BEFORE_AFTER[0].id)
  const pair = BEFORE_AFTER.find((p) => p.id === pairId)
  useGoogleFont(THEME.googleFontsHref)

  // Las burbujas arrancan apagadas en el primer render y se encienden en el
  // cliente si el usuario no pidió movimiento reducido.
  const [bubbles, setBubbles] = useState(false)
  useEffect(() => { setBubbles(!prefersReducedMotion()) }, [])

  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(CONTACT.mapQuery)}&z=16&output=embed`

  return (
    <div className="demo-root pk-root" style={themeVars(THEME)}>
      <Seo
        title="Pulkro Express — lavado de tenis en Belén, Medellín | Maqueta Easy Pro Digital"
        description="Propuesta de web para Pulkro Express: lavado y desinfección de tenis en Belén, Medellín, con entrega en 24 horas y recogida a domicilio. Maqueta de Easy Pro Digital."
        path="/pulkro-express/"
        robots="noindex, nofollow"
      />
      <a href="#contenido" className="pk-skip">Saltar al contenido</a>

      {/* ---------------------------------------------------------- nav */}
      <nav className="demo-nav pk-nav">
        <div className="demo-nav-inner">
          <a href="#inicio" className="pk-brand" onClick={() => setMenu(false)}>
            <img src={LOGO} alt="Pulkro Express — lavado de calzado" width="420" height="165" />
          </a>
          <ul className={`demo-nav-links${menu ? ' is-open' : ''}`}>
            {NAV.map((l) => <li key={l.href}><a href={l.href} onClick={() => setMenu(false)}>{l.label}</a></li>)}
            <li className="demo-nav-cta-mobile-item">
              <a href={wa(AGENDA_MSG)} target="_blank" rel="noopener noreferrer" className="demo-btn demo-btn-primary" onClick={() => setMenu(false)}>Agendar</a>
            </li>
          </ul>
          <a href={wa(AGENDA_MSG)} target="_blank" rel="noopener noreferrer" className="demo-btn demo-btn-primary demo-nav-cta">
            <WaIcon size={18} /> Agendar
          </a>
          <button type="button" className={`demo-nav-toggle${menu ? ' is-open' : ''}`} aria-label="Menú"
            aria-expanded={menu} onClick={() => setMenu((v) => !v)}>
            <span /><span /><span />
          </button>
        </div>
      </nav>
      <BendingMarquee lang="es" />

      <main id="contenido">
        {/* --------------------------------------------------------- hero */}
        <header id="inicio" className="demo-hero pk-hero">
          {bubbles && <Bubbles />}
          <div className="demo-container pk-hero-grid">
            <Reveal className="pk-hero-copy">
              <span className="demo-eyebrow">{HERO.eyebrow}</span>
              <h1>
                {HERO.titleStart} <span className="pk-hl">{HERO.titleHighlight}</span> {HERO.titleEnd}
              </h1>
              <p className="pk-hero-text">{HERO.text}</p>
              <div className="demo-hero-actions">
                <a href={wa(AGENDA_MSG)} target="_blank" rel="noopener noreferrer" className="demo-btn demo-btn-primary">
                  <WaIcon /> Agenda por WhatsApp
                </a>
                <a href="#antes-despues" className="demo-btn demo-btn-outline">Ver antes y después</a>
              </div>
              <dl className="pk-trust">
                {HERO.trust.map((x) => (
                  <div key={x.label}><dt>{x.value}</dt><dd>{x.label}</dd></div>
                ))}
              </dl>
            </Reveal>
            <Reveal className="pk-hero-visual">
              <div className="pk-hero-photo">
                <img src={HERO.image.src} width={HERO.image.w} height={HERO.image.h} alt={HERO.image.alt} fetchpriority="high" />
              </div>
              <span className="pk-hero-chip"><Icon name="sparkle" width="16" height="16" /> {HERO.chip}</span>
              <span className="pk-hero-chip pk-hero-chip--2"><Icon name="car" width="16" height="16" /> Domicilios disponibles</span>
            </Reveal>
          </div>
        </header>

        {/* ---------------------------------------------- antes y después */}
        <section id="antes-despues" className="demo-section pk-ba-section">
          <div className="demo-container pk-ba-grid">
            <Reveal className="pk-ba-copy">
              <span className="demo-eyebrow">Trabajos reales</span>
              <h2>Desliza y mira el cambio</h2>
              <p>Estos son pares que pasaron por nuestro local en Belén. Arrastra la barra para comparar cómo llegaron y cómo se fueron.</p>
              <div className="pk-ba-tabs" role="group" aria-label="Elegir par">
                {BEFORE_AFTER.map((p) => (
                  <button key={p.id} type="button"
                    className={`pk-ba-tab${p.id === pairId ? ' is-active' : ''}`}
                    aria-pressed={p.id === pairId}
                    onClick={() => setPairId(p.id)}>
                    {p.label}
                  </button>
                ))}
              </div>
              <p className="pk-ba-note">{pair.note}</p>
            </Reveal>
            <Reveal>
              <BeforeAfter pair={pair} key={pair.id} />
            </Reveal>
          </div>
        </section>

        {/* ---------------------------------------------------- servicios */}
        <section id="servicios" className="demo-section demo-section--alt">
          <div className="demo-container">
            <Reveal className="demo-section-head">
              <span className="demo-eyebrow">Servicios</span>
              <h2>Un lavado para cada par</h2>
              <p>El precio depende del material y del servicio. Mándanos una foto de tus tenis por WhatsApp y te cotizamos al instante.</p>
            </Reveal>
            <div className="pk-services">
              {SERVICES.map((s) => (
                <Reveal key={s.name} className={`pk-service${s.featured ? ' is-featured' : ''}`}>
                  {s.featured && <span className="pk-service-flag">El más pedido</span>}
                  <span className="pk-service-icon"><Icon name={s.icon} width="24" height="24" /></span>
                  <h3>{s.name}</h3>
                  <p className="pk-service-time"><Icon name="calendar" width="16" height="16" /> {s.time}</p>
                  <p>{s.text}</p>
                  <ul>
                    {s.items.map((it) => <li key={it}>{it}</li>)}
                  </ul>
                  <a href={wa(`Hola Pulkro Express, quiero cotizar el ${s.name}.`)} target="_blank" rel="noopener noreferrer"
                    className={`demo-btn ${s.featured ? 'demo-btn-primary' : 'demo-btn-outline'}`}>
                    Cotizar {s.name}
                  </a>
                </Reveal>
              ))}
            </div>
            <Reveal className="pk-extras">
              {EXTRAS.map((x) => <span key={x} className="pk-extra"><Icon name="shieldCheck" width="16" height="16" />{x}</span>)}
            </Reveal>
          </div>
        </section>

        {/* ------------------------------------------------ cómo funciona */}
        <section id="como-funciona" className="demo-section">
          <div className="demo-container">
            <Reveal className="demo-section-head">
              <span className="demo-eyebrow">Cómo funciona</span>
              <h2>De sucios a impecables en 4 pasos</h2>
            </Reveal>
            <ol className="pk-steps">
              {STEPS.map((s) => (
                <Reveal as="li" key={s.n} className="pk-step">
                  <span className="pk-step-n">{s.n}</span>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </Reveal>
              ))}
            </ol>
            <div className="pk-process">
              {PROCESS_PHOTOS.map((p) => (
                <Reveal as="figure" key={p.src} className="pk-process-item">
                  <img src={p.src} width={p.w} height={p.h} alt={p.alt} loading="lazy" decoding="async" />
                  <figcaption>{p.label}</figcaption>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* ------------------------------------------------------ galería */}
        <section className="demo-section demo-section--alt">
          <div className="demo-container">
            <Reveal className="demo-section-head">
              <span className="demo-eyebrow">Galería</span>
              <h2>Así salen de Pulkro</h2>
              <p>Más trabajos en nuestro <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer">Instagram</a>.</p>
            </Reveal>
            <div className="pk-gallery">
              {GALLERY.map((g) => (
                <Reveal as="figure" key={g.src} className="pk-gallery-item">
                  <img src={g.src} width={g.w} height={g.h} alt={g.alt} loading="lazy" decoding="async" />
                  <figcaption>{g.label}</figcaption>
                </Reveal>
              ))}
            </div>
          </div>
        </section>

        {/* --------------------------------------------------- membresía */}
        <section className="demo-section demo-section--tight">
          <div className="demo-container">
            <Reveal className="pk-banner">
              <div>
                <h2>¿Lavas tus tenis seguido?</h2>
                <p>Pregunta por nuestra membresía para clientes frecuentes.</p>
              </div>
              <a href={wa('Hola Pulkro Express, quiero información de la membresía.')} target="_blank" rel="noopener noreferrer" className="demo-btn demo-btn-light">
                <WaIcon /> Preguntar por la membresía
              </a>
            </Reveal>
          </div>
        </section>

        {/* ---------------------------------------------------- preguntas */}
        <section className="demo-section">
          <div className="demo-container pk-faq-wrap">
            <Reveal className="demo-section-head">
              <span className="demo-eyebrow">Preguntas frecuentes</span>
              <h2>Lo que más nos preguntan</h2>
            </Reveal>
            <div className="pk-faq">
              {FAQS.map((f) => (
                <details key={f.q}>
                  <summary>{f.q}</summary>
                  <p>{f.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* ----------------------------------------------------- contacto */}
        <section id="contacto" className="demo-section demo-section--alt">
          <div className="demo-container">
            <Reveal className="demo-section-head">
              <span className="demo-eyebrow">Contacto</span>
              <h2>Visítanos en Belén o pide domicilio</h2>
            </Reveal>
            <div className="pk-contact">
              <div className="pk-contact-cards">
                <a className="pk-contact-card is-wa" href={wa(AGENDA_MSG)} target="_blank" rel="noopener noreferrer">
                  <WaIcon size={24} />
                  <span><small>WhatsApp · agenda y cotiza</small>{CONTACT.whatsappLabel}</span>
                </a>
                <div className="pk-contact-card">
                  <Icon name="mapPin" width="24" height="24" />
                  <span><small>Local</small>{CONTACT.address}</span>
                </div>
                <div className="pk-contact-card">
                  <Icon name="clock" width="24" height="24" />
                  <span><small>Horario</small>Consúltalo por WhatsApp</span>
                </div>
                <div className="pk-contact-social">
                  <a href={CONTACT.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram de Pulkro Express"><Icon name="instagram" width="22" height="22" /></a>
                  <a href={CONTACT.tiktok} target="_blank" rel="noopener noreferrer" aria-label="TikTok de Pulkro Express">
                    <svg viewBox="0 0 24 24" width="22" height="22" fill="currentColor" aria-hidden="true"><path d="M16.6 2h-3.3v13.2a2.9 2.9 0 1 1-2.1-2.8V9a6.2 6.2 0 1 0 5.4 6.2V8.6a7.4 7.4 0 0 0 4.3 1.4V6.7a4.3 4.3 0 0 1-4.3-4.3z" /></svg>
                  </a>
                  <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook de Pulkro Express"><Icon name="facebook" width="22" height="22" /></a>
                </div>
              </div>
              <div className="pk-map">
                <iframe title="Mapa de Pulkro Express en Belén, Medellín" src={mapSrc} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
              </div>
            </div>
          </div>
        </section>

        {/* -------------------------------------------------------- aviso */}
        <section id="want-this" className="demo-section demo-section--tight">
          <div className="demo-container">
            <Reveal as="div" className="demo-disclosure">
              <h3>{DISCLOSURE.heading}</h3>
              <p>{DISCLOSURE.text}</p>
              <div className="demo-cta-actions">
                <a href={`${EPD_WHATSAPP}?text=${encodeURIComponent(DISCLOSURE.whatsappMessage)}`} className="demo-btn demo-btn-primary" target="_blank" rel="noopener noreferrer">Quiero una web así</a>
                <a href="https://easyprodigital.com/es/" className="demo-btn demo-btn-outline">Ver más trabajos</a>
              </div>
            </Reveal>
          </div>
        </section>
      </main>

      <footer className="demo-footer">
        <p>© {new Date().getFullYear()} Pulkro Express — Maqueta hecha por{' '}
          <a href="https://easyprodigital.com" target="_blank" rel="noopener noreferrer">Easy Pro Digital</a>.</p>
      </footer>

      <a href={wa(AGENDA_MSG)} target="_blank" rel="noopener noreferrer" className="pk-wa-float" aria-label="Escribir a Pulkro Express por WhatsApp">
        <WaIcon size={28} />
      </a>
      <a href="#want-this" className="demo-badge"><span className="dot" /> <span className="demo-badge-label">Web demo</span></a>
    </div>
  )
}
