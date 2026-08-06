// Iconos de línea, minimalistas, en el mismo estilo visual para todas las demos.
// Cada uno acepta las props normales de un <svg> (className, etc.).

const base = {
  viewBox: '0 0 24 24',
  fill: 'none',
  stroke: 'currentColor',
  strokeWidth: 1.6,
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
}

export function Scissors(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="6" cy="6" r="3" />
      <circle cx="6" cy="18" r="3" />
      <line x1="20" y1="4" x2="8.12" y2="15.88" />
      <line x1="14.47" y1="14.48" x2="20" y2="20" />
      <line x1="8.12" y1="8.12" x2="12" y2="12" />
    </svg>
  )
}

export function Droplet(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2.7l5.7 5.7a8 8 0 1 1-11.4 0z" />
    </svg>
  )
}

export function Sparkle(props) {
  return (
    <svg {...base} {...props}>
      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
    </svg>
  )
}

export function Leaf(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21c-4-1-7-5-7-10a9 9 0 0 1 9-9c5 0 9 4 9 9 0 6-6 10-11 10z" />
      <path d="M6 12c4 0 6-3 6-9" />
    </svg>
  )
}

export function Sun(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" />
      <line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
      <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" />
      <line x1="21" y1="12" x2="23" y2="12" />
    </svg>
  )
}

export function Brush(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 20h9" />
      <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
    </svg>
  )
}

export function Award(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2l2.9 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l7.1-1.01z" />
    </svg>
  )
}

export function Waves(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 12h4l3 8 4-16 3 8h4" />
    </svg>
  )
}

export function Users(props) {
  return (
    <svg {...base} {...props}>
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  )
}

export function Flower(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="7" r="3.2" />
      <circle cx="6.5" cy="13.5" r="3.2" />
      <circle cx="17.5" cy="13.5" r="3.2" />
      <circle cx="9" cy="19" r="3.2" />
      <circle cx="15" cy="19" r="3.2" />
      <circle cx="12" cy="13.5" r="2.1" fill="currentColor" stroke="none" />
    </svg>
  )
}

export const ICONS = {
  scissors: Scissors,
  droplet: Droplet,
  sparkle: Sparkle,
  leaf: Leaf,
  sun: Sun,
  brush: Brush,
  award: Award,
  waves: Waves,
  users: Users,
  flower: Flower,
}

export function Icon({ name, ...props }) {
  const Cmp = ICONS[name] || Sparkle
  return <Cmp {...props} />
}
