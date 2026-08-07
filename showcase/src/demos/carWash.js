// NICHE demo — gets indexed. See src/demos/README.md before duplicating this
// for a new niche or for a specific prospect.
export default {
  slug: 'car-wash',
  brand: 'Shine Spot Car Wash',
  niche: 'Car Wash & Auto Detailing',
  kind: 'nicho', // 'nicho' (niche) | 'prospecto' (prospect)

  // `primary` here is only for the pill color in the style switcher (so each
  // option previews its own palette instead of inheriting the current
  // page's theme) — keep it in sync with `theme.primary` below/in the
  // sibling files.
  styleVariants: [
    { slug: 'car-wash', label: 'Aqua Pro', primary: '#0f7ea3' },
    { slug: 'car-wash-turbo', label: 'Turbo Red', primary: '#c2261e' },
    { slug: 'car-wash-eco', label: 'Eco Green', primary: '#2f7d4f' },
  ],

  seo: {
    title: 'Website Design for Car Washes & Auto Detailing (Example) | Easy Pro Digital',
    description:
      'A real example website for car washes and auto detailing shops, built by Easy Pro Digital. This is how great your business website can look: packages, service area map, gallery and more.',
    robots: 'index, follow',
  },

  // Controls which sections render and in what order. Any subset/order of
  // 'hero' | 'services' | 'features' | 'gallery' | 'testimonials' | 'map' |
  // 'cta' is valid — DemoPage.jsx renders whatever is listed here, skipping
  // the rest.
  layout: {
    order: ['hero', 'services', 'gallery', 'features', 'testimonials', 'map', 'cta'],
  },

  theme: {
    primary: '#0f7ea3',
    primaryDark: '#0a5975',
    accent: '#f2b705',
    bg: '#f4fbfd',
    surface: '#ffffff',
    ink: '#152233',
    muted: '#5c7080',
    line: '#dbe9ee',
    headingFont: "'Sora', system-ui, sans-serif",
    bodyFont: "'Inter', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Sora:wght@600;700;800&family=Inter:wght@300;400;500;600&display=swap',
  },

  nav: {
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Packages', href: '#services' },
      { label: 'Gallery', href: '#gallery' },
      { label: 'Why Us', href: '#about' },
      { label: 'Location', href: '#location' },
    ],
    ctaLabel: 'Book a Wash',
  },

  hero: {
    variant: 'split',
    eyebrow: 'Car Wash & Detailing',
    title: 'Your car deserves a proper wash',
    text: 'Exterior wash, interior vacuuming, waxing and full detailing — in and out in under 20 minutes, no appointment needed.',
    primaryCta: { label: 'Book a Wash', href: '#book' },
    secondaryCta: { label: 'View Packages', href: '#services' },
    trust: [
      { end: 10000, suffix: '+', label: 'cars washed' },
      { value: '4.8 ★', label: 'average rating' },
      { end: 18, suffix: ' min', label: 'average wait' },
    ],
    visualIcon: 'car',
    image: '/images/car-wash/hero.jpg',
    imageAlt: 'Car entering an automatic car wash tunnel with colorful brushes',
  },

  services: {
    eyebrow: 'Packages',
    title: 'A wash for every need',
    intro: 'Sample pricing — this is how your packages and rates would look on your own website.',
    variant: 'grid',
    items: [
      { icon: 'droplet', title: 'Express Exterior', text: 'Foam wash, rinse and hand dry — quick and effective.', price: 'From $12' },
      { icon: 'bucket', title: 'Interior Detail', text: 'Full vacuum, dashboard, seats and windows cleaned inside.', price: 'From $25' },
      { icon: 'sparkle', title: 'Wax & Polish', text: 'Hand wax and polish for a deep, long-lasting shine.', price: 'From $35' },
      { icon: 'car', title: 'Tire & Rim Shine', text: 'Deep-clean wheels and tires with a glossy protective finish.', price: 'From $15' },
      { icon: 'award', title: 'Full Detail Package', text: 'Exterior wash, interior detail, wax and tire shine combined.', price: 'From $65' },
      { icon: 'clock', title: 'Monthly Membership', text: 'Unlimited express washes for the month, one flat price.', price: 'From $39/mo' },
    ],
  },

  features: {
    eyebrow: 'Why Choose Us',
    title: 'Fast, careful and eco-friendly',
    intro: 'Four reasons drivers keep coming back to Shine Spot.',
    items: [
      { icon: 'shieldCheck', title: 'Eco-Friendly Soap', text: 'Biodegradable products that are safe for your paint and the environment.' },
      { icon: 'clock', title: 'Fast Service', text: 'Most washes are done in under 20 minutes, no appointment needed.' },
      { icon: 'bucket', title: 'Free Vacuum Stations', text: 'Self-serve vacuum stations included with every wash package.' },
      { icon: 'users', title: 'Trained Staff', text: 'A friendly team trained to treat every car like their own.' },
    ],
  },

  gallery: {
    eyebrow: 'Our Work',
    title: 'See the Shine Spot difference',
    intro: 'On your real website, this is where photos of your bay, your team and finished cars would go.',
    items: [
      { label: 'Hand Wash', image: '/images/car-wash/handwash.jpg', alt: 'Staff member hand-washing a car with a sponge and bucket' },
      { label: 'Interior Detail', image: '/images/car-wash/interior.jpg', alt: 'Worker detailing a car interior with a sanitizing sprayer' },
      { label: 'Wax & Polish', image: '/images/car-wash/wax.jpg', alt: 'Hand polishing a red car headlight with a microfiber cloth' },
      { label: 'Tire Shine', image: '/images/car-wash/wheel.jpg', alt: 'Freshly rinsed car wheel with steam rising' },
    ],
  },

  testimonials: {
    eyebrow: 'Happy Customers',
    title: 'What drivers say about us',
    intro: 'Sample testimonials — your website would feature real reviews from your customers.',
    items: [
      { name: 'Marcus T.', role: 'Regular customer', quote: 'In and out in 15 minutes and my car looks brand new every time. The membership is a no-brainer.' },
      { name: 'Priya K.', role: 'New customer', quote: 'First time here and the interior detail was worth every penny — my seats look better than when I bought the car.' },
      { name: 'Diego R.', role: 'Regular customer', quote: 'Friendly staff, fair prices, and they actually get the wheels clean. That alone keeps me coming back.' },
    ],
  },

  map: {
    eyebrow: 'Find Us',
    title: 'Stop by or check our location',
    intro: 'Open every day, no appointment needed — just pull in.',
    id: 'location',
    query: 'Shine Spot Car Wash, Miami, FL',
    address: '4820 NW 7th St, Miami, FL 33126',
    phone: '+1 (305) 555-0142',
    hours: [
      { days: 'Mon – Sat', time: '8:00 AM – 7:00 PM' },
      { days: 'Sunday', time: '9:00 AM – 5:00 PM' },
    ],
  },

  cta: {
    heading: 'Ready for a spotless ride?',
    text: 'Pull in today — no appointment needed, most washes done in under 20 minutes.',
    actions: [
      { label: 'Book a Wash', href: '#want-this' },
      { label: 'View Packages', href: '#want-this', variant: 'outline' },
    ],
  },

  disclosure: {
    heading: 'This is a sample website',
    text: '"Shine Spot Car Wash" is not a real business: this page is a web design example for car washes and auto detailing shops, built by Easy Pro Digital. If you run a business like this and want a website like this one (or better, with your brand, your photos and real booking/membership signup), let’s talk.',
  },
}
