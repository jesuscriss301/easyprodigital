// Todo el texto de la demo, en francés (el idioma del restaurante y de sus
// clientes en Québec) y en inglés (los turistas, que hoy solo tienen un PDF
// suelto en inglés y ninguna página que leer).
//
// El tono en francés conserva deliberadamente el falso francés medieval que
// la Chope ya usa en su sitio ("Bienvanue à vous, pucelles et damoiseaux...").
// Es lo mejor que tienen y no se toca.

export const COPY = {
  fr: {
    nav: [
      { label: 'La taverne', href: '#home' },
      { label: 'Les cartes', href: '#menus' },
      { label: "L'ambiance", href: '#galerie' },
      { label: 'Grandes tablées', href: '#tablees' },
      { label: 'La confrérie', href: '#confrerie' },
      { label: 'Nous trouver', href: '#location' },
    ],
    cta: { label: 'Réserver', href: '#location' },
    openNow: { open: 'Ouvert maintenant', closed: 'Fermé', until: 'jusqu’à' },

    hero: {
      eyebrow: 'Resto-bar médiéval · Québec',
      title: 'Ripailles et bombances au cœur de Québec',
      text: 'Bienvanue à vous, pucelles et damoiseaux, fiers ivrognes et ostres bonnes gens assoifés de bagosse et de connoissances. Oyez qu’à La Chope Gobeline, vous ostres pouvez rassasier vos gosiers et vos panses.',
      primary: { label: 'Réserver une table', href: '#location' },
      secondary: { label: 'Voir les cartes', href: '#menus' },
      trust: [
        { end: 10, suffix: '+ ans', label: 'à faire bombance' },
        { value: '96', label: 'pièces d’or la tablée' },
        { end: 7, label: 'cartes à la taverne' },
      ],
    },

    scroll: { title: 'Longue vie à la Chope !', hint: 'Descendez' },

    menus: {
      eyebrow: 'Les cartes',
      title: 'Nos parchemins',
      intro: 'Sept cartes selon l’heure, la faim et le nombre de convives. Chacune s’ouvre telle quelle — et se met à jour toute seule quand la cuisine change ses prix.',
    },

    gallery: {
      eyebrow: 'L’ambiance',
      title: 'La taverne en images',
      intro: 'Passez le curseur sur une tranche pour l’ouvrir.',
    },

    tablees: {
      eyebrow: 'Grandes tablées',
      title: 'Venez en bande',
      intro: 'Anniversaires, noces, fêtes de bureau, guildes au complet : la Chope est bâtie pour les groupes.',
      items: [
        { icon: 'users', title: 'Banquets dès 20 convives', text: 'Menu fixe pensé pour servir vite et chaud une grande tablée, sans que personne n’attende.' },
        { icon: 'utensils', title: 'Groupailles de 20 à 30', text: 'Carte allégée : chacun choisit son plat et la cuisine garde le rythme.' },
        { icon: 'chefHat', title: 'Service traiteur', text: 'La Chope se déplace. Demandez une soumission au 418-906-0805.' },
        { icon: 'heart', title: 'Les marmots bienvenus', text: 'Carte pour les 12 ans et moins, portions à leur taille et service rapide.' },
      ],
    },

    confrerie: {
      eyebrow: 'La confrérie',
      title: 'Ce qui vit autour de la Chope',
      intro: 'Une taverne, ce n’est pas que des assiettes.',
      items: [
        { icon: 'book', title: 'La bande dessinée', text: 'Les aventures de La Chope Gobeline, publiées planche après planche.', link: 'comic', linkLabel: 'Lire les planches' },
        { icon: 'music', title: 'Les ménestrels', text: 'Musiciens et conteurs qui font la soirée quand la salle est pleine.' },
        { icon: 'hammer', title: 'Les artisans', text: 'Forgerons, couturières et artisans qui habillent la taverne et ses gens.' },
        { icon: 'shieldCheck', title: 'Grandeurs natures', text: 'Les compagnies de GN qui font de la Chope leur taverne de ralliement.' },
      ],
    },

    location: {
      eyebrow: 'Nous trouver',
      title: 'À deux pas du Vieux-Québec',
      intro: 'Pour réserver, appelez pendant les heures d’ouverture.',
      hoursTitle: 'Heures d’ouverture',
      addressTitle: 'L’adresse',
      goblinAlt: 'Gobelin de La Chope Gobeline tenant une grande fourchette',
      ways: {
        phone: 'Réserver par téléphone',
        phoneNote: 'Pendant les heures d’ouverture',
        catering: 'Traiteur et soumissions',
        cateringNote: 'Pour recevoir chez vous',
        mail: 'Réserver par courriel',
        info: 'Informations et traiteur',
        facebook: 'Suivre la Chope',
        facebookNote: 'Nouvelles, soirées et ménestrels',
        order: 'Commander en ligne',
        orderNote: 'Pour emporter',
      },
    },

    finalCta: {
      heading: 'La table est mise, la chope est pleine',
      text: 'Réservez votre tablée ou commandez pour emporter.',
      primary: 'Réserver au 418-527-2777',
      secondary: 'Commander en ligne',
    },

    disclosure: {
      heading: 'Ceci est une maquette',
      text: 'Cette page est une proposition de refonte du site de La Chope Gobeline, réalisée par Easy Pro Digital. Les photos, les cartes en PDF et les coordonnées proviennent du site actuel du restaurant et lui appartiennent. Rien n’a été commandé ni approuvé par la Chope : c’est un exemple de ce à quoi son site pourrait ressembler.',
      whatsapp: 'Écrire sur WhatsApp',
      more: 'Voir d’autres projets',
      whatsappMessage: 'Bonjour, j’ai vu la maquette de La Chope Gobeline et j’aimerais un site comme celui-là',
    },

    footer: { by: 'maquette réalisée par' },
    badge: 'Maquette — Easy Pro Digital',
    switcher: 'Même site, autre style :',
    englishMenu: 'English menu (PDF)',
    order: 'Commander en ligne',
  },

  en: {
    nav: [
      { label: 'The tavern', href: '#home' },
      { label: 'Menus', href: '#menus' },
      { label: 'The room', href: '#galerie' },
      { label: 'Big tables', href: '#tablees' },
      { label: 'The fellowship', href: '#confrerie' },
      { label: 'Find us', href: '#location' },
    ],
    cta: { label: 'Book a table', href: '#location' },
    openNow: { open: 'Open now', closed: 'Closed', until: 'until' },

    hero: {
      eyebrow: 'Medieval tavern · Québec City',
      title: 'Feasting and merriment in the heart of Québec',
      text: 'Welcome to you, maidens and young lords, proud drunkards and all good folk thirsty for ale and for tales. At La Chope Gobeline you may fill your throat and your belly alike.',
      primary: { label: 'Book a table', href: '#location' },
      secondary: { label: 'See the menus', href: '#menus' },
      trust: [
        { end: 10, suffix: '+ years', label: 'of feasting' },
        { value: '96', label: 'gold pieces a platter' },
        { end: 7, label: 'menus at the tavern' },
      ],
    },

    scroll: { title: 'Long live the Chope!', hint: 'Scroll' },

    menus: {
      eyebrow: 'The menus',
      title: 'Our scrolls',
      intro: 'Seven menus, depending on the hour, the hunger and the size of your party. Each opens as it is — and updates itself whenever the kitchen changes its prices.',
    },

    gallery: {
      eyebrow: 'The room',
      title: 'The tavern in pictures',
      intro: 'Hover a slice to open it.',
    },

    tablees: {
      eyebrow: 'Big tables',
      title: 'Come as a band',
      intro: 'Birthdays, weddings, office parties, whole guilds: the Chope is built for groups.',
      items: [
        { icon: 'users', title: 'Banquets from 20 guests', text: 'A set menu built to serve a long table fast and hot, with nobody left waiting.' },
        { icon: 'utensils', title: 'Group à la carte, 20 to 30', text: 'A trimmed-down menu: everyone picks their own dish and the kitchen keeps pace.' },
        { icon: 'chefHat', title: 'Catering', text: 'The Chope travels. Ask for a quote at 418-906-0805.' },
        { icon: 'heart', title: 'Little ones welcome', text: 'A menu for ages 12 and under, portions their size and quick service.' },
      ],
    },

    confrerie: {
      eyebrow: 'The fellowship',
      title: 'What lives around the Chope',
      intro: 'A tavern is more than its plates.',
      items: [
        { icon: 'book', title: 'The comic', text: 'The adventures of La Chope Gobeline, published page after page.', link: 'comic', linkLabel: 'Read the pages' },
        { icon: 'music', title: 'The minstrels', text: 'Musicians and storytellers who carry the evening when the room is full.' },
        { icon: 'hammer', title: 'The artisans', text: 'Smiths, seamstresses and makers who dress the tavern and its people.' },
        { icon: 'shieldCheck', title: 'Live-action roleplay', text: 'The LARP companies that make the Chope their rallying tavern.' },
      ],
    },

    location: {
      eyebrow: 'Find us',
      title: 'A short walk from Old Québec',
      intro: 'To book a table, call during opening hours.',
      hoursTitle: 'Opening hours',
      addressTitle: 'The address',
      goblinAlt: 'La Chope Gobeline goblin holding a giant fork',
      ways: {
        phone: 'Book by phone',
        phoneNote: 'During opening hours',
        catering: 'Catering and quotes',
        cateringNote: 'To feast at your place',
        mail: 'Book by email',
        info: 'Information and catering',
        facebook: 'Follow the Chope',
        facebookNote: 'News, evenings and minstrels',
        order: 'Order online',
        orderNote: 'For takeaway',
      },
    },

    finalCta: {
      heading: 'The table is set, the tankard is full',
      text: 'Book your table or order for takeaway.',
      primary: 'Call 418-527-2777',
      secondary: 'Order online',
    },

    disclosure: {
      heading: 'This is a mockup',
      text: 'This page is a proposed redesign of La Chope Gobeline’s website, built by Easy Pro Digital. The photos, the PDF menus and the contact details come from the restaurant’s current website and belong to it. Nothing here was commissioned or approved by the Chope: it is an example of what their site could look like.',
      whatsapp: 'Message on WhatsApp',
      more: 'See more projects',
      whatsappMessage: 'Hi, I saw the La Chope Gobeline mockup and I would like a website like that',
    },

    footer: { by: 'mockup built by' },
    badge: 'Mockup — Easy Pro Digital',
    switcher: 'Same site, another style:',
    englishMenu: 'English menu (PDF)',
    order: 'Order online',
  },
}
