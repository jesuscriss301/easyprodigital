import { useEffect, useRef } from 'react'
import { Renderer, Geometry, Program, Mesh } from 'ogl'

// SwarmCursor (React Bits — familia ogl, el motor WebGL que ya usa el
// proyecto). Un enjambre de partículas persigue al cursor con inercia: cada
// una orbita un punto propio alrededor del puntero y lo alcanza con retraso,
// así la nube se estira al mover rápido y se recoge al parar.
//
// En La Chope Gobeline va teñido de oro: polvo de "pièces d'or" siguiendo al
// visitante por la taberna, no un efecto genérico pegado encima.
//
// Presupuesto: este es el ÚNICO canvas WebGL de la página. Por eso la demo
// no lleva fondo shader en el hero y toda la decoración (duendes, monedas,
// hiedra, letreros) es SVG/CSS.

const VERT = `
attribute vec2 position;
attribute float aSize;
attribute float aAlpha;
uniform vec2 uResolution;
varying float vAlpha;
void main() {
  vAlpha = aAlpha;
  vec2 clip = (position / uResolution) * 2.0 - 1.0;
  clip.y *= -1.0;
  gl_Position = vec4(clip, 0.0, 1.0);
  gl_PointSize = aSize;
}
`

const FRAG = `
precision highp float;
uniform vec3 uColor;
uniform vec3 uColorHot;
varying float vAlpha;
void main() {
  vec2 c = gl_PointCoord - 0.5;
  float d = length(c);
  float core = smoothstep(0.5, 0.05, d);
  float halo = smoothstep(0.5, 0.2, d);
  vec3 col = mix(uColor, uColorHot, core);
  gl_FragColor = vec4(col, (core * 0.75 + halo * 0.35) * vAlpha);
}
`

function hexToRgb(hex) {
  const h = hex.replace('#', '')
  const n = parseInt(h.length === 3 ? h.split('').map((c) => c + c).join('') : h, 16)
  return [((n >> 16) & 255) / 255, ((n >> 8) & 255) / 255, (n & 255) / 255]
}

export default function SwarmCursor({
  count = 140,
  color = '#d9a441',
  hotColor = '#fff0c2',
  size = 16,
  stiffness = 0.055,
  damping = 0.86,
  spread = 90,
}) {
  const hostRef = useRef(null)

  useEffect(() => {
    const host = hostRef.current
    if (!host) return

    const renderer = new Renderer({ alpha: true, dpr: Math.min(window.devicePixelRatio || 1, 2) })
    const gl = renderer.gl
    gl.canvas.className = 'chope-swarm-canvas'
    host.appendChild(gl.canvas)

    const positions = new Float32Array(count * 2)
    const sizes = new Float32Array(count)
    const alphas = new Float32Array(count)
    // estado en CPU: velocidad, fase de órbita y radio propio de cada partícula
    const vel = new Float32Array(count * 2)
    const phase = new Float32Array(count)
    const radius = new Float32Array(count)
    const speed = new Float32Array(count)

    const cx = window.innerWidth / 2
    const cy = window.innerHeight / 2
    for (let i = 0; i < count; i++) {
      positions[i * 2] = cx
      positions[i * 2 + 1] = cy
      const t = i / count
      sizes[i] = size * (0.35 + Math.pow(1 - t, 1.6))
      alphas[i] = 0.25 + (1 - t) * 0.75
      phase[i] = Math.random() * Math.PI * 2
      radius[i] = spread * (0.15 + Math.random() * 0.85)
      speed[i] = 0.4 + Math.random() * 1.1
    }

    const geometry = new Geometry(gl, {
      position: { size: 2, data: positions },
      aSize: { size: 1, data: sizes },
      aAlpha: { size: 1, data: alphas },
    })

    const program = new Program(gl, {
      vertex: VERT,
      fragment: FRAG,
      transparent: true,
      depthTest: false,
      uniforms: {
        uResolution: { value: [window.innerWidth, window.innerHeight] },
        uColor: { value: hexToRgb(color) },
        uColorHot: { value: hexToRgb(hotColor) },
      },
    })
    // aditivo: las partículas se suman entre sí, que es lo que hace que el
    // núcleo del enjambre brille como brasa en vez de verse como puntos planos
    program.setBlendFunc(gl.SRC_ALPHA, gl.ONE)

    const mesh = new Mesh(gl, { mode: gl.POINTS, geometry, program })

    const pointer = { x: cx, y: cy }
    let raf = 0
    let running = true
    let t0 = performance.now()

    const resize = () => {
      renderer.setSize(window.innerWidth, window.innerHeight)
      program.uniforms.uResolution.value = [window.innerWidth, window.innerHeight]
    }
    const onMove = (e) => {
      pointer.x = e.clientX
      pointer.y = e.clientY
    }
    const onVisibility = () => {
      running = !document.hidden
      if (running) {
        t0 = performance.now()
        raf = requestAnimationFrame(frame)
      } else {
        cancelAnimationFrame(raf)
      }
    }

    function frame(now) {
      raf = requestAnimationFrame(frame)
      const dt = Math.min((now - t0) / 16.666, 3)
      t0 = now
      const time = now / 1000

      for (let i = 0; i < count; i++) {
        const ix = i * 2
        const iy = ix + 1
        // cada partícula persigue su propio punto en órbita alrededor del cursor
        const a = phase[i] + time * speed[i]
        const tx = pointer.x + Math.cos(a) * radius[i]
        const ty = pointer.y + Math.sin(a * 1.3) * radius[i] * 0.7

        vel[ix] = (vel[ix] + (tx - positions[ix]) * stiffness * dt) * damping
        vel[iy] = (vel[iy] + (ty - positions[iy]) * stiffness * dt) * damping
        positions[ix] += vel[ix] * dt
        positions[iy] += vel[iy] * dt
      }

      geometry.attributes.position.needsUpdate = true
      renderer.render({ scene: mesh })
    }

    resize()
    window.addEventListener('resize', resize)
    window.addEventListener('pointermove', onMove, { passive: true })
    document.addEventListener('visibilitychange', onVisibility)
    raf = requestAnimationFrame(frame)

    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
      window.removeEventListener('pointermove', onMove)
      document.removeEventListener('visibilitychange', onVisibility)
      if (gl.canvas.parentNode) gl.canvas.parentNode.removeChild(gl.canvas)
      const ext = gl.getExtension('WEBGL_lose_context')
      if (ext) ext.loseContext()
    }
  }, [count, color, hotColor, size, stiffness, damping, spread])

  return <div ref={hostRef} className="chope-swarm" aria-hidden="true" />
}
