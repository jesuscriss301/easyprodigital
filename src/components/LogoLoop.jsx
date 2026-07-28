// SIN USO ACTUALMENTE — se reemplazó en la sección "Core stack" del About
// por un carrusel estático (ver .stack-carousel en pages.jsx/styles.css) a
// pedido explícito: "quita el loop pero deja los logos en un carrusel".
// Se deja el archivo por si en el futuro se quiere volver a un logo-loop
// con auto-scroll en otra parte del sitio.
//
// Adaptado de React Bits (reactbits.dev/animations/logo-loop) — MIT.
// Cambio deliberado sobre el original: la versión de React Bits mueve el
// track con un requestAnimationFrame que escribe `track.style.transform`
// en cada frame, para siempre — ese bucle de JS corriendo sin parar (más
// el ResizeObserver recalculando en cada tick) fue justo lo que hizo que
// el sitio se sintiera lento en local, según feedback real probando la
// página. Aquí el movimiento lo hace una animación CSS (@keyframes en
// styles.css, sección "logo loop"): el track se compone de N copias de
// los logos, repetidas dos veces (2N en total), y la animación va de
// translate(0) a translate(-50%) — como las dos mitades son idénticas,
// el loop es perfecto sin medir nada por frame. El único JS que queda es
// un ResizeObserver (barato, solo dispara en resize) para decidir cuántas
// copias N hacen falta para cubrir el contenedor y qué duración usar según
// `speed`. El resultado se anima enteramente en el compositor (GPU), sin
// costo de JS por frame.
import { useCallback, useEffect, useMemo, useRef, useState, memo } from 'react'

const MIN_COPIES = 2
const COPY_HEADROOM = 1

const toCssLength = (value) => (typeof value === 'number' ? `${value}px` : (value ?? undefined))

