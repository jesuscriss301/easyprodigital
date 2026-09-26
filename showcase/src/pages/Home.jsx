import { useEffect, useState, useRef } from 'react'
import demos from '../demos/index.js'
import { Icon } from '../components/icons.jsx'
import { useLanguage } from '../i18n.jsx'
import { getLocalizedDemo } from '../demos/i18n/es/index.js'

/* -------------------------------------------------------------------------- */
/* Prospect (custom-page) demos — no están en demos/index.js porque tienen
   página propia. Se listan a mano.                                          */
/* -------------------------------------------------------------------------- */
const PROSPECT_DEMOS_EN = [
  {
    slug: 'chope-gobeline',
    brand: 'La Chope Gobeline',
    tag: 'Medieval tavern · Bilingual FR/EN',
    summary:
      'Redesign of a medieval-themed tavern in France — PDF menus rendered as clean images, hand-drawn goblin mascot integrated into the layout, and 4 color variants (nuit, parchemin, forge, gobelin).',
    variants: [
      { slug: 'chope-gobeline', label: 'Nuit', primary: '#c19a5b' },
      { slug: 'chope-gobeline-parchemin', label: 'Parchemin', primary: '#8c5a2b' },
      { slug: 'chope-gobeline-forge', label: 'Forge', primary: '#c94a2a' },
      { slug: 'chope-gobeline-gobelin', label: 'Gobelin', primary: '#4d8f52' },
    ],
  },
  {
    slug: 'copie-bgr',
    brand: 'Copie BGR',
    tag: 'Print shop · Bilingual FR/EN',
    summary:
      'Modern site for a print shop — service pages, portfolio grid and a contact hub with every real channel the original site had scattered across five pages.',
    variants: [],
  },
  {
    slug: 'ping-pong-club',
    brand: 'Ping Pong Club',
    tag: 'Bar & club · Montréal · Bilingual FR/EN',
    summary:
      'Nightlife bar in Montréal — reservations, event calendar, gallery in an accordion, and hours computed live so the page shows whether the bar is open right now.',
    variants: [],
  },
]

/* -------------------------------------------------------------------------- */
/* Live production projects — traídos del profile.js del sitio principal.
   No son demos: son apps corriendo en producción.                            */
/* -------------------------------------------------------------------------- */
const LIVE_PROJECTS_EN = [
  {
    id: 'turnero-saas',
    name: 'Turnero',
    tag: 'Multi-tenant SaaS · 2026',
    summary:
      'Virtual queue platform. Each business signs up, configures branches and services, and dispatches numbered turns in real time via SSE, with a public TV screen and mobile follow-up.',
    stack: ['Java 21 / Spring Boot 3', 'React + TS', 'MySQL 8', 'Docker'],
    url: 'https://turnero.easyprodigital.com',
    repo: 'https://github.com/jesuscriss301/Turnero-java-react',
    private: false,
  },
  {
    id: 'bagisto-ecommerce-pos',
    name: 'Bagisto E-commerce + POS',
    tag: 'E-commerce · POS · 2026',
    summary:
      'Laravel + Vue e-commerce with a POS module — the same system runs the online store and the in-person register, with ~42 modular packages and event-driven extensibility.',
    stack: ['Laravel 12', 'Vue.js 3', 'Tailwind', 'MySQL'],
    url: 'https://store.easyprodigital.com',
    repo: 'https://github.com/jesuscriss301/bagisto',
    private: false,
  },
  {
    id: 'mipres',
    name: 'MIPRES Reporting API',
    tag: 'Health integration · 2026',
    summary:
      'Integration with the Colombian Ministry of Health for prescription reporting and dispensation control. Query optimization cut response times by 40% on 3,000 daily operations.',
    stack: ['PHP / Symfony', 'MariaDB', 'REST'],
    private: true,
  },
  {
    id: 'ai-chatbot',
    name: 'WhatsApp AI Chatbot',
    tag: 'AI + WhatsApp · 2025',
    summary:
      'AI chatbot on WhatsApp Business that dropped response times from 10–40 minutes to under 1 minute and automated 85% of customer inquiries. Includes RAG on client documents.',
    stack: ['Python', 'OpenAI API', 'WhatsApp Business', 'RAG / vector DB'],
    private: true,
  },
  {
    id: 'seo-generator',
    name: 'SEO Article Forge',
    tag: 'Content AI · 2025',
    summary:
      'Python + Gemini pipeline that generates 150 SEO articles per week with an integrated content strategy for organic ranking.',
    stack: ['Python', 'Gemini API', 'SEO'],
    private: true,
  },
  {
    id: 'mining-crm',
    name: 'Mining CRM',
    tag: 'Enterprise SaaS · 2023',
    summary:
      'Customer & operations platform for the mining sector with microservices architecture for real-time monitoring, built from scratch leading a small dev team.',
    stack: ['Java / Spring Boot', 'MySQL', 'Microservices'],
    private: true,
  },
]

