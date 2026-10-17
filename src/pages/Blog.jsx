import { Link } from 'react-router-dom'
import Seo from '../components/Seo.jsx'
import Reveal from '../components/Reveal.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { articles } from '../data/articles.js'

/**
 * Listado del blog. Los artículos viven en src/data/articles.js dentro de este
 * repo, no en una API externa: así el prerender los convierte en HTML estático
 * real. El generador "SEO Article Forge" debe ESCRIBIR en ese archivo, no
 * servirse en runtime (una lista cargada por fetch no se indexa igual).
 */
export default function Blog() {
  const { lang, href, t } = useLanguage()
  const sorted = articles.slice().sort((a, b) => (a.date < b.date ? 1 : -1))

  return (
    <>
      <Seo title={t.blog.seoTitle} description={t.blog.seoDescription} path="/blog/" />
      <div className="page-head container">
        <p className="eyebrow">{t.blog.eyebrow}</p>
        <h1>{t.blog.title}</h1>
        <p className="hero-tagline">{t.blog.tagline}</p>
      </div>

      <section className="first-section">
        <div className="container">
          {sorted.length === 0 ? (
            <p className="blog-empty">{t.blog.empty}</p>
          ) : (
            <Reveal as="div" className="blog-grid">
              {sorted.map((a) => (
                <Link className="blog-card" key={a.slug} to={href(`/blog/${a.slug}/`)}>
                  {a.image && (
                    <img
                      className="blog-card-img"
                      src={a.image}
                      alt={a.imageAlt?.[lang] || a.imageAlt?.en || ''}
                      loading="lazy"
                      width="400"
                      height="267"
                    />
                  )}
                  <div className="blog-card-body">
                    <span className="blog-card-tag">{a.tag[lang] || a.tag.en}</span>
                    <h2>{a[lang].title}</h2>
                    <p>{a[lang].summary}</p>
                    <span className="blog-card-more">{t.blog.readArticle}</span>
                  </div>
                </Link>
              ))}
            </Reveal>
          )}
        </div>
      </section>
    </>
  )
}
