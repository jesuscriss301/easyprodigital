import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import { profile, services, projects, site } from '../data/profile.js'

/* ============ bloques reutilizables ============ */

function ProjectList({ items }) {
  return (
    <div className="project-list">
      {items.map((p) => {
        const Tag = p.url ? 'a' : 'div'
        const linkProps = p.url
          ? { href: p.url, target: '_blank', rel: 'noopener noreferrer' }
          : {}
        return (
          <Tag key={p.id} className="project" {...linkProps}>
            <div className="project-top">
              <span className="project-year">{p.year}</span>
              <span className="project-type">{p.type}</span>
            </div>
            <div className="project-body">
              <h3 className="project-name">
                {p.name}
                {p.url && <span className="arrow" aria-hidden="true">↗</span>}
              </h3>
              <p className="project-summary">{p.summary}</p>
              <div className="project-stack">
                {p.stack.map((s) => (
                  <span className="tag" key={s}>{s}</span>
                ))}
              </div>
            </div>
          </Tag>
        )
      })}
    </div>
  )
}

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: profile.name,
  url: site.domain,
  jobTitle: profile.role,
  email: profile.email,
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Medellín',
    addressCountry: 'CO',
  },
  sameAs: [profile.linkedin, profile.tiktok, profile.github],
}

/* ============ Home ============ */
export function Home() {
  return (
    <>
      <Seo
        title="Jesús Manuel Cristancho — Freelance Full-Stack Developer | Easy Pro Digital"
        description="Freelance full-stack developer building web apps, mobile apps and SaaS for businesses in the US and Canada. Based in Medellín, Colombia. Direct communication, end-to-end delivery."
        path="/"
        jsonLd={personJsonLd}
      />
      <div className="hero container">
        <p className="eyebrow">{profile.role}</p>
        <h1>
          Hi, I'm <em>{profile.firstName}</em>. I build web, mobile &amp; SaaS
          products end to end.
        </h1>
        <p className="hero-tagline">{profile.tagline}</p>
        <div className="hero-actions">
          <Link className="btn btn-primary" to="/portfolio/">See my work</Link>
          <Link className="btn btn-ghost" to="/contact/">Start a project</Link>
        </div>
      </div>

      <section>
        <div className="container">
          <p className="eyebrow">What I do</p>
          <h2 className="section-title">Services</h2>
          <div className="cap-grid">
            {services.map((s) => (
              <Link className="cap cap-link" key={s.id} to={`/services/#${s.id}`}>
                <h3>{s.title}</h3>
                <p>{s.short}</p>
                <span className="cap-more">Learn more →</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section>
        <div className="container">
          <div className="portfolio-intro">
            <div>
              <p className="eyebrow">Portfolio</p>
              <h2 className="section-title">Selected work that solves real business problems</h2>
            </div>
            <Link className="btn btn-ghost" to="/portfolio/">See the full portfolio</Link>
          </div>
          <p className="portfolio-copy">
            I build systems for healthcare, mining, hospitality and e-commerce — combining backend engineering, product thinking and applied AI.
          </p>
          <ProjectList items={projects.slice(0, 3)} />
        </div>
      </section>

      <section>
        <div className="container">
          <p className="eyebrow">Contact</p>
          <h2 className="section-title">Have a project in mind?</h2>
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
  return (
    <>
      <Seo
        title="Services — Web, Mobile, SaaS, SEO & AI | Jesús Manuel Cristancho"
        description="Freelance development services: web development, mobile apps, SaaS platforms, technical & local SEO, digital marketing and AI integrations for US & Canada businesses."
        path="/services/"
        jsonLd={{
          '@context': 'https://schema.org',
          '@type': 'ProfessionalService',
          name: 'Easy Pro Digital — Jesús Manuel Cristancho',
          url: site.domain + '/services/',
          founder: { '@type': 'Person', name: profile.name },
          areaServed: ['US', 'CA'],
          makesOffer: services.map((s) => ({
            '@type': 'Offer',
            itemOffered: { '@type': 'Service', name: s.title, description: s.short },
          })),
        }}
      />
      <div className="page-head container">
        <p className="eyebrow">Services</p>
        <h1 className="section-title">Everything your product needs, from one developer</h1>
        <p className="page-intro">
          The same services Easy Pro Digital has always offered — now delivered
          directly by me, without agency overhead.
        </p>
      </div>
      {services.map((s, i) => (
        <section key={s.id} id={s.id} className={i === 0 ? 'first-section' : ''}>
          <div className="container service-detail">
            <div>
              <h2 className="service-title">{s.title}</h2>
              <p className="service-text">{s.detail}</p>
              <div className="cap-stack">
                {s.stack.map((t) => (
                  <span className="tag" key={t}>{t}</span>
                ))}
              </div>
            </div>
            <ul className="service-bullets">
              {s.bullets.map((b) => (
                <li key={b}>{b}</li>
              ))}
            </ul>
          </div>
        </section>
      ))}
      <section>
        <div className="container">
          <h2 className="section-title">Need something custom?</h2>
          <Link className="btn btn-primary" to="/contact/">Let's talk</Link>
        </div>
      </section>
    </>
  )
}

/* ============ Portfolio ============ */
export function Portfolio() {
  return (
    <>
      <Seo
        title="Portfolio — Projects by Jesús Manuel Cristancho | Easy Pro Digital"
        description="Selected web, mobile and SaaS projects built end to end by freelance developer Jesús Manuel Cristancho for clients in the US and Canada."
        path="/portfolio/"
      />
      <div className="page-head container">
        <p className="eyebrow">Portfolio</p>
        <h1 className="section-title">Selected work</h1>
        <p className="page-intro">
          A growing catalog of products and integrations I’ve built end to end for businesses that need reliable software, not just prototypes.
        </p>
      </div>
      <section className="first-section">
        <div className="container">
          <div className="portfolio-summary">
            <div className="portfolio-summary-card">
              <p className="eyebrow">What I focus on</p>
              <h2>Web products, automations and AI tools that ship.</h2>
              <p>My work spans custom platforms, e-commerce, SaaS and operational systems with SEO and analytics baked in.</p>
            </div>
            <ul className="portfolio-stats">
              <li><strong>6+</strong><span>Projects delivered</span></li>
              <li><strong>US &amp; Canada</strong><span>Client focus</span></li>
              <li><strong>End to end</strong><span>From strategy to deployment</span></li>
            </ul>
          </div>
          <ProjectList items={projects} />
        </div>
      </section>
    </>
  )
}

/* ============ About ============ */
export function About() {
  return (
    <>
      <Seo
        title="About — Jesús Manuel Cristancho, Freelance Developer"
        description="Full-stack developer in Medellín, Colombia working with US & Canada clients. From agency brand to independent practice: one developer, accountable end to end."
        path="/about/"
        jsonLd={personJsonLd}
      />
      <div className="page-head container">
        <p className="eyebrow">About</p>
        <h1 className="section-title">From agency brand to freelance practice</h1>
      </div>
      <section className="first-section">
        <div className="container about-grid">
          <dl className="about-facts">
            <div className="fact"><dt>Name</dt><dd>{profile.name}</dd></div>
            <div className="fact"><dt>Based in</dt><dd>{profile.location}</dd></div>
            <div className="fact"><dt>Timezone</dt><dd>{profile.timezoneLabel} — overlaps US &amp; Canada</dd></div>
            <div className="fact"><dt>Working with</dt><dd>Clients in the US &amp; Canada</dd></div>
            <div className="fact">
              <dt>GitHub</dt>
              <dd>
                <a href={profile.github} target="_blank" rel="noopener noreferrer">
                  {profile.github.replace('https://', '')}
                </a>
              </dd>
            </div>
          </dl>
          <div className="about-copy">
            {profile.about.map((p, i) => (
              <p key={i}>{p}</p>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

/* ============ Contact ============ */
export function Contact() {
  return (
    <>
      <Seo
        title="Contact — Hire Jesús Manuel Cristancho | Easy Pro Digital"
        description="Start a project with freelance full-stack developer Jesús Manuel Cristancho. Email, WhatsApp and LinkedIn — direct communication, no intermediaries."
        path="/contact/"
      />
      <div className="page-head container">
        <p className="eyebrow">Contact</p>
        <h1 className="section-title">Have a project in mind?</h1>
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

/* ============ Legal (Privacy / Terms / Cookies) ============ */
export function Legal({ kind }) {
  const meta = {
    privacy: { title: 'Privacy Policy', path: '/privacy/' },
    terms: { title: 'Terms of Service', path: '/terms/' },
    cookies: { title: 'Cookie Policy', path: '/cookies/' },
  }[kind]

  const content = {
    privacy: {
      intro: `This Privacy Policy explains how ${profile.name}, operating as Easy Pro Digital, collects, uses and protects your personal information when you visit ${site.domain} or contact me about a project.`,
      sections: [
        {
          title: 'Information I collect',
          paragraphs: [
            'When you contact me through the website, email, WhatsApp or social media, I may collect your name, email address, phone number, company and the details of your request.',
            'I may also collect technical information such as your IP address, browser type, device, referring page and interactions with the site for security and analytics purposes.',
          ],
        },
        {
          title: 'How I use your information',
          paragraphs: [
            'I use your information to answer your inquiry, prepare a proposal, deliver services, communicate about your project and improve the quality of my work.',
            'I may also use it to comply with legal obligations and to maintain the security of the website and my systems.',
          ],
        },
        {
          title: 'Sharing of information',
          paragraphs: [
            'I do not sell your personal data. I may share limited information with trusted service providers such as hosting, email delivery, analytics or payment platforms, only when this is necessary to operate the site and fulfill your request.',
          ],
        },
        {
          title: 'Your rights',
          paragraphs: [
            'Depending on your location, you may have the right to access, correct, delete or restrict your personal data, as well as to withdraw consent where applicable.',
            'To exercise these rights, please contact me at the email below.',
          ],
        },
        {
          title: 'Security and retention',
          paragraphs: [
            'I use reasonable technical and organizational measures to protect your information, although no transmission over the internet is completely secure.',
            'I keep personal data only for as long as necessary to fulfill the purpose for which it was collected or to meet a legal obligation.',
          ],
        },
      ],
      effectiveDate: 'July 7, 2026',
    },
    terms: {
      intro: `These Terms of Service govern the use of ${site.domain} and the freelance development services I provide through Easy Pro Digital.`,
      sections: [
        {
          title: 'Scope of services',
          paragraphs: [
            'I provide freelance services such as web development, mobile applications, SaaS platforms, SEO, AI integrations and related consulting. The specific scope, deliverables, deadlines and budget will be defined in a proposal, contract or written agreement.',
          ],
        },
        {
          title: 'Project workflow',
          paragraphs: [
            'Work begins once the scope, price and timeline are agreed. Delays caused by missing content, late feedback or pending approvals may affect delivery dates.',
          ],
        },
        {
          title: 'Payments and invoices',
          paragraphs: [
            'Payments are made according to the agreed proposal or contract. If a project is billed in milestones, each milestone is due as stated in the agreement.',
          ],
        },
        {
          title: 'Intellectual property',
          paragraphs: [
            'You will own the final deliverables once the agreed payments have been completed, unless otherwise stated in writing. I retain rights over my general tools, templates, methods and pre-existing materials.',
          ],
        },
        {
          title: 'Confidentiality and liability',
          paragraphs: [
            'I will keep your sensitive information confidential, except where disclosure is required by law. I am not liable for indirect, incidental or consequential damages arising from the use of the site or services, including lost profits, business interruption or data loss.',
          ],
        },
        {
          title: 'Governing law',
          paragraphs: [
            'These terms are governed by the laws of Colombia, unless a different agreement is signed with you. Any dispute will be resolved in accordance with the applicable law and the agreed contract.',
          ],
        },
      ],
      effectiveDate: 'July 7, 2026',
    },
    cookies: {
      intro: `This Cookie Policy explains how ${site.domain} uses cookies and similar technologies to improve your browsing experience and understand how the site is used.`,
      sections: [
        {
          title: 'What are cookies?',
          paragraphs: [
            'Cookies are small text files stored on your device to remember preferences and help websites function more efficiently.',
          ],
        },
        {
          title: 'What I use them for',
          paragraphs: [
            'I use cookies to keep the site functioning, remember your preferences, understand anonymous traffic and improve the overall experience.',
          ],
        },
        {
          title: 'Types of cookies',
          paragraphs: [
            'Essential cookies are required for the site to work. Analytics cookies help me understand traffic and performance. Functional cookies remember your choices. Marketing cookies may be used only if I activate ad or campaign tracking in the future.',
          ],
        },
        {
          title: 'Your choices',
          paragraphs: [
            'You can manage or disable cookies through your browser settings. Blocking some cookies may limit certain features of the website.',
          ],
        },
        {
          title: 'Third-party cookies',
          paragraphs: [
            'If I use analytics or external services, they may place their own cookies according to their own privacy policies.',
          ],
        },
      ],
      effectiveDate: 'July 7, 2026',
    },
  }[kind]

  return (
    <>
      <Seo
        title={`${meta.title} | Easy Pro Digital`}
        description={`${meta.title} for easyprodigital.com, the personal site of freelance developer Jesús Manuel Cristancho.`}
        path={meta.path}
      />
      <div className="page-head container">
        <p className="eyebrow">Legal</p>
        <h1 className="section-title">{meta.title}</h1>
      </div>
      <section className="first-section">
        <div className="container legal-copy">
          <p>{content.intro}</p>
          {content.sections.map((section) => (
            <div key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs.map((paragraph, index) => (
                <p key={`${section.title}-${index}`}>{paragraph}</p>
              ))}
            </div>
          ))}
          <p>
            <strong>Effective date:</strong> {content.effectiveDate}
          </p>
          <p>
            If you have questions, write to{' '}
            <a href={`mailto:${profile.email}`}>{profile.email}</a>.
          </p>
        </div>
      </section>
    </>
  )
}

/* ============ 404 ============ */
export function NotFound() {
  return (
    <>
      <Seo
        title="404 — Page not found | Easy Pro Digital"
        description="The page you are looking for could not be found."
        path="/404"
      />
      <section className="first-section notfound">
        <div className="container">
          <p className="notfound-code" aria-hidden="true">404</p>
          <h1 className="section-title">This page doesn't exist</h1>
          <p className="page-intro">The page you're looking for was moved or never existed.</p>
          <Link className="btn btn-primary" to="/">Go home</Link>
        </div>
      </section>
    </>
  )
}
