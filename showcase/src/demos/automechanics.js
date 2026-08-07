// NICHE demo — gets indexed. See src/demos/README.md before duplicating this
// for a new niche or for a specific prospect.
export default {
  slug: 'automechanics',
  brand: 'Redline Auto Repair',
  niche: 'Auto Mechanics & Repair Shops',
  kind: 'nicho', // 'nicho' (niche) | 'prospecto' (prospect)

  // `primary` here is only for the pill color in the style switcher (so each
  // option previews its own palette instead of inheriting the current
  // page's theme) — keep it in sync with `theme.primary` below/in the
  // sibling files.
  styleVariants: [
    { slug: 'automechanics', label: 'Racing Red', primary: '#c8102e' },
    { slug: 'automechanics-yellow', label: 'Shop Yellow', primary: '#f2a900' },
    { slug: 'automechanics-blue', label: 'Midnight Blue', primary: '#1d4e6b' },
  ],

  seo: {
    title: 'Website Design for Auto Mechanics & Repair Shops (Example) | Easy Pro Digital',
    description:
      'A real example website for auto mechanic and repair shop businesses, built by Easy Pro Digital. This is how great your business website can look: services, work gallery, service area map and more.',
    robots: 'index, follow',
  },

  // Controls which sections render and in what order. Any subset/order of
  // 'hero' | 'services' | 'features' | 'gallery' | 'testimonials' | 'map' |
  // 'cta' is valid — DemoPage.jsx renders whatever is listed here, skipping
  // the rest.
  layout: {
    order: ['hero', 'services', 'features', 'gallery', 'testimonials', 'map', 'cta'],
  },

  theme: {
    primary: '#c8102e',
    primaryDark: '#8f0b20',
    accent: '#1d1d1f',
    bg: '#f7f7f8',
    surface: '#ffffff',
    ink: '#1c1c1e',
    muted: '#6b6b70',
    line: '#e2e2e5',
    headingFont: "'Teko', sans-serif",
    bodyFont: "'Inter', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Teko:wght@500;600;700&family=Inter:wght@300;400;500;600&display=swap',
  },

  nav: {
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Services', href: '#services' },
      { label: 'Why Us', href: '#about' },
      { label: 'Our Shop', href: '#gallery' },
      { label: 'Location', href: '#location' },
    ],
    ctaLabel: 'Book a Service',
  },

  hero: {
    variant: 'split',
    eyebrow: 'Auto Mechanics & Repair',
    title: 'Honest car repair from mechanics who explain what they find',
    text: 'Diagnostics, brakes, engine and transmission work — done right the first time, with upfront pricing and no pressure to fix things that don’t need fixing.',
    primaryCta: { label: 'Book a Service', href: '#book' },
    secondaryCta: { label: 'See Our Shop', href: '#gallery' },
    trust: [
      { end: 20, suffix: '+', label: 'years wrenching' },
      { value: '4.9 ★', label: 'average rating' },
      { end: 12000, suffix: '+', label: 'cars serviced' },
    ],
    visualIcon: 'wrench',
    image: '/images/automechanics/hero.jpg',
    imageAlt: 'Mechanic working underneath a classic car in a garage',
  },

  services: {
    eyebrow: 'What We Do',
    title: 'Repair and maintenance for every make and model',
    intro: 'Sample pricing — this is how your services and rates would look on your own website.',
    variant: 'grid',
    items: [
      { icon: 'droplet', title: 'Oil Change & Fluid Service', text: 'Full-synthetic oil changes plus brake, transmission and coolant fluid checks.', price: 'From $45' },
      { icon: 'gauge', title: 'Brake Repair & Replacement', text: 'Pads, rotors and calipers replaced with OEM-quality parts and a road test.', price: 'From $150' },
      { icon: 'wrench', title: 'Engine Diagnostics & Repair', text: 'Check-engine lights, misfires and performance issues diagnosed with real data, not guesswork.', price: 'From $95' },
      { icon: 'crane', title: 'Transmission Service', price: 'From $180', text: 'Fluid flushes, filter replacement and repairs for automatic and manual transmissions.' },
      { icon: 'sparkle', title: 'A/C & Heating Repair', text: 'Recharges, compressor and heater core repairs to keep the cabin comfortable year-round.', price: 'From $110' },
      { icon: 'car', title: 'Tire Service & Alignment', text: 'Tire mounting, balancing and computerized wheel alignment for a smoother, safer ride.', price: 'From $80' },
    ],
  },

  features: {
    eyebrow: 'Why Choose Us',
    title: 'Repairs you can trust, explained in plain English',
    intro: 'Four reasons drivers make Redline their regular shop.',
    items: [
      { icon: 'shieldCheck', title: 'ASE Certified Technicians', text: 'Every technician is ASE certified and trained on the latest vehicle systems.' },
      { icon: 'gauge', title: 'State-of-the-Art Diagnostics', text: 'Factory-level scan tools catch the real problem instead of throwing parts at it.' },
      { icon: 'award', title: 'Honest, Upfront Pricing', text: 'Written estimates before any work starts — no surprise charges at pickup.' },
      { icon: 'clock', title: 'Fast Turnaround', text: 'Most repairs completed same-day, with loaner cars available for bigger jobs.' },
    ],
  },

  gallery: {
    eyebrow: 'Our Shop',
    title: 'A closer look at the work',
    intro: 'On your real website, this is where photos of your own shop and repairs would go.',
    items: [
      { label: 'Engine Bay Detail', image: '/images/automechanics/engine.jpg', alt: 'Close-up of a polished performance engine bay' },
      { label: 'Precision Maintenance', image: '/images/automechanics/maintenance.jpg', alt: 'Mechanic hand cleaning an engine component' },
      { label: 'Chassis & Suspension', image: '/images/automechanics/chassis.jpg', alt: 'Close-up of a car chassis and suspension components' },
    ],
  },

  testimonials: {
    eyebrow: 'Happy Clients',
    title: 'What clients say about us',
    intro: 'Sample testimonials — your website would feature real reviews from your clients.',
    items: [
      { name: 'Marcus T.', role: 'Brake repair client', quote: 'They showed me the worn pads before replacing them. No upsell, just honest work.' },
      { name: 'Priya K.', role: 'Check-engine light client', quote: 'Another shop wanted to replace the whole sensor assembly. Redline found a $40 fix.' },
      { name: 'Fleet Manager, Coastline Deliveries', role: 'Repeat commercial client', quote: 'We service our whole delivery fleet here. Fast turnaround, fair invoices every time.' },
    ],
  },

  map: {
    eyebrow: 'Find Us',
    title: 'Serving drivers across the metro area',
    intro: 'Based locally — reach out to confirm we cover your address.',
    id: 'location',
    query: 'Redline Auto Repair, Phoenix, AZ',
    address: '2140 E Van Buren St, Phoenix, AZ 85006',
    phone: '+1 (602) 555-0132',
    hours: [
      { days: 'Mon – Fri', time: '7:30 AM – 6:00 PM' },
      { days: 'Saturday', time: '8:00 AM – 2:00 PM' },
    ],
  },

  cta: {
    heading: 'Something feel off with your car?',
    text: 'Book a diagnostic and get an honest, upfront quote.',
    actions: [
      { label: 'Book a Service', href: '#want-this' },
      { label: 'See Our Shop', href: '#want-this', variant: 'outline' },
    ],
  },

  disclosure: {
    heading: 'This is a sample website',
    text: '"Redline Auto Repair" is not a real business: this page is a web design example for auto mechanics and repair shops, built by Easy Pro Digital. If you run a business like this and want a website like this one (or better, with your brand, your photos and real online booking), let’s talk.',
  },
}
