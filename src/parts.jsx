import { useEffect, useRef, useState } from 'react'
import { PRODUCT } from './content.js'
import './product.css'

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

export function Icon({ name, size = 22 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      {ICONS[name]}
    </svg>
  )
}

export function WaGlyph({ size = 20 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" fill="currentColor">
      <path d="M12 2a10 10 0 0 0-8.6 15.1L2 22l5-1.3A10 10 0 1 0 12 2zm0 18.2a8.2 8.2 0 0 1-4.2-1.2l-.3-.2-3 .8.8-2.9-.2-.3A8.2 8.2 0 1 1 12 20.2zm4.5-6.1c-.2-.1-1.5-.7-1.7-.8s-.4-.1-.6.1-.7.8-.8 1-.3.2-.5.1a6.7 6.7 0 0 1-3.3-2.9c-.2-.4.2-.4.7-1.3.1-.2 0-.3 0-.4l-.8-1.8c-.2-.5-.4-.4-.6-.4h-.5a1 1 0 0 0-.7.3 3 3 0 0 0-.9 2.2 5.2 5.2 0 0 0 1.1 2.7 11.8 11.8 0 0 0 4.5 4c1.7.7 2.3.8 3.2.6a2.7 2.7 0 0 0 1.8-1.3 2.2 2.2 0 0 0 .1-1.3c0-.1-.2-.2-.5-.3z" />
    </svg>
  )
}

export const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

/* ---------- Conversación simulada del hero ---------- */
export function ChatDemo({ script, c }) {
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
export function PanelTabs({ tabs }) {
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

export function formatCOP(n, lang) {
  return new Intl.NumberFormat(lang === 'es' ? 'es-CO' : 'en-US', {
    style: 'currency', currency: 'COP', maximumFractionDigits: 0,
  }).format(n)
}


export const waLink = (CONTACT, c) => `${CONTACT.whatsapp}?text=${encodeURIComponent(c.waText)}`

export const track = (label) => () => {
  if (typeof window !== 'undefined' && typeof window.gtag === 'function') {
    window.gtag('event', 'generate_lead', { method: 'whatsapp', item: 'uchuva', label })
  }
}


/* ---------- Flujo por pasos (pipeline propio, sin librerías) ----------
   Lista ordenada real (<ol>) que se anima: el paso activo avanza solo mientras
   el bloque está a la vista, hace loop, y al pasar el mouse o tocar un paso se
   pausa y se resalta. Con prefers-reduced-motion queda estático. */
export function FlowSteps({ items, label }) {
  const ref = useRef(null)
  const [active, setActive] = useState(0)
  const [inView, setInView] = useState(false)
  const [paused, setPaused] = useState(false)
  const [still, setStill] = useState(true)

  useEffect(() => {
    setStill(prefersReducedMotion())
    const el = ref.current
    if (!el || typeof IntersectionObserver === 'undefined') return
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.25 })
    io.observe(el)
    return () => io.disconnect()
  }, [])

  useEffect(() => {
    if (still || !inView || paused) return
    const id = setTimeout(() => setActive((a) => (a + 1) % items.length), 2200)
    return () => clearTimeout(id)
  }, [active, inView, paused, still, items.length])

  const pick = (i) => { setActive(i); setPaused(true) }

  return (
    <ol
      ref={ref}
      className="wa-flow"
      aria-label={label}
      onMouseLeave={() => setPaused(false)}
    >
      {items.map((s, i) => {
        const state = i < active ? 'done' : i === active ? 'run' : 'wait'
        return (
          <li
            key={s.t}
            className={`wa-flow-step is-${state}`}
            onMouseEnter={() => { setActive(i); setPaused(true) }}
            onClick={() => pick(i)}
          >
            <span className="wa-flow-n" aria-hidden="true">{i + 1}</span>
            <div className="wa-flow-body"><h3>{s.t}</h3><p>{s.d}</p></div>
          </li>
        )
      })}
    </ol>
  )
}
