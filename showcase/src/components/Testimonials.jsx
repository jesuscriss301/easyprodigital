import Reveal from './Reveal.jsx'
import SplitText from './SplitText.jsx'

export default function Testimonials({ id = 'testimonials', eyebrow, title, intro, items = [] }) {
  return (
    <section id={id} className="demo-section demo-section--alt">
      <div className="demo-container">
        <Reveal className="demo-section-head">
          {eyebrow && <span className="demo-eyebrow">{eyebrow}</span>}
          <SplitText tag="h2" text={title} textAlign="center" splitType="chars" delay={30} duration={0.8} />
          {intro && <p>{intro}</p>}
        </Reveal>
        <Reveal as="div" className="demo-testimonials">
          {items.map((t) => (
            <div className="demo-testimonial" key={t.name}>
              <div className="demo-testimonial-stars">★★★★★</div>
              <p className="quote">"{t.quote}"</p>
              <div className="demo-testimonial-author">
                <div className="demo-avatar">{t.name[0]}</div>
                <div>
                  <strong>{t.name}</strong>
                  <span>{t.role}</span>
                </div>
              </div>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
