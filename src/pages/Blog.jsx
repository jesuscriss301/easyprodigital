import { useEffect, useState } from 'react'
import Seo from '../components/Seo.jsx'
import Reveal from '../components/Reveal.jsx'
import { useLanguage } from '../i18n/LanguageContext.jsx'

/**
 * Blog listing. Articles no longer live in this repo: they're generated and
 * served by the separate "seo-article-forge" project (its own API + MySQL).
 * Configure VITE_BLOG_API_URL (see .env.example) to point to that API —
 * without it, or if the API doesn't respond, the page just shows the empty
 * state, same as before with the local posts.json.
 */
const BLOG_API_URL = (import.meta.env.VITE_BLOG_API_URL || '').replace(/\/+$/, '')

export default function Blog() {
  const { t } = useLanguage()
  const [articles, setArticles] = useState(null) // null = loading

  useEffect(() => {
    if (!BLOG_API_URL) {
      setArticles([])
      return
    }
    fetch(`${BLOG_API_URL}/api/articles`)
      .then((r) => (r.ok ? r.json() : { articles: [] }))
      .then((m) => setArticles(Array.isArray(m.articles) ? m.articles : []))
      .catch(() => setArticles([]))
  }, [])

  return (
    <>
      <Seo
        title={t.blog.seoTitle}
        description={t.blog.seoDescription}
        path="/blog/"
      />
      <div className="page-head container">
        <p className="eyebrow">{t.blog.eyebrow}</p>
        <h1>{t.blog.title}</h1>
        <p className="hero-tagline">{t.blog.tagline}</p>
      </div>

      <section>
        <div className="container">
          {articles === null && <p className="blog-empty">{t.blog.loading}</p>}
          {articles && articles.length === 0 && (
            <p className="blog-empty">{t.blog.empty}</p>
          )}
          {articles && articles.length > 0 && (
            <Reveal as="div" className="blog-grid">
              {articles.map((a) => (
                <a
                  className="blog-card"
                  key={a.slug}
                  href={`${BLOG_API_URL}/api/articles/${a.slug}/html`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {a.featuredImage && (
                    <img src={a.featuredImage} alt={a.title} loading="lazy" />
                  )}
                  <div className="blog-card-body">
                    <h2>{a.title}</h2>
                    <p>{a.description}</p>
                    <span className="blog-card-more">{t.blog.readArticle}</span>
                  </div>
                </a>
              ))}
            </Reveal>
          )}
        </div>
      </section>
    </>
  )
}
