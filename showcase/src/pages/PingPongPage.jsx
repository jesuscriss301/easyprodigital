import { useEffect, useState } from 'react'
import Seo from '../components/Seo.jsx'
import Reveal from '../components/Reveal.jsx'
import { Icon } from '../components/icons.jsx'
import { prefersReducedMotion } from '../components/motionUtils.js'

import BouncingBalls from '../pingpong/BouncingBalls.jsx'
import PaddleCursor from '../pingpong/PaddleCursor.jsx'
import { COPY, CONTACT } from '../pingpong/copy.js'
import { THEME, BALL_COLORS, themeVars } from '../pingpong/theme.js'
import { LOGO, MENU_PDF_URL } from '../pingpong/assets.js'
import '../pingpong/pingpong.css'

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

const usesFinePointer = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(hover: hover) and (pointer: fine)').matches

export default function PingPongPage() {
  const [lang, setLang] = useState('fr')
  const [menu, setMenu] = useState(false)
  const t = COPY[lang]
  useGoogleFont(THEME.googleFontsHref)

  const [effects, setEffects] = useState(false)
  useEffect(() => { setEffects(!prefersReducedMotion() && usesFinePointer()) }, [])
  const [ballsOn, setBallsOn] = useState(false)
  useEffect(() => { setBallsOn(!prefersReducedMotion()) }, [])

  const mapSrc = `https://maps.google.com/maps?q=${encodeURIComponent(CONTACT.mapQuery)}&z=15&output=embed`
  const isOpenNow = useIsOpenNow()

  return (
    <div className="demo-root ppc-root" style={themeVars(THEME)}>
      <Seo
        title={lang === 'fr'
          ? 'Ping Pong Club — maquette de site pour bar | Easy Pro Digital'
          : 'Ping Pong Club — bar website mockup | Easy Pro Digital'}
        description={lang === 'fr'
          ? 'Proposition de refonte du site du Ping Pong Club, bar à Montréal : menu complet, réservations de groupe et corporatif, contact. Maquette Easy Pro Digital.'
          : 'A proposed redesign for Ping Pong Club, a bar in Montréal: full menu, group and corporate bookings, contact. Mockup by Easy Pro Digital.'}
        path="/ping-pong-club/"
        robots="noindex, nofollow"
      />

      {effects && <PaddleCursor color={THEME.primary} />}

      {/* ---------------------------------------------------------- nav */}
      <nav className="demo-nav ppc-nav">
        <div className="demo-nav-inner">
          <a href="#home" className="ppc-brand" onClick={() => setMenu(false)}>
            <img src={LOGO} alt="Ping Pong Club" width="80" height="80" />
          </a>
          <ul className={`demo-nav-links${menu ? ' is-open' : ''}`}>
            {t.nav.map((l) => <li key={l.href}><a href={l.href} onClick={() => setMenu(false)}>{l.label}</a></li>)}
            <li className="demo-nav-cta-mobile-item">
              <a href={tel(CONTACT.phoneGeneral)} className="demo-btn demo-btn-primary" onClick={() => setMenu(false)}>{lang === 'fr' ? 'Réserver' : 'Book'}</a>
            </li>
          </ul>
          <button type="button" className="demo-lang-toggle" onClick={() => setLang((v) => (v === 'fr' ? 'en' : 'fr'))}
            aria-label={lang === 'fr' ? 'View in English' : 'Voir en français'}>
            {lang === 'fr' ? 'EN' : 'FR'}
          </button>
          <a href={tel(CONTACT.phoneGeneral)} className="demo-btn demo-btn-primary demo-nav-cta">{lang === 'fr' ? 'Réserver' : 'Book'}</a>
          <button type="button" className={`demo-nav-toggle${menu ? ' is-open' : ''}`} aria-label="Menu"
            aria-expanded={menu} onClick={() => setMenu((v) => !v)}>
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* --------------------------------------------------------- hero */}
      <header id="home" className="demo-hero ppc-hero">
        <div className="ppc-hero-bg" aria-hidden="true">
          {ballsOn ? <BouncingBalls colors={BALL_COLORS} /> : <div className="ppc-hero-bg-static" />}
        </div>
        <div className="demo-container">
          <Reveal className="demo-hero-copy ppc-hero-copy">
            <span className="demo-eyebrow">{t.hero.eyebrow}</span>
            <h1>{t.hero.title}</h1>
            <p>{t.hero.text}</p>
            <div className="demo-hero-actions ppc-hero-actions">
              <a href={t.hero.primary.href} className="demo-btn demo-btn-primary">{t.hero.primary.label}</a>
              <a href={t.hero.secondary.href} className="demo-btn demo-btn-outline" style={{ borderColor: '#fff', color: '#fff' }}>{t.hero.secondary.label}</a>
            </div>
            <div className="demo-hero-trust ppc-hero-trust">
              {t.hero.trust.map((x) => (
                <div key={x.label}><strong>{x.value}</strong>{x.label}</div>
              ))}
            </div>
          </Reveal>
        </div>
      </header>

      {/* ---------------------------------------------------------- menu */}
      <section id="menu" className="demo-section ppc-table-texture">
        <div className="demo-container">
          <Reveal className="demo-section-head">
            <span className="demo-eyebrow">{t.menu.eyebrow}</span>
            <h2>{t.menu.title}</h2>
            <p>{t.menu.text}</p>
          </Reveal>
          <Reveal as="div" className="ppc-menu-grid">
            {t.menu.categories.map((cat) => (
              <div key={cat.title} className="ppc-menu-card">
                <h3>{cat.title}</h3>
                {cat.items.map((it) => (
                  <div key={it.name} className="ppc-menu-item">
                    <span className="ppc-menu-item-name">
                      {it.name}
                      {it.note && <span className="ppc-menu-item-note">{it.note}</span>}
                    </span>
                    {it.price && <span className="ppc-menu-item-price">{it.price}{/^\d/.test(it.price) ? ' $' : ''}</span>}
                  </div>
                ))}
              </div>
            ))}
          </Reveal>
          <div style={{ textAlign: 'center' }}>
            <a href={MENU_PDF_URL} target="_blank" rel="noopener noreferrer" className="ppc-menu-pdf">
              <Icon name="download" width="18" height="18" /> {t.menu.pdfLabel}
            </a>
          </div>
        </div>
      </section>

      {/* -------------------------------------------------------- groupe */}
      <section id="groupe" className="demo-section demo-section--alt">
        <div className="demo-container">
          <Reveal as="div" className="ppc-groupe-grid">
            <div>
              <span className="demo-eyebrow">{t.groupe.eyebrow}</span>
              <h2>{t.groupe.title}</h2>
              <p>{t.groupe.text}</p>
              <ul className="ppc-groupe-features">
                {t.groupe.features.map((f) => (
                  <li key={f}><Icon name="calendar" width="18" height="18" />{f}</li>
                ))}
              </ul>
              <a href={t.groupe.cta.href} className="demo-btn demo-btn-primary">{t.groupe.cta.label}</a>
            </div>
            <div className="ppc-groupe-card">
              <div className="ppc-capacity">140</div>
              <div className="ppc-capacity-label">{t.groupe.capacity}</div>
              <a href={t.groupe.cta.href} className="demo-btn demo-btn-outline">{CONTACT.phoneGroupe}</a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* -------------------------------------------------------- contact */}
      <section id="contact" className="demo-section ppc-table-texture">
        <div className="demo-container">
          <Reveal className="demo-section-head">
            <span className="demo-eyebrow">{t.contact.eyebrow}</span>
            <h2>{t.contact.title}</h2>
          </Reveal>
          <Reveal as="div" className="ppc-contact-grid">
            {t.contact.ways.map((w) => (
              <div key={w.label} className="ppc-contact-card">
                <Icon name={w.icon} width="22" height="22" />
                <div>
                  <div className="ppc-contact-label">{w.label}</div>
                  {w.href ? (
                    <a className="ppc-contact-value" href={w.href} target={w.href.startsWith('http') ? '_blank' : undefined} rel="noopener noreferrer">{w.value}</a>
                  ) : w.icon === 'phone' ? (
                    <a className="ppc-contact-value" href={tel(w.value)}>{w.value}</a>
                  ) : (
                    <span className="ppc-contact-value">{w.value}</span>
                  )}
                  {w.icon === 'clock' && (
                    <div>
                      <span className="ppc-open-badge">
                        <span className="dot" style={{ background: isOpenNow ? THEME.accent : THEME.muted }} />
                        {isOpenNow ? (lang === 'fr' ? 'Ouvert maintenant' : 'Open now') : (lang === 'fr' ? 'Fermé maintenant' : 'Closed now')}
                      </span>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </Reveal>
          <div className="ppc-map">
            <iframe title={t.contact.title} src={mapSrc} loading="lazy" referrerPolicy="no-referrer-when-downgrade" allowFullScreen />
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------- CTA final */}
      <section className="demo-section">
        <div className="demo-container">
          <Reveal as="div" className="ppc-final-cta">
            <h2>{t.finalCta.heading}</h2>
            <p>{t.finalCta.text}</p>
            <a href={t.finalCta.primary.href} className="demo-btn demo-btn-light">{t.finalCta.primary.label}</a>
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
        <p>© {new Date().getFullYear()} Ping Pong Club — {t.footer.by}{' '}
          <a href="https://easyprodigital.com" target="_blank" rel="noopener noreferrer">Easy Pro Digital</a>.</p>
      </footer>

      <a href="#want-this" className="demo-badge"><span className="dot" /> <span className="demo-badge-label">{t.badge}</span></a>
    </div>
  )
}

// Horario real: jeudi à samedi, 20h à 3h (heure de Montréal, EST/EDT).
// El "abierto ahora" es un cálculo honesto sobre el horario publicado, no un
// dato inventado — se recalcula en cada carga de página.
function useIsOpenNow() {
  const [open, setOpen] = useState(false)
  useEffect(() => {
    const check = () => {
      const now = new Date(new Date().toLocaleString('en-US', { timeZone: 'America/Toronto' }))
      const day = now.getDay() // 0=dim ... 4=jeu, 5=ven, 6=sam
      const hour = now.getHours()
      const isThuToSat = day === 4 || day === 5 || day === 6
      const isSunEarly = day === 0 && hour < 3 // la noche del samedi cruza a domingo
      setOpen((isThuToSat && hour >= 20) || isSunEarly)
    }
    check()
    const id = setInterval(check, 60000)
    return () => clearInterval(id)
  }, [])
  return open
}
