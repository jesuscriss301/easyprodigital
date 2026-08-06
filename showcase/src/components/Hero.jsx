import Reveal from './Reveal.jsx'
import { Icon } from './icons.jsx'

/** variant: 'split' (visual al lado) | 'centered' (fondo a todo lo ancho) */
export default function Hero({
  variant = 'split',
  eyebrow,
  title,
  text,
  primaryCta,
  secondaryCta,
  trust = [],
  visualIcon = 'sparkle',
  image,
  imageAlt = '',
}) {
  const modifier = variant === 'centered' ? 'demo-hero--centered' : 'demo-hero--split'

  const copy = (
    <Reveal className="demo-hero-copy">
      {eyebrow && <span className="demo-eyebrow">{eyebrow}</span>}
      <h1>{title}</h1>
      {text && <p>{text}</p>}
      <div className="demo-hero-actions">
        {primaryCta && (
          <a href={primaryCta.href} className="demo-btn demo-btn-primary">{primaryCta.label}</a>
        )}
        {secondaryCta && (
          <a
            href={secondaryCta.href}
            className="demo-btn demo-btn-outline"
            style={variant === 'centered' ? { borderColor: '#fff', color: '#fff' } : undefined}
          >
            {secondaryCta.label}
          </a>
        )}
      </div>
      {trust.length > 0 && (
        <div className="demo-hero-trust">
          {trust.map((t) => (
            <div key={t.label}><strong>{t.value}</strong>{t.label}</div>
          ))}
        </div>
      )}
    </Reveal>
  )

  return (
    <header id="home" className={`demo-hero ${modifier}`}>
      {variant === 'centered' ? (
        <div className="demo-container">{copy}</div>
      ) : (
        <div className="demo-container demo-hero-inner">
          {copy}
          <Reveal className="demo-hero-visual">
            {image ? (
              <img src={image} alt={imageAlt} loading="eager" />
            ) : (
              <Icon name={visualIcon} />
            )}
          </Reveal>
        </div>
      )}
    </header>
  )
}
