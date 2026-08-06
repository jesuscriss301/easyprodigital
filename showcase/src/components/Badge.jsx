export default function Badge({ href = '#quieres-esto', label = 'Plantilla de muestra — Easy Pro Digital' }) {
  return (
    <a href={href} className="demo-badge">
      <span className="dot" /> {label}
    </a>
  )
}