const LIVE_PROJECTS_ES = [
  {
    id: 'turnero-saas',
    name: 'Turnero',
    tag: 'SaaS multi-tenant · 2026',
    summary:
      'Plataforma de filas virtuales. Cada empresa se registra, configura sucursales y servicios, y despacha turnos en tiempo real vía SSE, con pantalla pública para TV y seguimiento móvil.',
    stack: ['Java 21 / Spring Boot 3', 'React + TS', 'MySQL 8', 'Docker'],
    url: 'https://turnero.easyprodigital.com',
    repo: 'https://github.com/jesuscriss301/Turnero-java-react',
    private: false,
  },
  {
    id: 'bagisto-ecommerce-pos',
    name: 'Bagisto E-commerce + POS',
    tag: 'E-commerce · POS · 2026',
    summary:
      'E-commerce Laravel + Vue con módulo POS — el mismo sistema opera la tienda online y la caja presencial, con arquitectura modular (~42 paquetes) y extensibilidad basada en eventos.',
    stack: ['Laravel 12', 'Vue.js 3', 'Tailwind', 'MySQL'],
    url: 'https://store.easyprodigital.com',
    repo: 'https://github.com/jesuscriss301/bagisto',
    private: false,
  },
  {
    id: 'mipres',
    name: 'MIPRES Reporting API',
    tag: 'Integración salud · 2026',
    summary:
      'Integración con el Ministerio de Salud de Colombia para reporte de prescripciones y control de dispensación. Optimización de consultas redujo tiempos de respuesta en 40% procesando 3.000 operaciones diarias.',
    stack: ['PHP / Symfony', 'MariaDB', 'REST'],
    private: true,
  },
  {
    id: 'ai-chatbot',
    name: 'Chatbot IA WhatsApp',
    tag: 'IA + WhatsApp · 2025',
    summary:
      'Chatbot de IA en WhatsApp Business que redujo tiempos de respuesta de 10–40 minutos a menos de 1 minuto y automatizó 85% de las consultas. Incluye RAG sobre documentos del cliente.',
    stack: ['Python', 'OpenAI API', 'WhatsApp Business', 'RAG / vector DB'],
    private: true,
  },
  {
    id: 'seo-generator',
    name: 'SEO Article Forge',
    tag: 'Contenido con IA · 2025',
    summary:
      'Pipeline en Python + Gemini que genera 150 artículos SEO por semana con estrategia de contenido integrada para posicionamiento orgánico.',
    stack: ['Python', 'Gemini API', 'SEO'],
    private: true,
  },
  {
    id: 'mining-crm',
    name: 'CRM Minero',
    tag: 'SaaS empresarial · 2023',
    summary:
      'Plataforma de gestión de clientes y operaciones para sector minero con arquitectura de microservicios para monitoreo en tiempo real, liderando un equipo de desarrollo.',
    stack: ['Java / Spring Boot', 'MySQL', 'Microservices'],
    private: true,
  },
]

