import ProductPage from './ProductPage.jsx'
import { PRODUCT, WA_CONTENT, CONTACT, LANG_PATH } from './content.js'
import './base.css'

const UI = {
  es: {
    nav: [['#como-funciona', 'Cómo funciona'], ['#panel', 'Panel'], ['#fundadores', 'Precio'], ['#preguntas', 'Preguntas']],
    cta: 'Quiero mi cupo',
    other: 'en', otherLabel: 'EN', otherName: 'English',
    by: 'Un producto de',
    privacy: 'Privacidad',
    privacyUrl: 'https://easyprodigital.com/es/privacy/',
    skip: 'Saltar al contenido',
  },
  en: {
    nav: [['#como-funciona', 'How it works'], ['#panel', 'Panel'], ['#fundadores', 'Pricing'], ['#preguntas', 'FAQ']],
    cta: 'Get my spot',
    other: 'es', otherLabel: 'ES', otherName: 'Español',
    by: 'A product by',
    privacy: 'Privacy',
    privacyUrl: 'https://easyprodigital.com/privacy/',
    skip: 'Skip to content',
  },
}

export default function App({ lang = 'es' }) {
  const u = UI[lang] || UI.es
  const c = WA_CONTENT[lang] || WA_CONTENT.es
  const wa = `${CONTACT.whatsapp}?text=${encodeURIComponent(c.waText)}`
  return (
    <>
      <a className="skip" href="#contenido">{u.skip}</a>
      <header className="u-header">
        <div className="container u-header-in">
          <a className="u-brand" href={LANG_PATH[lang]} aria-label={PRODUCT.name}>
            <img src={PRODUCT.logo} alt="" width="36" height="36" className="wa-logo" />
            <span>{PRODUCT.name}</span>
          </a>
          <nav className="u-nav" aria-label="Secciones">
            {u.nav.map(([href, label]) => <a key={href} href={href}>{label}</a>)}
          </nav>
          <div className="u-actions">
            <a className="u-lang" href={LANG_PATH[u.other]} hrefLang={u.other} lang={u.other} aria-label={u.otherName}>
              {u.otherLabel}
            </a>
            <a className="wa-btn wa-btn--primary u-cta" href={wa} target="_blank" rel="noopener noreferrer">{u.cta}</a>
          </div>
        </div>
      </header>
      <main id="contenido">
        <ProductPage lang={lang} />
      </main>
      <footer className="u-footer">
        <div className="container u-footer-in">
          <p className="u-brand u-brand--sm">
            <img src={PRODUCT.logo} alt="" width="28" height="28" className="wa-logo" />
            <span>{PRODUCT.name}</span>
          </p>
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
