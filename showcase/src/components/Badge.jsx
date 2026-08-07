export default function Badge({ href = '#want-this', label = 'Sample template — Easy Pro Digital' }) {
  return (
    <a href={href} className="demo-badge">
      <span className="dot" /> <span className="demo-badge-label">{label}</span>
    </a>
  )
}
