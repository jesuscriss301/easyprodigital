import { useEffect, useRef, useState } from 'react'
import Reveal from './Reveal.jsx'
import { PRODUCT, WA_CONTENT, CONTACT, pageUrl } from './content.js'
import './product.css'

/* ------------------------------------------------------------
   Página de producto: Uchuva (asistente de WhatsApp).
   Contenido en src/data/whatsappAssistant.js. Sin librerías de
   animación nuevas: el protagonista visual es la conversación
   simulada (estado de React + CSS), que respeta reduced-motion.
   ------------------------------------------------------------ */

const ICONS = {
  clock: <><circle cx="12" cy="12" r="9" /><path d="M12 7v5l3 2" /></>,
  cart: <><path d="M5 7h14l-1.5 9h-11z" /><path d="M9 7a3 3 0 0 1 6 0" /></>,
  phone: <><rect x="7" y="3" width="10" height="18" rx="2.5" /><path d="M11 18h2" /></>,
  shield: <><path d="M12 3l7 3v6c0 4.5-3 7.5-7 9-4-1.5-7-4.5-7-9V6z" /><path d="M9 12l2 2 4-4" /></>,
  chat: <><path d="M4 5h16v11H9l-5 4z" /><path d="M8 9h8M8 12h5" /></>,
  check: <><circle cx="12" cy="12" r="9" /><path d="M8 12l3 3 5-6" /></>,
  mic: <><rect x="9" y="3" width="6" height="11" rx="3" /><path d="M5 11a7 7 0 0 0 14 0M12 18v3" /></>,
  user: <><circle cx="12" cy="8" r="4" /><path d="M4 21a8 8 0 0 1 16 0" /></>,
  stack: <><path d="M4 7h16M4 12h16M4 17h10" /></>,
  bell: <><path d="M6 16V11a6 6 0 0 1 12 0v5l2 2H4z" /><path d="M10 21h4" /></>,
  lock: <><rect x="5" y="10" width="14" height="11" rx="2" /><path d="M8 10V7a4 4 0 0 1 8 0v3" /></>,
  star: <><path d="M12 3l2.7 5.6 6.1.9-4.4 4.3 1 6.1L12 17l-5.4 2.9 1-6.1-4.4-4.3 6.1-.9z" /></>,
  arrow: <><path d="M5 12h14M13 6l6 6-6 6" /></>,
}

function Icon({ name, size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICONS[name]}
    </svg>
  )
}

function WaGlyph({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.5-.3z" />
    </svg>
  )
}

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

/* ---------- Conversación simulada del hero ---------- */
function ChatDemo({ script, c }) {
  const [shown, setShown] = useState(0)
  const [typing, setTyping] = useState(false)
  const [run, setRun] = useState(0)
  const [started, setStarted] = useState(false)
  const boxRef = useRef(null)
  const listRef = useRef(null)

  // Arranca cuando el teléfono entra al viewport (el prerender lo ve completo).
  useEffect(() => {
    if (prefersReducedMotion() || typeof IntersectionObserver === 'undefined') {
      setShown(script.length)
      return
    }
    const el = boxRef.current
    const io = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) { setStarted(true); io.disconnect() }
    }, { threshold: 0.3 })
    io.observe(el)
    return () => io.disconnect()
  }, [script.length])

  useEffect(() => {
    if (!started || shown >= script.length) return
    const next = script[shown]
    const isBot = next.from === 'bot'
    const wait = shown === 0 ? 500 : isBot ? 650 : 900
    let t2
    const t1 = setTimeout(() => {
      if (isBot) {
        setTyping(true)
        t2 = setTimeout(() => { setTyping(false); setShown((n) => n + 1) }, 1100)
      } else {
        setShown((n) => n + 1)
      }
    }, wait)
    return () => { clearTimeout(t1); clearTimeout(t2) }
  }, [started, shown, script, run])

  // Mantiene visible el último mensaje (scroll interno, no de la página).
  useEffect(() => {
    const el = listRef.current
    if (el) el.scrollTo({ top: el.scrollHeight, behavior: prefersReducedMotion() ? 'auto' : 'smooth' })
  }, [shown, typing])

  const done = shown >= script.length
  const replay = () => { setShown(0); setTyping(false); setStarted(true); setRun((r) => r + 1) }

  return (
    <div className="wa-phone" ref={boxRef}>
      <div className="wa-phone-top">
        <span className="wa-phone-avatar" aria-hidden="true">AM</span>
        <div>
          <strong>{c.chatName}</strong>
          <small>{typing ? '…' : c.chatStatus}</small>
        </div>
      </div>
      <ol className="wa-chat" ref={listRef} aria-live="polite">
        {script.slice(0, shown).map((m, i) => (
          <li key={`${run}-${i}`} className={`wa-msg wa-msg--${m.from}`}>
            {m.from === 'system' && <Icon name="cart" size={16} />}
            <span>{m.text}</span>
          </li>
        ))}
        {typing && (
          <li className="wa-msg wa-msg--bot wa-typing" aria-label="escribiendo">
            <i /><i /><i />
          </li>
        )}
      </ol>
      <div className="wa-phone-bottom">
        {done && !prefersReducedMotion() ? (
          <button type="button" className="wa-replay" onClick={replay}>{c.replay}</button>
        ) : (
          <span className="wa-phone-input" aria-hidden="true" />
        )}
      </div>
    </div>
  )
}

