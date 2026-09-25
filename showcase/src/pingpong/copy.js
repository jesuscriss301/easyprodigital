// Todo el contenido es real, tomado del sitio actual (pingpongclub.ca): la
// única página de inicio, "Groupe & corpo" y el PDF de menú (2 páginas,
// incrustado como visor en el sitio real — aquí como texto real + botón de
// descarga, ver skill §7.1). Nada de precios, horarios ni datos inventados.
// El sitio real no tiene versión en inglés; esta es bilingüe FR/EN por
// decisión del cliente en el kickoff.

export const CONTACT = {
  addressLine: '5788 Boul. St-Laurent, Montréal',
  crossStreet: 'St-Laurent × Bernard',
  phoneGeneral: '514 272.7464',
  phoneGroupe: '514 249.8679',
  hours: 'Jeudi au samedi, 20h à 3h',
  facebook: 'https://www.facebook.com/PINGPONGCLUBMONTREAL',
  instagram: 'https://www.instagram.com/pingpongclub',
  mapQuery: '5788 Boulevard Saint-Laurent, Montréal, QC',
}

// Menú real extraído del PDF del sitio (2 páginas). Precios en CAD.
const MENU_FR = [
  {
    title: 'Cocktails',
    items: [
      { name: 'Gintreuse', price: '14', note: 'Gin, Chartreuse, lime, concombre, menthe' },
      { name: 'Orange Stormy', price: '14', note: 'Rhum Fleur de Cana, Noroi, ginger beer, orange bitter, citron' },
      { name: 'Fuzy Peach', price: '14', note: 'Peach schnapps, vodka, purée de pêche, citron, blanc d’œuf' },
      { name: 'Daq-quiri du moment', price: '14', note: 'Rhum blanc, lime' },
      { name: 'Pinte de Whiskey Smash', price: '14', note: 'Jameson, citron, menthe, soda' },
      { name: 'Pinte d’Apérol Spritz', price: '14', note: 'Apérol, prosecco, soda' },
      { name: 'Pinte de Tom Collins', price: '14', note: 'Gin, citron, soda' },
    ],
  },
  {
    title: 'Pichets de cocktails',
    items: [
      { name: 'Rayon de soleil', price: '45', note: 'Gin Bombay, Apérol, pamplemousse, citron, amer Peychaud’s' },
      { name: 'Apérol Spritz', price: '45', note: 'Apérol, prosecco, soda' },
      { name: 'Mojito', price: '45', note: 'Rhum blanc Bacardi, sucre, menthe, lime' },
      { name: 'Sangria blanche', price: '45', note: 'Rhum, vin blanc, peach schnapps, citron, fraises, oranges' },
    ],
  },
  {
    title: 'Vins',
    items: [
      { name: 'Nature en fût', price: '10', note: null },
      { name: 'Demandez à votre serveur', price: '', note: 'Sélection complète sur place' },
    ],
  },
  {
    title: 'Bières en fût',
    items: [
      { name: 'Belle Gueule — pilsner, 5.2%', price: 'Verre 8 · Pinte 10 · Pichet 30', note: null },
      { name: 'St-Ambroise — stout, 4.2%', price: 'Verre 8 · Pinte 10 · Pichet 30', note: null },
      { name: 'Peroni — blonde, 5.1%', price: 'Verre 8 · Pinte 10 · Pichet 30', note: null },
      { name: 'St-Ambroise — N.E.I.P.A, 6.2%', price: 'Verre 8 · Pinte 10 · Pichet 30', note: null },
      { name: 'Cheval Blanc — blanche, 5%', price: 'Verre 8 · Pinte 10 · Pichet 30', note: null },
      { name: 'McAdam — cidre blanc, 4.7%', price: 'Verre 8 · Pinte 10 · Pichet 30', note: null },
      { name: 'Le Castor — Yakima I.P.A, 6.2%', price: 'Verre 8 · Pinte 10 · Pichet 30', note: null },
      { name: 'Moosehead — Radler pamplemousse, 4%', price: 'Verre 8 · Pinte 10 · Pichet 30', note: null },
    ],
  },
  {
    title: 'En canettes',
    items: [
      { name: 'Papito, 4 Origines', price: '11', note: 'Blonde à l’argousier 100% Québec, 4.5%, 473ml' },
      { name: 'Cream Ale, 4 Origines', price: '10', note: 'Canadian Cream Ale (Nitro), 5.5%, 473ml' },
      { name: 'O’Callaghan, 4 Origines', price: '10', note: 'Extra Irish Stout (Nitro), 5.8%, 473ml' },
    ],
  },
  {
    title: 'En bouteilles',
    items: [{ name: 'Peroni', price: '10', note: 'Lager italienne, 5%, 330ml' }],
  },
  {
    title: 'Sans alcool',
    items: [
      { name: 'BSA — Blonde', price: '7.5', note: '0.5%, 473ml' },
      { name: 'BSA — Framboise', price: '7.5', note: 'Sûre framboise, 0.5%, 473ml' },
      { name: 'BSA — I.P.A', price: '7.5', note: '0.5%, 473ml' },
      { name: 'BSA — Blanche', price: '7.5', note: '0.5%, 473ml' },
      { name: 'BSA — Sour', price: '7.5', note: 'Lime, citron, 0.5%, 473ml' },
      { name: 'Zamalek — Hibiscus', price: '7', note: 'Kerbadé, 0%, 355ml' },
    ],
  },
  {
    title: 'Snacks',
    items: [
      { name: 'Chips', price: '2', note: null },
      { name: 'Noix', price: '5', note: null },
      { name: 'Olives', price: '5', note: null },
    ],
  },
  {
    title: '5 à 8',
    items: [
      { name: 'Bock PPC', price: '5', note: null },
      { name: 'Pinte de cocktail', price: '10', note: null },
      { name: 'Bock & shot', price: '8', note: null },
    ],
  },
]

