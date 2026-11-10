// NICHE demo — gets indexed. See src/demos/README.md before duplicating this
// for a new niche or for a specific prospect.
export default {
  slug: 'car-rental',
  brand: 'Veloz Car Rental',
  niche: 'Car Rental',
  valueProps: [
    `Book direct without paying platform commissions`,
    `Bilingual website for tourists`,
    `Airport or hotel delivery as a differentiator`,
  ],
  kind: 'nicho',

  seo: {
    title: 'Website Design for Car Rental Companies (Live Example) | Easy Pro Digital',
    description:
      'A real example website for car rental agencies, built by Easy Pro Digital. Fleet showcase with premium hover effects, pricing, and instant booking.',
    robots: 'index, follow',
  },

  layout: {
    order: ['hero', 'valueProps', 'services', 'features', 'gallery', 'testimonials', 'map', 'cta'],
  },

  theme: {
    primary: '#1c1f26',          // gris grafito, "metal premium"
    primaryDark: '#0e1014',
    accent: '#c62828',           // rojo deportivo
    bg: '#f4f4f6',
    surface: '#ffffff',
    ink: '#13151a',
    muted: '#5c5f68',
    line: '#e3e3e8',
    headingFont: "'Barlow Condensed', system-ui, sans-serif",
    bodyFont: "'Inter', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Barlow+Condensed:wght@600;700&family=Inter:wght@300;400;500;600&display=swap',
  },

  nav: {
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Fleet', href: '#services' },
      { label: 'Why Us', href: '#features' },
      { label: 'Gallery', href: '#gallery' },
      { label: 'Reviews', href: '#testimonials' },
      { label: 'Location', href: '#location' },
    ],
    ctaLabel: 'Book a Car',
  },

  hero: {
    variant: 'split',
    eyebrow: 'Car Rental · Medellín',
    title: 'Drive what you want, when you want.',
    text: 'A fleet renewed every year, delivery at the airport or your hotel, and 100% online booking. From budget sedans to premium SUVs.',
    primaryCta: { label: 'Book My Car', href: '#book' },
    secondaryCta: { label: 'See the Fleet', href: '#services' },
    trust: [
      { end: 180, suffix: '+', label: 'vehicles in the fleet' },
      { value: '4.8 ★', label: 'average rating' },
      { end: 7, label: 'years renting cars' },
    ],
    visualIcon: 'car',
    // LiquidChrome (React Bits, motor ogl): metal líquido en grises —
    // "metal premium" sin usar three/Hyperspeed, que ya es pesado en otras
    // demos. Único WebGL de la página.
    background: 'liquidChrome',
    image: '/images/car-rental/hero.jpg',
    imageAlt: 'Sleek silver SUV parked at golden hour',
  },

  services: {
    eyebrow: 'Our Fleet',
    title: 'A car for every plan',
    intro: 'Sample pricing — this is how the fleet and rates section would look on your own website.',
    variant: 'grid',
    // TiltedCard (motion) + GlareHover (sin deps): cada tarjeta se inclina
    // en 3D siguiendo el cursor y un brillo cruza la carrocería, como luz
    // real sobre metal.
    hover: 'tilted',
    items: [
      { icon: 'car',   title: 'Economy',       text: 'Chevrolet Spark or similar. Ideal for the city, low fuel consumption.',              price: 'From $28/day' },
      { icon: 'car',   title: 'Executive Sedan', text: 'Toyota Corolla or similar. Roomy and comfortable for long trips.',           price: 'From $42/day' },
      { icon: 'car',   title: 'Compact SUV',    text: 'Chevrolet Tracker or similar. For highways and mixed terrain.',            price: 'From $55/day' },
      { icon: 'car',   title: 'Premium SUV',     text: 'Toyota Fortuner or similar. Luxury and power for the whole family.',      price: 'From $78/day' },
      { icon: 'car',   title: '4x4 Pickup',   text: 'Toyota Hilux or similar. For demanding routes outside the city.',          price: 'From $85/day' },
      { icon: 'car',   title: 'Passenger Van', text: 'Up to 12 people. Perfect for groups and corporate events.',         price: 'From $95/day' },
    ],
  },

  features: {
    eyebrow: 'Why Choose Us',
    title: 'Renting a car shouldn’t be complicated',
    intro: 'Four reasons people choose us again and again.',
    items: [
      { icon: 'clock',       title: 'Delivery Where You Are', text: 'Airport, hotel or your home — we bring the car to you at no extra cost in the metro area.' },
      { icon: 'shieldCheck', title: 'Full Coverage Insurance',   text: 'All our vehicles include comprehensive coverage with no surprise deductibles.' },
      { icon: 'award',       title: 'Renewed Fleet',       text: 'Vehicles no more than 2 years old, inspected and sanitized before every delivery.' },
      { icon: 'phone',       title: 'Roadside Support',      text: 'A 24/7 assistance line if anything happens during your rental.' },
    ],
  },

  gallery: {
    eyebrow: 'Our Cars',
    title: 'Meet the fleet',
    intro: 'On your real website, this is where real photos of your own vehicles would go.',
    items: [
      { label: 'Sedan',    image: '/images/car-rental/sedan.jpg',    alt: 'Silver sedan parked in a modern garage' },
      { label: 'SUV',      image: '/images/car-rental/suv.jpg',      alt: 'Black SUV on a mountain road' },
      { label: 'Pickup',   image: '/images/car-rental/pickup.jpg',   alt: 'White pickup truck off-road' },
      { label: 'Economy', image: '/images/car-rental/economy.jpg', alt: 'Compact hatchback in the city' },
    ],
  },

  testimonials: {
    eyebrow: 'Happy Drivers',
    title: 'What our customers say',
    intro: 'Sample testimonials — your website would feature real reviews from your customers.',
    items: [
      { name: 'Esteban G.', role: 'Business trip', quote: 'I booked from the airport and the car was already waiting for me. The whole process took 5 minutes.' },
      { name: 'Paula C.',  role: 'Family trip',     quote: 'We rented the premium SUV for a trip to the coast and it arrived spotless, with a full tank and everything checked.' },
      { name: 'Ricardo T.', role: 'Monthly rental',     quote: 'I’ve been renting monthly for work for over a year. The price and service are always consistent.' },
    ],
  },

  map: {
    eyebrow: 'Find Us',
    title: 'Office & Delivery',
    intro: 'We deliver to José María Córdova Airport at no extra cost.',
    id: 'location',
    query: 'Aeropuerto José María Córdova, Rionegro, Colombia',
    address: 'Cra. 48 #26-50, Rionegro, Antioquia',
    phone: '+57 322 309 2267',
    hours: [
      { days: 'Mon – Sun', time: '6:00 AM – 10:00 PM' },
      { days: 'Airport Delivery', time: '24/7, by reservation' },
    ],
  },

  cta: {
    heading: 'Ready for your next trip?',
    text: 'Book online in less than 3 minutes. Free cancellation up to 24 hours before.',
    actions: [
      { label: 'Book Now', href: '#want-this' },
      { label: 'See the Full Fleet', href: '#want-this', variant: 'outline' },
    ],
  },

}
