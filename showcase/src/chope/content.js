import { photo, menuPage, menuPdf } from './assets.js'

/* ------------------------------------------------------------------ */
/* Menús — el PDF sigue siendo la fuente de verdad                      */
/* ------------------------------------------------------------------ */
// `pages` = cuántas páginas del PDF se muestran en el pergamino.
// `taste` = platos reales tomados del propio PDF, en texto, para que Google
// los pueda leer (dentro de un PDF no los indexa).

export const MENUS = [
  {
    id: 'brunch',
    file: 'Menu_brunch.pdf',
    pages: 1,
    icon: 'sun',
    fr: { name: 'Brunchs', when: 'Samedi et dimanche dès 10h', text: 'La tablée du matin : de quoi remettre d’aplomb les fiers ivrognes de la veille.' },
    en: { name: 'Brunch', when: 'Saturday & Sunday from 10am', text: 'The morning feast — enough to set last night’s merry drunkards back on their feet.' },
    taste: [],
  },
  {
    id: 'midi',
    file: 'Menu_midi.pdf',
    pages: 1,
    icon: 'utensils',
    fr: { name: 'Midi', when: 'Servi tous les jours jusqu’à 15h', text: 'Toutes ces platées incluent la souplette du jour. Portion midi ou portion goinfre.' },
    en: { name: 'Lunch', when: 'Served daily until 3pm', text: 'Every platter comes with the soup of the day. Regular portion or glutton portion.' },
    taste: [
      { fr: 'Mijoté de sanglier au fromage', en: 'Wild boar stew with cheese', price: '20' },
      { fr: 'Poutine Excalibur', en: 'Excalibur poutine', price: '25' },
      { fr: 'Duo du charcutier', en: 'Butcher’s duo', price: '20' },
      { fr: 'Festin Royal', en: 'Royal Feast', price: '40' },
    ],
  },
  {
    id: 'soir',
    file: 'Menu_soir.pdf',
    pages: 2,
    icon: 'flame',
    fr: { name: 'Soir', when: 'Dès 15h, tous les soirs', text: 'Nos tablées à partager : de véritables montagnes de viande pour deux convives et plus.' },
    en: { name: 'Dinner', when: 'From 3pm, every evening', text: 'Our sharing platters — genuine mountains of meat for two guests and up.' },
    taste: [
      { fr: 'L’Alchimiste — terre, mer, air et feu', en: 'The Alchemist — earth, sea, air and fire', price: '96' },
      { fr: 'Le Gros Verrat — porc et sanglier', en: 'The Big Boar — pork and wild boar', price: '98' },
      { fr: 'Le Grand Veneur — agneau, bœuf, canard', en: 'The Grand Huntsman — lamb, beef, duck', price: '132' },
      { fr: 'Le Festin Royal (2 convives)', en: 'The Royal Feast (2 guests)', price: '80' },
    ],
  },
  {
    id: 'banquets',
    file: 'Menu_banquets.pdf',
    pages: 1,
    icon: 'users',
    fr: { name: 'Banquets', when: 'Groupes de 20 convives et plus', text: 'Menu fixe pour les grandes tablées : anniversaires, noces, fêtes de bureau et compagnies en goguette.' },
    en: { name: 'Banquets', when: 'Groups of 20 and up', text: 'Set menu for the big tables: birthdays, weddings, office parties and companies on the loose.' },
    taste: [],
  },
  {
    id: 'groupailles',
    file: 'Menu_groupailles.pdf',
    pages: 1,
    icon: 'handHeart',
    fr: { name: 'Groupailles', when: 'De 20 à 30 convives', text: 'Menu à la carte allégé pour les groupes : chacun choisit, la cuisine suit le rythme.' },
    en: { name: 'Group à la carte', when: '20 to 30 guests', text: 'A trimmed-down à la carte menu for groups: everyone picks, the kitchen keeps up.' },
    taste: [],
  },
  {
    id: 'marmots',
    file: 'Menu_marmots.pdf',
    pages: 1,
    icon: 'heart',
    fr: { name: 'Marmots', when: '12 ans et moins', text: 'Pour les petits gobelins : portions à leur taille, sans chichis et sans attendre.' },
    en: { name: 'Little ones', when: '12 and under', text: 'For the small goblins: portions their size, no fuss and no waiting.' },
    taste: [],
  },
  {
    id: 'potions',
    file: 'Menu_potions.pdf',
    pages: 1,
    icon: 'droplet',
    fr: { name: 'Parchemin de potions', when: 'Jusqu’à la fermeture', text: 'Bières de microbrasserie, cidres, hydromels et potions de la maison. Longue vie à la Chope !' },
    en: { name: 'Scroll of potions', when: 'Until closing time', text: 'Craft beers, ciders, meads and house potions. Long live the Chope!' },
    taste: [],
  },
].map((m) => ({
  ...m,
  pdf: menuPdf(m.file),
  images: Array.from({ length: m.pages }, (_, i) => menuPage(m.file, i)),
  thumb: menuPage(m.file, 0, 500),
}))