const MENU_EN = [
  {
    title: 'Cocktails',
    items: [
      { name: 'Gintreuse', price: '14', note: 'Gin, Chartreuse, lime, cucumber, mint' },
      { name: 'Orange Stormy', price: '14', note: 'Fleur de Cana rum, Noroi, ginger beer, orange bitters, lemon' },
      { name: 'Fuzy Peach', price: '14', note: 'Peach schnapps, vodka, peach purée, lemon, egg white' },
      { name: 'Daq-quiri of the moment', price: '14', note: 'White rum, lime' },
      { name: 'Whiskey Smash pint', price: '14', note: 'Jameson, lemon, mint, soda' },
      { name: 'Apérol Spritz pint', price: '14', note: 'Apérol, prosecco, soda' },
      { name: 'Tom Collins pint', price: '14', note: 'Gin, lemon, soda' },
    ],
  },
  {
    title: 'Cocktail pitchers',
    items: [
      { name: 'Rayon de soleil', price: '45', note: 'Bombay gin, Apérol, grapefruit, lemon, Peychaud’s bitters' },
      { name: 'Apérol Spritz', price: '45', note: 'Apérol, prosecco, soda' },
      { name: 'Mojito', price: '45', note: 'Bacardi white rum, sugar, mint, lime' },
      { name: 'White sangria', price: '45', note: 'Rum, white wine, peach schnapps, lemon, strawberries, oranges' },
    ],
  },
  {
    title: 'Wine',
    items: [
      { name: 'Natural, on tap', price: '10', note: null },
      { name: 'Ask your server', price: '', note: 'Full selection on site' },
    ],
  },
  {
    title: 'Draft beer',
    items: [
      { name: 'Belle Gueule — pilsner, 5.2%', price: 'Glass 8 · Pint 10 · Pitcher 30', note: null },
      { name: 'St-Ambroise — stout, 4.2%', price: 'Glass 8 · Pint 10 · Pitcher 30', note: null },
      { name: 'Peroni — blonde, 5.1%', price: 'Glass 8 · Pint 10 · Pitcher 30', note: null },
      { name: 'St-Ambroise — N.E.I.P.A, 6.2%', price: 'Glass 8 · Pint 10 · Pitcher 30', note: null },
      { name: 'Cheval Blanc — witbier, 5%', price: 'Glass 8 · Pint 10 · Pitcher 30', note: null },
      { name: 'McAdam — white cider, 4.7%', price: 'Glass 8 · Pint 10 · Pitcher 30', note: null },
      { name: 'Le Castor — Yakima I.P.A, 6.2%', price: 'Glass 8 · Pint 10 · Pitcher 30', note: null },
      { name: 'Moosehead — grapefruit radler, 4%', price: 'Glass 8 · Pint 10 · Pitcher 30', note: null },
    ],
  },
  {
    title: 'Cans',
    items: [
      { name: 'Papito, 4 Origines', price: '11', note: 'Sea buckthorn blonde, 100% Québec, 4.5%, 473ml' },
      { name: 'Cream Ale, 4 Origines', price: '10', note: 'Canadian Cream Ale (Nitro), 5.5%, 473ml' },
      { name: 'O’Callaghan, 4 Origines', price: '10', note: 'Extra Irish Stout (Nitro), 5.8%, 473ml' },
    ],
  },
  {
    title: 'Bottles',
    items: [{ name: 'Peroni', price: '10', note: 'Italian lager, 5%, 330ml' }],
  },
  {
    title: 'Non-alcoholic',
    items: [
      { name: 'BSA — Blonde', price: '7.5', note: '0.5%, 473ml' },
      { name: 'BSA — Raspberry', price: '7.5', note: 'Sour raspberry, 0.5%, 473ml' },
      { name: 'BSA — IPA', price: '7.5', note: '0.5%, 473ml' },
      { name: 'BSA — Witbier', price: '7.5', note: '0.5%, 473ml' },
      { name: 'BSA — Sour', price: '7.5', note: 'Lime, lemon, 0.5%, 473ml' },
      { name: 'Zamalek — Hibiscus', price: '7', note: 'Karkadé, 0%, 355ml' },
    ],
  },
  {
    title: 'Snacks',
    items: [
      { name: 'Chips', price: '2', note: null },
      { name: 'Nuts', price: '5', note: null },
      { name: 'Olives', price: '5', note: null },
    ],
  },
  {
    title: 'Happy hour (5 to 8)',
    items: [
      { name: 'PPC draft', price: '5', note: null },
      { name: 'Cocktail pint', price: '10', note: null },
      { name: 'Draft & shot', price: '8', note: null },
    ],
  },
]

