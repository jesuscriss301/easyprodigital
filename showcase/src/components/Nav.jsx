import { useEffect, useRef, useState } from 'react'

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

  return (
    <nav className="demo-nav" ref={navRef}>
      <div className="demo-nav-inner">
        <a href="#home" className="demo-logo" onClick={() => setOpen(false)}>{brand}</a>
        <ul className={`demo-nav-links${open ? ' is-open' : ''}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            </li>
          ))}
          {ctaLabel && (
            <li className="demo-nav-cta-mobile-item">
              <a href={ctaHref} className="demo-btn demo-btn-primary" onClick={() => setOpen(false)}>
                {ctaLabel}
              </a>
            </li>
          )}
        </ul>
        {ctaLabel && (
          <a href={ctaHref} className="demo-btn demo-btn-primary demo-nav-cta">{ctaLabel}</a>
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
