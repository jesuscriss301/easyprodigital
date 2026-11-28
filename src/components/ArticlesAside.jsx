import { Link, useLocation } from 'react-router-dom'
import { useLanguage } from '../i18n/LanguageContext.jsx'
import { pickArticles } from '../data/articleIndex.js'
import { availableIn } from '../data/articlePicks.js'
import { getServiceArticles } from '../data/servicePages.js'

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
  // Sin barra final: "/es/blog" y "/es/blog/" deben elegir los mismos artículos,
  // si no el HTML prerenderizado y el de React no coinciden al hidratar.
  const pathname = useLocation().pathname.replace(/\/+$/, '') || '/'

  // En la página de un artículo, ese artículo no se enlaza a sí mismo.
  const current = pathname.match(/\/blog\/([^/]+)\/?$/)?.[1] || null
  // Las páginas de servicio muestran SUS artículos relacionados (ver
  // SERVICE_ARTICLES en servicePages.js); el resto, la mezcla determinista.
  // En ambos casos se ocultan los artículos que no existen en el idioma actual.
  const picks = availableIn(
    getServiceArticles(pathname) || pickArticles(pathname, current ? 4 : 3, lang),
    lang,
  )
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
                <span className="side-article-title">{a[lang]?.title || a[a.onlyLang]?.title}</span>
                <span className="side-article-summary">{a[lang]?.summary || a[a.onlyLang]?.summary}</span>
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
