import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext.jsx'

/* ---------------- ScrollToTop on route change ---------------- */
export function ScrollToTop() {
  const { pathname } = useLocation()
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])
  return null
}

/* ---------------- Light / dark theme ---------------- */
function getInitialTheme() {
  if (typeof window === 'undefined') return 'light'
  try {
    const saved = window.localStorage.getItem('epd-theme')
    if (saved === 'light' || saved === 'dark') return saved
  } catch (e) {
    /* localStorage unavailable (private mode, etc.) */
  }
  return window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches
    ? 'dark'
    : 'light'
}

function ThemeToggle() {
  const [theme, setTheme] = useState(getInitialTheme)

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme)
    try {
      window.localStorage.setItem('epd-theme', theme)
    } catch (e) {
      /* localStorage unavailable (private mode, etc.) */
    }
  }, [theme])

  const isDark = theme === 'dark'

  return (
    <button
      className="theme-toggle"
      onClick={() => setTheme(isDark ? 'light' : 'dark')}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-pressed={isDark}
    >
      {isDark ? (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
          <circle cx="12" cy="12" r="4.5" />
          <path d="M12 2.5v2.4M12 19.1v2.4M4.9 4.9l1.7 1.7M17.4 17.4l1.7 1.7M2.5 12h2.4M19.1 12h2.4M4.9 19.1l1.7-1.7M17.4 6.6l1.7-1.7" />
        </svg>
      ) : (
        <svg viewBox="0 0 24 24" width="18" height="18" fill="currentColor" aria-hidden="true">
          <path d="M20.7 14.9A9 9 0 1 1 9.1 3.3a7.2 7.2 0 0 0 11.6 11.6z" />
        </svg>
      )}
    </button>
  )
}

/* ---------------- Language switcher (select — EN / ES, ready for FR) ----
   Un <select> en vez de un link EN⇄ES: con solo dos idiomas alcanzaba un
   botón simple, pero apenas se agregue francés (mercado canadiense) un
   toggle de dos estados ya no sirve — un <select> escala a N idiomas sin
   rediseñar nada, solo agregando una entrada a LANGUAGES. */
const LANGUAGES = [
  { code: 'en', label: 'English', prefix: '' },
  { code: 'es', label: 'Español', prefix: '/es' },
  // { code: 'fr', label: 'Français', prefix: '/fr' }, // pendiente: mercado canadiense
]

function LanguageSwitcher() {
  const { lang } = useLanguage()
  const { pathname, search, hash } = useLocation()
  const navigate = useNavigate()

  // Ruta neutra (sin prefijo de idioma) del pathname actual.
  const current = LANGUAGES.find((l) => l.code === lang) ?? LANGUAGES[0]
  const neutralPath = current.prefix
    ? pathname.replace(new RegExp(`^${current.prefix}(/|$)`), '/')
    : pathname

  const pathFor = (target) =>
    target.prefix ? `${target.prefix}${neutralPath === '/' ? '/' : neutralPath}` : neutralPath

  const handleChange = (event) => {
    const target = LANGUAGES.find((l) => l.code === event.target.value)
    if (!target || target.code === lang) return
    navigate(`${pathFor(target)}${search}${hash}`)
  }

  return (
    <span className="lang-toggle">
      <select value={lang} onChange={handleChange} aria-label="Language / Idioma">
        {LANGUAGES.map((l) => (
          <option key={l.code} value={l.code}>
            {l.code.toUpperCase()}
          </option>
        ))}
      </select>
    </span>
  )
}

/* ---------------- Header ---------------- */
export function Header() {
  const [open, setOpen] = useState(false)
  const { pathname } = useLocation()
  const { href, t } = useLanguage()

  useEffect(() => setOpen(false), [pathname])

  return (
    <header className="site-header">
      <div className="container">
        <Link className="brand" to={href('/')}>
          easypro<span>digital</span>
        </Link>
        <div className="header-right">
          <nav className={`nav${open ? ' open' : ''}`} aria-label="Main">
            <NavLink to={href('/services/')}>{t.nav.services}</NavLink>
            <NavLink to={href('/portfolio/')}>{t.nav.portfolio}</NavLink>
            <NavLink to={href('/blog/')}>{t.nav.blog}</NavLink>
            <NavLink to={href('/about/')}>{t.nav.about}</NavLink>
            <NavLink to={href('/contact/')} className="nav-cta">
              {t.nav.startProject}
            </NavLink>
          </nav>
          <div className="header-actions">
            <LanguageSwitcher />
            <ThemeToggle />
            <button
              className={`nav-toggle${open ? ' open' : ''}`}
              aria-expanded={open}
              aria-label={open ? 'Close menu' : 'Open menu'}
              onClick={() => setOpen(!open)}
            >
              <span className="bar" />
              <span className="bar" />
              <span className="bar" />
            </button>
          </div>
        </div>
      </div>
    </header>
  )
}

/* ---------------- Footer ---------------- */
export function WhatsAppFloat() {
  const { data } = useLanguage()
  return (
    <a
      className="whatsapp-float"
      href={data.profile.whatsapp}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Contact via WhatsApp"
    >
      <span className="whatsapp-float-icon">💬</span>
      <span className="whatsapp-float-text">WhatsApp</span>
    </a>
  )
}

export function Footer() {
  const { href, data, t } = useLanguage()
  const { profile } = data
  return (
    <footer className="site-footer">
      <div className="container footer-top">
        <div>
          <p className="footer-name">{profile.name}</p>
          <p className="footer-role">{profile.role} · {profile.location}</p>
        </div>
        <nav className="footer-nav" aria-label="Footer">
          <Link to={href('/services/')}>{t.footer.services}</Link>
          <Link to={href('/portfolio/')}>{t.footer.portfolio}</Link>
          <Link to={href('/blog/')}>{t.footer.blog}</Link>
          <Link to={href('/about/')}>{t.footer.about}</Link>
          <Link to={href('/contact/')}>{t.footer.contact}</Link>
        </nav>
        <nav className="footer-nav" aria-label="Legal">
          <Link to={href('/privacy/')}>{t.footer.privacy}</Link>
          <Link to={href('/terms/')}>{t.footer.terms}</Link>
          <Link to={href('/cookies/')}>{t.footer.cookies}</Link>
        </nav>
      </div>
      <div className="container footer-bottom">
        <span>© {new Date().getFullYear()} {profile.name} — Easy Pro Digital</span>
        <span>easyprodigital.com</span>
      </div>
    </footer>
  )
}

/* ---------------- Status bar (signature) ---------------- */
export function StatusBar() {
  const [time, setTime] = useState('')
  const { href, data, t } = useLanguage()
  const { profile } = data

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
          {profile.available ? t.statusbar.available : t.statusbar.booked}
        </span>
        <span className="sep hide-sm">|</span>
        <span className="hide-sm">{profile.location}</span>
        <span className="sep hide-sm">|</span>
        <span className="hide-sm">
          {time} {profile.timezoneLabel}
        </span>
        <span className="grow" />
        <Link to={href('/contact/')}>{t.statusbar.contact}</Link>
      </div>
    </div>
  )
}
