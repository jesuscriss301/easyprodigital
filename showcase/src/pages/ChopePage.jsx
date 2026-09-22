import { Suspense, useEffect, useMemo, useState } from 'react'
import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import Reveal from '../components/Reveal.jsx'
import CountUp from '../components/CountUp.jsx'
import MapSection from '../components/MapSection.jsx'
import ScrollFeatureSection from '../components/ScrollFeatureSection.jsx'
import { Icon } from '../components/icons.jsx'
import { prefersReducedMotion } from '../components/motionUtils.js'
import { LazySwarmCursor } from '../components/reactbits/registry.js'

import ChopeNav from '../chope/ChopeNav.jsx'
import SignHeading from '../chope/SignHeading.jsx'
import MenuSection from '../chope/MenuSheet.jsx'
import AccordionGallery from '../chope/AccordionGallery.jsx'
import { TavernFrame, GoblinPeek, CoinRain } from '../chope/TavernDecor.jsx'
import { MENUS, PHOTOS, HOURS, CONTACT, HERO_IMAGE, SCROLL_IMAGE, ENGLISH_MENU_PDF } from '../chope/content.js'
import { COPY } from '../chope/copy.js'
import { STYLES, getStyle, themeVars } from '../chope/theme.js'
import '../chope/chope.css'

const WHATSAPP = 'https://wa.me/573238816434'

/** Carga la tipografía del tema igual que DemoPage con las demás demos. */
function useGoogleFont(href) {
  useEffect(() => {
    if (!href || document.querySelector(`link[href="${href}"]`)) return
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = href
    document.head.appendChild(link)
  }, [href])
}

/**
 * ¿Está abierta la taberna ahora mismo? Se calcula con los horarios reales,
 * en texto — a diferencia del sitio actual, donde los horarios son una imagen
 * que además sigue diciendo "SPÉCIAL COVID" años después.
 */
function useOpenNow(lang) {
  return useMemo(() => {
    const t = COPY[lang].openNow
    const now = new Date()
    const mins = now.getHours() * 60 + now.getMinutes()
    const toM = (s) => Number(s.slice(0, 2)) * 60 + Number(s.slice(3))

    for (const offset of [0, -1]) {
      const day = (now.getDay() + offset + 7) % 7
      const row = HOURS.find((h) => h.dow === day)
      if (!row) continue
      const open = toM(row.open)
      let close = toM(row.close)
      if (close <= open) close += 24 * 60 // cierra pasada la medianoche
      const m = offset === 0 ? mins : mins + 24 * 60
      if (m >= open && m < close) {
        return { open: true, label: `${t.open} · ${t.until} ${row.close.replace(':', 'h')}` }
      }
    }
    return { open: false, label: t.closed }
  }, [lang])
}

