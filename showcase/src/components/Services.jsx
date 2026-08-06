import Reveal from './Reveal.jsx'
import SplitText from './SplitText.jsx'
import { Icon } from './icons.jsx'

/** variant: 'grid' (tarjetas) | 'list' (fila horizontal) */
export default function Services({ id = 'services', eyebrow, title, intro, variant = 'grid', items = [] }) {
  return (
    <section id={id} className="demo-section">
      <div className="demo-container">
        <Reveal className="demo-section-head">
          {eyebrow && <span className="demo-eyebrow">{eyebrow}</span>}
          <SplitText tag="h2" text={title} textAlign="center" splitType="chars" delay={30} duration={0.8} />
          {intro && <p>{intro}</p>}
        </Reveal>

        {variant === 'list' ? (
          <Reveal as="div" className="demo-services demo-services--list">
            {items.map((s) => (
              <div className="demo-service-row" key={s.title}>
                <div className="demo-service-icon"><Icon name={s.icon} /></div>
                <div>
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
                {s.price && <span className="demo-service-price">{s.price}</span>}
              </div>
            ))}
          </Reveal>
        ) : (
          <Reveal as="div" className="demo-services demo-services--grid">
            {items.map((s) => (
              <div className="demo-service-card" key={s.title}>
                <div className="demo-service-icon"><Icon name={s.icon} /></div>
                <h3>{s.title}</h3>
                <p>{s.text}</p>
                {s.price && <span className="demo-service-price">{s.price}</span>}
              </div>
            ))}
          </Reveal>
        )}
      </div>
    </section>
  )
}
