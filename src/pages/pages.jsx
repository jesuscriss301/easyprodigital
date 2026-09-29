import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import Reveal from '../components/Reveal.jsx'
import SplitText from '../components/SplitText.jsx'
import LetterGlitch from '../components/LetterGlitch.jsx'
import {
  SiOpenjdk,
  SiSpring,
  SiPhp,
  SiLaravel,
  SiSymfony,
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiMysql,
  SiDocker,
  SiPython,
  SiGithub,
} from 'react-icons/si'
import { useLanguage } from '../i18n/LanguageContext.jsx'

/* Core stack shown in the About page's Logo Loop — mirrors the real stack
   listed across services/experience in profile data. Brand-accurate colors;
   the two "ink" ones (Symfony, GitHub) use the theme token so they flip
   correctly between light/dark mode instead of staying flat black. */
const STACK_LOGOS = [
  { node: <SiOpenjdk color="#437291" />, title: 'Java' },
  { node: <SiSpring color="#6DB33F" />, title: 'Spring Boot' },
  { node: <SiPhp color="#777BB4" />, title: 'PHP' },
  { node: <SiLaravel color="#FF2D20" />, title: 'Laravel' },
  { node: <SiSymfony color="var(--ink)" />, title: 'Symfony' },
  { node: <SiReact color="#61DAFB" />, title: 'React' },
  { node: <SiTypescript color="#3178C6" />, title: 'TypeScript' },
  { node: <SiNodedotjs color="#339933" />, title: 'Node.js' },
  { node: <SiMysql color="#4479A1" />, title: 'MySQL' },
  { node: <SiDocker color="#2496ED" />, title: 'Docker' },
  { node: <SiPython color="#3776AB" />, title: 'Python' },
  { node: <SiGithub color="var(--ink)" />, title: 'GitHub' },
]

/* Initials for the fallback monogram when there's no photo */
function initialsOf(name) {
  const parts = name.split(' ').filter(Boolean)
  return ((parts[0]?.[0] || '') + (parts[parts.length - 1]?.[0] || '')).toUpperCase()
}

/* Company "logo" badge for the experience cards. No real company logo
   files exist in the project (checked public/) and fetching/guessing
   official brand marks for former employers isn't reliable, so this
   generates a consistent initials badge instead — same idea as the avatar
   fallback above. Drop real files in public/logos/<company-slug>.png and
   swap this for an <img> if real logos become available. */
function companyBadge(company) {
  const clean = company.replace(/\(.*?\)/g, '').trim()
  const words = clean.split(/\s+/).filter((w) => !/^(de|del|la|y|s\.?a\.?s\.?)$/i.test(w))
  if (words.length >= 2) return (words[0][0] + words[1][0]).toUpperCase()
  return clean.slice(0, 2).toUpperCase()
}

function Avatar({ size = 'lg' }) {
  const { data } = useLanguage()
  const { profile } = data
  return (
    <div className="avatar-frame">
      {/* Small, cheap grid (~200 cells) — no perf impact even with the loop
          running; hard-cut (no smooth transitions) both for a crisper
          "glitch" look and to keep it lightweight. */}
      <div className="avatar-frame-bg" aria-hidden="true">
        <LetterGlitch
          glitchColors={['#0c2f5e', '#117ead', '#3ab1e8', '#c6f135']}
          glitchSpeed={90}
          smooth={false}
          centerVignette={false}
          outerVignette={false}
          characters="01"
        />
      </div>
      {profile.photo ? (
        <img
          className={`avatar avatar-${size}`}
          src={profile.photo}
          alt={profile.name}
          width="160"
          height="160"
        />
      ) : (
        <div className={`avatar avatar-${size} avatar-fallback`} aria-hidden="true">
          {initialsOf(profile.name)}
        </div>
      )}
    </div>
  )
}

/* ============ reusable blocks ============ */