function Pillars({ id, copy, lang }) {
  return (
    <section id={id} className="demo-section chope-pillars">
      <CoinRain count={10} seed={id.length * 7} />
      <div className="demo-container">
        <SignHeading eyebrow={copy.eyebrow} title={copy.title} intro={copy.intro} />
        <Reveal as="div" className="chope-pillar-grid">
          {copy.items.map((it, i) => (
            <article className="chope-pillar" key={it.title}>
              <GoblinPeek index={i + 2} side={i % 2 ? 'left' : 'right'} />
              <div className="chope-pillar-icon"><Icon name={it.icon} /></div>
              <h3>{it.title}</h3>
              <p>{it.text}</p>
              {it.link === 'comic' && (
                <a className="chope-link" href={CONTACT.comic} target="_blank" rel="noopener noreferrer">
                  {it.linkLabel} →
                </a>
              )}
            </article>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

export default function ChopePage({ styleSlug = 'nuit' }) {
  const [lang, setLang] = useState('fr')
  const style = getStyle(styleSlug)
  const t = COPY[lang]
  const openNow = useOpenNow(lang)
  useGoogleFont(style.theme.googleFontsHref)

  // El enjambre es el único canvas WebGL de la página. Fuera en táctil (no
  // hay cursor que seguir) y fuera con movimiento reducido.
  const [swarm, setSwarm] = useState(false)
  useEffect(() => {
    const fine = window.matchMedia('(hover: hover) and (pointer: fine)').matches
    setSwarm(fine && !prefersReducedMotion())
  }, [])

  const hours = HOURS.map((h) => ({
    days: h[lang],
    time: `${h.open.replace(':', 'h')} – ${h.close.replace(':', 'h')}`,
  }))

  return (
    <div className="demo-root chope-root" style={themeVars(style.theme)}>
      <Seo
        title={
          lang === 'fr'
            ? 'La Chope Gobeline — maquette de site pour resto-bar médiéval | Easy Pro Digital'
            : 'La Chope Gobeline — website mockup for a medieval tavern | Easy Pro Digital'
        }
        description={
          lang === 'fr'
            ? 'Proposition de refonte du site de La Chope Gobeline, resto-bar médiéval de Québec : cartes, ambiance, grandes tablées et réservation. Maquette réalisée par Easy Pro Digital.'
            : 'A proposed redesign for La Chope Gobeline, a medieval tavern in Québec City: menus, atmosphere, group tables and booking. Mockup by Easy Pro Digital.'
        }
        path={`/${styleSlug === 'nuit' ? 'chope-gobeline' : `chope-gobeline-${styleSlug}`}/`}
        robots="noindex, nofollow"
      />

      <TavernFrame />

      <ChopeNav links={t.nav} lang={lang} setLang={setLang} cta={t.cta} openNow={openNow} />

      {/* selector de estilo, igual que en las demás demos */}
      <div className="demo-style-switcher">
        <div className="demo-container demo-style-switcher-inner">
          <span className="demo-style-switcher-label">{t.switcher}</span>
          <div className="demo-style-switcher-options">
            {STYLES.map((s) => {
              const active = s.slug === styleSlug
              return (
                <Link
                  key={s.slug}
                  to={s.slug === 'nuit' ? '/chope-gobeline' : `/chope-gobeline-${s.slug}`}
                  className={`demo-style-pill${active ? ' is-active' : ''}`}
                  style={
                    active
                      ? { background: s.theme.primary, borderColor: s.theme.primary, color: '#1a1408' }
                      : { borderColor: s.theme.primary, color: 'var(--demo-ink)' }
                  }
                  aria-current={active ? 'page' : undefined}
                >
                  {s[lang]}
                </Link>
              )
            })}
          </div>
        </div>
      </div>

      {/* ---------------------------------------------------------- hero */}
      <header id="home" className="demo-hero chope-hero">
        <div className="chope-hero-bg">
          <img src={HERO_IMAGE} alt="" aria-hidden="true" />
        </div>
        <div className="demo-container">
          <Reveal className="demo-hero-copy chope-hero-copy">
            <span className="demo-eyebrow">{t.hero.eyebrow}</span>
            <h1>{t.hero.title}</h1>
            <p>{t.hero.text}</p>
            <div className="demo-hero-actions">
              <a href={t.hero.primary.href} className="demo-btn demo-btn-primary">{t.hero.primary.label}</a>
              <a href={CONTACT.order} className="demo-btn demo-btn-outline" target="_blank" rel="noopener noreferrer">
                {t.order}
              </a>
            </div>
            <div className="demo-hero-trust chope-trust">
              {t.hero.trust.map((x) => (
                <div key={x.label}>
                  <strong>
                    {typeof x.end === 'number' ? <CountUp end={x.end} suffix={x.suffix} /> : x.value}
                  </strong>
                  {x.label}
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </header>

      {/* la foto de la salle se abre a pantalla completa al bajar */}
      <ScrollFeatureSection
        src={SCROLL_IMAGE}
        alt={lang === 'fr' ? 'La grande salle de La Chope Gobeline un soir de tablée' : 'The great hall of La Chope Gobeline on a busy evening'}
        title={t.scroll.title}
        scrollHint={t.scroll.hint}
      />

      {/* -------------------------------------------------------- cartas */}
      <MenuSection
        lang={lang}
        menus={MENUS}
        heading={<SignHeading eyebrow={t.menus.eyebrow} title={t.menus.title} intro={t.menus.intro} />}
      />
      <div className="demo-container chope-menu-note">
        <a className="chope-link" href={ENGLISH_MENU_PDF} target="_blank" rel="noopener noreferrer">
          <Icon name="globe" /> {t.englishMenu}
        </a>
      </div>

      {/* ------------------------------------------------------- galería */}
      <AccordionGallery
        items={PHOTOS}
        lang={lang}
        heading={<SignHeading eyebrow={t.gallery.eyebrow} title={t.gallery.title} intro={t.gallery.intro} />}
      />

      {/* ------------------------------------------------ grandes tablées */}
      <Pillars id="tablees" copy={t.tablees} lang={lang} />

      {/* ----------------------------------------------------- confrérie */}
      <Pillars id="confrerie" copy={t.confrerie} lang={lang} />

      {/* ----------------------------------------------- mapa y horarios */}
      <MapSection
        id="location"
        eyebrow={t.location.eyebrow}
        title={t.location.title}
        intro={t.location.intro}
        query={CONTACT.mapQuery}
        address={CONTACT.address}
        phone={CONTACT.phone}
        hours={hours}
      />
      <div className="demo-container chope-catering">
        <span>{t.location.cateringLabel}</span>
        <a href={`tel:${CONTACT.cateringPhone.replace(/[^\d]/g, '')}`}>{CONTACT.cateringPhone}</a>
        <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a>
        <a href={CONTACT.facebook} target="_blank" rel="noopener noreferrer">Facebook</a>
      </div>

      {/* ------------------------------------------------------ CTA final */}
      <section className="demo-section chope-final">
        <CoinRain count={18} seed={11} />
        <div className="demo-container">
          <Reveal as="div" className="chope-final-inner">
            <h2>{t.finalCta.heading}</h2>
            <p>{t.finalCta.text}</p>
            <div className="demo-cta-actions">
              <a href={`tel:${CONTACT.phone.replace(/[^\d]/g, '')}`} className="demo-btn demo-btn-primary">
                {t.finalCta.primary}
              </a>
              <a href={CONTACT.order} className="demo-btn demo-btn-outline" target="_blank" rel="noopener noreferrer">
                {t.finalCta.secondary}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ------------------------------------------------------ aviso */}
      <section id="want-this" className="demo-section demo-section--tight demo-section--alt">
        <div className="demo-container">
          <Reveal as="div" className="demo-disclosure">
            <h3>{t.disclosure.heading}</h3>
            <p>{t.disclosure.text}</p>
            <div className="demo-cta-actions">
              <a
                href={`${WHATSAPP}?text=${encodeURIComponent(t.disclosure.whatsappMessage)}`}
                className="demo-btn demo-btn-primary"
                target="_blank"
                rel="noopener noreferrer"
              >
                {t.disclosure.whatsapp}
              </a>
              <a href="https://easyprodigital.com/portfolio/" className="demo-btn demo-btn-outline">
                {t.disclosure.more}
              </a>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="demo-footer">
        <p>
          © {new Date().getFullYear()} La Chope Gobeline — {t.footer.by}{' '}
          <a href="https://easyprodigital.com" target="_blank" rel="noopener noreferrer">Easy Pro Digital</a>.
        </p>
      </footer>

      <a href="#want-this" className="demo-badge">
        <span className="dot" /> <span className="demo-badge-label">{t.badge}</span>
      </a>

      {/* SwarmCursor (React Bits): las gotas se fusionan entre sí y con su
          propia estela, así que lo que sigue al cursor es una cinta viva de
          oro fundido, no una nube de puntos. Parámetros del demo oficial,
          con los colores de la paleta activa. */}
      {swarm && (
        <Suspense fallback={null}>
          <LazySwarmCursor
            className="chope-swarm"
            color={style.theme.swarm.color}
            accentColor={style.theme.swarm.accent}
            count={8}
            size={5}
            merge={0.77}
            glow={0.75}
            opacity={1}
            spread={100}
            separation={0.15}
            speed={2.5}
            wander={0.25}
            trail={0.75}
            scatterOnClick
          />
        </Suspense>
      )}
    </div>
  )
}
