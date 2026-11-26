// NICHE demo — gets indexed. See src/demos/README.md before duplicating this
// for a new niche or for a specific prospect.
export default {
  slug: 'self-storage',
  brand: 'SafeBox Storage',
  niche: 'Self Storage',
  valueProps: [
    `Book and pay online, no visit needed for a quote`,
    `Not sure what size you need? Answered on the website`,
    `Real-time availability`,
  ],
  kind: 'nicho',

  seo: {
    title: 'Website Design for Self Storage Facilities (Live Example) | Easy Pro Digital',
    description:
      'A real example website for self-storage and warehouse rental businesses, built by Easy Pro Digital. Unit sizes, pricing, security features and online booking.',
    robots: 'index, follow',
  },

  layout: {
    order: ['hero', 'units', 'valueProps', 'unitTypes', 'services', 'features', 'testimonials', 'map', 'cta'],
  },

  theme: {
    primary: '#2b4c7e',          // azul confianza, "orden y seguridad"
    primaryDark: '#1b3357',
    accent: '#e8a33d',           // ámbar de advertencia/acceso, cálido
    bg: '#f6f7fa',
    surface: '#ffffff',
    ink: '#1a2233',
    muted: '#5b6478',
    line: '#e2e5ee',
    headingFont: "'Sora', system-ui, sans-serif",
    bodyFont: "'Inter', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Sora:wght@600;700&family=Inter:wght@300;400;500;600&display=swap',
  },

  nav: {
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Units', href: '#units' },
      { label: 'Unit Sizes', href: '#unit-types' },
      { label: 'Services', href: '#services' },
      { label: 'Why Us', href: '#features' },
      { label: 'Reviews', href: '#testimonials' },
      { label: 'Location', href: '#location' },
    ],
    ctaLabel: 'Reserve a Unit',
  },

  hero: {
    variant: 'split',
    eyebrow: 'Self Storage · Medellín',
    title: 'Your space, locked up and on your schedule.',
    text: 'Storage units in every size, 24/7 access, cameras and alarms in every hallway. Book online in less than 2 minutes.',
    primaryCta: { label: 'Reserve My Unit', href: '#book' },
    secondaryCta: { label: 'See Unit Sizes', href: '#unit-types' },
    trust: [
      { end: 450, suffix: '+', label: 'units available' },
      { value: '24/7', label: 'access and security' },
      { end: 9, label: 'years in business' },
    ],
    visualIcon: 'shieldCheck',
    // GlassSurface (React Bits, sin deps): paneles de vidrio esmerilado —
    // transparencia como metáfora de "aquí no hay nada que esconder".
    background: 'glassSurface',
    image: '/images/self-storage/hero.jpg',
    imageAlt: 'Rows of modern self-storage units with roll-up doors',
  },

  // Portal de bodegas (StorageUnitsSection.jsx): buscador, filtros y tarjetas
  // tipo portal de self storage — lo que un cliente espera encontrar cuando
  // busca dónde guardar sus cosas. Fotos locales en public/images/self-storage.
  units: {
    eyebrow: 'Available Units',
    title: 'Find the right unit for your space',
    intro: 'Sample units — on your real website, your own available units would appear here, updated from your system.',
    city: 'Itagüí',
    locale: 'en-US',
    currency: 'USD',
    labels: {
      allKinds: 'All',
      kinds: { indoor: 'Indoor', driveup: 'Drive-up', vehicle: 'Vehicles' },
      branch: 'Location', allBranches: 'All locations', search: 'Search',
      resultOne: 'unit available in', resultMany: 'units available in',
      sortBy: 'Sort by', sortFeatured: 'Featured', sortPriceAsc: 'Lowest price', sortSizeDesc: 'Largest size',
      filters: 'Filters',
      size: 'Unit size', sizes: { S: 'Small', M: 'Medium', L: 'Large', XL: 'XL' },
      extras: 'Features', climate: 'Climate controlled', access24: '24/7 access',
      clear: 'Clear filters', perMonth: '/mo', available: 'Available',
      unitTitle: 'Unit', call: 'Call', reserve: 'Reserve',
      favorite: 'Save to favorites',
      empty: 'No units match those filters. Try widening your search.',
    },
    items: [
      { id: 1, kind: 'indoor', size: 'S', m2: 1.5, dims: '1.5 × 1 × 2.4 m', branch: 'Itagüí', level: 'Ground floor',
        climate: true, access24: true, available: 6, price: 35, image: '/images/self-storage/unit-small.jpg', tag: 'Popular' },
      { id: 2, kind: 'indoor', size: 'S', m2: 2, dims: '1.6 × 1.2 × 2.4 m', branch: 'Envigado', level: 'Level 1',
        climate: false, access24: false, available: 4, price: 28, image: '/images/self-storage/hero.jpg' },
      { id: 3, kind: 'driveup', size: 'M', m2: 4.5, dims: '2.4 × 1.9 × 2.4 m', branch: 'Itagüí', level: 'Street level',
        climate: false, access24: true, available: 3, price: 62, image: '/images/self-storage/unit-medium.jpg', tag: 'Last 2' },
      { id: 4, kind: 'indoor', size: 'M', m2: 5, dims: '2.6 × 1.9 × 2.4 m', branch: 'Envigado', level: 'Level 2',
        climate: true, access24: true, available: 5, price: 72, image: '/images/self-storage/unit-medium.jpg' },
      { id: 5, kind: 'indoor', size: 'L', m2: 9, dims: '3 × 3 × 2.4 m', branch: 'Itagüí', level: 'Level 1',
        climate: true, access24: true, available: 2, price: 118, image: '/images/self-storage/unit-large.jpg', tag: 'Popular' },
      { id: 6, kind: 'driveup', size: 'L', m2: 10, dims: '3.5 × 2.9 × 2.4 m', branch: 'Envigado', level: 'Street level',
        climate: false, access24: true, available: 4, price: 98, image: '/images/self-storage/unit-small.jpg' },
      { id: 7, kind: 'driveup', size: 'XL', m2: 14, dims: '4 × 3.5 × 2.4 m', branch: 'Itagüí', level: 'Street level',
        climate: false, access24: true, available: 1, price: 175, image: '/images/self-storage/unit-xl.jpg', tag: 'Last unit' },
      { id: 8, kind: 'vehicle', size: 'L', m2: 10, dims: '3.5 × 3 × 2.4 m', branch: 'Envigado', level: 'Street level',
        climate: false, access24: true, available: 3, price: 85, image: '/images/self-storage/unit-vehicle.jpg', tag: 'Popular' },
      { id: 9, kind: 'vehicle', size: 'XL', m2: 16, dims: '5 × 3.2 × 2.6 m', branch: 'Itagüí', level: 'Street level',
        climate: false, access24: true, available: 2, price: 105, image: '/images/self-storage/hero.jpg' },
    ],
  },

  // AccordionGallery (React Bits, motor gsap): franjas que se expanden al
  // hover revelando cada tamaño de unidad disponible.
  unitTypes: {
    eyebrow: 'Unit Sizes',
    title: 'Find the right size',
    intro: 'Hover over each size to see the details — this is how it would look on your real site with photos of your own units.',
    items: [
      { title: 'Small · 1.5 m²', subtitle: 'Boxes and suitcases',           image: '/images/self-storage/unit-small.jpg' },
      { title: 'Medium · 4.5 m²', subtitle: 'One-bedroom furniture',   image: '/images/self-storage/unit-medium.jpg' },
      { title: 'Large · 9 m²',    subtitle: 'Small full house',     image: '/images/self-storage/unit-large.jpg' },
      { title: 'XL · 14 m²',       subtitle: 'Business inventory',     image: '/images/self-storage/unit-xl.jpg' },
      { title: 'Vehicle',        subtitle: 'Car, motorcycle or boat',      image: '/images/self-storage/unit-vehicle.jpg' },
    ],
  },

  services: {
    eyebrow: 'What We Offer',
    title: 'Everything you need to store with peace of mind',
    intro: 'Sample pricing — this is how the services and rates section would look on your own website.',
    variant: 'grid',
    items: [
      { icon: 'shieldCheck', title: '24/7 Security',         text: 'Cameras in every hallway and an individual alarm per unit.',                price: 'Included' },
      { icon: 'clock',       title: 'Access Anytime',        text: 'Get in and out of your unit at any hour, every day.',                       price: 'Included' },
      { icon: 'mapPin',      title: 'Moving & Transport',    text: 'Truck and crew to bring your things on the day you book.',                  price: 'From $35' },
      { icon: 'leaf',        title: 'Climate Control',       text: 'Humidity-controlled units for electronics and documents.',                  price: 'From $8/mo extra' },
      { icon: 'users',       title: 'Contents Insurance',    text: 'Optional coverage for what you store, with no complicated paperwork.',       price: 'From $5/mo' },
      { icon: 'phone',       title: 'On-Site Support',       text: 'Staff available during extended hours to help you move in or organize.',     price: 'Included' },
    ],
  },

  features: {
    eyebrow: 'Why Choose Us',
    title: 'Order, security and zero surprises',
    intro: 'Four reasons people trust us with their things.',
    items: [
      { icon: 'shieldCheck', title: 'Real Security',         text: 'Cameras, individual alarms and access with a unique code per customer.' },
      { icon: 'clock',       title: 'Total Flexibility',     text: 'Month-to-month contracts, with no minimum commitment or fine print.' },
      { icon: 'mapPin',      title: 'Accessible Location',   text: 'Easy vehicle access, wide hallways and free carts.' },
      { icon: 'users',       title: 'Transparent Pricing',   text: 'What you see in the quote is what you pay — no hidden fees.' },
    ],
  },

  testimonials: {
    eyebrow: 'Happy Customers',
    title: 'What our customers say',
    intro: 'Sample testimonials — your website would feature real reviews from your customers.',
    items: [
      { name: 'Felipe A.', role: 'Temporary move',  quote: 'I stored all my furniture for 3 months while I moved and everything arrived spotless. 24/7 access saved me more than once.' },
      { name: 'Natalia V.', role: 'Business inventory', quote: 'I’ve kept my e-commerce inventory here for a year. I’ve never had a security issue.' },
      { name: 'Jorge M.',   role: 'Vehicle storage',  quote: 'I store my motorcycle during the rainy season. The space is just right and the price is very reasonable.' },
    ],
  },

  map: {
    eyebrow: 'Find Us',
    title: 'Visit Us',
    intro: 'Wide vehicle entrance, open 365 days a year.',
    id: 'location',
    query: 'Itagüí, Medellín, Colombia',
    address: 'Cl. 50 Sur #48-30, Itagüí, Antioquia',
    phone: '+57 322 309 2267',
    hours: [
      { days: 'Unit access', time: '24/7, every day' },
      { days: 'Office Mon–Sat', time: '8:00 AM – 6:00 PM' },
      { days: 'Office Sun',    time: '9:00 AM – 1:00 PM' },
    ],
  },

  cta: {
    heading: 'Need extra space today?',
    text: 'Book online and move your things in as soon as tomorrow. First month 15% off.',
    actions: [
      { label: 'Reserve a Unit', href: '#want-this' },
      { label: 'See All Sizes', href: '#want-this', variant: 'outline' },
    ],
  },

}
