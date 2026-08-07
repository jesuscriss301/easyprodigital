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

export function Car(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 13l1.5-4.5A2 2 0 0 1 6.4 7h11.2a2 2 0 0 1 1.9 1.5L21 13" />
      <path d="M3 13h18v4a1 1 0 0 1-1 1h-1a1 1 0 0 1-1-1v-1H6v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z" />
      <circle cx="7.5" cy="17.5" r="1.5" />
      <circle cx="16.5" cy="17.5" r="1.5" />
    </svg>
  )
}

export function Bucket(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 8h16l-1.5 11a2 2 0 0 1-2 1.8H7.5a2 2 0 0 1-2-1.8z" />
      <path d="M2 8h20" />
      <path d="M8 8V6a4 4 0 0 1 8 0v2" />
    </svg>
  )
}

export function Clock(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="12" r="9" />
      <path d="M12 7v5l3.5 2" />
    </svg>
  )
}

export function MapPin(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 21s-7-6.1-7-11.5A7 7 0 0 1 19 9.5C19 14.9 12 21 12 21z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </svg>
  )
}

export function Phone(props) {
  return (
    <svg {...base} {...props}>
      <path d="M5 4h3.5l1.5 4.5-2 1.5a11 11 0 0 0 5.5 5.5l1.5-2 4.5 1.5V19a2 2 0 0 1-2 2A16 16 0 0 1 3 5a2 2 0 0 1 2-1z" />
    </svg>
  )
}

export function ShieldCheck(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2l8 3.5v5.5c0 5-3.4 8.7-8 10-4.6-1.3-8-5-8-10V5.5z" />
      <path d="M8.5 12l2.5 2.5 4.5-4.5" />
    </svg>
  )
}

export function Hammer(props) {
  return (
    <svg {...base} {...props}>
      <path d="M15 12l-8.5 8.5a1.5 1.5 0 0 1-2-2L13 10" />
      <path d="M12.5 8.5l3-3 5 5-3 3z" />
      <path d="M14 5l3-3 4 4-3 3" />
    </svg>
  )
}

export function Tree(props) {
  return (
    <svg {...base} {...props}>
      <path d="M12 2 7 9h2l-4 6h3l-3 5h14l-3-5h3l-4-6h2z" />
      <line x1="12" y1="22" x2="12" y2="17" />
    </svg>
  )
}

export function Wrench(props) {
  return (
    <svg {...base} {...props}>
      <path d="M14.7 6.3a4 4 0 0 0-5.4 5.4L3 18l3 3 6.3-6.3a4 4 0 0 0 5.4-5.4l-2.6 2.6-2-2z" />
    </svg>
  )
}

export function House(props) {
  return (
    <svg {...base} {...props}>
      <path d="M3 11l9-7 9 7" />
      <path d="M5 10v10h14V10" />
      <path d="M9 20v-6h6v6" />
    </svg>
  )
}

export function Brick(props) {
  return (
    <svg {...base} {...props}>
      <rect x="2.5" y="4" width="8" height="6" rx="0.5" />
      <rect x="13.5" y="4" width="8" height="6" rx="0.5" />
      <rect x="8" y="14" width="8" height="6" rx="0.5" />
      <rect x="2.5" y="14" width="3" height="6" rx="0.5" />
      <rect x="18.5" y="14" width="3" height="6" rx="0.5" />
    </svg>
  )
}

export function Crane(props) {
  return (
    <svg {...base} {...props}>
      <path d="M4 21V6l9-3v4" />
      <path d="M13 7h8" />
      <path d="M18 7v5" />
      <path d="M18 12l3 3" />
      <path d="M4 21h9" />
      <path d="M4 13h6" />
    </svg>
  )
}

export function Gauge(props) {
  return (
    <svg {...base} {...props}>
      <circle cx="12" cy="13" r="8" />
      <path d="M12 13l4-4" />
      <path d="M8 4.5 9 6" />
      <path d="M16 4.5 15 6" />
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
  car: Car,
  bucket: Bucket,
  clock: Clock,
  mapPin: MapPin,
  phone: Phone,
  shieldCheck: ShieldCheck,
  hammer: Hammer,
  tree: Tree,
  wrench: Wrench,
  house: House,
  brick: Brick,
  crane: Crane,
  gauge: Gauge,
}

export function Icon({ name, ...props }) {
  const Cmp = ICONS[name] || Sparkle
  return <Cmp {...props} />
}
