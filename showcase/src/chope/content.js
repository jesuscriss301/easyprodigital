import { galleryPhoto, menuPage, menuPdf } from './assets.js'

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
  { f: '689_459_88a609dd7b6f48199397ad1c45482889.jpg', fr: 'La platée du gros verrat', en: 'The big boar platter' },
  { f: '689_459_29f2bab6a606434e944d652b4614f690.jpg', fr: 'Le hall d’entrée', en: 'The entrance hall' },
  { f: '689_458_a777273ba4584dcc9ca22521e1484d09.jpg', fr: 'Les tonneaux', en: 'The barrels' },
  { f: '329_494_b3929f85649043bd970a92e20da8168a.jpg', fr: 'Les ménestrels', en: 'The minstrels' },
  { f: '658_494_3bcfabf0b83344989a7fcbf0aeaa953b.jpg', fr: 'Une montagne de viande', en: 'A mountain of meat' },
  { f: '658_494_2eddd1d1a3ec40cbb4b641da6cf14136.jpg', fr: 'Ripailles entre habitués', en: 'Feasting with the regulars' },
  { f: '689_459_3ec83c66b7e148da8bf3de3cc4f8e484.jpg', fr: 'La grande salle', en: 'The great hall' },
  { f: '689_459_e8e22fcef5e14631a54edf5a02350764.jpg', fr: 'Le gobelin de la maison', en: 'The house goblin' },
  { f: '658_494_cf43313cb0794014a73569a89bf59001.jpg', fr: 'La salle des banquets', en: 'The banquet hall' },
  { f: '658_494_eb9bfe721e3644c486cb992b92785a86.jpg', fr: 'Derrière le bar', en: 'Behind the bar' },
].map((p) => ({ ...p, src: galleryPhoto(p.f, { w: 1100 }) }))

export const HERO_IMAGE = galleryPhoto('689_459_3ec83c66b7e148da8bf3de3cc4f8e484.jpg', { w: 1600 })
export const SCROLL_IMAGE = galleryPhoto('658_494_2eddd1d1a3ec40cbb4b641da6cf14136.jpg', { w: 1500 })

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
  bookingEmail: 'lachopegobeline@gmail.com',
  address: '966 Boul. René-Lévesque Ouest, Québec, QC G1S 1T9',
  mapQuery: 'La Chope Gobeline, 966 Boul. René-Lévesque Ouest, Québec',
  facebook: 'https://www.facebook.com/La-chope-gobeline-181828588508827/',
  order: 'https://lachopegobeline.order-online.ai/#/',
  comic: 'https://lesaventuresdelachopegobeline.tumblr.com/',
}
