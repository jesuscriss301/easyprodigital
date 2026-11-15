// ============================================================
//  Páginas de servicio por NICHO ("Website design for <nicho>").
//
//  Por qué existen: Search Console muestra que Google ya relaciona el sitio
//  con "website design for plumbers/lawyer/med spa/dentist + ciudad", pero
//  responde con la demo (que le habla al cliente final del negocio) y la deja
//  en la página 4 a 7. Estas páginas le hablan al DUEÑO del negocio y enlazan
//  la demo como prueba.
//
//  Reglas de contenido:
//  - Nada de cifras inventadas (clientes, porcentajes, años). Precio y plazo
//    salen de src/data/pricing*.js: paquete web desde 450 USD.
//  - La sección de zonas ("areas") lista lugares en texto real porque esas
//    son las búsquedas que ya traen impresiones. Una página por nicho, NO una
//    página por ciudad (eso Google lo trata como páginas puerta).
//
//  Para agregar un nicho: slug en NICHE_SLUGS, bloque en `en` y `es`, ruta en
//  src/App.jsx, en scripts/prerender.mjs y en public/sitemap.xml.
//  Usa el mismo layout que las demás landings (NicheLanding en pages.jsx).
// ============================================================

export const NICHE_SLUGS = [
  'plumber-website-design',
  'lawyer-website-design',
  'med-spa-website-design',
  'dental-website-design',
]

const shared = {
  en: {
    processTitle: 'How it works',
    process: [
      { step: '01', title: 'We talk', text: 'A short conversation about your business, your service area and how customers reach you today.' },
      { step: '02', title: 'You see it first', text: 'A working preview with your brand and your services, before anything is final.' },
      { step: '03', title: 'We refine', text: 'Two rounds of changes on the real site, not on a picture of it.' },
      { step: '04', title: 'It goes live', text: 'Domain, hosting, analytics and your Google listing connected. You own all of it.' },
    ],
    pricingNote: 'Website packages start at 450 USD, with a fixed price agreed before any work starts.',
    pricingCta: 'See full pricing',
    demoCta: 'Open the live example',
    ctaButton: 'Start a project',
    ctaWhatsappLabel: 'Message me on WhatsApp',
  },
  es: {
    processTitle: 'Cómo trabajamos',
    process: [
      { step: '01', title: 'Hablamos', text: 'Una conversación corta sobre tu negocio, tu zona de cobertura y cómo te contactan hoy los clientes.' },
      { step: '02', title: 'La ves primero', text: 'Una versión funcionando con tu marca y tus servicios, antes de que nada sea definitivo.' },
      { step: '03', title: 'Ajustamos', text: 'Dos rondas de cambios sobre la web real, no sobre una imagen.' },
      { step: '04', title: 'Sale al aire', text: 'Dominio, hosting, analítica y tu ficha de Google conectados. Todo queda a tu nombre.' },
    ],
    pricingNote: 'Los paquetes de página web empiezan en 450 USD, con un precio cerrado antes de empezar.',
    pricingCta: 'Ver todos los precios',
    demoCta: 'Abrir el ejemplo en vivo',
    ctaButton: 'Empezar un proyecto',
    ctaWhatsappLabel: 'Escríbeme por WhatsApp',
  },
}

