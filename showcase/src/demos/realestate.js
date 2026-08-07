// NICHE demo — gets indexed. See src/demos/README.md before duplicating this
// for a new niche or for a specific prospect.
export default {
  slug: 'realestate',
  brand: 'Harborview Realty Group',
  niche: 'Residential Real Estate',
  kind: 'nicho', // 'nicho' (niche) | 'prospecto' (prospect)

  // `primary` here is only for the pill color in the style switcher (so each
  // option previews its own palette instead of inheriting the current
  // page's theme) — keep it in sync with `theme.primary` below/in the
  // sibling files.
  styleVariants: [
    { slug: 'realestate', label: 'Harbor Navy', primary: '#1b3a5c' },
    { slug: 'realestate-coastal', label: 'Coastal Sand', primary: '#b08a5a' },
    { slug: 'realestate-modern', label: 'Modern Charcoal', primary: '#2b2b2e' },
  ],

  seo: {
    title: 'Website Design for Real Estate Agents (Example) | Easy Pro Digital',
    description:
      'A real example website for residential real estate agents and brokerages, built by Easy Pro Digital. This is how great your business website can look: services, property gallery, service area map and more.',
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
    primary: '#1b3a5c',
    primaryDark: '#122943',
    accent: '#c9a227',
    bg: '#f7f8fa',
    surface: '#ffffff',
    ink: '#182430',
    muted: '#5c6a78',
    line: '#dde3ea',
    headingFont: "'Libre Baskerville', serif",
    bodyFont: "'Lato', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Libre+Baskerville:wght@400;700&family=Lato:wght@300;400;500;600;700&display=swap',
  },

  nav: {
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Services', href: '#services' },
      { label: 'Why Us', href: '#about' },
      { label: 'Gallery', href: '#gallery' },
      { label: 'Service Area', href: '#location' },
    ],
    ctaLabel: 'Schedule a Consultation',
  },

  hero: {
    variant: 'split',
    eyebrow: 'Residential Real Estate',
    title: 'Find your next home, or get top dollar for your current one',
    text: 'Buying, selling and property management with an agent who knows the local market inside and out — no pressure, just honest guidance.',
    primaryCta: { label: 'Schedule a Consultation', href: '#book' },
    secondaryCta: { label: 'View Services', href: '#services' },
    trust: [
      { end: 450, suffix: '+', label: 'homes sold' },
      { value: '4.9 ★', label: 'average rating' },
      { end: 15, label: 'years in real estate' },
    ],
    visualIcon: 'house',
    image: '/images/realestate/hero.jpg',
    imageAlt: 'A two-story stone and brick home with a manicured front lawn at golden hour',
  },

  services: {
    eyebrow: 'What We Do',
    title: 'Real estate services for buyers, sellers and investors',
    intro: 'Sample pricing — this is how your services and rates would look on your own website.',
    variant: 'grid',
    items: [
      { icon: 'house', title: 'Home Buying Assistance', text: 'From search to closing, we guide you through every step of buying a home.', price: 'No cost to buyers' },
      { icon: 'key', title: 'Home Selling & Listing', text: 'Professional photography, staging advice and pricing strategy to sell faster.', price: 'Commission-based' },
      { icon: 'gauge', title: 'Free Home Valuation', text: 'Find out what your home is worth in today’s market — no obligation.', price: 'Free' },
      { icon: 'shieldCheck', title: 'Property Management', text: 'Full-service management for rental properties and investment homes.', price: 'From 8%/mo' },
      { icon: 'mapPin', title: 'Relocation Services', text: 'Moving to the area? We help you find the right neighborhood, not just a house.', price: 'Free consultation' },
      { icon: 'award', title: 'Investment Properties', text: 'Identify and evaluate properties for rental income or resale value.', price: 'By consultation' },
    ],
  },

  features: {
    eyebrow: 'Why Choose Us',
    title: 'An agent who works for you, not the sale',
    intro: 'Four reasons clients choose Harborview for their biggest financial decision.',
    items: [
      { icon: 'shieldCheck', title: 'Licensed & Experienced', text: 'Every agent is licensed, background-checked and deeply familiar with the local market.' },
      { icon: 'clock', title: 'Always Responsive', text: 'Fast replies and flexible showings — your schedule, not ours.' },
      { icon: 'award', title: 'Proven Track Record', text: 'Hundreds of successful closings and a strong local reputation.' },
      { icon: 'sparkle', title: 'No-Pressure Guidance', text: 'We advise, you decide — every recommendation is about your goals, not a quick sale.' },
    ],
  },

  gallery: {
    eyebrow: 'Our Work',
    title: 'A closer look at what we do',
    intro: 'On your real website, this is where photos of your own listings and closings would go.',
    items: [
      { label: 'Move-In Ready Interiors', image: '/images/realestate/interior.jpg', alt: 'Bright, modern living and dining room with wood floors' },
      { label: 'Handing Over the Keys', image: '/images/realestate/keys.jpg', alt: 'Close-up of a hand holding house keys in front of blurred townhomes' },
      { label: 'Neighborhood Curb Appeal', image: '/images/realestate/curbappeal.jpg', alt: 'A pastel blue craftsman-style home with a white picket fence' },
    ],
  },

  testimonials: {
    eyebrow: 'Happy Clients',
    title: 'What clients say about us',
    intro: 'Sample testimonials — your website would feature real reviews from your clients.',
    items: [
      { name: 'Elena V.', role: 'First-time homebuyer', quote: 'Patient, honest and never pushy. Explained every step so we never felt lost in the process.' },
      { name: 'Robert & Diane M.', role: 'Sellers', quote: 'Priced our home right and had three offers within a week. Sold above asking.' },
      { name: 'James T.', role: 'Rental property owner', quote: 'They manage two of my rentals and I genuinely never have to think about it.' },
    ],
  },

  map: {
    eyebrow: 'Service Area',
    title: 'Serving buyers and sellers across the region',
    intro: 'Based locally — reach out to confirm we cover your neighborhood.',
    id: 'location',
    query: 'Harborview Realty Group, Charleston, SC',
    address: '145 Meeting St, Charleston, SC 29401',
    phone: '+1 (843) 555-0177',
    hours: [
      { days: 'Mon – Sat', time: '9:00 AM – 6:00 PM' },
      { days: 'Sunday', time: 'By appointment' },
    ],
  },

  cta: {
    heading: 'Ready to make your next move?',
    text: 'Schedule a free, no-obligation consultation today.',
    actions: [
      { label: 'Schedule a Consultation', href: '#want-this' },
      { label: 'View Services', href: '#want-this', variant: 'outline' },
    ],
  },

  disclosure: {
    heading: 'This is a sample website',
    text: '"Harborview Realty Group" is not a real business: this page is a web design example for real estate agents and brokerages, built by Easy Pro Digital. If you run a business like this and want a website like this one (or better, with your brand, your listings and real IDX integration), let’s talk.',
  },
}