/* ---------- Galería del panel con pestañas ---------- */
function PanelTabs({ tabs }) {
  const [active, setActive] = useState(0)
  const refs = useRef([])
  const onKey = (e) => {
    const dir = e.key === 'ArrowRight' ? 1 : e.key === 'ArrowLeft' ? -1 : 0
    if (!dir) return
    e.preventDefault()
    const n = (active + dir + tabs.length) % tabs.length
    setActive(n)
    refs.current[n]?.focus()
  }
  const tab = tabs[active]
  return (
    <div className="wa-tabs">
      <div className="wa-tablist" role="tablist" aria-label="Pantallas del panel" onKeyDown={onKey}>
        {tabs.map((t, i) => (
          <button key={t.label} ref={(el) => (refs.current[i] = el)} type="button" role="tab"
            id={`wa-tab-${i}`} aria-selected={i === active} aria-controls="wa-tabpanel"
            tabIndex={i === active ? 0 : -1} className="wa-tab" onClick={() => setActive(i)}>
            {t.label}
          </button>
        ))}
      </div>
      <div className="wa-tabpanel" id="wa-tabpanel" role="tabpanel" aria-labelledby={`wa-tab-${active}`}>
        <figure className="wa-device" key={tab.img}>
          <img src={PRODUCT.img(tab.img)} alt={tab.alt} width="720" height="1226" loading="lazy" decoding="async" />
        </figure>
        <div className="wa-tabcopy" key={`${tab.img}-copy`}>
          <span className="wa-tabcount">{String(active + 1).padStart(2, '0')} / {String(tabs.length).padStart(2, '0')}</span>
          <h3>{tab.t}</h3>
          <p>{tab.d}</p>
        </div>
      </div>
      {/* Precarga silenciosa para que cambiar de pestaña sea instantáneo */}
      <div hidden>
        {tabs.map((t) => <link key={t.img} rel="prefetch" as="image" href={PRODUCT.img(t.img)} />)}
      </div>
    </div>
  )
}

function formatCOP(n, lang) {
  return new Intl.NumberFormat(lang === 'es' ? 'es-CO' : 'en-US', {
    style: 'currency', currency: 'COP', maximumFractionDigits: 0,
  }).format(n)
}

/* Datos estructurados (se inyectan en el <head> al prerenderizar) */
export function buildJsonLd(lang) {
  const c = WA_CONTENT[lang] || WA_CONTENT.es
  const { total, taken } = PRODUCT.founders
  const url = pageUrl(lang)
  return {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': 'SoftwareApplication',
        name: PRODUCT.name,
        applicationCategory: 'BusinessApplication',
        operatingSystem: 'Web',
        inLanguage: lang,
        description: c.seo.description,
        url,
        image: PRODUCT.site + PRODUCT.logo,
        screenshot: c.panel.tabs.slice(0, 4).map((t) => PRODUCT.site + PRODUCT.img(t.img)),
        featureList: c.features.groups.map((g) => g.t),
        provider: { '@type': 'Organization', name: CONTACT.company, url: CONTACT.companyUrl, email: CONTACT.email },
        areaServed: ['CO', 'US'],
        offers: {
          '@type': 'Offer',
          price: PRODUCT.price.setup,
          priceCurrency: PRODUCT.price.currency,
          description: `${c.founders.setupLabel} + ${formatCOP(PRODUCT.price.monthly, lang)} ${c.founders.monthlyLabel}`,
          availability: total - taken > 0 ? 'https://schema.org/LimitedAvailability' : 'https://schema.org/SoldOut',
          url,
        },
      },
      {
        '@type': 'FAQPage',
        mainEntity: c.faq.items.map((f) => ({
          '@type': 'Question',
          name: f.q,
          acceptedAnswer: { '@type': 'Answer', text: f.a },
        })),
      },
    ],
  }
}