const en = {
  'plumber-website-design': {
    serviceType: 'Plumber website design',
    audienceType: 'Plumbing and drain cleaning companies',
    seoTitle: 'Website Design for Plumbers — See a Live Example',
    seoDescription:
      'Plumbing websites built to turn searches into calls: tap-to-call on every screen, a 24/7 emergency page and your service areas. Open the live demo first.',
    eyebrow: 'For plumbing and drain cleaning companies',
    title: 'Website Design for Plumbers',
    intro:
      'Someone standing in a flooded kitchen does not browse. They look for a phone number and call whoever makes it easiest. Your website has about twenty seconds to be that plumber.',
    problemTitle: 'Why most plumbing websites do not ring the phone',
    problems: [
      'The phone number is plain text, so on a phone it has to be memorised and typed instead of tapped.',
      'Nothing says which neighborhoods or towns you cover, so the visitor is not sure you will come.',
      'Emergency hours are hidden inside an image or missing, so the 2 a.m. customer calls someone else.',
      'No licence number, insurance or real reviews in sight, right when a stranger decides who to let into their home.',
      'Google cannot connect you with "plumber in <your city>" because your city and services are not written on the page.',
    ],
    includesTitle: 'What you get',
    includes: [
      'Tap-to-call button in the header, in the first screen and fixed at the bottom on mobile.',
      'A dedicated emergency page with your hours, your number and your coverage area.',
      'One section per service: drain cleaning, water heaters, leak repair, repiping, whatever you actually do.',
      'Service area written in plain text with the towns you cover, so local searches can find you.',
      'Licence, insurance and reviews placed next to the call buttons, where trust is decided.',
      'Quote request form and WhatsApp button that land straight in your phone.',
      'Google Business Profile connected, plus titles, descriptions and structured data for local search.',
    ],
    demoTitle: 'Open a working plumbing site before you decide',
    demoCopy:
      'This is not a mock-up. It is a live plumbing website. Open it on your phone, tap the call button and look at how emergencies and services are laid out. Yours is built the same way, with your brand, your services and your towns.',
    demoUrl: 'https://demos.easyprodigital.com/plumbers/',
    areasTitle: 'Where I work',
    areasIntro:
      'Everything is done remotely, in English, so your location is not a limit. These are some of the places where plumbing companies search for a website like this:',
    areas: [
      { region: 'Florida', places: ['Orlando', 'Miami', 'Hollywood', 'Coral Springs', 'Miramar', 'Davie', 'Lakeland', 'Gainesville'] },
      { region: 'Texas', places: ['League City', 'Sugar Land'] },
      { region: 'California', places: ['Daly City', 'Victorville', 'Pomona', 'Salinas', 'Santa Ana', 'Thousand Oaks', 'Oxnard', 'Fontana', 'Riverside'] },
      { region: 'Midwest', places: ['Ann Arbor', "Lee's Summit", 'Independence', 'Fishers', 'Elgin', 'Cedar Rapids', 'Des Moines'] },
      { region: 'Other states', places: ['Provo', 'Bend', 'Norman', 'Montgomery', 'Lexington', 'Elizabeth', 'Paterson', 'Henderson'] },
      { region: 'Canada', places: ['Anywhere in Canada, in English'] },
    ],
    faqTitle: 'What plumbers usually ask',
    faq: [
      { q: 'How long does it take?', a: 'One to two weeks from the moment I have your services, service area and photos.' },
      { q: 'How much does a plumber website cost?', a: 'Website packages start at 450 USD. You get a fixed price in writing before anything starts. The pricing page shows every range.' },
      { q: 'Do I own the website?', a: 'Yes. Domain, hosting account and code are in your name. No lock-in and no monthly fee just to keep it online.' },
      { q: 'Can you work with my existing website?', a: 'Yes. I can rebuild it keeping your current addresses, so you keep whatever Google already gives you.' },
      { q: 'Can people book or request a quote online?', a: 'Yes. A quote form and a WhatsApp button come included, and online booking can be added if you need it.' },
    ],
    ctaTitle: 'Want a website like this for your plumbing company?',
    ctaCopy: 'Tell me your services and the towns you cover, and I send you a fixed price and a timeline. No call required.',
    ctaWhatsappText: 'Hi Jesús, I saw your plumber website page and I would like a website for my plumbing company.',
  },
  'lawyer-website-design': {
    serviceType: 'Lawyer website design',
    audienceType: 'Law firms and independent attorneys',
    seoTitle: 'Website Design for Lawyers — See a Live Example',
    seoDescription:
      'Law firm websites that explain your practice areas, make consultation requests easy and put credentials first. Open the live example before you decide.',
    eyebrow: 'For law firms and independent attorneys',
    title: 'Website Design for Lawyers and Law Firms',
    intro:
      'Someone with a legal problem is not shopping for a logo. They want to know whether you handle their case and how to reach you. Your website has to answer that before they go back to the search results.',
    problemTitle: 'Why most law firm websites lose the client before the first call',
    problems: [
      'Practice areas sit in a dropdown or a single line, so the visitor cannot tell whether you handle their case.',
      'There is no clear way to request a consultation; the only path is a phone number and a generic contact page.',
      'Credentials, bar admissions and case experience are missing, right when a stranger decides who to trust.',
      'The site is slow on a phone, which is exactly where most people look for a lawyer.',
      'Google cannot connect you with "<practice area> lawyer in <city>" because those words are not written on the page.',
    ],
    includesTitle: 'What you get',
    includes: [
      'One page per practice area: family, estate planning, personal injury, immigration, whatever you actually handle.',
      'A consultation form with the fields you need to qualify a case, landing straight in your inbox and your phone.',
      'An attorney profile with your photo, bar admissions and credentials, written in plain language.',
      'Client reviews placed next to the consultation buttons, where trust is decided.',
      'Google Business Profile connected, with your office hours, address and directions.',
      'Local SEO: titles, descriptions and structured data that name your practice areas and your city.',
      'A mobile-first layout, because most people looking for a lawyer are on a phone.',
    ],
    demoTitle: 'Open a working law firm site before you decide',
    demoCopy:
      'This is not a mock-up. It is a live law firm website. Open it on your phone, look at how practice areas and the consultation request are laid out. Yours is built the same way, with your practice areas, your credentials and your city.',
    demoUrl: 'https://demos.easyprodigital.com/lawyers/',
    areasTitle: 'Where I work',
    areasIntro:
      'Everything is done remotely, in English, so your location is not a limit. These are some of the places where law firms search for a website like this:',
    areas: [
      { region: 'California', places: ['Riverside', 'Pomona', 'Ventura', 'Escondido', 'Simi Valley', 'Visalia', 'Huntington Beach', 'Downey', 'Irvine', 'Santa Clarita'] },
      { region: 'Texas', places: ['Plano', 'Waco', 'San Antonio', 'Dallas', 'McKinney', 'Grand Prairie', 'Carrollton', 'Tyler'] },
      { region: 'Florida', places: ['Clearwater', 'Cape Coral', 'Pembroke Pines', 'St. Petersburg', 'Fort Lauderdale', 'West Palm Beach', 'Lakeland'] },
      { region: 'Midwest', places: ['Indianapolis', 'Des Moines', 'Milwaukee', 'Joliet', 'Omaha', 'St. Louis', 'Grand Rapids', 'Akron'] },
      { region: 'Other states', places: ['Reno', 'Las Vegas', 'Seattle', 'Eugene', 'Tulsa', 'Oklahoma City', 'Macon', 'Billings', 'Provo', 'Albuquerque'] },
      { region: 'Canada', places: ['Anywhere in Canada, in English'] },
    ],
    faqTitle: 'What lawyers usually ask',
    faq: [
      { q: 'How long does it take?', a: 'One to two weeks from the moment I have your practice areas, your credentials and your photos.' },
      { q: 'How much does a law firm website cost?', a: 'Website packages start at 450 USD. You get a fixed price in writing before anything starts. The pricing page shows every range.' },
      { q: 'Do I own the website?', a: 'Yes. Domain, hosting account and code are in your name. No lock-in and no monthly fee just to keep it online.' },
      { q: 'Can you work with my existing website?', a: 'Yes. I can rebuild it keeping your current addresses, so you keep whatever Google already gives you.' },
      { q: 'Can clients request a consultation online?', a: 'Yes. A consultation form and a WhatsApp button come included, and online scheduling can be added if you need it.' },
    ],
    ctaTitle: 'Want a website like this for your law firm?',
    ctaCopy: 'Tell me your practice areas and the city you work in, and I send you a fixed price and a timeline. No call required.',
    ctaWhatsappText: 'Hi Jesús, I saw your lawyer website page and I would like a website for my law firm.',
  },
  'med-spa-website-design': {
    serviceType: 'Med spa website design',
    audienceType: 'Med spas and aesthetic clinics',
    seoTitle: 'Med Spa Website Design — See a Live Example',
    seoDescription:
      'Med spa websites that feel premium, explain every treatment in plain language and make booking a consultation easy on a phone. See the live example.',
    eyebrow: 'For med spas, aesthetic clinics and injectors',
    title: 'Website Design for Med Spas and Aesthetic Clinics',
    intro:
      'A new patient comparing med spas decides in minutes, on a phone, from the website. If the site looks like a pharmacy and the treatments are written in jargon, they book somewhere else.',
    problemTitle: 'Why most med spa websites do not feel like the clinic',
    problems: [
      'The website looks like a template, not the calm, premium space the clinic actually is.',
      'Treatments are named in jargon, with no explanation of what the visit involves or how long it takes.',
      'There is no before/after gallery, even though that is the first thing a prospective patient looks for.',
      'Requesting a consultation means a phone number or a long form that is painful to fill out on a phone.',
      'Google cannot connect you with "med spa in <city>" or "injectables" because those words are not written on the page.',
    ],
    includesTitle: 'What you get',
    includes: [
      'A design that reads premium: real photography, generous spacing and typography that matches your brand.',
      'One section per treatment: injectables, laser, facials, body contouring, whatever you actually offer.',
      'Plain-language explanations of each treatment, with duration and aftercare, without promising results.',
      'A before/after gallery with your own photos and the consent language your clinic already uses.',
      'Consultation request form and WhatsApp button that land straight in your phone.',
      'Google Business Profile connected, plus titles, descriptions and structured data for local search.',
      'Online booking connected if you already use a scheduling tool.',
    ],
    demoTitle: 'Open a working med spa site before you decide',
    demoCopy:
      'This is not a mock-up. It is a live med spa website. Open it on your phone, look at how treatments and the consultation request are laid out. Yours is built the same way, with your treatments, your photography and your city.',
    demoUrl: 'https://demos.easyprodigital.com/aesthetics/',
    areasTitle: 'Where I work',
    areasIntro:
      'Everything is done remotely, in English, so your location is not a limit. These are some of the places where med spas search for a website like this:',
    areas: [
      { region: 'California', places: ['Costa Mesa', 'Huntington Beach', 'Irvine', 'Newport Beach'] },
      { region: 'Florida', places: ['Tampa', 'Miami', 'Orlando'] },
      { region: 'Texas', places: ['Austin', 'Dallas', 'Houston'] },
      { region: 'Canada', places: ['Anywhere in Canada, in English'] },
    ],
    faqTitle: 'What med spas usually ask',
    faq: [
      { q: 'How long does it take?', a: 'One to two weeks from the moment I have your treatments, your photos and your brand.' },
      { q: 'How much does a med spa website cost?', a: 'Website packages start at 450 USD. You get a fixed price in writing before anything starts. The pricing page shows every range.' },
      { q: 'Do I own the website?', a: 'Yes. Domain, hosting account and code are in your name. No lock-in and no monthly fee just to keep it online.' },
      { q: 'Can you work with my existing website?', a: 'Yes. I can rebuild it keeping your current addresses, so you keep whatever Google already gives you.' },
      { q: 'Can patients book a consultation online?', a: 'Yes. A consultation form and a WhatsApp button come included, and online booking can be connected if you already use a scheduling tool.' },
    ],
    ctaTitle: 'Want a website like this for your med spa?',
    ctaCopy: 'Tell me your treatments and the city you work in, and I send you a fixed price and a timeline. No call required.',
    ctaWhatsappText: 'Hi Jesús, I saw your med spa website page and I would like a website for my clinic.',
  },
  'dental-website-design': {
    serviceType: 'Dental website design',
    audienceType: 'Dentists, prosthodontists and dental clinics',
    seoTitle: 'Dental Website Design — See a Live Example',
    seoDescription:
      'Dental websites that let new patients request an appointment online, show the services and insurance you accept, and load fast on a phone. See the live example.',
    eyebrow: 'For dentists, prosthodontists and dental clinics',
    title: 'Website Design for Dentists and Dental Clinics',
    intro:
      'A new patient with a toothache or a cleaning due picks a dentist from a phone, usually in a hurry. If they cannot see your services, the insurance you take or a way to request an appointment, they pick the next result.',
    problemTitle: 'Why most dental websites lose the new patient',
    problems: [
      'New patients cannot request an appointment online; they have to call during office hours or fill out a form that never answers.',
      'The services are a list of words with no explanation, so the patient is not sure you do what they need.',
      'The insurance plans you accept are not mentioned, and that is the first thing many patients check.',
      'Stock photos and a slow site make the clinic look generic, especially on a phone.',
      'Google cannot connect you with "dentist in <city>" because your city and services are not written on the page.',
    ],
    includesTitle: 'What you get',
    includes: [
      'Appointment request form in the header, in the first screen and at the end of every service page.',
      'One section per service: cleanings, implants, orthodontics, whitening, emergency care, whatever you actually do.',
      'Insurance plans you accept written in plain text, with a note on financing if you offer it.',
      'Real photos of the clinic and the team instead of stock images.',
      'Google Business Profile connected, with your hours, address and directions.',
      'Local SEO: titles, descriptions and structured data that name your services and your city.',
      'A mobile-first layout that loads fast on the phone in the waiting room.',
    ],
    demoTitle: 'Open a working dental site before you decide',
    demoCopy:
      'This is not a mock-up. It is a live dental website. Open it on your phone, look at how services and appointment requests are laid out. Yours is built the same way, with your services, your insurance plans and your city.',
    demoUrl: 'https://demos.easyprodigital.com/dentists/',
    areasTitle: 'Where I work',
    areasIntro:
      'Everything is done remotely, in English, so your location is not a limit. These are some of the places where dental clinics search for a website like this:',
    areas: [
      { region: 'Utah', places: ['Orem', 'Provo', 'Salt Lake City'] },
      { region: 'California', places: ['Moorpark', 'Thousand Oaks', 'Ventura'] },
      { region: 'Oregon', places: ['Bend'] },
      { region: 'Canada', places: ['Anywhere in Canada, in English'] },
    ],
    faqTitle: 'What dentists usually ask',
    faq: [
      { q: 'How long does it take?', a: 'One to two weeks from the moment I have your services, your insurance plans and your photos.' },
      { q: 'How much does a dental website cost?', a: 'Website packages start at 450 USD. You get a fixed price in writing before anything starts. The pricing page shows every range.' },
      { q: 'Do I own the website?', a: 'Yes. Domain, hosting account and code are in your name. No lock-in and no monthly fee just to keep it online.' },
      { q: 'Can you work with my existing website?', a: 'Yes. I can rebuild it keeping your current addresses, so you keep whatever Google already gives you.' },
      { q: 'Can patients request an appointment online?', a: 'Yes. An appointment form and a WhatsApp button come included, and online scheduling can be connected if you already use one.' },
    ],
    ctaTitle: 'Want a website like this for your dental clinic?',
    ctaCopy: 'Tell me your services and the city you work in, and I send you a fixed price and a timeline. No call required.',
    ctaWhatsappText: 'Hi Jesús, I saw your dental website page and I would like a website for my clinic.',
  },
}