function ProjectList({ items }) {
  const { t } = useLanguage()
  return (
    <Reveal as="div" className="project-list">
      {items.map((p) => {
        const hasActions = Boolean(p.repo)
        const Tag = p.url && !hasActions ? 'a' : 'div'
        const linkProps = Tag === 'a'
          ? { href: p.url, target: '_blank', rel: 'noopener noreferrer' }
          : {}
        return (
          <Tag key={p.id} className="project" {...linkProps}>
            <div className="project-top">
              <span className="project-year">{p.year}</span>
              <span className="project-type">{p.type}</span>
              {p.private === false
                ? <span className="tag tag-public">{t.common.public}</span>
                : p.private && <span className="tag">{t.common.private}</span>}
            </div>
            <div className="project-body">
              <h3 className="project-name">
                {p.name}
                {Tag === 'a' && <span className="arrow" aria-hidden="true">↗</span>}
              </h3>
              <p className="project-summary">{p.summary}</p>
              <div className="project-stack">
                {p.stack.map((s) => (
                  <span className="tag" key={s}>{s}</span>
                ))}
              </div>
              {p.demo && (
                <p className="project-demo">
                  <strong>{t.common.demoUser}:</strong> <code>{p.demo.user}</code>
                  <span className="project-demo-sep">·</span>
                  <strong>{t.common.demoPassword}:</strong> <code>{p.demo.password}</code>
                </p>
              )}
              {hasActions && (
                <div className="project-actions">
                  {p.url && (
                    <a className="btn btn-primary" href={p.url} target="_blank" rel="noopener noreferrer">
                      {t.common.viewLiveProject}
                    </a>
                  )}
                  <a className="btn btn-ghost" href={p.repo} target="_blank" rel="noopener noreferrer">
                    {t.common.viewCode}
                  </a>
                </div>
              )}
            </div>
          </Tag>
        )
      })}
    </Reveal>
  )
}

function buildPersonJsonLd({ profile, site, education }) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Person',
    name: profile.name,
    url: site.domain,
    jobTitle: profile.role,
    email: profile.email,
    ...(profile.photo ? { image: site.domain + profile.photo } : {}),
    address: {
      '@type': 'PostalAddress',
      addressLocality: 'Medellín',
      addressCountry: 'CO',
    },
    alumniOf: education.map((e) => ({ '@type': 'EducationalOrganization', name: e.school })),
    sameAs: [
      profile.linkedin,
      profile.tiktok,
      profile.github,
      profile.instagram,
      profile.facebook,
      profile.x,
      profile.reddit,
    ].filter(Boolean),
  }
}

/* ============ Home ============ */
export function Home() {
  const { href, data, t } = useLanguage()
  const { profile, services, projects } = data

  return (
    <>
      <Seo
        title={t.home.seoTitle}
        description={t.home.seoDescription}
        path="/"
        jsonLd={buildPersonJsonLd(data)}
      />
      <Reveal as="div" className="hero container" immediate>
        <p className="eyebrow">{profile.role}</p>
        <h1>
          {t.home.heroGreeting} <em>{profile.firstName}</em>{t.home.heroRest}
        </h1>
        <p className="hero-tagline">{profile.tagline}</p>
        <div className="hero-actions">
          <Link className="btn btn-primary" to={href('/portfolio/')}>{t.home.ctaViewWork}</Link>
          <Link className="btn btn-ghost" to={href('/contact/')}>{t.home.ctaStartProject}</Link>
        </div>
      </Reveal>

      <section>
        <div className="container">
          <p className="eyebrow">{t.home.servicesEyebrow}</p>
          <SplitText
            tag="h2"
            className="section-title"
            text={t.home.servicesTitle}
            textAlign="left"
            splitType="chars"
            delay={30}
            duration={0.8}
          />
          <Reveal as="div" className="cap-grid">
            {services.map((s) => (
              <Link className="cap cap-link" key={s.id} to={href(`/services/#${s.id}`)}>
                <h3>{s.title}</h3>
                <p>{s.short}</p>
                <span className="cap-more">{t.common.readMore}</span>
              </Link>
            ))}
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="portfolio-intro">
            <div>
              <p className="eyebrow">{t.home.portfolioEyebrow}</p>
              <h2 className="section-title">{t.home.portfolioTitle}</h2>
            </div>
            <Link className="btn btn-ghost" to={href('/portfolio/')}>{t.home.portfolioViewAll}</Link>
          </div>
          <p className="portfolio-copy">{t.home.portfolioCopy}</p>
          <ProjectList items={projects.slice(0, 3)} />
        </div>
      </section>

      <section className="home-cta">
        <div className="home-cta-bg">
          <LetterGlitch
            glitchColors={['#12406b', '#117ead', '#3ab1e8', '#c6f135']}
            glitchSpeed={110}
            centerVignette
            outerVignette
            smooth={false}
            fontSize={26}
            charWidth={20}
            charHeight={34}
          />
        </div>
        <div className="container home-cta-content">
          <p className="eyebrow">{t.home.contactEyebrow}</p>
          <h2 className="section-title">{t.home.contactTitle}</h2>
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
        </div>
      </section>
    </>
  )
}