export default function ProductPage({ lang }) {
  const c = WA_CONTENT[lang] || WA_CONTENT.es
  const wa = `${CONTACT.whatsapp}?text=${encodeURIComponent(c.waText)}`
  const { total, taken } = PRODUCT.founders
  const left = Math.max(total - taken, 0)

  const track = (label) => () => {
    if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
      window.gtag('event', 'generate_lead', { method: 'whatsapp', item: 'uchuva', label })
    }
  }

  return (
    <div className="wa-page">
      {/* ---------- HERO ---------- */}
      <section className="wa-hero">
        <div className="container wa-hero-grid">
          <Reveal immediate className="wa-hero-copy">
            <p className="wa-badge"><span className="wa-dot" aria-hidden="true" />{c.hero.badge}</p>
            <h1 className="wa-h1">
              <span className="wa-brand">
                <img src={PRODUCT.logo} alt="" width="56" height="56" className="wa-logo" />
                {PRODUCT.name}
                <small>by EasyPro Digital</small>
              </span>
              {c.hero.title} <em>{c.hero.highlight}</em>
            </h1>
            <p className="wa-lead">{c.hero.lead}</p>
            <div className="wa-ctas">
              <a className="wa-btn wa-btn--primary" href={wa} target="_blank" rel="noopener noreferrer" onClick={track('hero')}>
                <WaGlyph /> {c.hero.ctaPrimary}
              </a>
              <a className="wa-btn wa-btn--ghost" href="#como-funciona">{c.hero.ctaSecondary}</a>
            </div>
            <p className="wa-spots-inline">{c.founders.spots(left, total)}</p>
            <ul className="wa-trust">
              {c.hero.trust.map((t) => <li key={t}><Icon name="check" size={18} />{t}</li>)}
            </ul>
          </Reveal>

          <div className="wa-hero-visual">
            <ChatDemo script={c.chat} c={c.hero} />
            <div className="wa-float wa-float--order" aria-hidden="true">
              <span className="wa-float-icon"><Icon name="cart" size={18} /></span>
              <span><strong>{c.hero.floatOrder}</strong><small>{c.hero.floatOrderSub}</small></span>
            </div>
            <div className="wa-float wa-float--alert" aria-hidden="true">
              <span className="wa-float-icon wa-float-icon--warn"><Icon name="bell" size={18} /></span>
              <strong>{c.hero.floatAlert}</strong>
            </div>
          </div>
        </div>
      </section>

      {/* ---------- QUÉ GANAS ---------- */}
      <section className="wa-section">
        <div className="container">
          <Reveal className="wa-head">
            <p className="eyebrow">{c.outcomes.eyebrow}</p>
            <h2 className="section-title">{c.outcomes.title}</h2>
          </Reveal>
          <Reveal className="wa-outcomes">
            {c.outcomes.items.map((o) => (
              <article key={o.t} className="wa-card">
                <span className="wa-icon"><Icon name={o.icon} /></span>
                <h3>{o.t}</h3>
                <p>{o.d}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ---------- FUNCIONES ---------- */}
      <section className="wa-section wa-band" id="como-funciona">
        <div className="container">
          <Reveal className="wa-head">
            <p className="eyebrow">{c.features.eyebrow}</p>
            <h2 className="section-title">{c.features.title}</h2>
            <p className="wa-sub">{c.features.lead}</p>
          </Reveal>
          <Reveal className="wa-features">
            {c.features.groups.map((g, i) => (
              <article key={g.t} className={`wa-card wa-feature${i < 3 ? ' wa-feature--wide' : ''}`}>
                <span className="wa-icon"><Icon name={g.icon} /></span>
                <h3>{g.t}</h3>
                <ul>{g.points.map((p) => <li key={p}>{p}</li>)}</ul>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ---------- PANEL ---------- */}
      <section className="wa-section" id="panel">
        <div className="container">
          <Reveal className="wa-head">
            <p className="eyebrow">{c.panel.eyebrow}</p>
            <h2 className="section-title">{c.panel.title}</h2>
            <p className="wa-sub">{c.panel.lead}</p>
          </Reveal>
          <PanelTabs tabs={c.panel.tabs} />
          <p className="wa-more">{c.panel.more}</p>
          <Reveal className="wa-desktop">
            <h3>{c.panel.desktopTitle}</h3>
            <figure className="wa-browser">
              <span className="wa-browser-bar" aria-hidden="true"><i /><i /><i /></span>
              <img src={PRODUCT.img('computador-03-pedidos')} alt={c.panel.desktopAlt}
                width="1440" height="900" loading="lazy" decoding="async" />
            </figure>
          </Reveal>
        </div>
      </section>

      {/* ---------- TIQUETES + AVISOS ---------- */}
      <section className="wa-section wa-band">
        <div className="container wa-split">
          <Reveal className="wa-split-copy">
            <p className="eyebrow">{c.tickets.eyebrow}</p>
            <h2 className="section-title">{c.tickets.title}</h2>
            <p className="wa-sub">{c.tickets.lead}</p>
            <ul className="wa-checks">
              {c.tickets.points.map((p) => <li key={p}><Icon name="check" size={18} />{p}</li>)}
            </ul>
          </Reveal>
          <Reveal className="wa-tickets">
            <img src={PRODUCT.img('tiquete-58mm')} alt={c.tickets.alt58} width="438" height="1384" loading="lazy" decoding="async" />
            <img src={PRODUCT.img('tiquete-80mm')} alt={c.tickets.alt80} width="604" height="1200" loading="lazy" decoding="async" />
          </Reveal>
        </div>
      </section>

      <section className="wa-section">
        <div className="container wa-split wa-split--rev">
          <Reveal className="wa-split-media">
            <figure className="wa-device wa-device--sm">
              <img src={PRODUCT.img(c.alerts.img)} alt={c.alerts.alt} width="720" height="1226" loading="lazy" decoding="async" />
            </figure>
          </Reveal>
          <Reveal className="wa-split-copy">
            <p className="eyebrow">{c.alerts.eyebrow}</p>
            <h2 className="section-title">{c.alerts.title}</h2>
            <dl className="wa-list">
              {c.alerts.items.map((a) => (
                <div key={a.t}><dt><Icon name="bell" size={18} />{a.t}</dt><dd>{a.d}</dd></div>
              ))}
            </dl>
          </Reveal>
        </div>
      </section>

      {/* ---------- SEGURIDAD ---------- */}
      <section className="wa-section wa-dark">
        <div className="container">
          <Reveal className="wa-head">
            <p className="eyebrow">{c.security.eyebrow}</p>
            <h2 className="section-title">{c.security.title}</h2>
          </Reveal>
          <Reveal className="wa-security">
            {c.security.items.map((s) => (
              <article key={s.t}>
                <Icon name="lock" size={20} />
                <h3>{s.t}</h3>
                <p>{s.d}</p>
              </article>
            ))}
          </Reveal>
        </div>
      </section>

      {/* ---------- PARA QUIÉN ---------- */}
      <section className="wa-section">
        <div className="container">
          <Reveal className="wa-fit">
            <p className="eyebrow">{c.fit.eyebrow}</p>
            <h2 className="section-title">{c.fit.title}</h2>
            <p className="wa-sub">{c.fit.lead}</p>
            <ul className="wa-chips">{c.fit.items.map((i) => <li key={i}>{i}</li>)}</ul>
            <p className="wa-soon"><a href="#lo-que-viene">{c.fit.soon}</a></p>
          </Reveal>
        </div>
      </section>

      {/* ---------- CÓMO EMPEZAMOS ---------- */}
      <section className="wa-section wa-band">
        <div className="container">
          <Reveal className="wa-head">
            <p className="eyebrow">{c.steps.eyebrow}</p>
            <h2 className="section-title">{c.steps.title}</h2>
            <p className="wa-sub">{c.steps.lead}</p>
          </Reveal>
          <div className="wa-steps-grid">
            <Reveal as="ol" className="wa-steps">
              {c.steps.items.map((s, i) => (
                <li key={s.t}>
                  <span className="wa-step-n">{i + 1}</span>
                  <div><h3>{s.t}</h3><p>{s.d}</p></div>
                </li>
              ))}
            </Reveal>
            <Reveal as="aside" className="wa-card wa-needs">
              <h3>{c.steps.needsTitle}</h3>
              <ul className="wa-checks">
                {c.steps.needs.map((n) => <li key={n}><Icon name="check" size={18} />{n}</li>)}
              </ul>
            </Reveal>
          </div>
        </div>
      </section>

      {/* ---------- FUNDADORES / PRECIO ---------- */}
      <section className="wa-section" id="fundadores">
        <div className="container">
          <Reveal className="wa-founders">
            <div className="wa-founders-copy">
              <p className="eyebrow">{c.founders.eyebrow}</p>
              <h2 className="section-title">{c.founders.title}</h2>
              <p className="wa-sub">{c.founders.lead}</p>
              <ul className="wa-perks">
                {c.founders.perks.map((p) => (
                  <li key={p.t}><Icon name="star" size={20} /><div><strong>{p.t}</strong><span>{p.d}</span></div></li>
                ))}
              </ul>
            </div>
            <div className="wa-price">
              <div className="wa-meter" role="img" aria-label={c.founders.spots(left, total)}>
                {Array.from({ length: total }, (_, i) => (
                  <i key={i} className={i < taken ? 'is-taken' : ''} />
                ))}
              </div>
              <p className="wa-spots">{c.founders.spots(left, total)}</p>
              <p className="wa-price-label">{c.founders.setupLabel}</p>
              <p className="wa-price-amount">{formatCOP(PRODUCT.price.setup, lang)}</p>
              <p className="wa-price-monthly">
                {c.founders.monthlyPrefix} <strong>{formatCOP(PRODUCT.price.monthly, lang)}</strong> {c.founders.monthlyLabel}
              </p>
              <a className="wa-btn wa-btn--primary wa-btn--block" href={wa} target="_blank" rel="noopener noreferrer" onClick={track('pricing')}>
                <WaGlyph /> {c.founders.cta}
              </a>
              <p className="wa-fine">{c.founders.priceNote}</p>
              <p className="wa-fine">{c.founders.fine}</p>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ---------- LO QUE VIENE ---------- */}
      <section className="wa-section wa-band" id="lo-que-viene">
        <div className="container">
          <Reveal className="wa-head">
            <p className="eyebrow">{c.roadmap.eyebrow}</p>
            <h2 className="section-title">{c.roadmap.title}</h2>
            <p className="wa-sub">{c.roadmap.lead}</p>
          </Reveal>
          <Reveal as="ol" className="wa-roadmap">
            {c.roadmap.items.map((r, i) => (
              <li key={r.t}>
                <span className="wa-road-n">{String(i + 1).padStart(2, '0')}</span>
                <h3>{r.t}</h3>
                <p>{r.d}</p>
              </li>
            ))}
          </Reveal>
          <p className="wa-more">{c.roadmap.note}</p>
        </div>
      </section>

      {/* ---------- FAQ ---------- */}
      <section className="wa-section">
        <div className="container wa-faq-wrap" id="preguntas">
          <Reveal className="wa-head">
            <p className="eyebrow">{c.faq.eyebrow}</p>
            <h2 className="section-title">{c.faq.title}</h2>
          </Reveal>
          <div className="wa-faq">
            {c.faq.items.map((f) => (
              <details key={f.q}>
                <summary>{f.q}</summary>
                <p>{f.a}</p>
              </details>
            ))}
          </div>
        </div>
      </section>

      {/* ---------- CTA FINAL ---------- */}
      <section className="wa-section">
        <div className="container">
          <Reveal className="wa-final">
            <img src={PRODUCT.logo} alt={PRODUCT.name} width="72" height="72" className="wa-logo wa-logo--final" loading="lazy" />
            <h2>{c.final.title}</h2>
            <p>{c.final.lead}</p>
            <a className="wa-btn wa-btn--light" href={wa} target="_blank" rel="noopener noreferrer" onClick={track('final')}>
              <WaGlyph /> {c.final.cta}
            </a>
            <p className="wa-final-mail">
              <a href={`mailto:${CONTACT.email}`}>{c.final.email}</a>
            </p>
          </Reveal>
        </div>
      </section>
    </div>
  )
}
