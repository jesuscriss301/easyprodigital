import { useEffect } from 'react'
import demos from '../demos/index.js'
import { Icon } from '../components/icons.jsx'
import { useLanguage } from '../i18n.jsx'
import { getLocalizedDemo } from '../demos/i18n/es/index.js'

/** First real photo available for a demo (hero image, falling back to the
 * first gallery photo — e.g. adult-creator, whose hero has no image and
 * whose gallery only ever holds the censored/shaded preview tiles). Falls
 * back to null (icon + gradient tile) if a demo has neither. */
function cardImage(d) {
  if (d.hero?.image) return { src: d.hero.image, alt: d.hero.imageAlt || d.brand }
  const firstShot = d.gallery?.items?.find((it) => typeof it === 'object' && it.image)
  if (firstShot) return { src: firstShot.image, alt: firstShot.alt || d.brand }
  return null
}

export default function Home() {
  const { t, lang, toggleLang } = useLanguage()

  useEffect(() => {
    document.title = t.home.title
  }, [t])

  return (
    <div className="showcase-home">
      <header className="showcase-topbar">
        <a href="https://easyprodigital.com" className="showcase-wordmark">
          Easy Pro Digital
        </a>
        <button type="button" className="showcase-lang-toggle" onClick={toggleLang}>
          {lang === 'en' ? 'ES' : 'EN'}
        </button>
      </header>

      <div className="showcase-home-hero">
        <span className="showcase-eyebrow">{t.home.eyebrow}</span>
        <h1>{t.home.heroTitle}</h1>
        <p>
          {t.home.heroSubtitleBefore}{' '}
          <a href="https://easyprodigital.com">Easy Pro Digital</a>
          {t.home.heroSubtitleAfter}
        </p>
      </div>

      <div className="showcase-grid">
        {demos.map((rawDemo) => {
          const d = getLocalizedDemo(rawDemo, lang)
          const photo = cardImage(d)
          const variants = d.styleVariants || []
          return (
            <a key={d.slug} href={`/${d.slug}`} className="showcase-card">
              <div className="showcase-card-visual">
                {photo ? (
                  <img src={photo.src} alt={photo.alt} loading="lazy" />
                ) : (
                  <div
                    className="showcase-card-visual-fallback"
                    style={{ background: `linear-gradient(135deg, ${d.theme.primary}, ${d.theme.primaryDark})` }}
                  >
                    <Icon name={d.hero.visualIcon} />
                  </div>
                )}
                <span className="showcase-card-tag">{d.niche}</span>
              </div>
              <div className="showcase-card-body">
                <h3>{d.brand}</h3>
                {d.seo?.description && <p className="showcase-card-desc">{d.seo.description}</p>}
                <div className="showcase-card-footer">
                  {variants.length > 1 && (
                    <div className="showcase-card-palettes" title={t.home.palettes(variants.length)}>
                      {variants.map((v) => (
                        <span key={v.slug} className="showcase-swatch" style={{ background: v.primary }} />
                      ))}
                    </div>
                  )}
                  <span className="showcase-card-cta">{t.home.viewDemo} →</span>
                </div>
              </div>
            </a>
          )
        })}
      </div>

      <footer className="showcase-home-footer">
        <p>
          © {new Date().getFullYear()} <a href="https://easyprodigital.com">Easy Pro Digital</a>
        </p>
      </footer>
    </div>
  )
}