/* ============ Services ============ */
export function Services() {
  const { lang, href, data, t } = useLanguage()
  const { profile, services, site } = data
  const areaServed = lang === 'es'
    ? ['CO', 'MX', 'AR', 'CL', 'PE', 'EC']
    : ['US', 'CA', 'CO', 'MX', 'AR', 'CL', 'PE', 'EC']

  return (
    <>
      <Seo
        title={t.services.seoTitle}
        description={t.services.seoDescription}
        path="/services/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          name: 'Easy Pro Digital — Jesús Manuel Cristancho',
          url: site.domain + '/services/',
          founder: { '@type': 'Person', name: profile.name },
          areaServed,
          makesOffer: services.map((s) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: s.title, description: s.short },
          })),
        }}
      />
      <div className="page-head container">
        <p className="eyebrow">{t.services.eyebrow}</p>
        <h1 className="section-title">{t.services.title}</h1>
        <p className="page-intro">{t.services.intro}</p>
      </div>
      {services.map((s, i) => (
        <section key={s.id} id={s.id} className={i === 0 ? 'first-section' : ''}>
          <Reveal as="div" className="container service-detail">
            <div>
              <h2 className="service-title">{s.title}</h2>
              <p className="service-text">{s.detail}</p>
              <div className="cap-stack">
                {s.stack.map((techName) => (
                  <span className="tag" key={techName}>{techName}</span>
                ))}
              </div>
            </div>
            <ul className="service-bullets">
              {s.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </Reveal>
        </section>
      ))}
      <section>
        <div className="container">
          <h2 className="section-title">{t.services.ctaTitle}</h2>
          <Link className="btn btn-primary" to={href('/contact/')}>{t.services.ctaButton}</Link>
        </div>
      </section>
    </>
  )
}

