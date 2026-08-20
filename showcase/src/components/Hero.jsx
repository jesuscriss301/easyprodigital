import { Suspense } from 'react'
import Reveal from './Reveal.jsx'
import CountUp from './CountUp.jsx'
import { Icon } from './icons.jsx'
import EffectHeroBackground from './EffectHeroBackground.jsx'
import { prefersReducedMotion } from './motionUtils.js'
import {
  LazyRippleDistortion,
  LazyPixelSwap,
  LazyGradualBlur,
  LazySparkModel,
} from './reactbits/registry.js'

/** variant: 'split' (visual al lado) | 'centered' (fondo a todo lo ancho)
 *  background: nombre de variante de EffectHeroBackground — un componente
 *  REAL de React Bits, cargado perezosamente, animado detrás de TODO el
 *  hero (no solo alrededor de la foto, a diferencia de visualFrame).
 *  heroEffect: { type: 'ripple' | 'pixelSwap' | 'gradualBlur' | 'sparkModel',
 *  props }  — para los 4 nichos cuyo efecto pedido no es un fondo ambiental
 *  sino algo que reemplaza o se superpone al visual del hero (foto/ícono).
 *  Ver componentes/reactbits/registry.js. */
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
  heroEffect,
  theme,
  image,
  imageAlt = '',
  video,
  videoPoster,
}) {
  const reduced = prefersReducedMotion()

  const renderVisualContent = () => {
    if (heroEffect?.type === 'ripple' && !reduced) {
      return (
        <Suspense fallback={<img src={image} alt={imageAlt} loading="eager" />}>
          <LazyRippleDistortion src={image} tint={theme?.primary} grayscale={false} {...heroEffect.props} />
        </Suspense>
      )
    }
    if (heroEffect?.type === 'pixelSwap' && !reduced) {
      const { firstImage, secondImage, firstAlt, secondAlt, ...rest } = heroEffect.props || {}
      return (
        <Suspense fallback={<img src={image} alt={imageAlt} loading="eager" />}>
          <LazyPixelSwap
            firstContent={<img src={firstImage} alt={firstAlt} />}
            secondContent={<img src={secondImage} alt={secondAlt} />}
            trigger="hover"
            pattern="diagonal"
            {...rest}
          />
        </Suspense>
      )
    }
    if (heroEffect?.type === 'sparkModel' && !reduced) {
      return (
        <Suspense fallback={<Icon name={visualIcon} />}>
          <LazySparkModel filamentColor={theme?.accent} height={420} {...heroEffect.props} />
        </Suspense>
      )
    }
    if (video) return <video src={video} poster={videoPoster} autoPlay muted loop playsInline aria-label={imageAlt} />
    if (image) return <img src={image} alt={imageAlt} loading="eager" />
    return <Icon name={visualIcon} />
  }
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
        <EffectHeroBackground variant={background} theme={theme} centered={variant === 'centered'} />
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
            {renderVisualContent()}
            {heroEffect?.type === 'gradualBlur' && !reduced && (
              <Suspense fallback={null}>
                <LazyGradualBlur position="bottom" height="35%" strength={2.5} divCount={6} {...heroEffect.props} />
              </Suspense>
            )}
          </Reveal>
        </div>
      )}
    </header>
  )
}
