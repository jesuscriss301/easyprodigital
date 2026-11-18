import Home from './pages/Home.jsx'
import How from './pages/How.jsx'
import Panel from './pages/Panel.jsx'
import Pricing from './pages/Pricing.jsx'
import { PRODUCT, WA_CONTENT, CONTACT, PAGE_KEYS, pagePath } from './content.js'
import { PAGE_COPY } from './pagecopy.js'
import { waLink } from './parts.jsx'
import './base.css'

const VIEWS = { home: Home, how: How, panel: Panel, pricing: Pricing }

const UI = {
  es: {
    cta: 'Quiero mi cupo',
    other: 'en', otherLabel: 'EN', otherName: 'English',
    by: 'Un producto de',
    privacy: 'Privacidad',
    privacyUrl: 'https://easyprodigital.com/es/privacy/',
    skip: 'Saltar al contenido',
    menu: 'Páginas del sitio',
    pages: 'Páginas',
    contact: 'Contacto',
  },
  en: {
    cta: 'Get my spot',
    other: 'es', otherLabel: 'ES', otherName: 'Español',
    by: 'A product by',
    privacy: 'Privacy',
    privacyUrl: 'https://easyprodigital.com/privacy/',
    skip: 'Skip to content',
    menu: 'Site pages',
    pages: 'Pages',
    contact: 'Contact',
  },
}

export default function App({ lang = 'es', page = 'home' }) {
  const u = UI[lang] || UI.es
  const nav = PAGE_COPY[lang].nav
  const c = WA_CONTENT[lang] || WA_CONTENT.es
  const wa = waLink(CONTACT, c)
  const View = VIEWS[page] || Home
  return (
    <>
      <a className="skip" href="#contenido">{u.skip}</a>
      <header className="u-header">
        <div className="container u-header-in">
          <a className="u-brand" href={pagePath('home', lang)} aria-label={PRODUCT.name}>
            <img src={PRODUCT.logo} alt="" width="36" height="36" className="wa-logo" />
            <span>{PRODUCT.name}</span>
          </a>
          <nav className="u-nav" aria-label={u.menu}>
            {PAGE_KEYS.map((k) => (
              <a key={k} href={pagePath(k, lang)} aria-current={k === page ? 'page' : undefined}>{nav[k]}</a>
            ))}
          </nav>
          <div className="u-actions">
            <a className="u-lang" href={pagePath(page, u.other)} hrefLang={u.other} lang={u.other} aria-label={u.otherName}>
              {u.otherLabel}
            </a>
            <a className="wa-btn wa-btn--primary u-cta" href={wa} target="_blank" rel="noopener noreferrer">{u.cta}</a>
          </div>
        </div>
      </header>
      <main id="contenido">
        <View c={c} lang={lang} wa={wa} />
      </main>
      <footer className="u-footer">
        <div className="container u-footer-in">
          <p className="u-brand u-brand--sm">
            <img src={PRODUCT.logo} alt="" width="28" height="28" className="wa-logo" />
            <span>{PRODUCT.name}</span>
          </p>
          <nav className="u-footnav" aria-label={u.pages}>
            {PAGE_KEYS.map((k) => <a key={k} href={pagePath(k, lang)}>{nav[k]}</a>)}
          </nav>
          <p>
            {u.by} <a href={CONTACT.companyUrl + (lang === 'es' ? '/es/' : '/')}>{CONTACT.company}</a> · Medellín, Colombia
          </p>
          <p>
            <a href={`mailto:${CONTACT.email}`}>{CONTACT.email}</a> · <a href={u.privacyUrl}>{u.privacy}</a>
          </p>
          <p className="u-copy">© {new Date().getFullYear()} {CONTACT.company}</p>
        </div>
      </footer>
    </>
  )
}