const es = {
  'plumber-website-design': {
    serviceType: 'Diseño de páginas web para plomeros',
    audienceType: 'Empresas de plomería y destape de cañerías',
    seoTitle: 'Páginas Web para Plomeros y Fontaneros — Ejemplo en Vivo',
    seoDescription:
      'Páginas web de plomería hechas para que suene el teléfono: botón de llamada en cada pantalla, página de urgencias 24/7 y tus zonas de cobertura. Mira la demo.',
    eyebrow: 'Para plomeros, fontaneros y empresas de destape',
    title: 'Diseño de Páginas Web para Plomeros',
    intro:
      'Quien tiene la cocina inundada no se pone a navegar. Busca un número y llama al que se lo ponga más fácil. Tu web tiene unos veinte segundos para ser ese plomero.',
    problemTitle: 'Por qué casi ninguna web de plomería hace sonar el teléfono',
    problems: [
      'El número está como texto, así que en el celular hay que memorizarlo y marcarlo en vez de tocarlo.',
      'No dice qué barrios o municipios cubres, y el visitante no sabe si vas a llegar.',
      'El horario de urgencias está escondido en una imagen o no aparece, y el cliente de las 2 a.m. llama a otro.',
      'No se ven tu matrícula, tu experiencia ni reseñas reales, justo cuando un desconocido decide a quién dejar entrar a su casa.',
      'Google no te relaciona con "plomero en <tu ciudad>" porque tu ciudad y tus servicios no están escritos en la página.',
    ],
    includesTitle: 'Qué recibes',
    includes: [
      'Botón de llamada en el encabezado, en la primera pantalla y fijo abajo en el celular.',
      'Una página de urgencias con tu horario, tu número y tu zona de cobertura.',
      'Una sección por servicio: destapes, calentadores, fugas, cambio de tubería, lo que de verdad haces.',
      'Zona de cobertura escrita en texto, con los barrios y municipios que atiendes.',
      'Matrícula, garantía y reseñas junto a los botones de llamada, donde se decide la confianza.',
      'Formulario de cotización y botón de WhatsApp que llegan directo a tu celular.',
      'Ficha de Google conectada, más títulos, descripciones y datos estructurados para búsquedas locales.',
    ],
    demoTitle: 'Abre una web de plomería funcionando antes de decidir',
    demoCopy:
      'No es una imagen de muestra. Es una web de plomería en vivo. Ábrela en el celular, toca el botón de llamada y mira cómo están organizados las urgencias y los servicios. La tuya se construye igual, con tu marca, tus servicios y tus zonas.',
    demoUrl: 'https://demos.easyprodigital.com/plumbers/',
    areasTitle: 'Dónde trabajo',
    areasIntro: 'Todo se hace a distancia, así que tu ubicación no es un límite.',
    areas: [
      { region: 'Colombia', places: ['Medellín', 'Valle de Aburrá', 'Bogotá', 'Cali', 'Barranquilla', 'Bucaramanga', 'Cúcuta'] },
      { region: 'Estados Unidos y Canadá', places: ['Empresas hispanas y de habla inglesa, con atención en español o inglés'] },
    ],
    faqTitle: 'Lo que suelen preguntar los plomeros',
    faq: [
      { q: '¿Cuánto se demora?', a: 'De una a dos semanas desde que tengo tus servicios, tu zona de cobertura y tus fotos.' },
      { q: '¿Cuánto cuesta una página web para plomería?', a: 'Los paquetes de página web empiezan en 450 USD. Recibes un precio cerrado por escrito antes de empezar. En la página de precios están todos los rangos.' },
      { q: '¿La página queda a mi nombre?', a: 'Sí. Dominio, hosting y código quedan a tu nombre. Sin amarres y sin mensualidad solo para mantenerla en línea.' },
      { q: '¿Pueden trabajar sobre la web que ya tengo?', a: 'Sí. Puedo rehacerla conservando tus direcciones actuales, para no perder lo que Google ya te da.' },
      { q: '¿Los clientes pueden pedir cotización por la web?', a: 'Sí. El formulario de cotización y el botón de WhatsApp vienen incluidos, y se puede agregar agenda en línea si la necesitas.' },
    ],
    ctaTitle: '¿Quieres una web así para tu empresa de plomería?',
    ctaCopy: 'Cuéntame tus servicios y las zonas que cubres, y te envío un precio cerrado y un plazo. Sin necesidad de llamada.',
    ctaWhatsappText: 'Hola Jesús, vi tu página de webs para plomeros y quiero una para mi empresa.',
  },
  'lawyer-website-design': {
    serviceType: 'Diseño de páginas web para abogados',
    audienceType: 'Bufetes y abogados independientes',
    seoTitle: 'Páginas Web para Abogados — Ejemplo en Vivo',
    seoDescription:
      'Webs para abogados y bufetes que explican tus áreas de práctica, facilitan la consulta y ponen credenciales primero. Mira el ejemplo en vivo antes de decidir.',
    eyebrow: 'Para bufetes y abogados independientes',
    title: 'Diseño de Páginas Web para Abogados y Bufetes',
    intro:
      'Quien tiene un problema legal no está buscando un logo. Quiere saber si llevas su caso y cómo hablar contigo. Tu web tiene que responderlo antes de que vuelva a los resultados de Google.',
    problemTitle: 'Por qué casi ninguna web de abogados gana al cliente antes de la primera llamada',
    problems: [
      'Las áreas de práctica están en un menú o en una sola línea, y el visitante no sabe si llevas su caso.',
      'No hay una forma clara de pedir una consulta; solo un teléfono y una página de contacto genérica.',
      'No se ven credenciales, tarjeta profesional ni experiencia en casos, justo cuando un desconocido decide a quién confiarle su problema.',
      'La web es lenta en el celular, que es justo donde la mayoría busca abogado.',
      'Google no te relaciona con "<área de práctica> abogado en <tu ciudad>" porque esas palabras no están escritas en la página.',
    ],
    includesTitle: 'Qué recibes',
    includes: [
      'Una página por área de práctica: familia, sucesiones, lesiones personales, inmigración, lo que de verdad hagas.',
      'Formulario de consulta con los campos que necesitas para calificar el caso, llegando a tu correo y a tu celular.',
      'Perfil del abogado con foto, tarjeta profesional y credenciales, escrito en lenguaje claro.',
      'Reseñas de clientes junto a los botones de consulta, donde se decide la confianza.',
      'Ficha de Google conectada, con horario, dirección y cómo llegar.',
      'SEO local: títulos, descripciones y datos estructurados con tus áreas de práctica y tu ciudad.',
      'Diseño pensado primero para celular, porque la mayoría busca abogado desde el teléfono.',
    ],
    demoTitle: 'Abre una web de abogados funcionando antes de decidir',
    demoCopy:
      'No es una imagen de muestra. Es una web de abogados en vivo. Ábrela en el celular y mira cómo están organizadas las áreas de práctica y la solicitud de consulta. La tuya se construye igual, con tus áreas, tus credenciales y tu ciudad.',
    demoUrl: 'https://demos.easyprodigital.com/lawyers/',
    areasTitle: 'Dónde trabajo',
    areasIntro: 'Todo se hace a distancia, así que tu ubicación no es un límite.',
    areas: [
      { region: 'Colombia', places: ['Medellín', 'Valle de Aburrá', 'Bogotá', 'Cali', 'Barranquilla', 'Bucaramanga', 'Cúcuta'] },
      { region: 'Estados Unidos y Canadá', places: ['Empresas hispanas y de habla inglesa, con atención en español o inglés'] },
    ],
    faqTitle: 'Lo que suelen preguntar los abogados',
    faq: [
      { q: '¿Cuánto se demora?', a: 'De una a dos semanas desde que tengo tus áreas de práctica, tus credenciales y tus fotos.' },
      { q: '¿Cuánto cuesta una página web para abogados?', a: 'Los paquetes de página web empiezan en 450 USD. Recibes un precio cerrado por escrito antes de empezar. En la página de precios están todos los rangos.' },
      { q: '¿La página queda a mi nombre?', a: 'Sí. Dominio, hosting y código quedan a tu nombre. Sin amarres y sin mensualidad solo para mantenerla en línea.' },
      { q: '¿Pueden trabajar sobre la web que ya tengo?', a: 'Sí. Puedo rehacerla conservando tus direcciones actuales, para no perder lo que Google ya te da.' },
      { q: '¿Los clientes pueden pedir consulta por la web?', a: 'Sí. El formulario de consulta y el botón de WhatsApp vienen incluidos, y se puede agregar agenda en línea si la necesitas.' },
    ],
    ctaTitle: '¿Quieres una web así para tu bufete?',
    ctaCopy: 'Cuéntame tus áreas de práctica y la ciudad donde trabajas, y te envío un precio cerrado y un plazo. Sin necesidad de llamada.',
    ctaWhatsappText: 'Hola Jesús, vi tu página de webs para abogados y quiero una para mi bufete.',
  },
  'med-spa-website-design': {
    serviceType: 'Diseño de páginas web para clínicas estéticas',
    audienceType: 'Med spas, clínicas estéticas y aplicadores de inyectables',
    seoTitle: 'Páginas Web para Clínicas Estéticas — Ejemplo en Vivo',
    seoDescription:
      'Webs para clínicas estéticas y med spas que se ven premium, explican cada tratamiento sin prometer resultados y facilitan la consulta desde el celular.',
    eyebrow: 'Para med spas, clínicas estéticas y aplicadores de inyectables',
    title: 'Diseño de Páginas Web para Med Spas y Clínicas Estéticas',
    intro:
      'Un paciente nuevo que compara clínicas estéticas decide en minutos, desde el celular, con la web. Si la página parece una farmacia y los tratamientos están en jerga, reserva en otra.',
    problemTitle: 'Por qué casi ninguna web de med spa se siente como la clínica',
    problems: [
      'La web parece una plantilla y no el espacio tranquilo y premium que la clínica es de verdad.',
      'Los tratamientos están en jerga, sin explicar en qué consiste la visita ni cuánto dura.',
      'No hay galería de antes y después, aunque es lo primero que busca un paciente interesado.',
      'Pedir una consulta significa llamar o llenar un formulario largo que en el celular es un martirio.',
      'Google no te relaciona con "med spa en <tu ciudad>" ni con "inyectables" porque esas palabras no están escritas en la página.',
    ],
    includesTitle: 'Qué recibes',
    includes: [
      'Un diseño que se siente premium: fotografía real, buen espacio y tipografía que va con tu marca.',
      'Una sección por tratamiento: inyectables, láser, faciales, contorno corporal, lo que de verdad ofrezcas.',
      'Explicación de cada tratamiento en lenguaje claro, con duración y cuidados posteriores, sin prometer resultados.',
      'Galería de antes y después con tus propias fotos y el texto de consentimiento que ya usa tu clínica.',
      'Formulario de consulta y botón de WhatsApp que llegan directo a tu celular.',
      'Ficha de Google conectada, más títulos, descripciones y datos estructurados para búsquedas locales.',
      'Agenda en línea conectada si ya usas una herramienta de reservas.',
    ],
    demoTitle: 'Abre una web de med spa funcionando antes de decidir',
    demoCopy:
      'No es una imagen de muestra. Es una web de med spa en vivo. Ábrela en el celular y mira cómo están organizados los tratamientos y la solicitud de consulta. La tuya se construye igual, con tus tratamientos, tus fotos y tu ciudad.',
    demoUrl: 'https://demos.easyprodigital.com/aesthetics/',
    areasTitle: 'Dónde trabajo',
    areasIntro: 'Todo se hace a distancia, así que tu ubicación no es un límite.',
    areas: [
      { region: 'Colombia', places: ['Medellín', 'Valle de Aburrá', 'Bogotá', 'Cali', 'Barranquilla', 'Bucaramanga', 'Cúcuta'] },
      { region: 'Estados Unidos y Canadá', places: ['Empresas hispanas y de habla inglesa, con atención en español o inglés'] },
    ],
    faqTitle: 'Lo que suelen preguntar las clínicas estéticas',
    faq: [
      { q: '¿Cuánto se demora?', a: 'De una a dos semanas desde que tengo tus tratamientos, tus fotos y tu marca.' },
      { q: '¿Cuánto cuesta una página web para med spa?', a: 'Los paquetes de página web empiezan en 450 USD. Recibes un precio cerrado por escrito antes de empezar. En la página de precios están todos los rangos.' },
      { q: '¿La página queda a mi nombre?', a: 'Sí. Dominio, hosting y código quedan a tu nombre. Sin amarres y sin mensualidad solo para mantenerla en línea.' },
      { q: '¿Pueden trabajar sobre la web que ya tengo?', a: 'Sí. Puedo rehacerla conservando tus direcciones actuales, para no perder lo que Google ya te da.' },
      { q: '¿Los pacientes pueden reservar consulta por la web?', a: 'Sí. El formulario de consulta y el botón de WhatsApp vienen incluidos, y se puede conectar agenda en línea si ya usas una herramienta de reservas.' },
    ],
    ctaTitle: '¿Quieres una web así para tu med spa?',
    ctaCopy: 'Cuéntame tus tratamientos y la ciudad donde trabajas, y te envío un precio cerrado y un plazo. Sin necesidad de llamada.',
    ctaWhatsappText: 'Hola Jesús, vi tu página de webs para clínicas estéticas y quiero una para mi med spa.',
  },
  'dental-website-design': {
    serviceType: 'Diseño de páginas web para odontólogos',
    audienceType: 'Odontólogos, prostodoncistas y clínicas dentales',
    seoTitle: 'Páginas Web para Odontólogos — Ejemplo en Vivo',
    seoDescription:
      'Webs para odontólogos y clínicas dentales donde el paciente nuevo pide cita en línea, ve los servicios y los seguros aceptados, y carga rápido.',
    eyebrow: 'Para odontólogos, prostodoncistas y clínicas dentales',
    title: 'Diseño de Páginas Web para Odontólogos y Clínicas Dentales',
    intro:
      'Quien tiene un dolor de muela o una limpieza pendiente elige dentista desde el celular y con afán. Si no ve los servicios, los seguros que aceptas ni una forma de pedir cita, escoge el siguiente resultado.',
    problemTitle: 'Por qué casi ninguna web dental gana al paciente nuevo',
    problems: [
      'El paciente nuevo no puede pedir cita en línea; tiene que llamar en horario de oficina o llenar un formulario que nunca responde.',
      'Los servicios son una lista de palabras sin explicación, y el paciente no sabe si haces lo que necesita.',
      'No dice qué seguros aceptas, y eso es lo primero que revisa mucha gente.',
      'Las fotos de stock y una web lenta hacen que la clínica se vea genérica, sobre todo en el celular.',
      'Google no te relaciona con "odontólogo en <tu ciudad>" porque tu ciudad y tus servicios no están escritos en la página.',
    ],
    includesTitle: 'Qué recibes',
    includes: [
      'Formulario para pedir cita en el encabezado, en la primera pantalla y al final de cada página de servicio.',
      'Una sección por servicio: limpiezas, implantes, ortodoncia, blanqueamiento, urgencias, lo que de verdad hagas.',
      'Los seguros que aceptas escritos en texto claro, con una nota sobre financiación si la ofreces.',
      'Fotos reales de la clínica y del equipo en vez de imágenes de stock.',
      'Ficha de Google conectada, con horario, dirección y cómo llegar.',
      'SEO local: títulos, descripciones y datos estructurados con tus servicios y tu ciudad.',
      'Diseño pensado primero para celular, que carga rápido en la sala de espera.',
    ],
    demoTitle: 'Abre una web dental funcionando antes de decidir',
    demoCopy:
      'No es una imagen de muestra. Es una web dental en vivo. Ábrela en el celular y mira cómo están organizados los servicios y la solicitud de cita. La tuya se construye igual, con tus servicios, tus seguros y tu ciudad.',
    demoUrl: 'https://demos.easyprodigital.com/dentists/',
    areasTitle: 'Dónde trabajo',
    areasIntro: 'Todo se hace a distancia, así que tu ubicación no es un límite.',
    areas: [
      { region: 'Colombia', places: ['Medellín', 'Valle de Aburrá', 'Bogotá', 'Cali', 'Barranquilla', 'Bucaramanga', 'Cúcuta'] },
      { region: 'Estados Unidos y Canadá', places: ['Empresas hispanas y de habla inglesa, con atención en español o inglés'] },
    ],
    faqTitle: 'Lo que suelen preguntar los odontólogos',
    faq: [
      { q: '¿Cuánto se demora?', a: 'De una a dos semanas desde que tengo tus servicios, tus seguros y tus fotos.' },
      { q: '¿Cuánto cuesta una página web para odontología?', a: 'Los paquetes de página web empiezan en 450 USD. Recibes un precio cerrado por escrito antes de empezar. En la página de precios están todos los rangos.' },
      { q: '¿La página queda a mi nombre?', a: 'Sí. Dominio, hosting y código quedan a tu nombre. Sin amarres y sin mensualidad solo para mantenerla en línea.' },
      { q: '¿Pueden trabajar sobre la web que ya tengo?', a: 'Sí. Puedo rehacerla conservando tus direcciones actuales, para no perder lo que Google ya te da.' },
      { q: '¿Los pacientes pueden pedir cita por la web?', a: 'Sí. El formulario de cita y el botón de WhatsApp vienen incluidos, y se puede conectar agenda en línea si ya usas una.' },
    ],
    ctaTitle: '¿Quieres una web así para tu clínica dental?',
    ctaCopy: 'Cuéntame tus servicios y la ciudad donde trabajas, y te envío un precio cerrado y un plazo. Sin necesidad de llamada.',
    ctaWhatsappText: 'Hola Jesús, vi tu página de webs para odontólogos y quiero una para mi clínica.',
  },
}

const pages = { en, es }

/** Contenido de una página de nicho, con los textos compartidos ya mezclados. */
export function getNichePage(lang, slug) {
  const l = lang === 'es' ? 'es' : 'en'
  const page = pages[l][slug]
  if (!page) return null
  return { ...shared[l], ...page }
}