export const COPY = {
  fr: {
    nav: [
      { href: '#home', label: 'Accueil' },
      { href: '#menu', label: 'Menu' },
      { href: '#groupe', label: 'Groupe & corpo' },
      { href: '#contact', label: 'Nous joindre' },
    ],
    hero: {
      eyebrow: 'BAR DE PING PONG · MONTRÉAL · ST-LAURENT × BERNARD',
      title: 'Cocktails, bières en fût et une table qui vous attend',
      text: 'Le Ping Pong Club, c’est un bar au cœur du Plateau : cocktails maison, bières en fût, et un 5 à 8 tous les jours d’ouverture.',
      primary: { label: 'Voir le menu', href: '#menu' },
      secondary: { label: 'Réserver un groupe', href: '#groupe' },
      trust: [
        { value: '140', label: 'places pour un groupe' },
        { value: '5 $', label: 'le bock, à l’heure du 5 à 8' },
        { value: '20h–3h', label: 'jeudi au samedi' },
      ],
    },
    menu: {
      eyebrow: 'À BOIRE',
      title: 'Le menu, enfin lisible',
      text: 'Le menu complet du bar — cocktails, bières en fût, vins, sans alcool et snacks. Tout est ici, sans avoir à zoomer sur un PDF depuis votre téléphone.',
      pdfLabel: 'Télécharger le menu complet (PDF)',
      categories: MENU_FR,
    },
    groupe: {
      eyebrow: 'ÉVÉNEMENTS',
      title: 'Groupe 20+ et corporatif',
      text: 'Événement privé, vernissage et lancement, projection : le Ping Pong Club se transforme pour votre groupe, avec bar complet et menu de groupe.',
      features: [
        'Événement privé',
        'Vernissage et lancement',
        'Projection',
        'Bar complet',
        'Menu de groupe',
      ],
      capacity: 'Capacité 140 personnes',
      cta: { label: 'Discuter de votre événement', href: `tel:${CONTACT.phoneGroupe.replace(/[^\d]/g, '')}` },
    },
    contact: {
      eyebrow: 'NOUS JOINDRE',
      title: 'St-Laurent × Bernard, jeudi à samedi',
      ways: [
        { icon: 'phone', label: 'Réservations 20 et moins', value: CONTACT.phoneGeneral },
        { icon: 'phone', label: 'Groupe 20+ et corporatif', value: CONTACT.phoneGroupe },
        { icon: 'mapPin', label: 'Adresse', value: CONTACT.addressLine },
        { icon: 'clock', label: 'Horaire', value: CONTACT.hours },
        { icon: 'facebook', label: 'Facebook', value: 'PINGPONGCLUBMONTREAL', href: CONTACT.facebook },
        { icon: 'instagram', label: 'Instagram', value: '@pingpongclub', href: CONTACT.instagram },
      ],
    },
    finalCta: {
      heading: 'On vous garde une table ?',
      text: 'Pour un groupe de 20 et moins, appelez directement. Pour 20 et plus ou un événement corporatif, on s’occupe de tout.',
      primary: { label: 'Appeler pour réserver', href: `tel:${CONTACT.phoneGeneral.replace(/[^\d]/g, '')}` },
    },
    disclosure: {
      heading: 'C’est une maquette, pas le vrai site',
      text: 'Réalisée par Easy Pro Digital à partir du contenu public de pingpongclub.ca (menu, adresse, horaires, contact). Le Ping Pong Club n’a pas commandé ni approuvé cette maquette — c’est une proposition de refonte, envoyée à titre d’exemple.',
      whatsapp: 'Discuter sur WhatsApp',
      whatsappMessage: 'Bonjour, je suis tombé sur la maquette du Ping Pong Club faite par Easy Pro Digital et j’aimerais en discuter.',
      more: 'Voir d’autres projets',
    },
    footer: { by: 'maquette par' },
    badge: 'Maquette — Easy Pro Digital',
  },
  en: {
    nav: [
      { href: '#home', label: 'Home' },
      { href: '#menu', label: 'Menu' },
      { href: '#groupe', label: 'Groups & corporate' },
      { href: '#contact', label: 'Contact' },
    ],
    hero: {
      eyebrow: 'PING PONG BAR · MONTRÉAL · ST-LAURENT × BERNARD',
      title: 'Cocktails, draft beer, and a table waiting for you',
      text: 'Ping Pong Club is a bar in the heart of the Plateau: house cocktails, draft beer, and happy hour every night we’re open.',
      primary: { label: 'See the menu', href: '#menu' },
      secondary: { label: 'Book a group', href: '#groupe' },
      trust: [
        { value: '140', label: 'seats for a group' },
        { value: '$5', label: 'a draft, during happy hour' },
        { value: '8pm–3am', label: 'Thursday to Saturday' },
      ],
    },
    menu: {
      eyebrow: 'DRINKS',
      title: 'The menu, finally readable',
      text: 'The full bar menu — cocktails, draft beer, wine, non-alcoholic and snacks. It’s all here, no more zooming into a PDF on your phone.',
      pdfLabel: 'Download the full menu (PDF)',
      categories: MENU_EN,
    },
    groupe: {
      eyebrow: 'EVENTS',
      title: 'Groups of 20+ and corporate',
      text: 'Private event, opening or launch, screening: Ping Pong Club transforms for your group, with a full bar and a group menu.',
      features: [
        'Private event',
        'Opening & launch',
        'Screening',
        'Full bar',
        'Group menu',
      ],
      capacity: 'Capacity 140 people',
      cta: { label: 'Talk about your event', href: `tel:${CONTACT.phoneGroupe.replace(/[^\d]/g, '')}` },
    },
    contact: {
      eyebrow: 'GET IN TOUCH',
      title: 'St-Laurent × Bernard, Thursday to Saturday',
      ways: [
        { icon: 'phone', label: 'Reservations, 20 and under', value: CONTACT.phoneGeneral },
        { icon: 'phone', label: 'Groups 20+ & corporate', value: CONTACT.phoneGroupe },
        { icon: 'mapPin', label: 'Address', value: CONTACT.addressLine },
        { icon: 'clock', label: 'Hours', value: CONTACT.hours },
        { icon: 'facebook', label: 'Facebook', value: 'PINGPONGCLUBMONTREAL', href: CONTACT.facebook },
        { icon: 'instagram', label: 'Instagram', value: '@pingpongclub', href: CONTACT.instagram },
      ],
    },
    finalCta: {
      heading: 'Save you a table?',
      text: 'For a group of 20 or fewer, call directly. For 20+ or a corporate event, we take care of everything.',
      primary: { label: 'Call to book', href: `tel:${CONTACT.phoneGeneral.replace(/[^\d]/g, '')}` },
    },
    disclosure: {
      heading: 'This is a mockup, not the real site',
      text: 'Built by Easy Pro Digital from the public content of pingpongclub.ca (menu, address, hours, contact). Ping Pong Club did not commission or approve this mockup — it’s a redesign proposal, shared as a sample of the work.',
      whatsapp: 'Chat on WhatsApp',
      whatsappMessage: 'Hi, I came across the Ping Pong Club mockup made by Easy Pro Digital and I’d like to talk about it.',
      more: 'See other projects',
    },
    footer: { by: 'mockup by' },
    badge: 'Mockup — Easy Pro Digital',
  },
}
