import { Link, useParams } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import Reveal from '../components/Reveal.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { articles, pickArticles } from '../data/articles.js'

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
  const related = pickArticles(`related:${article.slug}`, 4)
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3)

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
              {content.body.map((block, i) =>
                block.h ? <h2 key={i}>{block.h}</h2> : <p key={i}>{block.p}</p>
              )}
            </Reveal>

            <div className="article-cta">
              <h2>{t.article.ctaTitle}</h2>
              <p>{t.article.ctaText}</p>
              <Link className="btn btn-primary" to={href('/contact/')}>
                {t.article.ctaButton}
              </Link>
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
