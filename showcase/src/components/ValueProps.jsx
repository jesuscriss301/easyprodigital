import Reveal from './Reveal.jsx'
import { useLanguage } from '../i18n.jsx'

/**
 * Bloque corto justo después del hero: 3 resultados de negocio (no
 * funciones) para quien decide si contrata, no para quien navega la demo.
 * Contenido por nicho en demo.valueProps (ver Parte 1.5 del doc de
 * estrategias) — si una demo no trae valueProps, el bloque no se pinta.
 */
export default function ValueProps({ niche, items = [] }) {
  const { t } = useLanguage()
  if (!items.length) return null

  return (
    <section className="demo-section demo-section--tight demo-value-props">
      <div className="demo-container">
        <Reveal as="div" className="demo-value-props-inner">
          <p className="demo-eyebrow demo-value-props-eyebrow">{t.valueProps.heading(niche)}</p>
          <ul className="demo-value-props-list">
            {items.map((item) => (
              <li key={item}>
                <span className="demo-value-props-check" aria-hidden="true">✓</span>
                {item}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
