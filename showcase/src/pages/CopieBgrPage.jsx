import { Suspense, useEffect, useState } from 'react'
import Seo from '../components/Seo.jsx'
import Reveal from '../components/Reveal.jsx'
import CountUp from '../components/CountUp.jsx'
import { Icon } from '../components/icons.jsx'
import { prefersReducedMotion } from '../components/motionUtils.js'
import { LazyLiquidChrome } from '../components/reactbits/registry.js'

import InkCursor from '../copiebgr/InkCursor.jsx'
import { COPY, CONTACT } from '../copiebgr/copy.js'
import { THEME, HERO_INK, themeVars } from '../copiebgr/theme.js'
import { LOGO, STORE, SLIDES } from '../copiebgr/assets.js'
import '../copiebgr/copiebgr.css'

const WHATSAPP = 'https://wa.me/573238816434'
const tel = (n) => `tel:${n.replace(/[^\d]/g, '')}`

function useGoogleFont(href) {
  useEffect(() => {
    if (!href || document.querySelector(`link[href="${href}"]`)) return
    const link = document.createElement('link')
    link.rel = 'stylesheet'; link.href = href
    document.head.appendChild(link)
  }, [href])
}

/** Marcas de registro CMYK: decoración temática dibujada en SVG, en los bordes. */
function RegistryMark({ className }) {
  return (
    <svg className={className} width="46" height="46" viewBox="0 0 46 46" aria-hidden="true">
      <circle cx="23" cy="23" r="10" fill="none" stroke="currentColor" strokeWidth="1.2" />
      <path d="M23 2v16M23 28v16M2 23h16M28 23h16" stroke="currentColor" strokeWidth="1.2" />
    </svg>
  )
}

