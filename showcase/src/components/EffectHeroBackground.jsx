import { Suspense } from 'react'
import { prefersReducedMotion } from './motionUtils.js'
import {
  LazyAurora,
  LazyPlasmaWave,
  LazyLightRays,
  LazySlicedWaves,
  LazyLineWaves,
  LazySideRays,
  LazyPixelSnow,
  LazyBeams,
  LazyGridScan,
} from './reactbits/registry.js'

/**
 * Fondo animado del hero, uno por nicho, cada uno un componente REAL de
 * React Bits (no una recreación en canvas). `variant` decide qué motor se
 * carga perezosamente (ver reactbits/registry.js) — cada visitante solo
 * descarga el motor WebGL de SU demo, nunca los otros 15.
 *
 * variant → nicho (tabla exacta pedida):
 *   aurora       → Fundación
 *   plasmaWave   → Adult creator
 *   pixelSnow    → YouTuber
 *   lightRays    → Iglesias
 *   slicedWaves  → Carpinteros
 *   beams        → Limpieza
 *   lineWaves    → Salón de belleza
 *   gridScan     → Inmobiliaria (con enableWebcam=false, ver nota abajo)
 *   sideRays     → Albañiles
 */
export default function EffectHeroBackground({ variant, theme, centered = false }) {
  if (!variant || !theme) return null

  if (prefersReducedMotion()) {
    // La skill pide desmontar el canvas (no solo pausarlo) cuando el
    // visitante pide menos movimiento — se deja un fondo estático sutil en
    // vez de nada, para que el hero no pierda toda su personalidad visual.
    return (
      <div
        className="demo-hero-bg demo-hero-bg--static"
        style={{
          background: centered
            ? undefined
            : `radial-gradient(120% 100% at 15% 0%, ${theme.primary}22, transparent 60%)`,
        }}
        aria-hidden="true"
      />
    )
  }

  // En variante 'centered' (youtuber, ver Hero.jsx) el hero ya pinta un
  // degradado saturado con los colores de marca de fondo — usar esos MISMOS
  // colores en el efecto lo vuelve invisible por falta de contraste, así
  // que ahí se fuerza una paleta clara (el efecto lee como luz sobre el
  // color de marca, no como el color mismo).
  const c1 = centered ? '#ffffff' : theme.primary
  const c2 = centered ? '#f5f5f5' : theme.accent
  const c3 = centered ? '#ffffff' : theme.primaryDark

  let node = null
  switch (variant) {
    case 'aurora':
      node = <LazyAurora colorStops={[c1, c2, c3]} amplitude={1.1} blend={0.6} />
      break
    case 'plasmaWave':
      // A diferencia de Aurora/PixelSnow (un lavado translúcido), PlasmaWave
      // dibuja formas de tubo opacas y muy definidas — forzar blanco (como
      // en el resto de nichos 'centered') las vuelve cintas blancas sólidas
      // que tapan el texto. Aquí se mantiene la paleta de marca (más
      // integrada con el degradado del hero) y se atenúa con opacidad.
      node = (
        <LazyPlasmaWave
          colors={[theme.accent, theme.primaryDark]}
          speed1={0.035}
          speed2={0.035}
          bend1={0.7}
          bend2={0.35}
          focalLength={0.65}
        />
      )
      break
    case 'pixelSnow':
      node = <LazyPixelSnow color={c1} density={0.22} speed={0.9} variant="round" />
      break
    case 'lightRays':
      node = (
        <LazyLightRays
          raysColor={c1}
          raysOrigin="top-center"
          raysSpeed={0.7}
          lightSpread={0.9}
          rayLength={1.6}
          followMouse={false}
          fadeDistance={1.1}
        />
      )
      break
    case 'slicedWaves':
      node = (
        <LazySlicedWaves
          color1={c1}
          color2={c2}
          color3={c3}
          orientation="horizontal"
          opacity={0.6}
          mouseInteraction={false}
        />
      )
      break
    case 'beams':
      node = <LazyBeams lightColor={c1} beamNumber={10} speed={1.4} scale={0.22} rotation={20} />
      break
    case 'lineWaves':
      node = (
        <LazyLineWaves
          color1={c1}
          color2={c2}
          color3={c3}
          brightness={0.28}
          enableMouseInteraction={false}
        />
      )
      break
    case 'gridScan':
      node = (
        <LazyGridScan
          // enableWebcam se deja en false a propósito: la versión original
          // de este componente usa la cámara + face-api.js para que el
          // escaneo "siga" tu cara — pedirle permiso de webcam a alguien
          // que solo vino a ver un ejemplo de web inmobiliaria es un mal
          // patrón de UX (y el catálogo de la skill ya marca face-api.js
          // como "casi nunca justificado" en un fondo decorativo). Se
          // mantiene el shader visual del grid-scan, se descarta el
          // tracking facial — ver el parche en GridScan.jsx.
          enableWebcam={false}
          // Los valores por defecto del componente (lineThickness=1,
          // gridScale=0.1) dibujan líneas opacas y muy gruesas — ilegible
          // detrás de texto. Se reduce el grosor y se agranda la cuadrícula
          // para que quede como una textura sutil, no un wireframe denso.
          linesColor={c3}
          scanColor={c2}
          lineThickness={0.35}
          gridScale={0.045}
          scanOpacity={0.35}
          bloomIntensity={0}
        />
      )
      break
    case 'sideRays':
      node = <LazySideRays rayColor1={c1} rayColor2={c2} intensity={1.6} spread={1.8} opacity={0.85} />
      break
    default:
      return null
  }

  // Beams, GridScan y PlasmaWave dibujan formas opacas y muy definidas (no
  // un lavado translúcido que se desvanece solo, como Aurora/PixelSnow) —
  // sin atenuar quedan demasiado dominantes sobre el texto del hero.
  const dimOpacity = { beams: 0.4, gridScan: 0.4, plasmaWave: 0.32 }[variant]

  return (
    <div className="demo-hero-bg" style={dimOpacity ? { opacity: dimOpacity } : undefined} aria-hidden="true">
      <Suspense fallback={null}>{node}</Suspense>
    </div>
  )
}