export const ENGLISH_MENU_PDF = menuPdf('Menu_english.pdf')

/* ------------------------------------------------------------------ */
/* Galería — fotos del sitio original                                   */
/* ------------------------------------------------------------------ */

export const PHOTOS = [
  { src: photo('0-78-Assiette_Gros_Verrat%28Ragout_Sanglier%29.jpg', { w: 1000 }), fr: 'Le gros verrat', en: 'The big boar' },
  { src: photo('0-132-Bar_Angle2.jpg', { w: 1000 }), fr: 'La grande salle', en: 'The great hall' },
  { src: photo('0-77-Tonneaux.jpg', { w: 1000 }), fr: 'Les tonneaux', en: 'The barrels' },
  { src: photo('0-45-Capitaine_Fabio_2017.jpg', { w: 1000 }), fr: 'Les ménestrels', en: 'The minstrels' },
  { src: photo('0-39-festin_royal.jpg', { w: 1000 }), fr: 'Le festin royal', en: 'The royal feast' },
  { src: photo('0-39-HallEntr%C3%A9e.jpg', { w: 1000 }), fr: 'Le hall d’entrée', en: 'The entrance hall' },
  { src: photo('0-34-034.JPG', { w: 1000 }), fr: 'Ripailles et bombances', en: 'Feasting and merriment' },
  { src: photo('0-183-013.JPG', { w: 1000 }), fr: 'La tablée', en: 'The long table' },
  { src: photo('0-94-CTV_Gros_Verrat_1.JPG', { w: 1000 }), fr: 'À pleines mains', en: 'By the handful' },
  { src: photo('0-106-Bar_Angle2_petit.jpg', { w: 1000 }), fr: 'Le bar', en: 'The bar' },
]

export const HERO_IMAGE = photo('0-132-Bar_Angle2.jpg', { w: 1600 })
export const SCROLL_IMAGE = photo('0-34-034.JPG', { w: 1800 })

/* ------------------------------------------------------------------ */
/* Horarios — en texto real, tomados del letrero del sitio actual        */
/* (sin el "SPÉCIAL COVID" que sigue colgado allí desde 2020)            */
/* ------------------------------------------------------------------ */

export const HOURS = [
  { dow: 1, fr: 'Lundi', en: 'Monday', open: '17:00', close: '23:00' },
  { dow: 2, fr: 'Mardi', en: 'Tuesday', open: '11:00', close: '23:00' },
  { dow: 3, fr: 'Mercredi', en: 'Wednesday', open: '11:00', close: '23:00' },
  { dow: 4, fr: 'Jeudi', en: 'Thursday', open: '11:00', close: '23:00' },
  { dow: 5, fr: 'Vendredi', en: 'Friday', open: '11:00', close: '01:00' },
  { dow: 6, fr: 'Samedi', en: 'Saturday', open: '10:00', close: '01:00' },
  { dow: 0, fr: 'Dimanche', en: 'Sunday', open: '10:00', close: '23:00' },
]

export const CONTACT = {
  phone: '418-527-2777',
  cateringPhone: '418-906-0805',
  email: 'info@lachopegobeline.com',
  address: '966 Boul. René-Lévesque Ouest, Québec, QC G1S 1T9',
  mapQuery: 'La Chope Gobeline, 966 Boul. René-Lévesque Ouest, Québec',
  facebook: 'https://www.facebook.com/La-chope-gobeline-181828588508827/',
  order: 'https://lachopegobeline.order-online.ai/#/',
  comic: 'https://lesaventuresdelachopegobeline.tumblr.com/',
}