const PROSPECT_DEMOS_ES = [
  {
    slug: 'chope-gobeline',
    brand: 'La Chope Gobeline',
    tag: 'Taberna medieval · Bilingüe FR/EN',
    summary:
      'Rediseño de una taberna con temática medieval en Francia — cartas PDF renderizadas como imágenes limpias, mascota goblin dibujada a mano integrada al layout, y 4 variantes de color (nuit, parchemin, forge, gobelin).',
    variants: [
      { slug: 'chope-gobeline', label: 'Nuit', primary: '#c19a5b' },
      { slug: 'chope-gobeline-parchemin', label: 'Parchemin', primary: '#8c5a2b' },
      { slug: 'chope-gobeline-forge', label: 'Forge', primary: '#c94a2a' },
      { slug: 'chope-gobeline-gobelin', label: 'Gobelin', primary: '#4d8f52' },
    ],
  },
  {
    slug: 'copie-bgr',
    brand: 'Copie BGR',
    tag: 'Imprenta · Bilingüe FR/EN',
    summary:
      'Sitio moderno para una imprenta — páginas de servicio, grilla de portafolio y un hub de contacto con todos los canales reales que el sitio original tenía dispersos en cinco páginas.',
    variants: [],
  },
  {
    slug: 'ping-pong-club',
    brand: 'Ping Pong Club',
    tag: 'Bar & club · Montreal · Bilingüe FR/EN',
    summary:
      'Bar nocturno en Montreal — reservas, calendario de eventos, galería en acordeón, y horarios calculados en vivo para mostrar si el bar está abierto ahora mismo.',
    variants: [],
  },
]

/* -------------------------------------------------------------------------- */
/* Card con carrusel de previews (3 imágenes, auto-rotate).                   */
/* -------------------------------------------------------------------------- */
function PreviewCarousel({ slug, brand }) {
  const [idx, setIdx] = useState(0)
  const [broken, setBroken] = useState({})
  const hovering = useRef(false)

  // Rota cada 3.2s salvo hover.
  useEffect(() => {
    const id = setInterval(() => {
      if (!hovering.current) setIdx((i) => (i + 1) % 3)
    }, 3200)
    return () => clearInterval(id)
  }, [])

  const shots = [1, 2, 3].map((n) => `/previews/${slug}-${n}.webp`)
  const anyOk = shots.some((_, i) => !broken[i])

  return (
    <div
      className="ep-card-visual"
      onMouseEnter={() => (hovering.current = true)}
      onMouseLeave={() => (hovering.current = false)}
    >
      {shots.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${brand} — vista ${i + 1}`}
          loading="lazy"
          className={`ep-card-shot ${i === idx ? 'is-active' : ''}`}
          onError={() => setBroken((b) => ({ ...b, [i]: true }))}
          style={broken[i] ? { display: 'none' } : undefined}
        />
      ))}
      {!anyOk && <div className="ep-card-shot-placeholder" aria-hidden="true" />}
      <div className="ep-card-dots">
        {[0, 1, 2].map((n) => (
          <button
            key={n}
            type="button"
            aria-label={`Vista ${n + 1}`}
            className={`ep-card-dot ${n === idx ? 'is-active' : ''}`}
            onClick={(e) => {
              e.preventDefault()
              e.stopPropagation()
              setIdx(n)
            }}
          />
        ))}
      </div>
    </div>
  )
}

function DemoCard({ demo, t, extraTag }) {
  const variants = demo.styleVariants || []
  return (
    <a
      href={`/${demo.slug}`}
      target="_blank"
      rel="noopener noreferrer"
      className="ep-card"
      aria-label={`${demo.brand} — ${t.viewDemo}`}
    >
      <PreviewCarousel slug={demo.slug} brand={demo.brand} />
      <div className="ep-card-body">
        <div className="ep-card-tag">{extraTag || demo.niche}</div>
        <h3>{demo.brand}</h3>
        {demo.seo?.description && <p className="ep-card-desc">{demo.seo.description}</p>}
        <div className="ep-card-footer">
          {variants.length > 1 ? (
            <div className="ep-card-palettes" title={t.palettes(variants.length)}>
              {variants.slice(0, 5).map((v) => (
                <span key={v.slug} className="ep-swatch" style={{ background: v.primary }} />
              ))}
              {variants.length > 5 && <span className="ep-swatch-more">+{variants.length - 5}</span>}
            </div>
          ) : (
            <span />
          )}
          <span className="ep-card-cta">{t.viewDemo} →</span>
        </div>
      </div>
    </a>
  )
}

function ProspectCard({ p, t }) {
  return (
    <a href={`/${p.slug}`} target="_blank" rel="noopener noreferrer" className="ep-card ep-card--prospect">
      <PreviewCarousel slug={p.slug} brand={p.brand} />
      <div className="ep-card-body">
        <div className="ep-card-tag">{p.tag}</div>
        <h3>{p.brand}</h3>
        <p className="ep-card-desc">{p.summary}</p>
        <div className="ep-card-footer">
          {p.variants.length > 0 ? (
            <div className="ep-card-palettes">
              {p.variants.map((v) => (
                <a
                  key={v.slug}
                  href={`/${v.slug}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ep-swatch"
                  title={v.label}
                  style={{ background: v.primary }}
                  onClick={(e) => e.stopPropagation()}
                  aria-label={v.label}
                />
              ))}
            </div>
          ) : (
            <span />
          )}
          <span className="ep-card-cta">{t.viewLive}</span>
        </div>
      </div>
    </a>
  )
}

