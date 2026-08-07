// NICHE demo — gets indexed. See src/demos/README.md before duplicating this
// for a new niche or for a specific prospect.
export default {
  slug: 'cleaners',
  brand: 'Bright Home Cleaners',
  niche: 'Residential & Office Cleaning',
  kind: 'nicho', // 'nicho' (niche) | 'prospecto' (prospect)

  // `primary` here is only for the pill color in the style switcher (so each
  // option previews its own palette instead of inheriting the current
  // page's theme) — keep it in sync with `theme.primary` below/in the
  // sibling files.
  styleVariants: [
    { slug: 'cleaners', label: 'Fresh Teal', primary: '#0e9594' },
    { slug: 'cleaners-sunny', label: 'Sunny Citrus', primary: '#e8871e' },
    { slug: 'cleaners-mono', label: 'Modern Mono', primary: '#2b2d34' },
  ],

  seo: {
    title: 'Website Design for Cleaning Companies (Example) | Easy Pro Digital',
    description:
      'A real example website for residential and office cleaning companies, built by Easy Pro Digital. This is how great your business website can look: services, booking, service area map and more.',
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
    primary: '#0e9594',
    primaryDark: '#0a6f6e',
    accent: '#ffd166',
    bg: '#f5fbfa',
    surface: '#ffffff',
    ink: '#17302f',
    muted: '#5c7877',
    line: '#dcefed',
    headingFont: "'Quicksand', system-ui, sans-serif",
    bodyFont: "'Inter', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Quicksand:wght@600;700&family=Inter:wght@300;400;500;600&display=swap',
  },

  nav: {
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Services', href: '#services' },
      { label: 'Why Us', href: '#about' },
      { label: 'Gallery', href: '#gallery' },
      { label: 'Service Area', href: '#location' },
    ],
    ctaLabel: 'Get a Free Quote',
  },

  hero: {
    variant: 'split',
    eyebrow: 'Residential & Office Cleaning',
    title: 'A spotless home, without lifting a finger',
    text: 'Standard cleaning, deep cleaning, move-in/move-out and recurring office cleaning — bonded, insured, and background-checked staff you can trust with your keys.',
    primaryCta: { label: 'Get a Free Quote', href: '#book' },
    secondaryCta: { label: 'View Services', href: '#services' },
    trust: [
      { end: 5000, suffix: '+', label: 'homes cleaned' },
      { value: '4.9 ★', label: 'average rating' },
      { end: 8, label: 'years in business' },
    ],
    visualIcon: 'bucket',
    image: '/images/cleaners/hero.jpg',
    imageAlt: 'Two cleaning staff in uniform washing office windows',
  },

  services: {
    eyebrow: 'What We Do',
    title: 'Cleaning plans for every space',
    intro: 'Sample pricing — this is how your services and rates would look on your own website.',
    variant: 'grid',
    items: [
      { icon: 'house', title: 'Standard Home Cleaning', text: 'Dusting, vacuuming, mopping and bathrooms — weekly, biweekly or monthly.', price: 'From $89' },
      { icon: 'sparkle', title: 'Deep Cleaning', text: 'A thorough top-to-bottom clean, ideal for a first visit or a seasonal refresh.', price: 'From $159' },
      { icon: 'bucket', title: 'Move In / Move Out', text: 'Empty-home cleaning so you can hand over the keys spotless.', price: 'From $199' },
      { icon: 'droplet', title: 'Kitchen & Bathroom Detail', text: 'Degreasing, descaling and sanitizing the two rooms that matter most.', price: 'From $69' },
      { icon: 'sun', title: 'Window Cleaning', text: 'Interior and exterior glass, streak-free, up to two stories.', price: 'From $49' },
      { icon: 'clock', title: 'Recurring Office Cleaning', text: 'Scheduled after-hours cleaning for small offices and studios.', price: 'From $120/mo' },
    ],
  },

  features: {
    eyebrow: 'Why Choose Us',
    title: 'Cleaners you can actually trust with your keys',
    intro: 'Four reasons clients stick with Bright Home long-term.',
    items: [
      { icon: 'shieldCheck', title: 'Bonded & Insured', text: 'Every visit is covered — your home and belongings are protected.' },
      { icon: 'leaf', title: 'Eco-Friendly Products', text: 'Safe, biodegradable cleaning products, gentle on kids, pets and allergies.' },
      { icon: 'clock', title: 'Flexible Scheduling', text: 'Same-week availability and easy online rescheduling, no phone tag.' },
      { icon: 'users', title: 'Background-Checked Staff', text: 'The same vetted, trained team every visit whenever possible.' },
    ],
  },

  gallery: {
    eyebrow: 'Our Work',
    title: 'See the Bright Home difference',
    intro: 'On your real website, this is where photos of your team at work would go.',
    items: [
      { label: 'Window Cleaning', image: '/images/cleaners/window.jpg', alt: 'Close-up of hands cleaning a window with a spray bottle and cloth' },
      { label: 'Kitchen & Bath', image: '/images/cleaners/kitchen.jpg', alt: 'Gloved hands sanitizing a kitchen countertop' },
      { label: 'Office Cleaning', image: '/images/cleaners/office.jpg', alt: 'Close-up of a vacuum cleaner on an office carpet' },
    ],
  },

  testimonials: {
    eyebrow: 'Happy Clients',
    title: 'What clients say about us',
    intro: 'Sample testimonials — your website would feature real reviews from your clients.',
    items: [
      { name: 'Rachel M.', role: 'Biweekly client', quote: 'Same two cleaners every time, always on schedule, and my apartment has never looked better.' },
      { name: 'Tomás V.', role: 'Move-out client', quote: 'Got our full deposit back thanks to how thorough the move-out clean was. Worth every dollar.' },
      { name: 'Office Manager, Kade Studio', role: 'Recurring office client', quote: 'They clean after hours so it never disrupts our team, and the office always smells great on Monday mornings.' },
    ],
  },

  map: {
    eyebrow: 'Service Area',
    title: 'Proudly serving the greater area',
    intro: 'Based locally — reach out to confirm we cover your address.',
    id: 'location',
    query: 'Bright Home Cleaners, Austin, TX',
    address: '1420 S Lamar Blvd, Austin, TX 78704',
    phone: '+1 (512) 555-0176',
    hours: [
      { days: 'Mon – Fri', time: '7:00 AM – 6:00 PM' },
      { days: 'Saturday', time: '8:00 AM – 2:00 PM' },
    ],
  },

  cta: {
    heading: 'Ready for a spotless space?',
    text: 'Get a free, no-obligation quote in minutes.',
    actions: [
      { label: 'Get a Free Quote', href: '#want-this' },
      { label: 'View Services', href: '#want-this', variant: 'outline' },
    ],
  },

  disclosure: {
    heading: 'This is a sample website',
    text: '"Bright Home Cleaners" is not a real business: this page is a web design example for cleaning companies, built by Easy Pro Digital. If you run a business like this and want a website like this one (or better, with your brand, your photos and real online booking), let’s talk.',
  },
}
