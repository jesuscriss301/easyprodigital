import { Link, Navigate, useParams } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import Reveal from '../components/Reveal.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { articles, pickRelated } from '../data/articles.js'
import { articleSeoTitles, metaDescription } from '../data/articleSeo.js'

const DEMO_BASE = 'https://demos.easyprodigital.com'

// Rutas de primer nivel de las páginas de ciudad (solo en español). No viven
// bajo /services/, así que el CTA de un artículo que las referencia debe
// enlazarlas como /<slug>/ y no como /services/<slug>/.
const CITY_SERVICE_ROUTES = new Set([
  'paginas-web-medellin',
  'consultoria-ia',
  'consultoria-ia-medellin',
  'consultoria-ia-cucuta',
  'consultoria-ia-bucaramanga',
])

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
 * status 200 — las rutas /blog/<slug>/ se derivan de ese mismo arreglo en
 * scripts/prerender.mjs, solo en el idioma en que exista el artículo.
 */
export default function Article() {
  const { slug } = useParams()
  const { lang, href, t, data } = useLanguage()
  const article = articles.find((a) => a.slug === slug)

  if (!article) {
    return (
      <>
        <Seo title={t.article.notFoundTitle} description={t.article.notFoundText} path="/blog/" noindex />
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

  // Artículo de un solo idioma: si se pide en el otro, se redirige a la URL
  // que sí existe. El idioma de la ruta manda; no se sirve contenido traducido
  // a medias ni se deja la URL equivocada indexable.
  if (article.onlyLang && article.onlyLang !== lang) {
    const target = article.onlyLang === 'es' ? `/es/blog/${article.slug}/` : `/blog/${article.slug}/`
    return <Navigate to={target} replace />
  }

  const content = article[lang] || article[article.onlyLang] || article.en || article.es
  const tag = article.tag[lang] || article.tag.en
  const path = `/blog/${article.slug}/`

  // "Sigue leyendo": prioriza por tag (mismo nicho); si faltan, completa con
  // los listados en `related`; y si todavía faltan, con artículos cualesquiera.
  // Solo entran los artículos que existen en el idioma actual.
  const related = pickRelated(article, 3, lang)

  // Destino del CTA final: página de servicio o de ciudad si existe → demo si
  // existe → contacto como fallback. Siempre va a quedar en una página comercial.
  const servicePath = article.relatedService
    ? CITY_SERVICE_ROUTES.has(article.relatedService)
      ? `/${article.relatedService}/`
      : `/services/${article.relatedService}/`
    : null
  const ctaHref = servicePath
    ? href(servicePath)
    : article.relatedDemo
    ? `${DEMO_BASE}/${article.relatedDemo}/`
    : href('/contact/')
  const ctaExternal = !article.relatedService && !!article.relatedDemo

  // Punto de inserción de la tarjeta de demo: después del tercer bloque. Si el
  // artículo tiene menos de 4 bloques, va al final del cuerpo.
  const demoInsertAt = article.relatedDemo ? Math.min(3, content.body.length) : -1
  const demoCard = article.relatedDemo ? DEMO_CARD[lang] || DEMO_CARD.en : null

  // <title> corto (≤ 60) desde articleSeo.js; la marca se agrega solo si cabe.
  const baseTitle = articleSeoTitles[article.slug]?.[lang] || content.title
  const seoTitle = baseTitle.length + data.site.brand.length + 3 <= 62 ? `${baseTitle} | ${data.site.brand}` : baseTitle

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
    ...(article.image ? { image: article.image } : {}),
  }

  return (
    <>
      <Seo
        title={seoTitle}
        description={metaDescription(content.summary)}
        path={path}
        jsonLd={jsonLd}
        type="article"
        publishedTime={article.date}
        imageAlt={seoTitle}
        esOnly={article.onlyLang === 'es'}
        enOnly={article.onlyLang === 'en'}
      />

      <article className="article">
        <div className="page-head container">
          <p className="eyebrow">{tag}</p>
          <h1>{content.title}</h1>
          <p className="article-lede">{content.summary}</p>

          {article.image && (
            <img
              className="article-hero-img"
              src={article.image}
              alt={article.imageAlt?.[lang] || article.imageAlt?.[article.onlyLang] || article.imageAlt?.en || ''}
              width="640"
              height="427"
            />
          )}

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
                        <span className="article-related-title">{a[lang]?.title || a[a.onlyLang]?.title}</span>
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
