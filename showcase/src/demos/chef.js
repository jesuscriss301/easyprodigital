// NICHE demo — gets indexed. See src/demos/README.md before duplicating this
// for a new niche or for a specific prospect.
export default {
  slug: 'private-chef',
  brand: 'Chef Mateo Serrano',
  niche: 'Private Chefs & Catering',
  kind: 'nicho', // 'nicho' (niche) | 'prospecto' (prospect)

  // `primary` here is only for the pill color in the style switcher (so each
  // option previews its own palette instead of inheriting the current
  // page's theme) — keep it in sync with `theme.primary` below/in the
  // sibling files.
  styleVariants: [
    { slug: 'private-chef', label: 'Warm Bistro', primary: '#8c3b2e' },
    { slug: 'private-chef-noir', label: 'Fine Dining Noir', primary: '#191714' },
    { slug: 'private-chef-fresh', label: 'Fresh Market', primary: '#4c7a3d' },
  ],

  seo: {
    title: 'Website Design for Private Chefs & Catering (Example) | Easy Pro Digital',
    description:
      'A real example website for private chefs and catering businesses, built by Easy Pro Digital. This is how great your business website can look: menus, event packages, food gallery and more.',
    robots: 'index, follow',
  },

  // Food is bought with the eyes — gallery goes straight after the hero.
  // Local-service business (events at the client's home/venue) → map stays.
  layout: {
    order: ['hero', 'gallery', 'services', 'features', 'testimonials', 'map', 'cta'],
  },

  theme: {
    primary: '#8c3b2e',
    primaryDark: '#68281e',
    accent: '#c98f3d',
    bg: '#faf6f0',
    surface: '#ffffff',
    ink: '#2a211c',
    muted: '#7c6f66',
    line: '#ebe0d2',
    headingFont: "'Cormorant Garamond', Georgia, serif",
    bodyFont: "'Jost', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@600;700&family=Jost:wght@300;400;500;600&display=swap',
  },

  nav: {
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Menus', href: '#services' },
      { label: 'The Chef', href: '#about' },
      { label: 'Gallery', href: '#gallery' },
      { label: 'Service Area', href: '#location' },
    ],
    ctaLabel: 'Book an Event',
  },

  hero: {
    variant: 'split',
    eyebrow: 'Private Chef & Catering',
    title: 'Restaurant-level dining, served at your own table',
    text: 'Intimate dinners, celebrations and corporate events, cooked in your kitchen with seasonal ingredients. You host, I handle everything else — menu, shopping, cooking and cleanup.',
    primaryCta: { label: 'Book an Event', href: '#book' },
    secondaryCta: { label: 'See Menus', href: '#services' },
    trust: [
      { end: 850, suffix: '+', label: 'events cooked' },
      { end: 14, label: 'years in professional kitchens' },
      { value: '5.0 ★', label: 'average rating' },
    ],
    visualIcon: 'chefHat',
    image: '/images/private-chef/hero.jpg',
    imageAlt: 'Chef plating an elegant dish in a professional kitchen',
  },

  services: {
    eyebrow: 'Menus & Packages',
    title: 'An experience for every occasion',
    intro: 'Sample pricing per guest — this is how your menus and packages would look on your own website.',
    variant: 'grid',
    items: [
      { icon: 'utensils', title: 'Intimate Dinner Party', text: 'A 4-course tasting menu for 2–8 guests, personalized after a chat about what you love.', price: 'From $95/guest' },
      { icon: 'flame', title: 'Live Grill Experience', text: 'Open-fire cooking in your backyard — meats, seafood and vegetables done over coals.', price: 'From $75/guest' },
      { icon: 'sparkle', title: 'Celebrations & Events', text: 'Birthdays, anniversaries and showers for up to 40 guests, plated or family-style.', price: 'From $65/guest' },
      { icon: 'users', title: 'Corporate Catering', text: 'Team lunches, client dinners and office events with dietary options for everyone.', price: 'From $45/guest' },
      { icon: 'chefHat', title: 'Cooking Classes', text: 'Hands-on classes in your kitchen — date night, family session or team building.', price: 'From $120/class' },
      { icon: 'clock', title: 'Weekly Meal Prep', text: 'A week of chef-made meals in your fridge, tailored to your goals and allergies.', price: 'From $220/week' },
    ],
  },

  features: {
    eyebrow: 'The Chef',
    title: 'Trained in restaurants, happiest in your home',
    intro: 'Why guests remember these dinners for years.',
    items: [
      { icon: 'award', title: '14 Years of Fine Dining', text: 'Kitchens in Barcelona and New York before going private — technique you can taste.' },
      { icon: 'leaf', title: 'Seasonal & Local', text: 'Menus written around what the market looks like that week, not a frozen inventory.' },
      { icon: 'shieldCheck', title: 'Certified & Insured', text: 'Food-handler certified, fully insured, and spotless kitchen habits — yours stays cleaner than I found it.' },
      { icon: 'heart', title: 'Every Diet Welcome', text: 'Vegan, gluten-free, kosher-style or allergy-driven menus that never feel like an afterthought.' },
    ],
  },

  gallery: {
    hover: 'glare', // GlareHover (React Bits, CSS sin deps) — brillo al pasar sobre los platos
    eyebrow: 'From the Kitchen',
    title: 'A taste of what lands on the table',
    intro: 'On your real website, this is where photos of your own dishes and events would go.',
    items: [
      { label: 'Signature Plating', image: '/images/private-chef/plating.jpg', alt: 'Elegantly plated fine-dining dish' },
      { label: 'Fresh Ingredients', image: '/images/private-chef/ingredients.jpg', alt: 'Fresh seasonal ingredients on a cutting board' },
      { label: 'On the Pass', image: '/images/private-chef/cooking.jpg', alt: 'Chef cooking over a flaming pan' },
      { label: 'The Table', image: '/images/private-chef/table.jpg', alt: 'Beautifully set dinner table for an event' },
    ],
  },

  testimonials: {
    eyebrow: 'Happy Guests',
    title: 'What hosts say afterwards',
    intro: 'Sample testimonials — your website would feature real reviews from your clients.',
    items: [
      { name: 'Elena & Marcos', role: 'Anniversary dinner', quote: 'Better than the restaurant where he proposed — and we never had to leave home. The kitchen was spotless when he left.' },
      { name: 'Talia B.', role: 'Birthday party host', quote: 'Sixteen guests, three dietary restrictions, zero stress. Everyone asked for his number.' },
      { name: 'HR Director, Nortec Labs', role: 'Corporate client', quote: 'Our best offsite dinner in five years. Booking was easy and the menu impressed both the vegans and the steak people.' },
    ],
  },

  map: {
    eyebrow: 'Service Area',
    title: 'Cooking across the city and nearby suburbs',
    intro: 'Based locally — travel to venues and homes within an hour’s drive. Get in touch to confirm your date.',
    id: 'location',
    query: 'Chef Mateo Serrano, Austin, TX',
    address: 'Austin, TX (events at your home or venue)',
    phone: '+1 (512) 555-0147',
    hours: [
      { days: 'Events', time: 'Wed – Sun, lunch & dinner' },
      { days: 'Consultations', time: 'Mon – Fri, 10:00 AM – 6:00 PM' },
    ],
  },

  cta: {
    heading: 'Planning something worth celebrating?',
    text: 'Tell me the date and the occasion — I’ll bring the menu, the ingredients and the fire.',
    actions: [
      { label: 'Book an Event', href: '#want-this' },
      { label: 'See Menus', href: '#want-this', variant: 'outline' },
    ],
  },

  disclosure: {
    heading: 'This is a sample website',
    text: '"Chef Mateo Serrano" is not a real business: this page is a web design example for private chefs and catering businesses, built by Easy Pro Digital. If you run a business like this and want a website like this one (or better, with your brand, your photos and real event booking), let’s talk.',
  },
}
