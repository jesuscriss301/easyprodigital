import Reveal from './Reveal.jsx'
import SplitText from './SplitText.jsx'

/** Genera degradados a partir de la paleta del tema, sin depender de fotos reales. */
function gradientForIndex(i, theme) {
  const combos = [
    [theme.accent, theme.primary],
    [theme.primary, theme.primaryDark],
    [theme.primaryDark, theme.ink],
    [theme.accent, theme.primaryDark],
    [theme.primary, theme.accent],
    [theme.ink, theme.primary],
  ]
  const [a, b] = combos[i % combos.length]
  return `linear-gradient(140deg, ${a}, ${b})`
}

export default function Gallery({ id = 'gallery', eyebrow, title, intro, items = [], theme }) {
  return (
    <section id={id} className="demo-section">
      <div className="demo-container">
        <Reveal className="demo-section-head">
          {eyebrow && <span className="demo-eyebrow">{eyebrow}</span>}
          <SplitText tag="h2" text={title} textAlign="center" splitType="chars" delay={30} duration={0.8} />
          {intro && <p>{intro}</p>}
        </Reveal>
        <Reveal as="div" className="demo-gallery">
          {items.map((item, i) => {
            const isMedia = typeof item === 'object' && item !== null
            const label = isMedia ? item.label : item
            return (
              <div
                className="demo-gallery-tile"
                key={label}
                style={isMedia ? undefined : { background: gradientForIndex(i, theme) }}
              >
                {isMedia && item.video && (
                  <video src={item.video} poster={item.poster} autoPlay muted loop playsInline aria-label={item.alt || label} />
                )}
                {isMedia && !item.video && item.image && <img src={item.image} alt={item.alt || label} loading="lazy" />}
                <span>{label}</span>
              </div>
            )
          })}
        </Reveal>
      </div>
    </section>
  )
}
