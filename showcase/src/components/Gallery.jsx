import Reveal from './Reveal.jsx'

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

export default function Gallery({ id = 'galeria', eyebrow, title, intro, items = [], theme }) {
  return (
    <section id={id} className="demo-section">
      <div className="demo-container">
        <Reveal className="demo-section-head">
          {eyebrow && <span className="demo-eyebrow">{eyebrow}</span>}
          <h2>{title}</h2>
          {intro && <p>{intro}</p>}
        </Reveal>
        <Reveal as="div" className="demo-gallery">
          {items.map((label, i) => (
            <div
              className="demo-gallery-tile"
              key={label}
              style={{ background: gradientForIndex(i, theme) }}
            >
              <span>{label}</span>
            </div>
          ))}
        </Reveal>
      </div>
    </section>
  )
}
