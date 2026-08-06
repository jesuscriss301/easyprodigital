import Reveal from './Reveal.jsx'
import SplitText from './SplitText.jsx'
import LetterGlitch from './LetterGlitch.jsx'

export default function CtaBanner({ id = 'book', heading, text, actions = [], theme }) {
  const glitchColors = [theme?.accent, theme?.primary, theme?.primaryDark].filter(Boolean)

  return (
    <section id={id} className="demo-section">
      <div className="demo-container">
        <Reveal as="div" className="demo-cta">
          {glitchColors.length > 0 && (
            <div className="demo-cta-bg" aria-hidden="true">
              <LetterGlitch
                glitchColors={glitchColors}
                glitchSpeed={110}
                centerVignette
                outerVignette
                smooth={false}
                fontSize={26}
                charWidth={20}
                charHeight={34}
              />
            </div>
          )}
          <div className="demo-cta-content">
            <SplitText tag="h2" text={heading} textAlign="center" splitType="chars" delay={30} duration={0.8} />
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
          </div>
        </Reveal>
      </div>
    </section>
  )
}
