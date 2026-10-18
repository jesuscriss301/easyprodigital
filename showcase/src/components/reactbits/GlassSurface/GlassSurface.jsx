// GlassSurface (React Bits, sin deps nuevas — CSS backdrop-filter) — panel
// de vidrio esmerilado con reflejo sutil. Fondo del hero de Self Storage:
// transparencia = "aquí no hay nada que esconder".
import './GlassSurface.css'

export default function GlassSurface({ tint = '#ffffff', opacity = 0.14, blur = 18 }) {
  return (
    <div
      className="rb-glasssurface"
      style={{
        background: `linear-gradient(135deg, ${tint}${Math.round(opacity * 255).toString(16).padStart(2, '0')}, transparent 60%)`,
        backdropFilter: `blur(${blur}px)`,
        WebkitBackdropFilter: `blur(${blur}px)`,
      }}
      aria-hidden="true"
    >
      <div className="rb-glasssurface__panel" />
      <div className="rb-glasssurface__panel rb-glasssurface__panel--alt" />
    </div>
  )
}
