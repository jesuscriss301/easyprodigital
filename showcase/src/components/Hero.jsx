import Reveal from './Reveal.jsx'
import CountUp from './CountUp.jsx'
import { Icon } from './icons.jsx'
import BackgroundFX from './BackgroundFX.jsx'

/** variant: 'split' (visual al lado) | 'centered' (fondo a todo lo ancho)
 *  background: nombre de variante de BackgroundFX (canvas, ver ese archivo)
 *  — un fondo animado distinto por nicho, detrás de TODO el hero (no solo
 *  alrededor de la foto, a diferencia de visualFrame). */
export default function Hero({
  variant = 'split',
  eyebrow,
  title,
  text,
  primaryCta,
  secondaryCta,
  trust = [],
  visualIcon = 'sparkle',
  visualFrame,
  background,
  theme,
  image,
  imageAlt = '',
  video,
  videoPoster,
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
            <div key={t.label}>
              <strong>
                {typeof t.end === 'number' ? (
                  <CountUp end={t.end} prefix={t.prefix} suffix={t.suffix} decimals={t.decimals} />
                ) : (
                  t.value
                )}
              </strong>
              {t.label}
            </div>
          ))}
        </div>
      )}
    </Reveal>
  )

  return (
    <header id="home" className={`demo-hero ${modifier}`}>
      {background && theme && (
        // variant 'centered' ya pinta un degradado saturado con
        // primary/primaryDark de fondo (ver .demo-hero--centered en
        // styles.css) — dibujar el efecto con esos mismos colores lo
        // volvería invisible por falta de contraste, así que ahí se usa
        // blanco (el efecto lee como luz sobre el color, no como el color
        // mismo). En 'split' el fondo es claro, así que sí usa la paleta.
        <BackgroundFX
          variant={background}
          colors={variant === 'centered' ? ['#ffffff', '#ffffff', '#ffffff'] : [theme.primary, theme.accent, theme.primaryDark]}
          opacity={variant === 'centered' ? 0.8 : 0.55}
        />
      )}
      {variant === 'centered' ? (
        <div className="demo-container">{copy}</div>
      ) : (
        <div className="demo-container demo-hero-inner">
          {copy}
          {/* visualFrame: 'electric' | 'shine' | 'ripple' | 'streak' | 'halo' —
              cada valor activa un marco decorativo distinto (ver styles.css,
              sección "Efectos opt-in por demo"), uno por nicho. */}
          <Reveal className={`demo-hero-visual${visualFrame ? ` demo-hero-visual--${visualFrame}` : ''}`}>
            {video ? (
              <video src={video} poster={videoPoster} autoPlay muted loop playsInline aria-label={imageAlt} />
            ) : image ? (
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
