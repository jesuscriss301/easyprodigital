import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { profile } from '../data/profile.js'

/* ---------------- ScrollToTop en cambio de ruta ---------------- */
export function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

/* ---------------- Header ---------------- */
export function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()

  useEffect(() => setOpen(false), [pathname])

  return (
    <header className="site-header">
      <div className="container">
        <Link className="brand" to="/">
          easypro<span>digital</span>
        </Link>
        <button
          className="nav-toggle"
          aria-expanded={open}
          aria-label="Menu"
          onClick={() => setOpen(!open)}
        >
          ☰
        </button>
        <nav className={`nav${open ? ' open' : ''}`} aria-label="Main">
          <NavLink to="/services/">Services</NavLink>
          <NavLink to="/portfolio/">Portfolio</NavLink>
          <NavLink to="/blog/">Blog</NavLink>
          <NavLink to="/about/">About</NavLink>
          <NavLink to="/contact/" className="nav-cta">
            Start a project
          </NavLink>
        </nav>
      </div>
    </header>
  )
}

/* ---------------- Footer ---------------- */
export function WhatsAppFloat() {
  return (
    <a
      className="whatsapp-float"
      href={profile.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contactar por WhatsApp"
    >
      <span className="whatsapp-float-icon">💬</span>
      <span className="whatsapp-float-text">WhatsApp</span>
    </a>
  )
}

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div>
          <p className="footer-name">{profile.name}</p>
          <p className="footer-role">{profile.role} · {profile.location}</p>
        </div>
        <nav className="footer-nav" aria-label="Footer">
          <Link to="/services/">Services</Link>
          <Link to="/portfolio/">Portfolio</Link>
          <Link to="/blog/">Blog</Link>
          <Link to="/about/">About</Link>
          <Link to="/contact/">Contact</Link>
        </nav>
        <nav className="footer-nav" aria-label="Legal">
          <Link to="/privacy/">Privacy</Link>
          <Link to="/terms/">Terms</Link>
          <Link to="/cookies/">Cookies</Link>
        </nav>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {profile.name} — Easy Pro Digital</span>
        <span>easyprodigital.com</span>
      </div>
    </footer>
  )
}

/* ---------------- Status bar (firma) ---------------- */
export function StatusBar() {
  const [time, setTime] = useState('')

  useEffect(() => {
    const fmt = () =>
      new Intl.DateTimeFormat('en-US', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: 'America/Bogota',
      }).format(new Date())
    setTime(fmt())
    const id = setInterval(() => setTime(fmt()), 30_000)
    return () => clearInterval(id)
  }, [])

  return (
    <div className="statusbar" aria-label="Status">
      <div className="container">
        <span>
          <span className={`status-dot${profile.available ? '' : ' off'}`} />
          {profile.available ? 'Available for projects' : 'Currently booked'}
        </span>
        <span className="sep hide-sm">|</span>
        <span className="hide-sm">{profile.location}</span>
        <span className="sep hide-sm">|</span>
        <span className="hide-sm">
          {time} {profile.timezoneLabel}
        </span>
        <span className="grow" />
        <Link to="/contact/">→ contact</Link>
      </div>
    </div>
  )
}
