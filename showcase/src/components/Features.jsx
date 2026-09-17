import Reveal from './Reveal.jsx'
import SplitText from './SplitText.jsx'
import { Icon } from './icons.jsx'
import { VineDecor, speciesFor } from './Vines.jsx'
import { MaterialDecor } from './Materials.jsx'

export default function Features({ id = 'about', eyebrow, title, intro, items = [], vines = false, materials = null }) {
  return (
    <section id={id} className="demo-section demo-section--alt">
      <div className="demo-container">
        <Reveal className="demo-section-head">
          {eyebrow && <span className="demo-eyebrow">{eyebrow}</span>}
          <SplitText tag="h2" text={title} textAlign="center" splitType="chars" delay={30} duration={0.8} />
          {intro && <p>{intro}</p>}
        </Reveal>
        <Reveal as="div" className="demo-features">
          {items.map((f, i) => (
            <div className={`demo-feature${vines || materials ? ' has-vines' : ''}`} key={f.title}>
              {vines && <VineDecor species={speciesFor('features', i)} seed={i + 11} side={i < items.length / 2 ? 'left' : 'right'} />}
              {materials && <MaterialDecor set={materials} section="features" index={i} side={i < items.length / 2 ? 'left' : 'right'} />}
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
