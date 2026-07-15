import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import { profile, services, projects, site } from '../data/profile.js'

/* ============ bloques reutilizables ============ */

function ProjectList({ items }) {
  return (
    <div className="project-list">
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
                ? <span className="tag tag-public">Público</span>
                : p.private && <span className="tag">Privado</span>}
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
              {hasActions && (
                <div className="project-actions">
                  {p.url && (
                    <a className="btn btn-primary" href={p.url} target="_blank" rel="noopener noreferrer">
                      Ver proyecto en vivo ↗
                    </a>
                  )}
                  <a className="btn btn-ghost" href={p.repo} target="_blank" rel="noopener noreferrer">
                    Código en GitHub
                  </a>
                </div>
              )}
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
        title="Jesús Manuel Cristancho — Desarrollador Full-Stack Freelance | Easy Pro Digital"
        description="Desarrollador full-stack freelance creando aplicaciones web, móviles y SaaS para negocios en Colombia y LATAM. Con base en Medellín, comunicación directa y entrega completa."
        path="/"
        jsonLd={personJsonLd}
      />
      <div className="hero container">
        <p className="eyebrow">{profile.role}</p>
        <h1>
          Hola, soy <em>{profile.firstName}</em>. Construyo productos web, móviles y SaaS de principio a fin.
        </h1>
        <p className="hero-tagline">{profile.tagline}</p>
        <div className="hero-actions">
          <Link className="btn btn-primary" to="/portfolio/">Ver mi trabajo</Link>
          <Link className="btn btn-ghost" to="/contact/">Empezar un proyecto</Link>
        </div>
      </div>

      <section>
        <div className="container">
          <p className="eyebrow">Lo que hago</p>
          <h2 className="section-title">Servicios</h2>
          <div className="cap-grid">
            {services.map((s) => (
              <Link className="cap cap-link" key={s.id} to={`/services/#${s.id}`}>
                <h3>{s.title}</h3>
                <p>{s.short}</p>
                <span className="cap-more">Ver más →</span>
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
            <Link className="btn btn-ghost" to="/portfolio/">Ver todo el portafolio</Link>
          </div>
          <p className="portfolio-copy">
            Diseño sistemas para salud, minería, hostelería y comercio electrónico — combinando ingeniería backend, pensamiento de producto e IA aplicada.
          </p>
          <ProjectList items={projects.slice(0, 3)} />
        </div>
      </section>

      <section>
        <div className="container">
          <p className="eyebrow">Contacto</p>
          <h2 className="section-title">¿Tienes un proyecto en mente?</h2>
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
        title="Servicios — Web, Apps Móviles, SaaS, SEO e IA | Jesús Manuel Cristancho"
        description="Servicios de desarrollo freelance: desarrollo web, apps móviles, plataformas SaaS, SEO técnico y local, marketing digital e integraciones de IA para negocios en Colombia y LATAM."
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
        <p className="eyebrow">Servicios</p>
        <h1 className="section-title">Todo lo que tu producto necesita, desde un solo desarrollador</h1>
        <p className="page-intro">
          Los mismos servicios que Easy Pro Digital siempre ha ofrecido, ahora entregados
          directamente por mí, sin sobrecostos de agencia.
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
          <h2 className="section-title">¿Necesitas algo a medida?</h2>
          <Link className="btn btn-primary" to="/contact/">Hablemos</Link>
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
        title="Portafolio — Proyectos de Jesús Manuel Cristancho | Easy Pro Digital"
        description="Proyectos seleccionados de web, apps móviles y SaaS construidos de principio a fin por el desarrollador freelance Jesús Manuel Cristancho para clientes en Colombia y LATAM."
        path="/portfolio/"
      />
      <div className="page-head container">
        <p className="eyebrow">Portafolio</p>
        <h1 className="section-title">Trabajo seleccionado</h1>
        <p className="page-intro">
          Un catálogo en crecimiento de productos e integraciones que he construido de principio a fin para negocios que necesitan software confiable, no solo prototipos.
        </p>
      </div>
      <section className="first-section">
        <div className="container">
          <div className="portfolio-summary">
            <div className="portfolio-summary-card">
              <p className="eyebrow">En lo que enfoco</p>
              <h2>Productos web, automatizaciones y herramientas de IA que se lanzan.</h2>
              <p>Mi trabajo abarca plataformas a medida, e-commerce, SaaS y sistemas operativos con SEO y analítica integrados.</p>
            </div>
            <ul className="portfolio-stats">
              <li><strong>6+</strong><span>Proyectos entregados</span></li>
              <li><strong>Colombia &amp; LATAM</strong><span>Enfoque de clientes</span></li>
              <li><strong>De principio a fin</strong><span>Desde la estrategia hasta el despliegue</span></li>
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
        title="Sobre mí — Jesús Manuel Cristancho, Desarrollador Freelance"
        description="Desarrollador full-stack en Medellín, Colombia trabajando con clientes en Colombia y LATAM. De marca de agencia a práctica independiente: un desarrollador responsable de principio a fin."
        path="/about/"
        jsonLd={personJsonLd}
      />
      <div className="page-head container">
        <p className="eyebrow">Sobre mí</p>
        <h1 className="section-title">De marca de agencia a práctica freelance</h1>
      </div>
      <section className="first-section">
        <div className="container about-grid">
          <dl className="about-facts">
            <div className="fact"><dt>Nombre</dt><dd>{profile.name}</dd></div>
            <div className="fact"><dt>Base</dt><dd>{profile.location}</dd></div>
            <div className="fact"><dt>Zona horaria</dt><dd>{profile.timezoneLabel} — solapa con Colombia y LATAM</dd></div>
            <div className="fact"><dt>Trabajando con</dt><dd>Clientes en Colombia y LATAM</dd></div>
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
        title="Contacto — Contrata a Jesús Manuel Cristancho | Easy Pro Digital"
        description="Inicia un proyecto con el desarrollador full-stack freelance Jesús Manuel Cristancho. Email, WhatsApp y LinkedIn — comunicación directa, sin intermediarios."
        path="/contact/"
      />
      <div className="page-head container">
        <p className="eyebrow">Contacto</p>
        <h1 className="section-title">¿Tienes un proyecto en mente?</h1>
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
    privacy: { title: 'Política de privacidad', path: '/privacy/' },
    terms: { title: 'Términos de servicio', path: '/terms/' },
    cookies: { title: 'Política de cookies', path: '/cookies/' },
  }[kind]

  const content = {
    privacy: {
      intro: `Esta política de privacidad explica cómo ${profile.name}, operando como Easy Pro Digital, recopila, utiliza y protege tu información personal cuando visitas ${site.domain} o te pones en contacto conmigo sobre un proyecto.`,
      sections: [
        {
          title: 'Información que recopilo',
          paragraphs: [
            'Cuando te pones en contacto conmigo a través del sitio web, email, WhatsApp o redes sociales, puedo recopilar tu nombre, dirección de correo, número de teléfono, empresa y detalles de tu solicitud.',
            'También puedo recopilar información técnica como tu dirección IP, tipo de navegador, dispositivo, página de referencia e interacciones con el sitio por motivos de seguridad y analítica.',
          ],
        },
        {
          title: 'Cómo utilizo tu información',
          paragraphs: [
            'Utilizo tu información para responder tu consulta, preparar una propuesta, entregar servicios, comunicarme sobre tu proyecto y mejorar la calidad de mi trabajo.',
            'También puedo usarla para cumplir obligaciones legales y mantener la seguridad del sitio web y mis sistemas.',
          ],
        },
        {
          title: 'Compartir información',
          paragraphs: [
            'No vendo tus datos personales. Puedo compartir información limitada con proveedores de confianza como hosting, entrega de correo, analítica o plataformas de pago, solo cuando sea necesario para operar el sitio y cumplir con tu solicitud.',
          ],
        },
        {
          title: 'Tus derechos',
          paragraphs: [
            'Dependiendo de tu ubicación, puedes tener derecho a acceder, corregir, eliminar o restringir tus datos personales, así como a retirar tu consentimiento cuando aplique.',
            'Para ejercer estos derechos, contáctame al correo que aparece abajo.',
          ],
        },
        {
          title: 'Seguridad y conservación',
          paragraphs: [
            'Utilizo medidas técnicas y organizativas razonables para proteger tu información, aunque ninguna transmisión por internet es completamente segura.',
            'Conservo los datos personales solo durante el tiempo necesario para cumplir el propósito para el cual fueron recopilados o para atender una obligación legal.',
          ],
        },
      ],
      effectiveDate: 'July 7, 2026',
    },
    terms: {
      intro: `Estos términos de servicio rigen el uso de ${site.domain} y los servicios de desarrollo freelance que presto a través de Easy Pro Digital.`,
      sections: [
        {
          title: 'Alcance de los servicios',
          paragraphs: [
            'Presto servicios freelance como desarrollo web, aplicaciones móviles, plataformas SaaS, SEO, integraciones de IA y consultoría relacionada. El alcance específico, entregables, plazos y presupuesto se definirán en una propuesta, contrato o acuerdo escrito.',
          ],
        },
        {
          title: 'Flujo del proyecto',
          paragraphs: [
            'El trabajo comienza una vez se acuerdan alcance, precio y cronograma. Los retrasos por contenido faltante, retroalimentación tardía o aprobaciones pendientes pueden afectar las fechas de entrega.',
          ],
        },
        {
          title: 'Pagos y facturas',
          paragraphs: [
            'Los pagos se realizan según la propuesta o contrato acordado. Si un proyecto se factura por hitos, cada hito se vence según lo indicado en el acuerdo.',
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