function ProjectCard({ proj, t }) {
  const clickable = Boolean(proj.url)
  const Tag = clickable ? 'a' : 'div'
  const props = clickable
    ? { href: proj.url, target: '_blank', rel: 'noopener noreferrer' }
    : {}
  return (
    <Tag {...props} className={`ep-project ${clickable ? '' : 'is-private'}`}>
      <div className="ep-project-head">
        <span className="ep-project-tag">{proj.tag}</span>
        {proj.private && <span className="ep-project-badge">{t.privateProject}</span>}
      </div>
      <h3>{proj.name}</h3>
      <p>{proj.summary}</p>
      <ul className="ep-project-stack">
        {proj.stack.map((s) => (
          <li key={s}>{s}</li>
        ))}
      </ul>
      <div className="ep-project-cta">
        {proj.url && <span className="ep-card-cta">{t.viewLive}</span>}
        {proj.repo && (
          <a
            href={proj.repo}
            target="_blank"
            rel="noopener noreferrer"
            className="ep-project-link"
            onClick={(e) => e.stopPropagation()}
          >
            {t.viewCode} ↗
          </a>
        )}
      </div>
    </Tag>
  )
}

export default function Home() {
  const { t, lang, toggleLang } = useLanguage()
  const projects = lang === 'es' ? LIVE_PROJECTS_ES : LIVE_PROJECTS_EN
  const prospects = lang === 'es' ? PROSPECT_DEMOS_ES : PROSPECT_DEMOS_EN

  useEffect(() => {
    document.title = t.home.title
  }, [t])

  return (
    <div className="ep-home">
      {/* ================== NAV ================== */}
      <header className="ep-nav">
        <a href="https://easyprodigital.com" className="ep-brand" aria-label="Easy Pro Digital">
          <span className="ep-brand-mark">{'>_'}</span>
          <span className="ep-brand-name">Easy Pro Digital</span>
        </a>
        <nav className="ep-nav-links" aria-label="Sections">
          <a href="#niches">{t.home.navNiches}</a>
          <a href="#prospects">{t.home.navProspects}</a>
          <a href="#projects">{t.home.navProjects}</a>
        </nav>
        <div className="ep-nav-actions">
          <button type="button" className="ep-nav-lang" onClick={toggleLang} title={t.home.langToggleTo}>
            {lang === 'en' ? 'ES' : 'EN'}
          </button>
          <a
            href="https://easyprodigital.com/contact"
            target="_blank"
            rel="noopener noreferrer"
            className="ep-nav-cta"
          >
            {t.home.navContact}
          </a>
        </div>
      </header>

      {/* ================== HERO ================== */}
      <section className="ep-hero">
        <div className="ep-hero-bg" aria-hidden="true">
          <div className="ep-hero-glow ep-hero-glow--1" />
          <div className="ep-hero-glow ep-hero-glow--2" />
          <div className="ep-hero-grid" />
        </div>
        <div className="ep-hero-inner">
          <span className="ep-eyebrow">{t.home.heroKicker}</span>
          <h1>
            {t.home.heroTitle}
            <span className="ep-hero-accent">.</span>
          </h1>
          <p className="ep-hero-lead">{t.home.heroPitch}</p>
          <div className="ep-hero-cta-row">
            <a
              href="https://easyprodigital.com/contact"
              target="_blank"
              rel="noopener noreferrer"
              className="ep-btn ep-btn--primary"
            >
              {t.home.heroCtaPrimary}
            </a>
            <a
              href="https://easyprodigital.com/services"
              target="_blank"
              rel="noopener noreferrer"
              className="ep-btn ep-btn--ghost"
            >
              {t.home.heroCtaSecondary}
            </a>
          </div>
          <ul className="ep-hero-stats">
            {t.home.stats.map((s) => (
              <li key={s.l}>
                <span className="ep-stat-num">{s.n}</span>
                <span className="ep-stat-lbl">{s.l}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* ================== SECCIÓN 1 · DEMOS POR NICHO ================== */}
      <section id="niches" className="ep-section">
        <div className="ep-section-head">
          <span className="ep-eyebrow">{t.home.sectionNichesEyebrow}</span>
          <h2>{t.home.sectionNichesTitle}</h2>
          <p>{t.home.sectionNichesLead}</p>
        </div>
        <div className="ep-grid">
          {demos.map((raw) => {
            const d = getLocalizedDemo(raw, lang)
            return <DemoCard key={d.slug} demo={d} t={t.home} />
          })}
        </div>
      </section>

      {/* ================== SECCIÓN 2 · PROSPECTOS ================== */}
      <section id="prospects" className="ep-section ep-section--dim">
        <div className="ep-section-head">
          <span className="ep-eyebrow">{t.home.sectionProspectsEyebrow}</span>
          <h2>{t.home.sectionProspectsTitle}</h2>
          <p>{t.home.sectionProspectsLead}</p>
        </div>
        <div className="ep-grid">
          {prospects.map((p) => (
            <ProspectCard key={p.slug} p={p} t={t.home} />
          ))}
        </div>
      </section>

      {/* ================== SECCIÓN 3 · PROYECTOS REALES ================== */}
      <section id="projects" className="ep-section">
        <div className="ep-section-head">
          <span className="ep-eyebrow">{t.home.sectionProjectsEyebrow}</span>
          <h2>{t.home.sectionProjectsTitle}</h2>
          <p>{t.home.sectionProjectsLead}</p>
        </div>
        <div className="ep-projects-grid">
          {projects.map((p) => (
            <ProjectCard key={p.id} proj={p} t={t.home} />
          ))}
        </div>
      </section>

      {/* ================== FOOTER ================== */}
      <footer className="ep-footer">
        <div className="ep-footer-inner">
          <div className="ep-footer-brand">
            <div className="ep-brand ep-brand--footer">
              <span className="ep-brand-mark">{'>_'}</span>
              <span className="ep-brand-name">Easy Pro Digital</span>
            </div>
            <p>{t.home.footerTag}</p>
            <p className="ep-footer-loc">Medellín, Colombia — Remote · US &amp; Canada</p>
          </div>
          <nav className="ep-footer-nav" aria-label="Footer">
            <a href="https://easyprodigital.com" target="_blank" rel="noopener noreferrer">
              {t.home.footerLinks.home}
            </a>
            <a
              href="https://easyprodigital.com/portfolio"
              target="_blank"
              rel="noopener noreferrer"
            >
              {t.home.footerLinks.portfolio}
            </a>
            <a href="https://easyprodigital.com/blog" target="_blank" rel="noopener noreferrer">
              {t.home.footerLinks.blog}
            </a>
            <a href="https://easyprodigital.com/contact" target="_blank" rel="noopener noreferrer">
              {t.home.footerLinks.contact}
            </a>
          </nav>
          <div className="ep-footer-contact">
            <a href="mailto:info@easyprodigital.com">info@easyprodigital.com</a>
            <a href="https://github.com/jesuscriss301" target="_blank" rel="noopener noreferrer">
              github.com/jesuscriss301
            </a>
          </div>
        </div>
        <div className="ep-footer-bottom">
          <span>
            © {new Date().getFullYear()} Easy Pro Digital · {t.home.footerRights}
          </span>
          <span className="ep-footer-legal">
            <a href="https://easyprodigital.com/privacy" target="_blank" rel="noopener noreferrer">
              Privacy
            </a>
            <span aria-hidden>·</span>
            <a href="https://easyprodigital.com/terms" target="_blank" rel="noopener noreferrer">
              Terms
            </a>
          </span>
        </div>
      </footer>
    </div>
  )
}
