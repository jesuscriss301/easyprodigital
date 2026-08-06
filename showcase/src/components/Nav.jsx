import { useState } from 'react'

export default function Nav({ brand, links = [], ctaLabel, ctaHref = '#reservar' }) {
  const [open, setOpen] = useState(false)

  return (
    <nav className="demo-nav">
      <div className="demo-nav-inner">
        <a href="#inicio" className="demo-logo">{brand}</a>
        <ul className={`demo-nav-links${open ? ' is-open' : ''}`}>
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} onClick={() => setOpen(false)}>{l.label}</a>
            </li>
          ))}
        </ul>
        {ctaLabel && (
          <a href={ctaHref} className="demo-btn demo-btn-primary demo-nav-cta">{ctaLabel}</a>
        )}
        <button
          className="demo-nav-toggle"
          aria-label="Abrir menú"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          ☰
        </button>
      </div>
    </nav>
  )
}
