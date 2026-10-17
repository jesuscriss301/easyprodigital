import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { pickArticles } from '../data/articles.js'

/**
 * Columna lateral derecha con tres artículos del blog, presente en todas las
 * páginas. La selección es DETERMINISTA por ruta (ver pickArticles): cada
 * página muestra un trío distinto, pero siempre el mismo para esa página, así
 * el HTML prerenderizado y lo que ve el visitante coinciden — condición para
 * que Google indexe estos enlaces internos.
 *
 * En la página de un artículo, ese mismo artículo se excluye de la lista.
 */
export default function ArticlesAside() {
  const { lang, href, t } = useLanguage()
  const { pathname } = useLocation()

  // En la página de un artículo, ese artículo no se enlaza a sí mismo.
  const current = pathname.match(/\/blog\/([^/]+)\/?$/)?.[1] || null
  const picks = pickArticles(pathname, current ? 4 : 3)
    .filter((a) => a.slug !== current)
    .slice(0, 3)

  if (!picks.length) return null

  return (
    <aside className="side-articles" aria-labelledby="side-articles-heading">
      <div className="side-articles-inner">
        <p className="side-articles-eyebrow" id="side-articles-heading">
          {t.aside.heading}
        </p>
        <p className="side-articles-tagline">{t.aside.tagline}</p>

        <ul className="side-articles-list">
          {picks.map((a) => (
            <li key={a.slug}>
              <Link className="side-article" to={href(`/blog/${a.slug}/`)}>
                {a.image && (
                  <img
                    className="side-article-img"
                    src={a.image}
                    alt={a.imageAlt?.[lang] || a.imageAlt?.en || ''}
                    loading="lazy"
                    width="400"
                    height="267"
                  />
                )}
                <span className="side-article-tag">{a.tag[lang] || a.tag.en}</span>
                <span className="side-article-title">{a[lang].title}</span>
                <span className="side-article-summary">{a[lang].summary}</span>
                <span className="side-article-more">{t.aside.readTag} →</span>
              </Link>
            </li>
          ))}
        </ul>

        <Link className="side-articles-all" to={href('/blog/')}>
          {t.aside.more} →
        </Link>
      </div>
    </aside>
  )
}
