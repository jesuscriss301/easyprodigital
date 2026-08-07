import { useEffect, useRef, useState } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' &&
  window.matchMedia &&
  window.matchMedia('(prefers-reduced-motion: reduce)').matches

// Debe coincidir con la duración de "transition: transform ..." de
// .demo-nav-links en el media query móvil (styles.css). Se usa para no
// disparar el scroll al ancla hasta que el panel termine de cerrarse —
// si ambas animaciones corren a la vez, se alcanza a ver un frame roto
// (el panel a medio cerrar superpuesto sobre la sección ya desplazada).
const MOBILE_MENU_CLOSE_MS = 300

export default function Nav({ brand, links = [], ctaLabel, ctaHref = '#book' }) {
  const [open, setOpen] = useState(false)
  const navRef = useRef(null)

  // Close on Escape, close on outside click, and lock body scroll while the
  // mobile panel is open so the page behind it doesn't scroll.
  useEffect(() => {
    if (!open) return

    const onKeyDown = (e) => {
      if (e.key === 'Escape') setOpen(false)
    }
    const onClickOutside = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    document.addEventListener('mousedown', onClickOutside)
    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.removeEventListener('mousedown', onClickOutside)
      document.body.style.overflow = previousOverflow
    }
  }, [open])

  // Links de ancla (#home, #services...): si el menú móvil está abierto,
  // cerrarlo primero y recién ahí hacer scroll — en vez de dejar que el
  // navegador salte al ancla mientras el panel todavía se está animando
  // hacia afuera (eso es lo que se veía como el menú "roto" sobre la
  // sección de destino).
  const handleAnchorClick = (e, href) => {
    if (!href || !href.startsWith('#')) return
    e.preventDefault()
    const wasOpen = open
    setOpen(false)

    const scrollToTarget = () => {
      const el = document.querySelector(href)
      if (!el) return
      el.scrollIntoView({ behavior: prefersReducedMotion() ? 'auto' : 'smooth', block: 'start' })
    }

    if (wasOpen) {
      window.setTimeout(scrollToTarget, MOBILE_MENU_CLOSE_MS)
    } else {
      scrollToTarget()
    }
  }

  return (
    <nav className="demo-nav" ref={navRef}>
      <div className="demo-nav-inner">
        <a href="#home" className="demo-logo" onClick={(e) => handleAnchorClick(e, '#home')}>{brand}</a>
        <ul className={`demo-nav-links${open ? ' is-open' : ''}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={(e) => handleAnchorClick(e, l.href)}>{l.label}</a>
            </li>
          ))}
          {ctaLabel && (
            <li className="demo-nav-cta-mobile-item">
              <a href={ctaHref} className="demo-btn demo-btn-primary" onClick={(e) => handleAnchorClick(e, ctaHref)}>
                {ctaLabel}
              </a>
            </li>
          )}
        </ul>
        {ctaLabel && (
          <a href={ctaHref} className="demo-btn demo-btn-primary demo-nav-cta" onClick={(e) => handleAnchorClick(e, ctaHref)}>
            {ctaLabel}
          </a>
        )}
        <button
          className={`demo-nav-toggle${open ? ' is-open' : ''}`}
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </nav>
  )
}
