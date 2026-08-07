// NICHE demo — gets indexed. See src/demos/README.md before duplicating this
// for a new niche or for a specific prospect.
export default {
  slug: 'carpenters',
  brand: 'Oakline Carpentry',
  niche: 'Custom Carpentry & Woodworking',
  kind: 'nicho', // 'nicho' (niche) | 'prospecto' (prospect)

  // `primary` here is only for the pill color in the style switcher (so each
  // option previews its own palette instead of inheriting the current
  // page's theme) — keep it in sync with `theme.primary` below/in the
  // sibling files.
  styleVariants: [
    { slug: 'carpenters', label: 'Classic Oak', primary: '#8b5a2b' },
    { slug: 'carpenters-rustic', label: 'Rustic Barn', primary: '#6b3226' },
    { slug: 'carpenters-modern', label: 'Modern Slate', primary: '#3f4a4d' },
  ],

  seo: {
    title: 'Website Design for Carpenters & Woodworkers (Example) | Easy Pro Digital',
    description:
      'A real example website for custom carpentry and woodworking businesses, built by Easy Pro Digital. This is how great your business website can look: services, project gallery, service area map and more.',
    robots: 'index, follow',
  },

  // Controls which sections render and in what order. Any subset/order of
  // 'hero' | 'services' | 'features' | 'gallery' | 'testimonials' | 'map' |
  // 'cta' is valid — DemoPage.jsx renders whatever is listed here, skipping
  // the rest.
  layout: {
    order: ['hero', 'gallery', 'services', 'features', 'testimonials', 'map', 'cta'],
  },

  theme: {
    primary: '#8b5a2b',
    primaryDark: '#6b4520',
    accent: '#c9922f',
    bg: '#faf6f0',
    surface: '#ffffff',
    ink: '#2b2015',
    muted: '#7a6a56',
    line: '#e8ddc9',
    headingFont: "'Bitter', serif",
    bodyFont: "'Work Sans', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Bitter:wght@600;700;800&family=Work+Sans:wght@300;400;500;600&display=swap',
  },

  nav: {
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Gallery', href: '#gallery' },
      { label: 'Services', href: '#services' },
      { label: 'Why Us', href: '#about' },
      { label: 'Service Area', href: '#location' },
    ],
    ctaLabel: 'Get a Free Estimate',
  },

  hero: {
    variant: 'split',
    eyebrow: 'Custom Carpentry & Woodworking',
    title: 'Furniture and built-ins crafted to last generations',
    text: 'From custom furniture to cabinetry, decks and fine trim work — real wood, real joinery, and a craftsman who stands behind every piece.',
    primaryCta: { label: 'Get a Free Estimate', href: '#book' },
    secondaryCta: { label: 'View Our Work', href: '#gallery' },
    trust: [
      { end: 15, suffix: '+', label: 'years of craftsmanship' },
      { value: '5.0 ★', label: 'average rating' },
      { end: 300, suffix: '+', label: 'custom pieces built' },
    ],
    visualIcon: 'hammer',
    image: '/images/carpenters/hero.jpg',
    imageAlt: 'Carpenter in a wood workshop surrounded by hand tools',
  },

  services: {
    eyebrow: 'What We Build',
    title: 'Carpentry services for every project',
    intro: 'Sample pricing — this is how your services and rates would look on your own website.',
    variant: 'grid',
    items: [
      { icon: 'house', title: 'Custom Furniture', text: 'Tables, cabinets and one-of-a-kind pieces built to your exact specs.', price: 'From $450' },
      { icon: 'hammer', title: 'Cabinetry & Built-ins', text: 'Kitchen cabinets, closets and built-in shelving that fit your space perfectly.', price: 'From $1,200' },
      { icon: 'tree', title: 'Decks & Outdoor Carpentry', text: 'Weather-rated decks, pergolas and fences built to handle the elements.', price: 'From $2,500' },
      { icon: 'wrench', title: 'Trim & Finish Carpentry', text: 'Crown molding, baseboards, wainscoting and door casings, precisely fitted.', price: 'From $8/ft' },
      { icon: 'brush', title: 'Furniture Repair & Restoration', text: 'Bring damaged or antique furniture back to life with expert restoration.', price: 'From $150' },
      { icon: 'sparkle', title: 'Kitchen Remodels', text: 'Full kitchen carpentry — cabinets, islands and custom storage solutions.', price: 'From $4,000' },
    ],
  },

  features: {
    eyebrow: 'Why Choose Us',
    title: 'Craftsmanship you can see in every joint',
    intro: 'Four reasons clients trust Oakline with heirloom-quality work.',
    items: [
      { icon: 'shieldCheck', title: 'Licensed & Insured', text: 'Fully licensed carpentry contractor — your project and property are protected.' },
      { icon: 'award', title: 'Master Craftsmanship', text: 'Two decades of fine woodworking experience, visible in every joint and finish.' },
      { icon: 'clock', title: 'On-Time, On-Budget', text: 'Clear timelines and transparent quotes — no surprises mid-project.' },
      { icon: 'leaf', title: 'Sustainably Sourced Wood', text: 'Locally sourced and reclaimed lumber whenever possible.' },
    ],
  },

  gallery: {
    eyebrow: 'Our Work',
    title: 'A closer look at the craft',
    intro: 'On your real website, this is where photos of your own finished projects would go.',
    items: [
      { label: 'Woodturning', image: '/images/carpenters/lathe.jpg', alt: 'Carpenter shaping a wood block on a lathe' },
      { label: 'Hand-Finished Joinery', image: '/images/carpenters/shavings.jpg', alt: 'Carpenter using a hand plane, wood shavings curling off a fresh joint' },
      { label: 'Finished Furniture', image: '/images/carpenters/table.jpg', alt: 'Reclaimed wood and glass coffee table' },
    ],
  },

  testimonials: {
    eyebrow: 'Happy Clients',
    title: 'What clients say about us',
    intro: 'Sample testimonials — your website would feature real reviews from your clients.',
    items: [
      { name: 'Diane K.', role: 'Custom furniture client', quote: 'The dining table Oakline built us is the first thing every guest asks about. The joinery is flawless.' },
      { name: 'Marcus T.', role: 'Kitchen remodel client', quote: 'They handled every cabinet and drawer detail themselves and finished a week ahead of schedule.' },
      { name: 'Property Manager, Redwood Lofts', role: 'Trim & finish client', quote: 'Consistent, precise trim work across 40 units. Easiest contractor relationship we’ve had.' },
    ],
  },

  map: {
    eyebrow: 'Service Area',
    title: 'Serving homeowners across the region',
    intro: 'Based locally — reach out to confirm we cover your address.',
    id: 'location',
    query: 'Oakline Carpentry, Portland, OR',
    address: '2210 SE Division St, Portland, OR 97202',
    phone: '+1 (503) 555-0142',
    hours: [
      { days: 'Mon – Fri', time: '8:00 AM – 5:00 PM' },
      { days: 'Saturday', time: 'By appointment' },
    ],
  },

  cta: {
    heading: 'Ready to build something that lasts?',
    text: 'Get a free, no-obligation estimate for your project.',
    actions: [
      { label: 'Get a Free Estimate', href: '#want-this' },
      { label: 'View Our Work', href: '#want-this', variant: 'outline' },
    ],
  },

  disclosure: {
    heading: 'This is a sample website',
    text: '"Oakline Carpentry" is not a real business: this page is a web design example for carpentry and woodworking businesses, built by Easy Pro Digital. If you run a business like this and want a website like this one (or better, with your brand, your photos and real online booking), let’s talk.',
  },
}
