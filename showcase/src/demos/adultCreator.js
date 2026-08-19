// NICHE demo — gets indexed. See src/demos/README.md before duplicating this
// for a new niche or for a specific prospect.
//
// This one is deliberately different from the other niches: it's a
// LINK-IN-BIO style page for adult content creators (18+). Everything on the
// page itself is safe-for-work — the "gallery" only shows locally generated,
// fully censored/shaded preview tiles (see public/images/adult-creator/
// CREDITS.md), never real content. The services section doubles as the
// link-hub ("bio link") block.
export default {
  slug: 'adult-creator',
  brand: 'Scarlett Vale',
  niche: 'Adult Content Creators (18+) — Bio Link',
  kind: 'nicho', // 'nicho' (niche) | 'prospecto' (prospect)

  // `primary` here is only for the pill color in the style switcher (so each
  // option previews its own palette instead of inheriting the current
  // page's theme) — keep it in sync with `theme.primary` below/in the
  // sibling files.
  styleVariants: [
    { slug: 'adult-creator', label: 'Neon Nights', primary: '#d63384' },
    { slug: 'adult-creator-silk', label: 'Champagne Silk', primary: '#9a7b4f' },
    { slug: 'adult-creator-cherry', label: 'Cherry Pop', primary: '#e0264f' },
  ],

  seo: {
    title: 'Bio-Link Page Design for Adult Content Creators 18+ (Example) | Easy Pro Digital',
    description:
      'A safe-for-work example of a link-in-bio page for adult content creators (18+), built by Easy Pro Digital: link hub, censored preview tiles, subscription tiers. No explicit content — this is a web design sample.',
    robots: 'index, follow',
  },

  // Compact, bio-link style page: no features/testimonials/map — hero with
  // the alias, the link hub (services as 'list'), censored previews, CTA.
  layout: {
    order: ['hero', 'services', 'gallery', 'cta'],
  },

  theme: {
    primary: '#d63384',
    primaryDark: '#a3246a',
    accent: '#8a2be2',
    bg: '#171221',
    surface: '#221a30',
    ink: '#f4eefa',
    muted: '#b6a8c9',
    line: '#352a48',
    headingFont: "'Playfair Display', Georgia, serif",
    bodyFont: "'Outfit', system-ui, sans-serif",
    googleFontsHref:
      'https://fonts.googleapis.com/css2?family=Playfair+Display:ital,wght@0,600;0,700;1,600&family=Outfit:wght@300;400;500;600&display=swap',
  },

  nav: {
    links: [
      { label: 'Home', href: '#home' },
      { label: 'Links', href: '#services' },
      { label: 'Previews', href: '#gallery' },
    ],
    ctaLabel: 'Subscribe',
  },

  hero: {
    variant: 'centered',
    eyebrow: '18+ · Adult Creator · Bio Link',
    title: 'Scarlett Vale',
    text: 'All my platforms, subscriptions and custom-content requests in one place. Explicit content lives behind age-verified paywalls — this page only shows censored previews.',
    primaryCta: { label: 'Subscribe', href: '#services' },
    secondaryCta: { label: 'See Previews', href: '#gallery' },
    trust: [
      { end: 42000, suffix: '+', label: 'followers' },
      { end: 380, suffix: '+', label: 'exclusive posts' },
      { value: 'Top 4%', label: 'on my main platform' },
    ],
    visualIcon: 'heart',
    // BackgroundFX 'dotgrid' (canvas, sin deps nuevas): cuadrícula de
    // puntos con una onda de pulso viajando, detrás de todo el hero.
    background: 'dotgrid',
  },

  services: {
    hover: 'spotlight', // SpotlightCard (React Bits, adaptación CSS sin deps) — halo que sigue al cursor en las filas de links
    eyebrow: 'My Links',
    title: 'Everything in one place',
    intro: 'Sample link hub — on a real page each row links out to the creator’s actual platforms.',
    variant: 'list',
    items: [
      { icon: 'lock', title: 'Exclusive Content', text: 'My main subscription — new photo sets and videos every week, age-verified 18+.', price: '$12.99/mo' },
      { icon: 'sparkle', title: 'VIP Tier', text: 'Everything in the main sub plus DM priority and monthly custom sets.', price: '$29.99/mo' },
      { icon: 'camera', title: 'Custom Requests', text: 'Personalized content made to order — tell me the idea, I’ll quote it.', price: 'From $50' },
      { icon: 'heart', title: 'Tips & Wishlist', text: 'Support my work directly or spoil me from the wishlist.', price: 'Any amount' },
      { icon: 'users', title: 'Free Socials', text: 'My SFW side — daily life, behind the scenes and announcements.', price: 'Free' },
    ],
  },

  gallery: {
    // Sin hover extra aquí a propósito: el efecto "glare" ya es la firma de
    // la galería de chef y el propio Spotlight de la sección de servicios
    // (arriba) es suficiente firma visual para este nicho — cada demo debe
    // tener un efecto distinto, no acumular varios.
    eyebrow: 'Previews',
    title: 'Censored previews',
    intro: 'Real content stays behind the paywall — subscribers unlock the full versions. These tiles are intentionally shaded placeholders.',
    items: [
      { label: 'Latest Set', image: '/images/adult-creator/locked-1.jpg', alt: 'Censored preview tile with lock and 18+ badge' },
      { label: 'VIP Only', image: '/images/adult-creator/locked-2.jpg', alt: 'Censored preview tile with lock and 18+ badge' },
      { label: 'This Week', image: '/images/adult-creator/locked-3.jpg', alt: 'Censored preview tile with lock and 18+ badge' },
      { label: 'Fan Favorite', image: '/images/adult-creator/locked-4.jpg', alt: 'Censored preview tile with lock and 18+ badge' },
    ],
  },

  cta: {
    heading: 'Ready to unlock everything?',
    text: 'Join today — cancel anytime. You must be 18 or older.',
    actions: [
      { label: 'Subscribe', href: '#want-this' },
      { label: 'Send a Custom Request', href: '#want-this', variant: 'outline' },
    ],
  },

  disclosure: {
    heading: 'This is a sample website',
    text: '"Scarlett Vale" is not a real creator: this page is a safe-for-work web design example of a link-in-bio page for adult content creators (18+), built by Easy Pro Digital. All preview tiles are intentionally censored placeholders — no real content is shown. If you’re a creator and want a page like this one (with your links, your branding and age-gated previews), let’s talk.',
  },
}
