import { useEffect, useRef, useState } from 'react'
import { LOGO } from './assets.js'
import { prefersReducedMotion } from '../components/motionUtils.js'

const CLOSE_MS = 300

export default function ChopeNav({ links, lang, setLang, cta, openNow }) {
  const [open, setOpen] = useState(false)
  const navRef = useRef(null)

  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    const onOut = (e) => navRef.current && !navRef.current.contains(e.target) && setOpen(false)
    document.addEventListener('keydown', onKey)
    document.addEventListener('mousedown', onOut)
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.removeEventListener('keydown', onKey)
      document.removeEventListener('mousedown', onOut)
      document.body.style.overflow = prev
    }
  }, [open])

  const go = (e, href) => {
    if (!href || !href.startsWith('#')) return
    e.preventDefault()
    const wasOpen = open
    setOpen(false)
    const scroll = () => {
      const el = document.querySelector(href)
      if (el) el.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' })
    }
    wasOpen ? window.setTimeout(scroll, CLOSE_MS) : scroll()
  }

  return (
    <nav className="demo-nav chope-nav" ref={navRef}>
      <div className="demo-nav-inner">
        <a href="#home" className="chope-brand" onClick={(e) => go(e, '#home')}>
          <img src={LOGO} alt="La Chope Gobeline" width="84" height="58" />
          <span className="chope-brand-text">
            La Chope Gobeline
            {/* estado calculado con los horarios reales, no una imagen fija */}
            <em className={openNow.open ? 'is-open' : 'is-closed'}>
              <i /> {openNow.label}
            </em>
          </span>
        </a>

        <ul className={`demo-nav-links${open ? ' is-open' : ''}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={(e) => go(e, l.href)}>{l.label}</a>
            </li>
          ))}
          <li className="demo-nav-cta-mobile-item">
            <a href={cta.href} className="demo-btn demo-btn-primary" onClick={(e) => go(e, cta.href)}>{cta.label}</a>
          </li>
        </ul>

        <button
          type="button"
          className="demo-lang-toggle chope-lang"
          onClick={() => setLang(lang === 'fr' ? 'en' : 'fr')}
          aria-label={lang === 'fr' ? 'View in English' : 'Voir en français'}
        >
          {lang === 'fr' ? 'EN' : 'FR'}
        </button>

        <a href={cta.href} className="demo-btn demo-btn-primary demo-nav-cta" onClick={(e) => go(e, cta.href)}>
          {cta.label}
        </a>

        <button
          className={`demo-nav-toggle${open ? ' is-open' : ''}`}
          aria-label={open ? (lang === 'fr' ? 'Fermer le menu' : 'Close menu') : (lang === 'fr' ? 'Ouvrir le menu' : 'Open menu')}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span /><span />
        </button>
      </div>
    </nav>
  )
}
