// Todo el texto de la demo, en francés (el idioma real del negocio y de sus
// clientes en Montréal) y en inglés (la versión que su sitio prometió con un
// "Coming Soon" y nunca entregó — aquí va funcionando). Contenido tomado del
// sitio actual: nada inventado. Copie BGR opera desde 1994.

export const COPY = {
  fr: {
    nav: [
      { label: 'Accueil', href: '#home' },
      { label: 'Services', href: '#services' },
      { label: 'Produits', href: '#produits' },
      { label: 'À propos', href: '#apropos' },
      { label: 'Ressources', href: '#ressources' },
      { label: 'Nous joindre', href: '#contact' },
    ],
    cta: { label: 'Demander une estimation', href: '#contact' },

    hero: {
      eyebrow: 'Imprimerie · Montréal · depuis 1994',
      title: 'De l’idée au papier, votre imprimerie de quartier',
      text: 'De la conception à la mise en page — carte d’affaires, brochure, affiche, menu ou grand format — notre équipe met tout en œuvre pour concrétiser vos idées.',
      primary: { label: 'Demander une estimation', href: '#contact' },
      secondary: { label: 'Voir nos services', href: '#services' },
      trust: [
        { end: 1994, label: 'à votre service depuis', plain: true },
        { value: '52"', label: 'grand format jusqu’à' },
        { end: 11, suffix: '+', label: 'services d’impression' },
      ],
    },

    services: {
      eyebrow: 'Nos services',
      title: 'Tout ce dont un projet d’impression a besoin',
      intro: 'Une maîtrise des logiciels bureautiques et graphiques pour une clientèle diversifiée.',
      items: [
        { icon: 'printer', title: 'Impression numérique', text: 'Cartes d’affaires, dépliants, cartes postales, signets, calendriers, en-têtes et plus — couleur ou noir et blanc jusqu’à 13×19".' },
        { icon: 'expand', title: 'Grand format et présentoir', text: 'Affiches jusqu’à 52" sur papier satiné, toile, bannière et vinyle. X-stands, supports rétractables et présentoirs à brochures.' },
        { icon: 'ruler', title: 'Dessins architecturaux', text: 'Impression, photocopie et numérisation de plans jusqu’à 36" de large.' },
        { icon: 'book', title: 'Finition et reliure', text: 'Cerlox, spirale, Wire-O et reliure thermique. Massicotage, pliage, perforation, agrafage et plastification.' },
        { icon: 'frame', title: 'Montage et laminage', text: 'Montage sur foamcore, coroplaste, bois et masonite. Laminage professionnel avec passe-partout et bordures.' },
        { icon: 'copy', title: 'Photocopies et autres', text: 'Copie couleur ou N&B, libre-service sur place, numérisation grand format, archivage, transfert sur t-shirt et télécopie.' },
      ],
    },

    produits: {
      eyebrow: 'Nos produits',
      title: 'Ce que nous imprimons',
      intro: 'Un vaste choix de produits pour promouvoir votre projet ou votre entreprise.',
      items: [
        'Cartes d’affaires', 'Dépliants et brochures', 'Cartes postales et invitations',
        'Affiches et prospectus', 'Bannières et toiles (canvas)', 'Lettrage et vinyle',
        'Signets', 'Calendriers', 'En-têtes de lettre', 'Livres et catalogues',
        'Plans architecturaux', 'Transfert sur t-shirt',
      ],
    },

    apropos: {
      eyebrow: 'À propos',
      title: 'Une imprimerie de confiance depuis 1994',
      body: 'Depuis 1994, nous avons tout mis en œuvre pour rester à la fine pointe de la technologie. Avec une équipe dévouée, des équipements performants et un savoir-faire remarquable, vos projets d’impression prennent forme dans notre département de service. Nous sommes fiers d’avoir développé avec nos clients une relation de confiance et d’amitié.',
      points: [
        'Équipe dévouée et savoir-faire remarquable',
        'Équipements performants, à la fine pointe',
        'Résultats garantis, du concept à la livraison',
      ],
    },

    ressources: {
      eyebrow: 'Ressources',
      title: 'Préparer vos fichiers pour l’impression',
      intro: 'Deux points qui font toute la différence sur le résultat final.',
      faqs: [
        { q: 'Marge perdue (bleed)', a: 'Quand une image touche le bord de la page, le document doit être imprimé sur un format plus grand puis coupé. Prévoyez 1/8" (0,125") de marge sur les quatre côtés, et gardez textes et logos à 1/8" vers l’intérieur pour ne rien perdre à la coupe.' },
        { q: 'Résolution en PPP (DPI)', a: 'Vos fichiers doivent être à 300 PPP en CMYK. Attention : une image de 300 PPP agrandie à 300 % ne fait plus que 100 PPP au final. Pour Word ou PowerPoint, vérifiez la résolution des images dans « taille de l’image ».' },
        { q: 'Formats acceptés', a: 'Transformez vos polices en courbes (outlines) et envoyez de préférence un PDF haute résolution. Nous acceptons aussi les fichiers Word et PowerPoint — vérifiez que les images intégrées soient en 300 PPP et CMYK.' },
      ],
    },

    contact: {
      eyebrow: 'Nous joindre',
      title: 'Passez nous voir sur Saint-Laurent',
      intro: 'Une estimation ou une question ? Écrivez-nous ou passez à l’atelier.',
      hoursTitle: 'Heures d’ouverture',
      ways: {
        phone: 'Par téléphone', phoneNote: 'Pendant les heures d’ouverture',
        email: 'Par courriel', emailNote: 'Devis et informations',
        visit: 'À l’atelier', visitNote: 'Photocopie libre-service sur place',
      },
      hours: [
        { d: 'Lundi – Vendredi', h: '9 h à 17 h 30' },
        { d: 'Samedi', h: 'Fermé' },
        { d: 'Dimanche', h: 'Fermé' },
      ],
      holidayNote: 'Voir les vacances et congés fériés',
    },

    finalCta: {
      heading: 'Prêt à lancer votre prochain projet ?',
      text: 'Demandez une estimation gratuite, sans engagement.',
      primary: 'Écrire à Copie BGR',
      secondary: 'Appeler l’atelier',
    },

    disclosure: {
      heading: 'Ceci est une maquette',
      text: 'Cette page est une proposition de refonte du site de Copie BGR, réalisée par Easy Pro Digital. Le logo, les photos et les coordonnées proviennent du site actuel et appartiennent à l’entreprise. Rien n’a été commandé ni approuvé par Copie BGR : c’est un exemple de ce à quoi son site pourrait ressembler — avec, entre autres, la version anglaise qui manque aujourd’hui.',
      whatsapp: 'Écrire sur WhatsApp', more: 'Voir d’autres projets',
      whatsappMessage: 'Bonjour, j’ai vu la maquette de Copie BGR et j’aimerais un site comme celui-là',
    },

    footer: { by: 'maquette réalisée par' },
    badge: 'Maquette — Easy Pro Digital',
    langName: 'FR',
  },

  en: {
    nav: [
      { label: 'Home', href: '#home' },
      { label: 'Services', href: '#services' },
      { label: 'Products', href: '#produits' },
      { label: 'About', href: '#apropos' },
      { label: 'Resources', href: '#ressources' },
      { label: 'Contact', href: '#contact' },
    ],
    cta: { label: 'Get a quote', href: '#contact' },

    hero: {
      eyebrow: 'Print shop · Montréal · since 1994',
      title: 'From idea to paper — your neighbourhood print shop',
      text: 'From design to layout — business cards, brochures, posters, menus or large format — our team does whatever it takes to bring your ideas to life.',
      primary: { label: 'Get a quote', href: '#contact' },
      secondary: { label: 'See our services', href: '#services' },
      trust: [
        { end: 1994, label: 'serving you since', plain: true },
        { value: '52"', label: 'large format up to' },
        { end: 11, suffix: '+', label: 'printing services' },
      ],
    },

    services: {
      eyebrow: 'Our services',
      title: 'Everything a print project needs',
      intro: 'Command of office and graphic software for a diverse clientele.',
      items: [
        { icon: 'printer', title: 'Digital printing', text: 'Business cards, flyers, postcards, bookmarks, calendars, letterheads and more — colour or black & white up to 13×19".' },
        { icon: 'expand', title: 'Large format & displays', text: 'Posters up to 52" on satin paper, canvas, banner and vinyl. X-stands, retractable banners and brochure holders.' },
        { icon: 'ruler', title: 'Architectural drawings', text: 'Printing, photocopying and scanning of plans up to 36" wide.' },
        { icon: 'book', title: 'Finishing & binding', text: 'Cerlox, coil, Wire-O and thermal binding. Cutting, folding, perforation, stapling and lamination.' },
        { icon: 'frame', title: 'Mounting & laminating', text: 'Mounting on foamcore, coroplast, wood and masonite. Professional laminating with mats and coloured borders.' },
        { icon: 'copy', title: 'Copies & more', text: 'Colour or B&W copies, self-serve on site, large-format scanning, archiving, t-shirt transfer and fax.' },
      ],
    },

    produits: {
      eyebrow: 'Our products',
      title: 'What we print',
      intro: 'A wide range of products to promote your project or your company.',
      items: [
        'Business cards', 'Flyers & brochures', 'Postcards & invitations',
        'Posters & prospectuses', 'Banners & canvas', 'Lettering & vinyl',
        'Bookmarks', 'Calendars', 'Letterheads', 'Books & catalogues',
        'Architectural plans', 'T-shirt transfer',
      ],
    },

    apropos: {
      eyebrow: 'About',
      title: 'A print shop you can trust since 1994',
      body: 'Since 1994, we have done everything to stay at the cutting edge of technology. With a dedicated team, high-performance equipment and remarkable know-how, your print projects take shape in our service department. We are proud to have built relationships of trust and friendship with our clients.',
      points: [
        'Dedicated team and remarkable know-how',
        'High-performance, cutting-edge equipment',
        'Guaranteed results, from concept to delivery',
      ],
    },

    ressources: {
      eyebrow: 'Resources',
      title: 'Preparing your files for print',
      intro: 'Two things that make all the difference to the final result.',
      faqs: [
        { q: 'Bleed', a: 'When an image touches the edge of the page, the document must be printed on a larger sheet and then trimmed. Allow 1/8" (0.125") of bleed on all four sides, and keep text and logos 1/8" inside the edge so nothing is lost when cutting.' },
        { q: 'Resolution (DPI)', a: 'Your files should be 300 DPI in CMYK. Careful: a 300 DPI image enlarged to 300% ends up at only 100 DPI. For Word or PowerPoint, check the image resolution under "image size".' },
        { q: 'Accepted formats', a: 'Convert your fonts to outlines and send a high-resolution PDF where possible. We also accept Word and PowerPoint files — make sure embedded images are 300 DPI and CMYK.' },
      ],
    },

    contact: {
      eyebrow: 'Contact',
      title: 'Come see us on Saint-Laurent',
      intro: 'A quote or a question? Write to us or drop by the shop.',
      hoursTitle: 'Opening hours',
      ways: {
        phone: 'By phone', phoneNote: 'During opening hours',
        email: 'By email', emailNote: 'Quotes and information',
        visit: 'At the shop', visitNote: 'Self-serve photocopier on site',
      },
      hours: [
        { d: 'Monday – Friday', h: '9 a.m. to 5:30 p.m.' },
        { d: 'Saturday', h: 'Closed' },
        { d: 'Sunday', h: 'Closed' },
      ],
      holidayNote: 'See holiday hours and closures',
    },

    finalCta: {
      heading: 'Ready to start your next project?',
      text: 'Get a free, no-obligation quote.',
      primary: 'Email Copie BGR',
      secondary: 'Call the shop',
    },

    disclosure: {
      heading: 'This is a mockup',
      text: 'This page is a proposed redesign of Copie BGR’s website, built by Easy Pro Digital. The logo, photos and contact details come from the current site and belong to the business. Nothing here was commissioned or approved by Copie BGR: it is an example of what their site could look like — including, among other things, the English version they are missing today.',
      whatsapp: 'Message on WhatsApp', more: 'See more projects',
      whatsappMessage: 'Hi, I saw the Copie BGR mockup and I would like a website like that',
    },

    footer: { by: 'mockup built by' },
    badge: 'Mockup — Easy Pro Digital',
    langName: 'EN',
  },
}

export const CONTACT = {
  phone: '514.276.1508',
  email: 'copiebgr@videotron.ca',
  address: '5131 Boul Saint-Laurent, Montréal, QC',
  mapQuery: 'Copie BGR, 5131 Boul Saint-Laurent, Montréal',
}
