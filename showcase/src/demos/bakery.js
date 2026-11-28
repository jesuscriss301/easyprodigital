// NICHE demo — gets indexed. See src/demos/README.md before duplicating this
// for a new niche or for a specific prospect.
// Panadería y repostería, con el pan como protagonista (pedido de Jesús):
// el pan va primero en hero, servicios y galería; tortas y postres después.
// Fotos: Pixabay + 1 de Instagram con crédito visible (ver
// public/images/bakery/CREDITS.md).
const IG = 'Photo: @tartinebakery (Instagram)'
const PX = 'Photo: Pixabay'

export default {
  slug: 'bakery',
  brand: 'Crumb & Crown Bakery',
  niche: 'Bakery & Pastry Shop',
  valueProps: [
    `Take custom cake orders online with flavor, size and pickup date`,
    `Show today's fresh bread so regulars know what's in the case`,
    `Sell weekly bread subscriptions that bring customers back`,
  ],
  kind: 'nicho', // 'nicho' (niche) | 'prospecto' (prospect)

  styleVariants: [
    { slug: 'bakery', label: 'Strawberry Cream', primary: '#b8405f' },
    { slug: 'bakery-crust', label: 'Golden Crust', primary: '#a35d22' },
    { slug: 'bakery-pistachio', label: 'Pistachio Modern', primary: '#5f7d2c' },
    { slug: 'bakery-night', label: 'Cocoa Night', primary: '#ff7a9c' },
  ],

  seo: {
    title: 'Website Design for Bakeries & Pastry Shops (Live Example) | Easy Pro Digital',
    description:
      'A real example website for bakeries, pastry shops and cake makers, built by Easy Pro Digital. Fresh bread, custom cake orders, a photo gallery of your display case, opening hours and a map.',
    robots: 'index, follow',
  },

  layout: {
    order: ['hero', 'valueProps', 'gallery', 'services', 'features', 'testimonials', 'map', 'cta'],
  },

  // Glaseado que gotea en las tarjetas + grageas, harina y espigas cayendo
  // en los costados (components/Frosting.jsx). Lo heredan las 4 paletas.
  frosting: true,

  theme: {
    primary: '#b8405f',
    primaryDark: '#8f2c47',
    accent: '#c98a2e',
    bg: '#fdf7f2',
    surface: '#ffffff',
    ink: '#3a2320',
    muted: '#7a5f58',
    line: '#f0e2da',
    frosting: '#f5c9d6',
    sprinkles: ['#b8405f', '#f6d365', '#7ec8b4', '#ffffff', '#c98a2e'],
    silk: { color: '#f2c2cf', sheenColor: '#fff6ee', lightMode: true, opacity: 0.6 },
    headingFont: "'Young Serif', serif",
    bodyFont: "'Figtree', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Young+Serif&family=Figtree:wght@400;500;600;700&display=swap',
  },

  nav: {
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Display Case', href: '#gallery' },
      { label: 'Menu', href: '#services' },
      { label: 'Why Us', href: '#about' },
      { label: 'Visit Us', href: '#location' },
    ],
    ctaLabel: 'Order a Cake',
  },

  hero: {
    variant: 'split',
    // Silk (React Bits, WebGL2 sin deps): ondas de crema batida detrás del
    // texto. Color por paleta en theme.silk.
    background: 'silk',
    eyebrow: 'Artisan Bakery & Pastry Shop',
    title: 'Real bread, baked before sunrise',
    text: 'Slow-fermented sourdough, buttery croissants and celebration cakes made by hand in our neighborhood bakery. Fresh out of the oven every single morning.',
    primaryCta: { label: 'Order a Cake', href: '#book' },
    secondaryCta: { label: "See Today's Bread", href: '#gallery' },
    trust: [
      { end: 300, suffix: '+', label: 'loaves every morning' },
      { value: '4.9 ★', label: 'average rating' },
      { value: '6:30 AM', label: 'doors open, bread out' },
    ],
    visualIcon: 'wheat',
    image: '/images/bakery/hero.jpg',
    imageAlt: 'Sourdough loaf cut open showing an airy crumb on a wooden board',
  },

  gallery: {
    // Masonry (React Bits, sin deps): mosaico tipo vitrina con leyenda y
    // lightbox. `credit` se muestra en cada foto.
    variant: 'masonry',
    eyebrow: 'Fresh From Our Oven',
    title: "Today's display case",
    intro: 'On your real website, this is where photos of your own breads, cakes and pastries would go. Tap any photo to see it bigger.',
    items: [
      { label: 'Shaping the morning loaves', image: '/images/bakery/baker-flour.jpg', width: 1280, height: 853, credit: PX, alt: 'Baker dusting flour off a dark rye loaf in a sunny bakery' },
      { label: 'Country sourdough', image: '/images/bakery/sliced-loaf.jpg', width: 1280, height: 853, credit: PX, alt: 'Sliced sourdough loaf on a wooden cutting board' },
      { label: 'Berry celebration cake', image: '/images/bakery/berry-cake.jpg', width: 853, height: 1280, credit: PX, alt: 'Naked cake with strawberries and blueberries on a glass stand' },
      { label: 'The pastry counter', image: '/images/bakery/pastry-case.jpg', width: 1280, height: 853, credit: PX, alt: 'Bakery counter with croissants and pastries on wooden trays' },
      { label: 'Morning buns', image: '/images/bakery/morning-buns.jpg', width: 1104, height: 1280, credit: IG, alt: 'Sugar-dusted morning buns piled on a wooden platter' },
      { label: 'Butter croissants', image: '/images/bakery/croissants.jpg', width: 1280, height: 719, credit: PX, alt: 'Basket full of golden butter croissants' },
      { label: 'Fresh from the deck oven', image: '/images/bakery/loaf-hands.jpg', width: 1280, height: 853, credit: PX, alt: 'Baker holding a golden scored loaf with both hands' },
      { label: 'Red velvet layer cake', image: '/images/bakery/red-velvet.jpg', width: 853, height: 1280, credit: PX, alt: 'Red velvet layer cake topped with strawberries and daisies' },
      { label: 'Flour, water, salt, time', image: '/images/bakery/flour-sift.jpg', width: 853, height: 1280, credit: PX, alt: 'Flour sifted over a round loaf on a dark table' },
      { label: 'Powdered croissants', image: '/images/bakery/croissants-sugar.jpg', width: 1280, height: 853, credit: PX, alt: 'Croissants dusted with powdered sugar' },
    ],
  },

  services: {
    eyebrow: 'Our Menu',
    title: 'Bread first, and everything sweet after',
    intro: 'Sample menu and prices — this is how your products and rates would look on your own website.',
    variant: 'grid',
    items: [
      { icon: 'wheat', title: 'Sourdough & Artisan Loaves', text: 'Naturally leavened for 36 hours and baked on stone every morning: country loaf, seeded rye, baguettes.', price: 'From $7' },
      { icon: 'croissant', title: 'Croissants & Morning Pastries', text: 'Laminated by hand with real butter. Plain, almond, chocolate and the famous morning bun.', price: 'From $3.50' },
      { icon: 'clock', title: 'Weekly Bread Subscription', text: 'Your favorite loaf saved for you every week. Pick it up warm or get it delivered.', price: 'From $25/week' },
      { icon: 'cake', title: 'Custom Celebration Cakes', text: 'Birthdays, baby showers and anniversaries. Choose flavor, size and decoration online.', price: 'From $65' },
      { icon: 'heart', title: 'Wedding Cakes', text: 'Tasting session, tiered designs and delivery with setup at your venue.', price: 'From $350' },
      { icon: 'cupcake', title: 'Cupcakes, Cookies & Dessert Tables', text: 'Cookie boxes, cupcake towers and full dessert tables for offices and events.', price: 'From $28/dozen' },
    ],
  },

  features: {
    eyebrow: 'Why Our Bread',
    title: 'Baked the slow way, sold the same day',
    intro: 'Four things our regulars notice from the first bite.',
    items: [
      { icon: 'clock', title: '36-Hour Fermentation', text: 'Slow natural leavening for deeper flavor, a crackly crust and bread that is easier to digest.' },
      { icon: 'flame', title: 'Stone-Deck Oven at Dawn', text: 'Every loaf is baked before we open, never reheated from yesterday.' },
      { icon: 'leaf', title: 'Local Flour, No Preservatives', text: 'Stone-milled flour from regional farms. Just flour, water, salt and time.' },
      { icon: 'shieldCheck', title: 'Vegan & Gluten-Free Options', text: 'A dedicated shelf every day, plus allergen info on every product.' },
    ],
  },

  testimonials: {
    eyebrow: 'Happy Regulars',
    title: 'What our neighbors say',
    intro: 'Sample testimonials — your website would feature real reviews from your customers.',
    items: [
      { name: 'Maria G.', role: 'Bread subscriber', quote: 'I pick up my country loaf every Saturday and it still tastes amazing on Wednesday. Best sourdough in town.' },
      { name: 'Daniel R.', role: 'Birthday cake order', quote: 'Ordered online on Monday, picked up on Thursday, and the berry cake was the star of the party.' },
      { name: 'Priya S.', role: 'Office catering client', quote: 'Our Friday pastry box disappears in ten minutes. Always on time and always fresh.' },
    ],
  },

  map: {
    eyebrow: 'Visit Us',
    title: 'Come in while the bread is warm',
    intro: 'Bread comes out of the oven at 6:30 AM. The best loaves sell out by noon.',
    id: 'location',
    query: 'South Congress Avenue, Austin, TX',
    address: '1604 S Congress Ave, Austin, TX 78704',
    phone: '+1 (512) 555-0147',
    hours: [
      { days: 'Tue – Fri', time: '6:30 AM – 6:00 PM' },
      { days: 'Sat – Sun', time: '7:00 AM – 3:00 PM' },
      { days: 'Monday', time: 'Closed' },
    ],
  },

  cta: {
    heading: 'Planning a celebration? Let us bake it.',
    text: 'Custom cakes need 48 hours. Order online and pick it up fresh.',
    actions: [
      { label: 'Order a Cake', href: '#want-this' },
      { label: 'See the Menu', href: '#services', variant: 'outline' },
    ],
  },
}