/* ============ Pricing ============ */
function formatPrice(n) {
  // 1.500 → "1,500" (comma-thousand for USD readability)
  return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

function PriceRange({ from, to, currency = 'USD' }) {
  if (from == null && to == null) return null
  const symbol = currency === 'USD' ? '$' : ''
  const suffix = currency === 'USD' ? ' USD' : ` ${currency}`
  if (from != null && to != null && from !== to) {
    return (
      <span className="pricing-amount">
        {symbol}{formatPrice(from)}<span className="pricing-sep">–</span>{symbol}{formatPrice(to)}
        <span className="pricing-currency">{suffix}</span>
      </span>
    )
  }
  const single = from ?? to
  return (
    <span className="pricing-amount">
      {symbol}{formatPrice(single)}<span className="pricing-currency">{suffix}</span>
    </span>
  )
}

function CategoryIcon({ name }) {
  const common = { width: 22, height: 22, viewBox: '0 0 24 24', fill: 'none', stroke: 'currentColor', strokeWidth: 1.75, strokeLinecap: 'round', strokeLinejoin: 'round', 'aria-hidden': true }
  if (name === 'store') {
    return (
      <svg {...common}>
        <path d="M3 9l1.5-4h15L21 9" />
        <path d="M4 9v10a1 1 0 0 0 1 1h14a1 1 0 0 0 1-1V9" />
        <path d="M9 20v-6h6v6" />
        <path d="M3 9a3 3 0 0 0 6 0 3 3 0 0 0 6 0 3 3 0 0 0 6 0" />
      </svg>
    )
  }
  if (name === 'gear') {
    return (
      <svg {...common}>
        <circle cx="12" cy="12" r="3" />
        <path d="M19.4 15a1.7 1.7 0 0 0 .3 1.9l.1.1a2 2 0 1 1-2.8 2.8l-.1-.1a1.7 1.7 0 0 0-1.9-.3 1.7 1.7 0 0 0-1 1.5V21a2 2 0 1 1-4 0v-.1a1.7 1.7 0 0 0-1-1.5 1.7 1.7 0 0 0-1.9.3l-.1.1a2 2 0 1 1-2.8-2.8l.1-.1a1.7 1.7 0 0 0 .3-1.9 1.7 1.7 0 0 0-1.5-1H3a2 2 0 1 1 0-4h.1a1.7 1.7 0 0 0 1.5-1 1.7 1.7 0 0 0-.3-1.9l-.1-.1a2 2 0 1 1 2.8-2.8l.1.1a1.7 1.7 0 0 0 1.9.3H9a1.7 1.7 0 0 0 1-1.5V3a2 2 0 1 1 4 0v.1a1.7 1.7 0 0 0 1 1.5 1.7 1.7 0 0 0 1.9-.3l.1-.1a2 2 0 1 1 2.8 2.8l-.1.1a1.7 1.7 0 0 0-.3 1.9V9c.36.16.68.4.92.71" />
      </svg>
    )
  }
  return (
    <svg {...common}>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3a14 14 0 0 1 0 18M12 3a14 14 0 0 0 0 18" />
    </svg>
  )
}

function PricingCard({ item, labels, href }) {
  const isRecurring = item.setupFrom != null || item.monthlyFrom != null
  return (
    <div className={`pricing-card${item.featured ? ' pricing-card--featured' : ''}`}>
      {item.featured && (
        <span className="pricing-badge">{labels.popular}</span>
      )}
      <div className="pricing-card-head">
        <h3 className="pricing-card-name">{item.name}</h3>
        <p className="pricing-card-tagline">{item.tagline}</p>
      </div>

      <div className="pricing-price-block">
        {isRecurring ? (
          <>
            {item.setupFrom != null && (
              <div className="pricing-price-row">
                <span className="pricing-price-label">{labels.setup}</span>
                <PriceRange from={item.setupFrom} to={item.setupTo} currency={item.currency} />
              </div>
            )}
            {item.monthlyFrom != null && (
              <div className="pricing-price-row">
                <span className="pricing-price-label">{labels.from}</span>
                <span className="pricing-monthly">
                  <PriceRange from={item.monthlyFrom} to={item.monthlyTo} currency={item.currency} />
                  <span className="pricing-per">{labels.monthly}</span>
                </span>
              </div>
            )}
          </>
        ) : (
          <div className="pricing-price-row">
            <span className="pricing-price-label">{labels.from}</span>
            <PriceRange from={item.priceFrom} to={item.priceTo} currency={item.currency} />
          </div>
        )}
      </div>

      {item.delivery && (
        <p className="pricing-delivery">
          <span className="pricing-delivery-label">{labels.delivery}:</span> {item.delivery}
        </p>
      )}

      <p className="pricing-includes-label">{labels.includes}</p>
      <ul className="pricing-features">
        {item.features.map((f) => (
          <li key={f}>
            <svg viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
              <polyline points="20 6 9 17 4 12" />
            </svg>
            <span>{f}</span>
          </li>
        ))}
      </ul>

      <Link
        className={`btn ${item.featured ? 'btn-primary' : 'btn-ghost'} pricing-cta`}
        to={`${href('/contact/')}?service=${encodeURIComponent(item.id)}`}
      >
        {labels.quote}
      </Link>
    </div>
  )
}

function RecurringPlanTable({ block, labels, t }) {
  const title = block.titleKey ? labels[block.titleKey] : block.title
  return (
    <div className="pricing-recurring">
      <h3 className="pricing-recurring-title">{title}</h3>
      <div className="pricing-recurring-grid">
        {block.plans.map((plan) => (
          <div key={plan.name} className="pricing-plan">
            <p className="pricing-plan-name">{plan.name}</p>
            <p className="pricing-plan-price">
              <PriceRange from={plan.price} currency={plan.currency} />
              <span className="pricing-per">{labels.monthly}</span>
            </p>
            <ul className="pricing-plan-features">
              {plan.features.map((f) => (
                <li key={f}>{f}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  )
}

export function Pricing() {
  const { href, data, t } = useLanguage()
  const { pricing, site, profile, services } = data
  const { labels } = pricing

  return (
    <>
      <Seo
        title={t.pricingMeta.seoTitle}
        description={t.pricingMeta.seoDescription}
        path="/pricing/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'PriceSpecification',
          name: pricing.title,
          url: site.domain + '/pricing/',
          priceCurrency: 'USD',
          provider: { '@type': 'Person', name: profile.name },
        }}
      />
      <div className="page-head container">
        <p className="eyebrow">{pricing.eyebrow}</p>
        <h1 className="section-title">{pricing.title}</h1>
        <p className="page-intro">{pricing.intro}</p>
        <nav className="pricing-nav" aria-label={pricing.eyebrow}>
          {pricing.categories.map((c) => (
            <a key={c.id} className="pricing-nav-pill" href={`#${c.id}`}>
              <CategoryIcon name={c.icon} />
              <span>{c.label}</span>
            </a>
          ))}
        </nav>
        <p className="pricing-currency-note">{pricing.currencyNote}</p>
      </div>

      {pricing.categories.map((category, i) => (
        <section key={category.id} id={category.id} className={i === 0 ? 'first-section pricing-section' : 'pricing-section'}>
          <div className="container">
            <div className="pricing-category-head">
              <span className="pricing-category-icon" aria-hidden="true">
                <CategoryIcon name={category.icon} />
              </span>
              <div>
                <p className="eyebrow">{pricing.tabs[category.tab]}</p>
                <h2 className="section-title pricing-category-title">{category.label}</h2>
                {category.note && <p className="pricing-category-note">{category.note}</p>}
              </div>
            </div>

            <Reveal as="div" className="pricing-grid">
              {category.items.map((item) => (
                <PricingCard key={item.id} item={item} labels={labels} href={href} />
              ))}
            </Reveal>

            {category.recurring && (
              <RecurringPlanTable block={category.recurring} labels={labels} t={t} />
            )}
          </div>
        </section>
      ))}

      <section className="home-cta">
        <div className="home-cta-bg">
          <LetterGlitch
            glitchColors={['#12406b', '#117ead', '#3ab1e8', '#c6f135']}
            glitchSpeed={110}
            centerVignette
            outerVignette
            smooth={false}
            fontSize={26}
            charWidth={20}
            charHeight={34}
          />
        </div>
        <div className="container home-cta-content">
          <p className="eyebrow">{labels.quoteCustom}</p>
          <h2 className="section-title">{pricing.ctaTitle}</h2>
          <p className="pricing-cta-copy">{pricing.ctaCopy}</p>
          <Link className="btn btn-primary" to={href('/contact/')}>{labels.quoteCustomCta}</Link>
        </div>
      </section>
    </>
  )
}

/* ============ Portfolio ============ */
export function Portfolio() {
  const { data, t } = useLanguage()
  const { projects, nicheDemos } = data

  return (
    <>
      <Seo
        title={t.portfolio.seoTitle}
        description={t.portfolio.seoDescription}
        path="/portfolio/"
      />
      <div className="page-head container">
        <p className="eyebrow">{t.portfolio.eyebrow}</p>
        <h1 className="section-title">{t.portfolio.title}</h1>
        <p className="page-intro">{t.portfolio.intro}</p>
      </div>
      <section className="first-section">
        <div className="container">
          <div className="portfolio-summary">
            <div className="portfolio-summary-card">
              <p className="eyebrow">{t.portfolio.focusEyebrow}</p>
              <h2>{t.portfolio.focusTitle}</h2>
              <p>{t.portfolio.focusCopy}</p>
            </div>
            <ul className="portfolio-stats">
              <li><strong>+50</strong><span>{t.portfolio.statDelivered}</span></li>
              <li><strong>{t.portfolio.statFocusValue}</strong><span>{t.portfolio.statFocusLabel}</span></li>
              <li><strong>{t.portfolio.statEndToEndValue}</strong><span>{t.portfolio.statEndToEndLabel}</span></li>
            </ul>
          </div>
          <ProjectList items={projects} />
        </div>
      </section>

      {nicheDemos && nicheDemos.length > 0 && (
        <section>
          <div className="container">
            <p className="eyebrow">{t.portfolio.nicheEyebrow}</p>
            <h2 className="section-title">{t.portfolio.nicheTitle}</h2>
            <p className="page-intro">{t.portfolio.nicheIntro}</p>
            <Reveal as="div" className="niche-demo-grid">
              {nicheDemos.map((d) => (
                <a
                  key={d.slug}
                  className="niche-demo-card"
                  href={d.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <span className="tag">{d.niche}</span>
                  <h3>{d.brand}</h3>
                  <p>{d.summary}</p>
                  <span className="niche-demo-cta">{t.portfolio.nicheCta}</span>
                </a>
              ))}
            </Reveal>
          </div>
        </section>
      )}
    </>
  )
}

/* ============ About ============ */
export function About() {
  const { data, t } = useLanguage()
  const { profile, experience, education } = data

  return (
    <>
      <Seo
        title={t.about.seoTitle}
        description={t.about.seoDescription}
        path="/about/"
        jsonLd={buildPersonJsonLd(data)}
      />
      <div className="page-head container">
        <p className="eyebrow">{t.about.eyebrow}</p>
        <h1 className="section-title">{t.about.title}</h1>
      </div>
      <section className="first-section">
        <div className="container about-grid">
          <div className="about-side">
            <Avatar size="lg" />
            <dl className="about-facts">
              <div className="fact"><dt>{t.about.factName}</dt><dd>{profile.name}</dd></div>
              <div className="fact"><dt>{t.about.factBase}</dt><dd>{profile.location}</dd></div>
              <div className="fact"><dt>{t.about.factTimezone}</dt><dd>{profile.timezoneLabel}{t.about.timezoneSuffix}</dd></div>
              <div className="fact"><dt>{t.about.factWorkingWith}</dt><dd>{t.about.workingWithValue}</dd></div>
              <div className="fact">
                <dt>{t.about.factGithub}</dt>
                <dd>
                  <a href={profile.github} target="_blank" rel="noopener noreferrer">
                    {profile.github.replace('https://', '')}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
          <div className="about-copy">
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>

      <section className="first-section">
        <div className="container about-grid">
            <div className="stack-loop">
              <p className="eyebrow">{t.about.stackEyebrow}</p>
              <div className="stack-carousel" role="list" aria-label={t.about.stackEyebrow}>
                {STACK_LOGOS.map((item) => (
                  <div className="stack-carousel-item" role="listitem" key={item.title}>
                    <span className="stack-carousel-icon">{item.node}</span>
                    <span className="stack-carousel-label">{item.title}</span>
                  </div>
                ))}
              </div>
            </div>
        </div>
      </section>

      <section>
        <div className="container">
          <p className="eyebrow">{t.about.experienceEyebrow}</p>
          <h2 className="section-title">{t.about.experienceTitle}</h2>
          <Reveal as="div" className="experience-cards">
            {experience.map((job) => (
              <div className="experience-card" key={job.company + job.period}>
                <div className="experience-card-head">
                  {job.logo ? (
                    <span className="experience-card-logo experience-card-logo--image">
                      <img src={job.logo} alt="" loading="lazy" />
                    </span>
                  ) : (
                    <span className="experience-card-logo experience-card-logo--initials" aria-hidden="true">
                      {companyBadge(job.company)}
                    </span>
                  )}
                  <div className="experience-card-titles">
                    <h3>{job.role}</h3>
                    <p className="experience-card-company">{job.company}</p>
                  </div>
                  <span className="experience-card-period">{job.period}</span>
                </div>
                <ul className="experience-card-bullets">
                  {job.bullets.map((b) => (
                    <li key={b}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </Reveal>
        </div>
      </section>

      <section>
        <div className="container">
          <p className="eyebrow">{t.about.educationEyebrow}</p>
          <h2 className="section-title">{t.about.educationTitle}</h2>
          <dl className="about-facts education-facts">
            {education.map((e) => (
              <div className="fact" key={e.title}>
                <dt>{e.title}</dt>
                <dd>{e.school} · {e.period}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </>
  )
}

/* ============ Contact ============ */
export function Contact() {
  const { data, t } = useLanguage()
  const { profile } = data

  return (
    <>
      <Seo
        title={t.contact.seoTitle}
        description={t.contact.seoDescription}
        path="/contact/"
      />
      <div className="page-head container">
        <p className="eyebrow">{t.contact.eyebrow}</p>
        <h1 className="section-title">{t.contact.title}</h1>
      </div>
      <section className="first-section contact">
        <div className="container">
          <a className="contact-email" href={`mailto:${profile.email}`}>
            {profile.email}
          </a>
          <div className="contact-links">
            <a href={profile.whatsapp} target="_blank" rel="noopener noreferrer">WhatsApp</a>
            <a href={profile.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a href={profile.tiktok} target="_blank" rel="noopener noreferrer">TikTok</a>
            <a href={profile.github} target="_blank" rel="noopener noreferrer">GitHub</a>
          </div>
        </div>
      </section>
    </>
  )
}

/* ============ FAQ ============ */
export function Faq() {
  const { t } = useLanguage()
  const { items } = t.faq

  return (
    <>
      <Seo
        title={t.faq.seoTitle}
        description={t.faq.seoDescription}
        path="/faq/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'FAQPage',
          mainEntity: items.map((item) => ({
            '@type': 'Question',
            name: item.q,
            acceptedAnswer: { '@type': 'Answer', text: item.a },
          })),
        }}
      />
      <div className="page-head container">
        <p className="eyebrow">{t.faq.eyebrow}</p>
        <h1 className="section-title">{t.faq.title}</h1>
        <p className="page-intro">{t.faq.intro}</p>
      </div>
      <section className="first-section">
        <Reveal as="div" className="container faq-list">
          {items.map((item) => (
            <details className="faq-item" key={item.q}>
              <summary>{item.q}</summary>
              <p>{item.a}</p>
            </details>
          ))}
        </Reveal>
      </section>
    </>
  )
}

/* ============ Legal (Privacy / Terms / Cookies) ============ */
export function Legal({ kind }) {
  const { data, t } = useLanguage()
  const { profile, site } = data
  const meta = t.legal.meta[kind]
  const content = t.legal.content[kind]
  const intro = kind === 'privacy' ? content.intro(profile.name, site.domain) : content.intro(site.domain)

  return (
    <>
      <Seo
        title={`${meta.title} | Easy Pro Digital`}
        description={`${meta.title} ${t.legal.seoDescriptionSuffix}`}
        path={meta.path}
      />
      <div className="page-head container">
        <p className="eyebrow">{t.legal.eyebrow}</p>
        <h1 className="section-title">{meta.title}</h1>
      </div>
      <section className="first-section">
        <div className="container legal-copy">
          <p>{intro}</p>
          {content.sections.map((section) => (
            <div key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph, index) => (
                <p key={`${section.title}-${index}`}>{paragraph}</p>
              ))}
            </div>
          ))}
          <p>
            <strong>{t.legal.effectiveDateLabel}</strong> {content.effectiveDate}
          </p>
          <p>
            {t.legal.questionsPrefix}{' '}
            <a href={`mailto:${profile.email}`}>{profile.email}</a>.
          </p>
        </div>
      </section>
    </>
  )
}

/* ============ 404 ============ */
export function NotFound() {
  const { href, t } = useLanguage()
  return (
    <>
      <Seo
        title={t.notFound.seoTitle}
        description={t.notFound.seoDescription}
        path="/404"
      />
      <section className="first-section notfound">
        <div className="container">
          <p className="notfound-code" aria-hidden="true">404</p>
          <h1 className="section-title">{t.notFound.title}</h1>
          <p className="page-intro">{t.notFound.intro}</p>
          <Link className="btn btn-primary" to={href('/')}>{t.notFound.goHome}</Link>
        </div>
      </section>
    </>
  )
}
