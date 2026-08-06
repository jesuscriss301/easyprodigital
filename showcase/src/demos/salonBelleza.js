// NICHE demo — gets indexed. See src/demos/README.md before duplicating this
// for a new niche or for a specific prospect.
export default {
  slug: 'salon-belleza',
  brand: 'Bella Aura Studio',
  niche: 'Beauty Salon & Spa',
  kind: 'nicho', // 'nicho' (niche) | 'prospecto' (prospect)

  seo: {
    title: 'Website Design for Beauty Salons & Spas (Example) | Easy Pro Digital',
    description:
      'A real example website for beauty salons and spas, built by Easy Pro Digital. This is how great your business website can look: services, bookings, testimonials and more.',
    robots: 'index, follow',
  },

  theme: {
    primary: '#b76e79',
    primaryDark: '#8c4a56',
    accent: '#c9a869',
    bg: '#fff8f5',
    surface: '#ffffff',
    ink: '#2c2224',
    muted: '#7c6b6d',
    line: '#ecdfda',
    headingFont: "'Playfair Display', Georgia, serif",
    bodyFont: "'Poppins', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Poppins:wght@300;400;500;600&display=swap',
  },

  nav: {
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Services', href: '#services' },
      { label: 'About', href: '#about' },
      { label: 'Gallery', href: '#gallery' },
      { label: 'Testimonials', href: '#testimonials' },
    ],
    ctaLabel: 'Book Now',
  },

  hero: {
    variant: 'split',
    eyebrow: 'Beauty Salon & Spa',
    title: 'Enhance your beauty, feel amazing',
    text: 'Haircuts, color, manicures, facial treatments and professional makeup in a space designed for you to relax and be pampered. Book in minutes, no calls or waiting.',
    primaryCta: { label: 'Book Now', href: '#book' },
    secondaryCta: { label: 'View Services', href: '#services' },
    trust: [
      { value: '4.9 ★', label: 'average rating' },
      { value: '500+', label: 'clients served' },
      { value: '8 years', label: 'of experience' },
    ],
    visualIcon: 'flower',
  },

  services: {
    eyebrow: 'What We Do',
    title: 'Services designed for you',
    intro: 'Sample pricing — this is how the services and rates section would look on your own website.',
    variant: 'grid',
    items: [
      { icon: 'scissors', title: 'Haircut & Styling', text: 'Custom cuts and styling for any occasion, with a professional finish.', price: 'From $35' },
      { icon: 'droplet', title: 'Color & Highlights', text: 'Color techniques, balayage and highlights with premium products.', price: 'From $90' },
      { icon: 'sparkle', title: 'Manicure & Pedicure', text: 'Classic polish, gel, and personalized nail art.', price: 'From $28' },
      { icon: 'leaf', title: 'Facial Treatments', text: 'Deep cleansing, hydration and personalized anti-aging routines.', price: 'From $60' },
      { icon: 'sun', title: 'Waxing', text: 'Warm wax facial and body waxing in a comfortable, private setting.', price: 'From $22' },
      { icon: 'brush', title: 'Professional Makeup', text: 'Event and bridal makeup, with a trial session included.', price: 'From $70' },
    ],
  },

  features: {
    eyebrow: 'Why Choose Us',
    title: 'A space designed to pamper you',
    intro: 'Four reasons our clients keep coming back.',
    items: [
      { icon: 'award', title: 'Certified Professionals', text: 'A team with ongoing training in the latest industry techniques.' },
      { icon: 'droplet', title: 'Premium Products', text: 'We only work with professional brands that are safe for your skin and hair.' },
      { icon: 'waves', title: 'Relaxing Atmosphere', text: 'A space designed to help you unwind while we take care of you.' },
      { icon: 'users', title: 'Personalized Care', text: 'Every service is tailored to what your hair, skin and style need.' },
    ],
  },

  gallery: {
    eyebrow: 'Our Work',
    title: 'Gallery',
    intro: 'On your real website, this is where photos of your work, your space and your team would go.',
    items: ['Coloring', 'Studio', 'Manicure', 'Styling', 'Facials', 'Makeup'],
  },

  testimonials: {
    eyebrow: 'Happy Clients',
    title: 'What people say about us',
    intro: 'Sample testimonials — your website would feature real reviews from your clients.',
    items: [
      { name: 'Mariana G.', role: 'Regular client', quote: 'I completely changed my look and I couldn’t be happier. The team is super professional and the atmosphere is so relaxing.' },
      { name: 'Laura P.', role: 'New client', quote: 'Booking was so easy and I didn’t wait at all. My manicure result lasted for weeks.' },
      { name: 'Camila R.', role: 'Regular client', quote: 'The facial treatment left my skin looking amazing. This is already my go-to place for everything.' },
    ],
  },

  cta: {
    heading: 'Ready for your transformation?',
    text: 'Book your appointment today and let our team take care of you.',
    actions: [
      { label: 'Book Now', href: '#want-this' },
      { label: 'View More Services', href: '#want-this', variant: 'outline' },
    ],
  },

  disclosure: {
    heading: 'This is a sample website',
    text: '"Bella Aura Studio" is not a real business: this page is a web design example for beauty salons and spas, built by Easy Pro Digital. If you run a business like this and want a website like this one (or better, with your brand, your photos and a real booking system), let’s talk.',
  },
}
