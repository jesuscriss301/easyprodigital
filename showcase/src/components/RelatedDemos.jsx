import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n.jsx'
import { pickRelatedDemos } from '../demos/index.js'
import { getLocalizedDemo } from '../demos/i18n/es/index.js'

/**
 * Columna lateral derecha con al menos 3 demos "relacionadas", presente en
 * toda página de demo (ver DemoPage.jsx, dentro de .demo-shell junto a
 * .demo-shell-main). Mismo patrón que ArticlesAside.jsx en el sitio
 * principal: va a la derecha y sticky en escritorio (>=1180px, ver
 * .demo-shell en styles.css) y se apila debajo del contenido en
 * móvil/tablet. Selección determinista por slug (pickRelatedDemos, en
 * demos/index.js) para que el HTML prerenderizado y lo que ve el visitante
 * coincidan, con la demo actual (y sus variantes de estilo) excluida.
 */
export default function RelatedDemos({ demo }) {
  const { lang, t } = useLanguage()

  const picks = pickRelatedDemos(demo, 3).map((d) => getLocalizedDemo(d, lang))
  if (!picks.length) return null

  return (
    <aside className="demo-related" aria-labelledby="related-demos-heading">
      <div className="demo-related-inner">
        <p className="demo-related-eyebrow" id="related-demos-heading">
          {t.relatedDemos.heading}
        </p>
        <p className="demo-related-tagline">{t.relatedDemos.tagline}</p>

        <ul className="demo-related-list">
          {picks.map((d) => (
            <li key={d.slug}>
              <Link className="demo-related-card" to={`/${d.slug}`}>
                {d.hero?.image && (
                  <img
                    className="demo-related-img"
                    src={d.hero.image}
                    alt={d.hero.imageAlt || d.brand}
                    loading="lazy"
                    width="400"
                    height="267"
                  />
                )}
                <span className="demo-related-tag">{d.niche}</span>
                <span className="demo-related-title">{d.brand}</span>
                <span className="demo-related-summary">{d.seo?.description}</span>
                <span className="demo-related-more">{t.relatedDemos.readTag} →</span>
              </Link>
            </li>
          ))}
        </ul>

        <Link className="demo-related-all" to="/">
          {t.relatedDemos.more} →
        </Link>
      </div>
    </aside>
  )
}
