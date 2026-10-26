import { Link } from 'react-router-dom'
import { useLanguage } from '../i18n.jsx'
import { pickRelatedDemos } from '../demos/index.js'
import { getLocalizedDemo } from '../demos/i18n/es/index.js'

/**
 * Aside con al menos 3 demos "relacionadas", presente al final de toda
 * página de demo (ver DemoPage.jsx, justo antes de Disclosure). Mismo
 * patrón que ArticlesAside.jsx en el sitio principal: selección
 * determinista por slug (pickRelatedDemos, en demos/index.js) para que el
 * HTML prerenderizado y lo que ve el visitante coincidan, con la demo
 * actual (y sus variantes de estilo) siempre excluida.
 */
export default function RelatedDemos({ demo }) {
  const { lang, t } = useLanguage()

  const picks = pickRelatedDemos(demo, 3).map((d) => getLocalizedDemo(d, lang))
  if (!picks.length) return null

  return (
    <aside id="more-demos" className="demo-section demo-section--tight demo-related" aria-labelledby="related-demos-heading">
      <div className="demo-container">
        <div className="demo-section-head">
          <span className="demo-eyebrow" id="related-demos-heading">
            {t.relatedDemos.heading}
          </span>
          <p className="demo-related-tagline">{t.relatedDemos.tagline}</p>
        </div>

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
