import Reveal from './Reveal.jsx'
import { PRODUCT, CONTACT, pagePath } from './content.js'
import { Icon, WaGlyph, ChatDemo, FlowSteps, TicketPrinter, PanelTabs, formatCOP, track } from './parts.jsx'

/* Secciones reutilizables: cada página las compone en el orden que necesita.
   Props comunes: c (texto del idioma), lang, wa (enlace de WhatsApp). */

export function Hero({ c, lang, wa }) {
  const { total, taken } = PRODUCT.founders
  const left = Math.max(total - taken, 0)
  return (
    <>
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
              <a className="wa-btn wa-btn--ghost" href={pagePath('how', lang)}>{c.hero.ctaSecondary}</a>
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
    </>
  )
}

export function Outcomes({ c, lang, wa }) {
  return (
    <>
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
    </>
  )
}

export function Features({ c, lang, wa }) {
  return (
    <>
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
    </>
  )
}

export function PanelSection({ c, lang, wa }) {
  return (
    <>
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
    </>
  )
}

export function Tickets({ c, lang, wa }) {
  return (
    <>
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
            <TicketPrinter label={c.tickets.alt58}>
              <img src={PRODUCT.img('tiquete-58mm')} alt={c.tickets.alt58} width="438" height="1384" loading="lazy" decoding="async" />
            </TicketPrinter>
            <TicketPrinter label={c.tickets.alt80} delay={1.4}>
              <img src={PRODUCT.img('tiquete-80mm')} alt={c.tickets.alt80} width="604" height="1200" loading="lazy" decoding="async" />
            </TicketPrinter>
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
    </>
  )
}

export function Security({ c, lang, wa }) {
  return (
    <>
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
    </>
  )
}

export function Fit({ c, lang, wa }) {
  return (
    <>
      {/* ---------- PARA QUIÉN ---------- */}
      <section className="wa-section">
        <div className="container">
          <Reveal className="wa-fit">
            <p className="eyebrow">{c.fit.eyebrow}</p>
            <h2 className="section-title">{c.fit.title}</h2>
            <p className="wa-sub">{c.fit.lead}</p>
            <ul className="wa-chips">{c.fit.items.map((i) => <li key={i}>{i}</li>)}</ul>
            <p className="wa-soon"><a href={pagePath('pricing', lang) + '#lo-que-viene'}>{c.fit.soon}</a></p>
          </Reveal>
        </div>
      </section>
    </>
  )
}

export function Steps({ c, lang, wa }) {
  return (
    <>
      {/* ---------- CÓMO EMPEZAMOS ---------- */}
      <section className="wa-section wa-band">
        <div className="container">
          <Reveal className="wa-head">
            <p className="eyebrow">{c.steps.eyebrow}</p>
            <h2 className="section-title">{c.steps.title}</h2>
            <p className="wa-sub">{c.steps.lead}</p>
          </Reveal>
          <div className="wa-steps-grid">
            <Reveal className="wa-flow-wrap">
              <FlowSteps items={c.steps.items} label={c.steps.title} />
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
    </>
  )
}

export function Founders({ c, lang, wa }) {
  const { total, taken } = PRODUCT.founders
  const left = Math.max(total - taken, 0)
  return (
    <>
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
              <div className="wa-meter" style={{ gridTemplateColumns: `repeat(${Math.ceil(total / 2)}, 1fr)` }} role="img" aria-label={c.founders.spots(left, total)}>
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
    </>
  )
}

export function Roadmap({ c, lang, wa }) {
  return (
    <>
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
    </>
  )
}

export function Faq({ c, lang, wa }) {
  return (
    <>
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
    </>
  )
}

export function Final({ c, lang, wa }) {
  return (
    <>
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
    </>
  )
}


/* ---------- Piezas nuevas de la estructura en 4 páginas ---------- */

/** Encabezado de las páginas interiores: miga de pan, h1 y respuesta corta. */
export function PageIntro({ copy, ui, lang, wa, page, home, track: trackFn }) {
  return (
    <section className="wa-hero wa-hero--page">
      <div className="container">
        <Reveal immediate className="wa-page-intro">
          <nav className="u-crumbs" aria-label="Ruta de navegación">
            <a href={pagePath('home', lang)}>{home}</a>
            <span aria-hidden="true">/</span>
            <span aria-current="page">{copy.crumb}</span>
          </nav>
          <p className="eyebrow">{copy.eyebrow}</p>
          <h1 className="wa-h1 wa-h1--page">{copy.h1}</h1>
          <p className="wa-lead">{copy.lead}</p>
          <div className="wa-ctas">
            <a className="wa-btn wa-btn--primary" href={wa} target="_blank" rel="noopener noreferrer" onClick={trackFn(page)}>
              <WaGlyph /> {ui.whatsapp}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/** Respuesta corta y directa a "¿Qué es Uchuva?" (la leen buscadores e IA). */
export function Answer({ copy, ui }) {
  return (
    <section className="wa-section wa-section--tight">
      <div className="container">
        <Reveal className="wa-answer">
          <p className="wa-answer-label">{ui.answerLabel}</p>
          <h2 className="wa-answer-q">{copy.q}</h2>
          <p className="wa-answer-a">{copy.a}</p>
        </Reveal>
      </div>
    </section>
  )
}

/** Tarjetas que llevan a las otras tres páginas. */
export function Explore({ copy, lang }) {
  return (
    <section className="wa-section wa-band">
      <div className="container">
        <Reveal className="wa-head">
          <p className="eyebrow">{copy.eyebrow}</p>
          <h2 className="section-title">{copy.title}</h2>
        </Reveal>
        <Reveal className="wa-explore">
          {copy.items.map((i) => (
            <a key={i.page} className="wa-card wa-explore-card" href={pagePath(i.page, lang)}>
              <h3>{i.t}</h3>
              <p>{i.d}</p>
              <span className="wa-explore-more">{copy.more} <Icon name="arrow" size={18} /></span>
            </a>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

/** Contador compacto de cupos de fundador (Inicio). */
export function FoundersStrip({ c, copy, ui, lang, wa }) {
  const { total, taken } = PRODUCT.founders
  const left = Math.max(total - taken, 0)
  return (
    <section className="wa-section">
      <div className="container">
        <Reveal className="wa-strip">
          <div className="wa-strip-copy">
            <p className="eyebrow">{c.founders.eyebrow}</p>
            <h2 className="section-title">{c.founders.title}</h2>
            <p className="wa-sub">{c.founders.lead}</p>
          </div>
          <div className="wa-strip-count">
            <p className="wa-strip-n" aria-label={c.founders.spots(left, total)}>
              <strong>{taken}</strong><span>/ {total}</span>
            </p>
            <div className="wa-meter" style={{ gridTemplateColumns: `repeat(${Math.ceil(total / 2)}, 1fr)` }} role="img" aria-label={c.founders.spots(left, total)}>
              {Array.from({ length: total }, (_, i) => (
                <i key={i} className={i < taken ? 'is-taken' : ''} />
              ))}
            </div>
            <p className="wa-spots">{c.founders.spots(left, total)}</p>
            <div className="wa-ctas wa-ctas--col">
              <a className="wa-btn wa-btn--primary" href={wa} target="_blank" rel="noopener noreferrer" onClick={track('strip')}>
                <WaGlyph /> {ui.learn}
              </a>
              <a className="wa-btn wa-btn--ghost" href={pagePath('pricing', lang)}>{copy.cta}</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