export default function CopieBgrPage() {
  const [lang, setLang] = useState('fr')
  const [menu, setMenu] = useState(false)
  const t = COPY[lang]
  useGoogleFont(THEME.googleFontsHref)

  const [webgl, setWebgl] = useState(false)
  useEffect(() => { setWebgl(!prefersReducedMotion()) }, [])

  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(CONTACT.mapQuery)}&z=16&output=embed`

  return (
    <div className="demo-root bgr-root" style={themeVars(THEME)}>
      <Seo
        title={lang === 'fr'
          ? 'Copie BGR — maquette de site pour imprimerie | Easy Pro Digital'
          : 'Copie BGR — print shop website mockup | Easy Pro Digital'}
        description={lang === 'fr'
          ? 'Proposition de refonte du site de Copie BGR, imprimerie à Montréal depuis 1994 : impression numérique et grand format, finition, plans, et version anglaise incluse. Maquette Easy Pro Digital.'
          : 'A proposed redesign for Copie BGR, a Montréal print shop since 1994: digital and large-format printing, finishing, plans, and the English version included. Mockup by Easy Pro Digital.'}
        path="/copie-bgr/"
        robots="noindex, nofollow"
      />

      {webgl && <InkCursor colors={[THEME.cyan, THEME.magenta, THEME.yellow, THEME.primary]} />}

      {/* ---------------------------------------------------------- nav */}
      <nav className="demo-nav bgr-nav">
        <div className="demo-nav-inner">
          <a href="#home" className="bgr-brand" onClick={() => setMenu(false)}>
            <img src={LOGO} alt="Copie BGR" width="88" height="54" />
          </a>
          <ul className={`demo-nav-links${menu ? ' is-open' : ''}`}>
            {t.nav.map((l) => <li key={l.href}><a href={l.href} onClick={() => setMenu(false)}>{l.label}</a></li>)}
            <li className="demo-nav-cta-mobile-item">
              <a href={t.cta.href} className="demo-btn demo-btn-primary" onClick={() => setMenu(false)}>{t.cta.label}</a>
            </li>
          </ul>
          <button className="demo-lang-toggle bgr-lang" onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
            aria-label={lang === 'fr' ? 'View in English' : 'Voir en français'}>
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>
          <a href={t.cta.href} className="demo-btn demo-btn-primary demo-nav-cta">{t.cta.label}</a>
          <button className={`demo-nav-toggle${menu ? ' is-open' : ''}`} aria-label="Menu"
            aria-expanded={menu} onClick={() => setMenu((v) => !v)}>
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* --------------------------------------------------------- hero */}
      <header id="home" className="demo-hero bgr-hero">
        <div className="bgr-hero-bg" aria-hidden="true">
          {webgl ? (
            <Suspense fallback={null}>
              <LazyLiquidChrome baseColor={HERO_INK} speed={0.14} amplitude={0.4} frequencyX={2.5} frequencyY={2.5} />
            </Suspense>
          ) : (
            <div className="bgr-hero-bg-static" />
          )}
        </div>
        <div className="demo-container">
          <Reveal className="demo-hero-copy bgr-hero-copy">
            <span className="demo-eyebrow">{t.hero.eyebrow}</span>
            <h1>{t.hero.title}</h1>
            <p>{t.hero.text}</p>
            <div className="demo-hero-actions">
              <a href={t.hero.primary.href} className="demo-btn demo-btn-primary">{t.hero.primary.label}</a>
              <a href={t.hero.secondary.href} className="demo-btn demo-btn-outline" style={{ borderColor: '#fff', color: '#fff' }}>{t.hero.secondary.label}</a>
            </div>
            <div className="demo-hero-trust bgr-trust">
              {t.hero.trust.map((x) => (
                <div key={x.label}>
                  <strong>
                    {typeof x.end === 'number'
                      ? (x.plain ? x.end : <CountUp end={x.end} suffix={x.suffix} />)
                      : x.value}
                  </strong>
                  {x.label}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </header>

      {/* ----------------------------------------------------- services */}
      <section id="services" className="demo-section bgr-services">
        <RegistryMark className="bgr-mark bgr-mark--tl" />
        <div className="demo-container">
          <Reveal className="demo-section-head">
            <span className="demo-eyebrow">{t.services.eyebrow}</span>
            <h2>{t.services.title}</h2>
            <p>{t.services.intro}</p>
          </Reveal>
          <Reveal as="div" className="bgr-service-grid">
            {t.services.items.map((s) => (
              <article className="bgr-service-card" key={s.title} onMouseMove={spotlight}>
                <div className="bgr-service-icon"><Icon name={s.icon} /></div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ----------------------------------------------------- produits */}
      <section id="produits" className="demo-section demo-section--alt bgr-produits">
        <div className="demo-container">
          <Reveal className="demo-section-head">
            <span className="demo-eyebrow">{t.produits.eyebrow}</span>
            <h2>{t.produits.title}</h2>
            <p>{t.produits.intro}</p>
          </Reveal>
          <Reveal as="div" className="bgr-showcase">
            <div className="bgr-showcase-media">
              <img src={SLIDES.cards} alt="" loading="lazy" />
              <img src={SLIDES.large} alt="" loading="lazy" />
              <img src={SLIDES.plans} alt="" loading="lazy" />
            </div>
            <ul className="bgr-produit-list">
              {t.produits.items.map((p) => (
                <li key={p}><Icon name="sparkle" /> {p}</li>
              ))}
            </ul>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------ apropos */}
      <section id="apropos" className="demo-section bgr-about">
        <div className="demo-container bgr-about-inner">
          <Reveal className="bgr-about-copy">
            <span className="demo-eyebrow">{t.apropos.eyebrow}</span>
            <h2>{t.apropos.title}</h2>
            <p>{t.apropos.body}</p>
            <ul className="bgr-about-points">
              {t.apropos.points.map((p) => <li key={p}><Icon name="shieldCheck" /> {p}</li>)}
            </ul>
          </Reveal>
          <Reveal className="bgr-about-photo">
            <img src={STORE} alt={lang === 'fr' ? 'La boutique Copie BGR sur le boulevard Saint-Laurent' : 'The Copie BGR shop on Saint-Laurent boulevard'} loading="lazy" />
          </Reveal>
        </div>
      </section>

      {/* --------------------------------------------------- ressources */}
      <section id="ressources" className="demo-section demo-section--alt bgr-faq">
        <div className="demo-container">
          <Reveal className="demo-section-head">
            <span className="demo-eyebrow">{t.ressources.eyebrow}</span>
            <h2>{t.ressources.title}</h2>
            <p>{t.ressources.intro}</p>
          </Reveal>
          <Reveal as="div" className="bgr-faq-list">
            {t.ressources.faqs.map((f, i) => <FaqItem key={f.q} q={f.q} a={f.a} defaultOpen={i === 0} />)}
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------ contact */}
      <section id="contact" className="demo-section bgr-contact">
        <RegistryMark className="bgr-mark bgr-mark--br" />
        <div className="demo-container">
          <Reveal className="demo-section-head">
            <span className="demo-eyebrow">{t.contact.eyebrow}</span>
            <h2>{t.contact.title}</h2>
            <p>{t.contact.intro}</p>
          </Reveal>
          <Reveal as="div" className="bgr-contact-grid">
            <div className="bgr-ways">
              <a className="bgr-way is-strong" href={tel(CONTACT.phone)}>
                <span className="bgr-way-icon"><Icon name="phone" /></span>
                <span><em>{t.contact.ways.phone}</em><strong>{CONTACT.phone}</strong><small>{t.contact.ways.phoneNote}</small></span>
              </a>
              <a className="bgr-way" href={`mailto:${CONTACT.email}`}>
                <span className="bgr-way-icon"><Icon name="mail" /></span>
                <span><em>{t.contact.ways.email}</em><strong>{CONTACT.email}</strong><small>{t.contact.ways.emailNote}</small></span>
              </a>
              <div className="bgr-way">
                <span className="bgr-way-icon"><Icon name="mapPin" /></span>
                <span><em>{t.contact.ways.visit}</em><strong>{CONTACT.address}</strong><small>{t.contact.ways.visitNote}</small></span>
              </div>
              <div className="bgr-hours">
                <h3><Icon name="clock" /> {t.contact.hoursTitle}</h3>
                <ul>
                  {t.contact.hours.map((h) => <li key={h.d}><span>{h.d}</span><span>{h.h}</span></li>)}
                </ul>
                <span className="bgr-hours-note">{t.contact.holidayNote}</span>
              </div>
            </div>
            <div className="bgr-map">
              <iframe title={t.contact.title} src={mapSrc} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
            </div>
          </Reveal>
        </div>
      </section>

      {/* ----------------------------------------------------- CTA final */}
      <section className="demo-section bgr-final">
        <div className="demo-container">
          <Reveal as="div" className="bgr-final-inner">
            <h2>{t.finalCta.heading}</h2>
            <p>{t.finalCta.text}</p>
            <div className="demo-cta-actions">
              <a href={`mailto:${CONTACT.email}`} className="demo-btn demo-btn-primary">{t.finalCta.primary}</a>
              <a href={tel(CONTACT.phone)} className="demo-btn demo-btn-outline">{t.finalCta.secondary}</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* -------------------------------------------------------- aviso */}
      <section id="want-this" className="demo-section demo-section--tight demo-section--alt">
        <div className="demo-container">
          <Reveal as="div" className="demo-disclosure">
            <h3>{t.disclosure.heading}</h3>
            <p>{t.disclosure.text}</p>
            <div className="demo-cta-actions">
              <a href={`${WHATSAPP}?text=${encodeURIComponent(t.disclosure.whatsappMessage)}`} className="demo-btn demo-btn-primary" target="_blank" rel="noopener noreferrer">{t.disclosure.whatsapp}</a>
              <a href="https://easyprodigital.com/portfolio/" className="demo-btn demo-btn-outline">{t.disclosure.more}</a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="demo-footer">
        <p>© {new Date().getFullYear()} Copie BGR — {t.footer.by}{' '}
          <a href="https://easyprodigital.com" target="_blank" rel="noopener noreferrer">Easy Pro Digital</a>.</p>
      </footer>

      <a href="#want-this" className="demo-badge"><span className="dot" /> <span className="demo-badge-label">{t.badge}</span></a>
    </div>
  )
}

function spotlight(e) {
  const r = e.currentTarget.getBoundingClientRect()
  e.currentTarget.style.setProperty('--spot-x', `${e.clientX - r.left}px`)
  e.currentTarget.style.setProperty('--spot-y', `${e.clientY - r.top}px`)
}

function FaqItem({ q, a, defaultOpen }) {
  const [open, setOpen] = useState(defaultOpen)
  return (
    <div className={`bgr-faq-item${open ? ' is-open' : ''}`}>
      <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open}>
        <span>{q}</span><i aria-hidden="true">{open ? '–' : '+'}</i>
      </button>
      <div className="bgr-faq-a"><p>{a}</p></div>
    </div>
  )
}
