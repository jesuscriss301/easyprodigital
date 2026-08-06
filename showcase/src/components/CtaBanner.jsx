import Reveal from './Reveal.jsx'

export default function CtaBanner({ id = 'book', heading, text, actions = [] }) {
  return (
    <section id={id} className="demo-section">
      <div className="demo-container">
        <Reveal as="div" className="demo-cta">
          <h2>{heading}</h2>
          {text && <p>{text}</p>}
          <div className="demo-cta-actions">
            {actions.map((a) => (
              <a
                key={a.label}
                href={a.href}
                className={`demo-btn ${a.variant === 'outline' ? 'demo-btn-outline' : 'demo-btn-light'}`}
                style={a.variant === 'outline' ? { borderColor: '#fff', color: '#fff' } : undefined}
              >
                {a.label}
              </a>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
