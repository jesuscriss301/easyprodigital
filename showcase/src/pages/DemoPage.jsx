import { useEffect } from 'react'
import Seo from '../components/Seo.jsx'
import Nav from '../components/Nav.jsx'
import Hero from '../components/Hero.jsx'
import Services from '../components/Services.jsx'
import Features from '../components/Features.jsx'
import Gallery from '../components/Gallery.jsx'
import Testimonials from '../components/Testimonials.jsx'
import CtaBanner from '../components/CtaBanner.jsx'
import Disclosure from '../components/Disclosure.jsx'
import Footer from '../components/Footer.jsx'
import Badge from '../components/Badge.jsx'

function useGoogleFont(href) {
  useEffect(() => {
    if (!href) return
    if (document.querySelector(`link[href="${href}"]`)) return
    const link = document.createElement('link')
    link.rel = 'stylesheet'
    link.href = href
    document.head.appendChild(link)
  }, [href])
}

/**
 * Middle sections available for reordering via `layout.order` in the demo
 * config. Nav, Disclosure, Footer and Badge are fixed chrome and always
 * render in the same place (top / bottom).
 */
const SECTION_RENDERERS = {
  hero: (demo) => <Hero key="hero" {...demo.hero} />,
  services: (demo) => (demo.services ? <Services key="services" {...demo.services} /> : null),
  features: (demo) => (demo.features ? <Features key="features" {...demo.features} /> : null),
  gallery: (demo) => (demo.gallery ? <Gallery key="gallery" {...demo.gallery} theme={demo.theme} /> : null),
  testimonials: (demo) => (demo.testimonials ? <Testimonials key="testimonials" {...demo.testimonials} /> : null),
  cta: (demo) => (demo.cta ? <CtaBanner key="cta" {...demo.cta} /> : null),
}

const DEFAULT_ORDER = ['hero', 'services', 'features', 'gallery', 'testimonials', 'cta']

/** Renderiza cualquier demo a partir de su objeto de configuración (src/demos/*.js). */
export default function DemoPage({ demo }) {
  useGoogleFont(demo.theme.googleFontsHref)

  const themeVars = {
    '--demo-primary': demo.theme.primary,
    '--demo-primary-dark': demo.theme.primaryDark,
    '--demo-accent': demo.theme.accent,
    '--demo-bg': demo.theme.bg,
    '--demo-surface': demo.theme.surface,
    '--demo-ink': demo.theme.ink,
    '--demo-muted': demo.theme.muted,
    '--demo-line': demo.theme.line,
    '--demo-font-heading': demo.theme.headingFont,
    '--demo-font-body': demo.theme.bodyFont,
  }

  const order = demo.layout?.order?.length ? demo.layout.order : DEFAULT_ORDER
  const sections = order
    .filter((key) => SECTION_RENDERERS[key])
    .map((key) => SECTION_RENDERERS[key](demo))

  return (
    <div style={themeVars}>
      <Seo
        title={demo.seo.title}
        description={demo.seo.description}
        path={`/${demo.slug}/`}
        robots={demo.seo.robots}
      />
      <Nav brand={demo.brand} links={demo.nav.links} ctaLabel={demo.nav.ctaLabel} />
      {sections}
      <Disclosure {...demo.disclosure} />
      <Footer brand={demo.brand} />
      <Badge />
    </div>
  )
}
