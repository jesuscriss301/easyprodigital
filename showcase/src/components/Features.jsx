import Reveal from './Reveal.jsx'
import SplitText from './SplitText.jsx'
import { Icon } from './icons.jsx'

export default function Features({ id = 'about', eyebrow, title, intro, items = [] }) {
  return (
    <section id={id} className="demo-section demo-section--alt">
      <div className="demo-container">
        <Reveal className="demo-section-head">
          {eyebrow && <span className="demo-eyebrow">{eyebrow}</span>}
          <SplitText tag="h2" text={title} textAlign="center" splitType="chars" delay={30} duration={0.8} />
          {intro && <p>{intro}</p>}
        </Reveal>
        <Reveal as="div" className="demo-features">
          {items.map((f) => (
            <div className="demo-feature" key={f.title}>
              <div className="demo-service-icon"><Icon name={f.icon} /></div>
              <h3>{f.title}</h3>
              <p>{f.text}</p>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
