// Índice de carga perezosa para los componentes React Bits "reales" usados
// en las demos. Cada entrada es un React.lazy() independiente: Vite genera
// un chunk propio por componente, así que un visitante que abre /plumbers
// nunca descarga el bundle de three.js que usa /electricians, y viceversa.
// Esto es lo que hace viable usar 3 motores WebGL distintos (ogl, three,
// three+face-api) en el mismo proyecto sin romper el presupuesto de
// librerías por página de la skill reactbits-design-intelligence: el
// presupuesto se respeta por RUTA, no por bundle compartido.
import { lazy } from 'react'

// --- Fondos ambientales del hero (motor ogl) ---
export const LazyAurora = lazy(() => import('./Aurora/Aurora.jsx'))
export const LazyPlasmaWave = lazy(() => import('./PlasmaWave/PlasmaWave.jsx'))
export const LazyLightRays = lazy(() => import('./LightRays/LightRays.jsx'))
export const LazySlicedWaves = lazy(() => import('./SlicedWaves/SlicedWaves.jsx'))
export const LazyLineWaves = lazy(() => import('./LineWaves/LineWaves.jsx'))
export const LazySideRays = lazy(() => import('./SideRays/SideRays.jsx'))

// --- Fondos ambientales del hero (motor three / @react-three/fiber) ---
export const LazyPixelSnow = lazy(() => import('./PixelSnow/PixelSnow.jsx'))
export const LazyBeams = lazy(() => import('./Beams/Beams.jsx'))
export const LazyGridScan = lazy(() =>
  import('./GridScan/GridScan.jsx').then((m) => ({ default: m.GridScan }))
)

// --- Efectos montados en el visual del hero (no son fondos ambientales) ---
export const LazyRippleDistortion = lazy(() => import('./RippleDistortion/RippleDistortion.jsx'))
export const LazyPixelSwap = lazy(() => import('./PixelSwap/PixelSwap.jsx'))
export const LazyGradualBlur = lazy(() => import('./GradualBlur/GradualBlur.jsx'))
export const LazySparkModel = lazy(() => import('./SparkModel/SparkModel.jsx'))

// --- Sección propia ---
export const LazyScrollExpand = lazy(() => import('./ScrollExpand/ScrollExpand.jsx'))

// --- Grid de servicios ---
export const LazyMagicBento = lazy(() => import('./MagicBento/MagicBento.jsx'))

// --- Overlay global de página completa ---
export const LazySplashCursor = lazy(() => import('./SplashCursor/SplashCursor.jsx'))
