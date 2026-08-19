import Reveal from './Reveal.jsx'
import SplitText from './SplitText.jsx'
import LetterGlitch from './LetterGlitch.jsx'
import { prefersReducedMotion } from './motionUtils.js'

// ClickSpark (React Bits, adaptación DOM/CSS sin deps — sin canvas): al
// hacer click en el CTA primario saltan chispas cortas desde el punto de
// click, metáfora directa del oficio (chispas de corte de piedra/ladrillo)
// en vez de partículas genéricas.
function spawnSparks(e) {
  if (prefersReducedMotion()) return
  const btn = e.currentTarget
  const rect = btn.getBoundingClientRect()
  const originX = e.clientX - rect.left
  const originY = e.clientY - rect.top
  const count = 8
  for (let i = 0; i < count; i++) {
    const spark = document.createElement('span')
    spark.className = 'demo-spark'
    const angle = (Math.PI * 2 * i) / count
    spark.style.setProperty('--spark-x', `${Math.cos(angle) * 34}px`)
    spark.style.setProperty('--spark-y', `${Math.sin(angle) * 34}px`)
    spark.style.left = `${originX}px`
    spark.style.top = `${originY}px`
    btn.appendChild(spark)
    spark.addEventListener('animationend', () => spark.remove())
  }
}

/** effect: 'spark' (chispas al click en el CTA primario) | 'star' (marco de
 *  puntos rotando lento alrededor del banner) — opt-in por nicho. */
export default function CtaBanner({ id = 'book', heading, text, actions = [], theme, effect }) {
  const glitchColors = [theme?.accent, theme?.primary, theme?.primaryDark].filter(Boolean)

  return (
    <section id={id} className="demo-section">
      <div className="demo-container">
        <Reveal as="div" className={`demo-cta${effect === 'star' ? ' demo-cta--star' : ''}`}>
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
              {actions.map((a, i) => {
                const spark = effect === 'spark' && i === 0
                return (
                  <a
                    key={a.label}
                    href={a.href}
                    className={`demo-btn ${a.variant === 'outline' ? 'demo-btn-outline' : 'demo-btn-light'}${spark ? ' demo-btn--spark' : ''}`}
                    style={a.variant === 'outline' ? { borderColor: '#fff', color: '#fff' } : undefined}
                    onClick={spark ? spawnSparks : undefined}
                  >
                    {a.label}
                  </a>
                )
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
