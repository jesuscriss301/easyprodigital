import { useLanguage } from '../i18n.jsx'

export default function Badge({ href = '#want-this', label }) {
  const { t } = useLanguage()
  return (
    <a href={href} className="demo-badge">
      <span className="dot" /> <span className="demo-badge-label">{label || t.badge.label}</span>
    </a>
  )
}
