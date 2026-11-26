// NICHE demo — gets indexed. See src/demos/README.md before duplicating this
// for a new niche or for a specific prospect.
export default {
  slug: 'realestate',
  brand: 'Harborview Realty Group',
  niche: 'Residential Real Estate',
  valueProps: [
    `Capture sellers with a free home valuation form`,
    `Your personal brand, not your brokerage's`,
    `Listings that load fast on mobile`,
  ],
  kind: 'nicho', // 'nicho' (niche) | 'prospecto' (prospect)

  // `primary` here is only for the pill color in the style switcher (so each
  // option previews its own palette instead of inheriting the current
  // page's theme) — keep it in sync with `theme.primary` below/in the
  // sibling files.
  styleVariants: [
    { slug: 'realestate', label: 'Harbor Navy', primary: '#1b3a5c' },
    { slug: 'realestate-coastal', label: 'Coastal Sand', primary: '#b08a5a' },
    { slug: 'realestate-modern', label: 'Modern Charcoal', primary: '#2b2b2e' },
    { slug: 'realestate-night', label: 'Midnight Listing', primary: '#4b91dd' },
  ],

  seo: {
    title: 'Website Design for Real Estate Agents (Live Example) | Easy Pro Digital',
    description:
      'A real example website for residential real estate agents and brokerages, built by Easy Pro Digital. This is how great your business website can look: services, property gallery, service area map and more.',
    robots: 'index, follow',
  },

  // Controls which sections render and in what order. Any subset/order of
  // 'hero' | 'services' | 'features' | 'gallery' | 'testimonials' | 'map' |
  // 'cta' is valid — DemoPage.jsx renders whatever is listed here, skipping
  // the rest.
  layout: {
    order: ['hero', 'listings', 'valueProps', 'services', 'features', 'testimonials', 'map', 'cta'],
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
      { label: 'Properties', href: '#listings' },
      { label: 'Services', href: '#services' },
      { label: 'Why Us', href: '#about' },
      { label: 'Service Area', href: '#location' },
    ],
    ctaLabel: 'Schedule a Consultation',
  },

  hero: {
    variant: 'split',
    eyebrow: 'Residential Real Estate',
    title: 'Find your next home, or get top dollar for your current one',
    text: 'Buying, selling and property management with an agent who knows the local market inside and out — no pressure, just honest guidance.',
    primaryCta: { label: 'Browse Properties', href: '#listings' },
    secondaryCta: { label: 'Schedule a Consultation', href: '#book' },
    trust: [
      { end: 450, suffix: '+', label: 'homes sold' },
      { value: '4.9 ★', label: 'average rating' },
      { end: 15, label: 'years in real estate' },
    ],
    visualIcon: 'house',
    // GridScan (React Bits, motor three + postprocessing, lazy): cuadrícula
    // técnica con barridos de escaneo, editorial/premium — el tracking
    // facial vía webcam del componente original se deja apagado a propósito
    // (ver EffectHeroBackground.jsx: pedirle la cámara a alguien que solo
    // vino a ver un ejemplo inmobiliario es mala UX), queda solo el shader.
    background: 'gridScan',
    image: '/images/realestate/hero.jpg',
    imageAlt: 'A two-story stone and brick home with a manicured front lawn at golden hour',
  },

  // Portal de inmuebles (ListingsSection.jsx): buscador, filtros y tarjetas
  // tipo Metrocuadrado/Fincaraíz — lo que un comprador o arrendatario espera
  // encontrar en la web de una inmobiliaria. Fotos de Unsplash (licencia
  // libre), servidas desde su CDN; ver public/images/realestate/CREDITS.md.
  listings: {
    eyebrow: 'Available Properties',
    title: 'Find your next home',
    intro: 'Sample listings — on your real website, your own properties would appear here, updated from your system.',
    city: 'Charleston',
    mapQuery: 'Charleston, SC',
    locale: 'en-US',
    currency: 'USD',
    labels: {
      allOps: 'All', ops: { rent: 'for Rent', sale: 'for Sale' }, opsPlural: { rent: 'For Rent', sale: 'For Sale' },
      types: { apartment: 'Apartment', house: 'House', studio: 'Studio' },
      allTypes: 'All types', where: 'Where?', wherePlaceholder: 'Neighborhood or area', type: 'Property type', search: 'Search',
      home: 'Home', properties: 'Properties', resultOne: 'property in', resultMany: 'properties in',
      viewMap: 'View on map', viewList: 'View list', sortBy: 'Sort by', sortFeatured: 'Featured',
      sortPriceAsc: 'Lowest price', sortPriceDesc: 'Highest price', sortArea: 'Largest area',
      price: 'Price', min: 'Min $', max: 'Max $', apply: 'Apply', beds: 'Bedrooms', baths: 'Bathrooms', clear: 'Clear filters',
      perMonth: '/mo', adminFee: 'HOA fee', bedsShort: 'bd', bathsShort: 'ba', parkingShort: 'pkg',
      filters: 'Filters', call: 'Call', contact: 'Contact', favorite: 'Save to favorites', prevPhoto: 'Previous photo', nextPhoto: 'Next photo',
      empty: 'No properties match those filters. Try widening your search.',
    },
    items: [
      { id: 1, op: 'rent', type: 'apartment', price: 2450, area: 72, beds: 2, baths: 2, parking: 1, tag: 'New',
        neighborhood: 'Mount Pleasant', zone: 'East Cooper', city: 'Charleston',
        images: ['https://images.unsplash.com/photo-1545324418-cc1a3fa10c00', 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267', 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4'] },
      { id: 2, op: 'rent', type: 'apartment', price: 2950, area: 98, beds: 3, baths: 2, parking: 1,
        neighborhood: 'Downtown', zone: 'Peninsula', city: 'Charleston',
        images: ['https://images.unsplash.com/photo-1515263487990-61b07816b324', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0'] },
      { id: 3, op: 'sale', type: 'house', price: 1150000, area: 240, beds: 4, baths: 4, parking: 2, tag: 'Featured',
        neighborhood: 'Daniel Island', zone: 'Berkeley County', city: 'Charleston',
        images: ['https://images.unsplash.com/photo-1580587771525-78b9dba3b914', 'https://images.unsplash.com/photo-1484154218962-a197022b5858', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0'] },
      { id: 4, op: 'rent', type: 'studio', price: 1550, area: 38, beds: 1, baths: 1, parking: 0,
        neighborhood: 'Wagener Terrace', zone: 'Peninsula', city: 'Charleston',
        images: ['https://images.unsplash.com/photo-1502672260266-1c1ef2d93688', 'https://images.unsplash.com/photo-1484154218962-a197022b5858'] },
      { id: 5, op: 'sale', type: 'apartment', price: 689000, area: 115, beds: 3, baths: 3, parking: 2,
        neighborhood: 'West Ashley', zone: 'Avondale', city: 'Charleston',
        images: ['https://images.unsplash.com/photo-1479839672679-a46483c0e7c8', 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92', 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4'] },
      { id: 6, op: 'sale', type: 'house', price: 1890000, area: 310, beds: 5, baths: 5, parking: 3, tag: 'Featured',
        neighborhood: 'Kiawah Island', zone: 'Sea Islands', city: 'Charleston',
        images: ['https://images.unsplash.com/photo-1600596542815-ffad4c1539a9', 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0'] },
      { id: 7, op: 'rent', type: 'apartment', price: 1980, area: 64, beds: 2, baths: 1, parking: 1,
        neighborhood: 'James Island', zone: 'Riverland', city: 'Charleston',
        images: ['https://images.unsplash.com/photo-1583847268964-b28dc8f51f92', 'https://images.unsplash.com/photo-1484154218962-a197022b5858', 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0'] },
      { id: 8, op: 'sale', type: 'apartment', price: 525000, area: 86, beds: 2, baths: 2, parking: 1, tag: 'New',
        neighborhood: 'North Charleston', zone: 'Park Circle', city: 'Charleston',
        images: ['https://images.unsplash.com/photo-1545324418-cc1a3fa10c00', 'https://images.unsplash.com/photo-1502672260266-1c1ef2d93688', 'https://images.unsplash.com/photo-1484154218962-a197022b5858'] },
      { id: 9, op: 'rent', type: 'house', price: 4200, area: 180, beds: 3, baths: 3, parking: 2,
        neighborhood: 'Folly Beach', zone: 'Sea Islands', city: 'Charleston',
        images: ['https://images.unsplash.com/photo-1580587771525-78b9dba3b914', 'https://images.unsplash.com/photo-1522708323590-d24dbb6b0267', 'https://images.unsplash.com/photo-1600489000022-c2086d79f9d4'] },
    ],
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
    // ScrollFloat (React Bits, gsap ya es runtime del bundle): las fotos
    // flotan en un vaivén suave y desincronizado al entrar en pantalla —
    // sobriedad editorial, el protagonista es la propiedad, no el efecto.
    hover: 'float',
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

}
