import { Link, useParams } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import Reveal from '../components/Reveal.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { articles, pickRelated } from '../data/articles.js'

const DEMO_BASE = 'https://demos.easyprodigital.com'

// Rótulos y copy del bloque de demo embebida. En español y en inglés.
const DEMO_CARD = {
  en: {
    eyebrow: 'See it live',
    body: 'I built a navigable example of a site in this niche that actually converts. Open it in a new tab and look at the hero and the call to action.',
    cta: 'Open the live example →',
  },
  es: {
    eyebrow: 'Mira cómo se ve en vivo',
    body: 'Armé un ejemplo navegable de una web de este nicho que sí convierte. Ábrelo en otra pestaña y fíjate en el titular y el llamado a la acción.',
    cta: 'Abrir el ejemplo en vivo →',
  },
}

/**
 * Página de un artículo. El contenido viene de src/data/articles.js (no de una
 * API en runtime) justamente para que el prerender escriba HTML real con
 * status 200 — cada ruta /blog/<slug>/ tiene que estar en ROUTE_PATHS de
 * scripts/prerender.mjs, que las toma del propio arreglo de artículos.
 */
export default function Article() {
  const { slug } = useParams()
  const { lang, href, t, data } = useLanguage()
  const article = articles.find((a) => a.slug === slug)

  if (!article) {
    return (
      <>
        <Seo title={t.article.notFoundTitle} description={t.article.notFoundText} path="/blog/" />
        <div className="page-head container">
          <h1>{t.article.notFoundTitle}</h1>
          <p className="page-intro">{t.article.notFoundText}</p>
          <Link className="btn btn-primary" to={href('/blog/')}>
            {t.article.backToBlog}
          </Link>
        </div>
      </>
    )
  }

  const content = article[lang] || article.en
  const tag = article.tag[lang] || article.tag.en
  const path = `/blog/${article.slug}/`

  // "Sigue leyendo": prioriza por tag (mismo nicho); si faltan, completa con
  // los listados en `related`; y si todavía faltan, con artículos cualesquiera.
  const related = pickRelated(article, 3)

  // Destino del CTA final: página de servicio si existe → demo si existe →
  // contacto como fallback. Siempre va a quedar en una página comercial.
  const ctaHref = article.relatedService
    ? href(`/services/${article.relatedService}/`)
    : article.relatedDemo
    ? `${DEMO_BASE}/${article.relatedDemo}/`
    : href('/contact/')
  const ctaExternal = !article.relatedService && !!article.relatedDemo

  // Punto de inserción de la tarjeta de demo: después del tercer bloque. Si el
  // artículo tiene menos de 4 bloques, va al final del cuerpo.
  const demoInsertAt = article.relatedDemo ? Math.min(3, content.body.length) : -1
  const demoCard = article.relatedDemo ? DEMO_CARD[lang] || DEMO_CARD.en : null

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: content.title,
    description: content.summary,
    datePublished: article.date,
    dateModified: article.date,
    articleSection: tag,
    mainEntityOfPage: {
      '@type': 'WebPage',
      '@id': data.site.domain + (lang === 'es' ? '/es' : '') + path,
    },
    author: { '@type': 'Person', name: data.profile.name },
    publisher: { '@type': 'Organization', name: data.site.brand, url: data.site.domain },
  }

  return (
    <>
      <Seo title={`${content.title} | ${data.site.brand}`} description={content.summary} path={path} jsonLd={jsonLd} />

      <article className="article">
        <div className="page-head container">
          <p className="eyebrow">{tag}</p>
          <h1>{content.title}</h1>
          <p className="page-intro">{content.summary}</p>
          <p className="article-meta">
            {t.article.publishedOn}{' '}
            <time dateTime={article.date}>
              {new Date(`${article.date}T12:00:00Z`).toLocaleDateString(lang === 'es' ? 'es-CO' : 'en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </time>
          </p>
        </div>

        <section className="first-section">
          <div className="container">
            <Reveal as="div" className="article-body">
              {content.body.map((block, i) => (
                <RenderBlock key={i} block={block} index={i} insertAt={demoInsertAt} demoCard={demoCard} demoSlug={article.relatedDemo} />
              ))}
            </Reveal>

            <div className="article-cta">
              <h2>{t.article.ctaTitle}</h2>
              <p>{t.article.ctaText}</p>
              {ctaExternal ? (
                <a className="btn btn-primary" href={ctaHref} target="_blank" rel="noopener">
                  {t.article.ctaButton}
                </a>
              ) : (
                <Link className="btn btn-primary" to={ctaHref}>
                  {t.article.ctaButton}
                </Link>
              )}
            </div>

            {related.length > 0 && (
              <div className="article-related">
                <h2>{t.article.related}</h2>
                <ul>
                  {related.map((a) => (
                    <li key={a.slug}>
                      <Link to={href(`/blog/${a.slug}/`)}>
                        <span className="article-related-tag">{a.tag[lang] || a.tag.en}</span>
                        <span className="article-related-title">{a[lang].title}</span>
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            <p className="article-back">
              <Link to={href('/blog/')}>← {t.article.backToBlog}</Link>
            </p>
          </div>
        </section>
      </article>
    </>
  )
}

// Renderiza un bloque y, si corresponde, inyecta la tarjeta de demo justo
// después de ese bloque. Mantiene la tarjeta en el HTML prerenderizado.
function RenderBlock({ block, index, insertAt, demoCard, demoSlug }) {
  const el = block.h ? <h2>{block.h}</h2> : <p>{block.p}</p>
  const inject = demoCard && index + 1 === insertAt
  if (!inject) return el
  return (
    <>
      {el}
      <aside className="article-demo-card" aria-label={demoCard.eyebrow}>
        <p className="article-demo-eyebrow">{demoCard.eyebrow}</p>
        <p className="article-demo-body">{demoCard.body}</p>
        <a className="article-demo-cta" href={`${DEMO_BASE}/${demoSlug}/`} target="_blank" rel="noopener">
          {demoCard.cta}
        </a>
      </aside>
    </>
  )
}