const useResizeObserver = (callback, elements, dependencies) => {
  useEffect(() => {
    if (!window.ResizeObserver) {
      const handleResize = () => callback()
      window.addEventListener('resize', handleResize)
      callback()
      return () => window.removeEventListener('resize', handleResize)
    }
    const observers = elements.map((ref) => {
      if (!ref.current) return null
      const observer = new ResizeObserver(callback)
      observer.observe(ref.current)
      return observer
    })
    callback()
    return () => {
      observers.forEach((observer) => observer?.disconnect())
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [callback, elements, dependencies])
}

const useImageLoader = (seqRef, onLoad, dependencies) => {
  useEffect(() => {
    const images = seqRef.current?.querySelectorAll('img') ?? []
    if (images.length === 0) {
      onLoad()
      return
    }
    let remainingImages = images.length
    const handleImageLoad = () => {
      remainingImages -= 1
      if (remainingImages === 0) onLoad()
    }
    images.forEach((img) => {
      const htmlImg = img
      if (htmlImg.complete) {
        handleImageLoad()
      } else {
        htmlImg.addEventListener('load', handleImageLoad, { once: true })
        htmlImg.addEventListener('error', handleImageLoad, { once: true })
      }
    })
    return () => {
      images.forEach((img) => {
        img.removeEventListener('load', handleImageLoad)
        img.removeEventListener('error', handleImageLoad)
      })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [onLoad, seqRef, dependencies])
}

export const LogoLoop = memo(
  ({
    logos,
    speed = 120,
    direction = 'left',
    width = '100%',
    logoHeight = 28,
    gap = 32,
    pauseOnHover = true,
    fadeOut = false,
    fadeOutColor,
    scaleOnHover = false,
    renderItem,
    ariaLabel = 'Partner logos',
    className,
    style,
  }) => {
    const containerRef = useRef(null)
    const seqRef = useRef(null)

    // "blockCopies" = how many copies of the logo list make one half of the
    // track; the track renders that block twice back-to-back so a
    // translate(-50%) animation loops seamlessly (both halves are identical).
    const [blockCopies, setBlockCopies] = useState(MIN_COPIES)
    const [durationS, setDurationS] = useState(20)

    const isVertical = direction === 'up' || direction === 'down'
    const reverse = direction === 'right' || direction === 'down'

    const updateDimensions = useCallback(() => {
      const containerSize = isVertical
        ? (containerRef.current?.clientHeight ?? 0)
        : (containerRef.current?.clientWidth ?? 0)
      const sequenceRect = seqRef.current?.getBoundingClientRect?.()
      const sequenceSize = isVertical ? (sequenceRect?.height ?? 0) : (sequenceRect?.width ?? 0)
      if (sequenceSize <= 0) return

      const copiesNeeded = Math.max(MIN_COPIES, Math.ceil(containerSize / sequenceSize) + COPY_HEADROOM)
      setBlockCopies(copiesNeeded)

      const blockSize = copiesNeeded * sequenceSize
      const magnitude = Math.abs(speed) || 40
      setDurationS(blockSize / magnitude)
    }, [isVertical, speed])

    useResizeObserver(updateDimensions, [containerRef, seqRef], [logos, gap, logoHeight, isVertical])
    useImageLoader(seqRef, updateDimensions, [logos, gap, logoHeight, isVertical])

    const cssVariables = useMemo(
      () => ({
        '--logoloop-gap': `${gap}px`,
        '--logoloop-logoHeight': `${logoHeight}px`,
        '--logoloop-duration': `${durationS}s`,
        ...(fadeOutColor && { '--logoloop-fadeColor': fadeOutColor }),
      }),
      [gap, logoHeight, fadeOutColor, durationS]
    )

    const rootClassName = useMemo(
      () =>
        [
          'logoloop',
          isVertical ? 'logoloop--vertical' : 'logoloop--horizontal',
          reverse && 'logoloop--reverse',
          fadeOut && 'logoloop--fade',
          scaleOnHover && 'logoloop--scale-hover',
          pauseOnHover && 'logoloop--pause-hover',
          speed === 0 && 'logoloop--paused',
          className,
        ]
          .filter(Boolean)
          .join(' '),
      [isVertical, reverse, fadeOut, scaleOnHover, pauseOnHover, speed, className]
    )

    const renderLogoItem = useCallback(
      (item, key) => {
        if (renderItem) {
          return (
            <li className="logoloop__item" key={key} role="listitem">
              {renderItem(item, key)}
            </li>
          )
        }
        const isNodeItem = 'node' in item
        const content = isNodeItem ? (
          <span className="logoloop__node" aria-hidden={!!item.href && !item.ariaLabel}>
            {item.node}
          </span>
        ) : (
          <img
            src={item.src}
            srcSet={item.srcSet}
            sizes={item.sizes}
            width={item.width}
            height={item.height}
            alt={item.alt ?? ''}
            title={item.title}
            loading="lazy"
            decoding="async"
            draggable={false}
          />
        )
        const itemAriaLabel = isNodeItem ? (item.ariaLabel ?? item.title) : (item.alt ?? item.title)
        const itemContent = item.href ? (
          <a
            className="logoloop__link"
            href={item.href}
            aria-label={itemAriaLabel || 'logo link'}
            target="_blank"
            rel="noreferrer noopener"
          >
            {content}
          </a>
        ) : (
          content
        )
        return (
          <li className="logoloop__item" key={key} role="listitem">
            {itemContent}
          </li>
        )
      },
      [renderItem]
    )

    // One "block" = blockCopies copies of the logo list, rendered as a single
    // <ul> so its rendered width/height can be measured as a whole. The
    // track then renders that block twice (see JSX below).
    const renderBlock = useCallback(
      (blockIndex, ref) => (
        <ul className="logoloop__list" key={`block-${blockIndex}`} role="list" aria-hidden={blockIndex > 0} ref={ref}>
          {Array.from({ length: blockCopies }, (_, copyIndex) =>
            logos.map((item, itemIndex) => renderLogoItem(item, `${blockIndex}-${copyIndex}-${itemIndex}`))
          )}
        </ul>
      ),
      [blockCopies, logos, renderLogoItem]
    )

    const containerStyle = useMemo(
      () => ({
        width: isVertical ? (toCssLength(width) === '100%' ? undefined : toCssLength(width)) : (toCssLength(width) ?? '100%'),
        ...cssVariables,
        ...style,
      }),
      [width, cssVariables, style, isVertical]
    )

    return (
      <div ref={containerRef} className={rootClassName} style={containerStyle} role="region" aria-label={ariaLabel}>
        <div className="logoloop__track">
          {renderBlock(0, seqRef)}
          {renderBlock(1, undefined)}
        </div>
      </div>
    )
  }
)

LogoLoop.displayName = 'LogoLoop'

export default LogoLoop
