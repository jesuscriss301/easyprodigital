// Bloque de venta dirigido al DUEÑO del negocio que llega desde Google
// buscando "website design for <nicho>". Lo pinta components/OwnerPitch.jsx
// justo antes de la oferta (#want-this). El resto de la demo le habla al
// cliente final del negocio; este bloque es lo que le dice a Google (y al
// dueño) que la página trata de DISEÑO WEB para ese nicho.
// `service` es la página del sitio principal a la que enlaza "Ver precios".
const pitches = {
  realestate: {
    service: '/services/real-estate-website-design/',
    en: {
      keyword: 'Website design for real estate agents',
      intro:
        'Most buyers and sellers check your website before they ever call. If it loads slowly on a phone or hides your listings, they move on to the next agent. This layout puts your listings, your story and a valuation request front and center.',
      bullets: [
        'Listing gallery that loads fast on any phone',
        'Separate paths for buyers, sellers and investors',
        'Home valuation and showing requests sent straight to your inbox',
        'Client reviews and service area map that build trust before the call',
      ],
    },
    es: {
      keyword: 'Diseño de páginas web para inmobiliarias y agentes',
      intro:
        'Quien compra o vende revisa tu web antes de escribirte. Si carga lento en el celular o esconde los inmuebles, se va con otro agente. Este diseño pone tus inmuebles, tu historia y la solicitud de avalúo al frente.',
      bullets: [
        'Galería de inmuebles que carga rápido en cualquier celular',
        'Caminos separados para compradores, vendedores e inversionistas',
        'Solicitudes de avalúo y de visita directo a tu correo',
        'Reseñas de clientes y mapa de cobertura que generan confianza',
      ],
    },
  },
  aesthetics: {
    service: '/pricing/',
    en: {
      keyword: 'Website design for med spas and aesthetic clinics',
      intro:
        'People researching injectables or skin treatments compare clinics carefully and judge them by how the website feels. This layout looks like a premium clinic, explains each treatment clearly and makes booking a consultation one tap away.',
      bullets: [
        'Treatment menu with clear descriptions for each procedure',
        'Before-and-after style gallery that shows your results',
        'Patient reviews placed where doubts usually appear',
        'Consultation booking and location map built for mobile',
      ],
    },
    es: {
      keyword: 'Diseño de páginas web para clínicas estéticas y med spas',
      intro:
        'Quien busca un tratamiento estético compara clínicas con calma y las juzga por cómo se ve su web. Este diseño transmite una clínica premium, explica cada tratamiento y deja la cita de valoración a un toque.',
      bullets: [
        'Menú de tratamientos con una explicación clara de cada uno',
        'Galería tipo antes y después que muestra tus resultados',
        'Testimonios de pacientes justo donde aparecen las dudas',
        'Reserva de valoración y mapa de ubicación pensados para celular',
      ],
    },
  },
  lawyers: {
    service: '/pricing/',
    en: {
      keyword: 'Website design for law firms and attorneys',
      intro:
        'Someone with a legal problem is stressed and wants to know fast whether you handle their case. This layout lists your practice areas plainly, shows why clients trust you and gets them to request a consultation.',
      bullets: [
        'Practice areas explained in plain language, not legal jargon',
        'Attorney profile and firm values that build credibility',
        'Client testimonials and office location with map',
        'Consultation request visible on every screen',
      ],
    },
    es: {
      keyword: 'Diseño de páginas web para abogados y bufetes',
      intro:
        'Quien tiene un problema legal está preocupado y quiere saber rápido si tú llevas su caso. Este diseño muestra tus áreas de práctica con claridad, explica por qué confiar en ti y lo lleva a pedir una consulta.',
      bullets: [
        'Áreas de práctica explicadas sin lenguaje enredado',
        'Perfil del abogado y valores del bufete que dan credibilidad',
        'Testimonios de clientes y ubicación de la oficina con mapa',
        'Botón para pedir consulta visible en toda la página',
      ],
    },
  },
  plumbers: {
    service: '/pricing/',
    en: {
      keyword: 'Website design for plumbers',
      intro:
        'A homeowner with a burst pipe at 2 a.m. calls the first plumber whose site looks trustworthy and shows a phone number. This layout is built for that moment: emergency service, clear pricing and one-tap calling.',
      bullets: [
        'Services listed with starting prices so customers know what to expect',
        'Licensed, insured and 24/7 badges right where they decide',
        'Service area map so callers know you cover their neighborhood',
        'Call and quote buttons that work with one thumb on a phone',
      ],
    },
    es: {
      keyword: 'Diseño de páginas web para plomeros',
      intro:
        'Quien tiene un tubo roto a las 2 de la mañana llama al primer plomero cuya web inspire confianza y muestre el teléfono. Este diseño está hecho para ese momento: urgencias, precios claros y llamada en un toque.',
      bullets: [
        'Servicios con precio desde, para que el cliente sepa qué esperar',
        'Sellos de licencia, seguro y atención 24/7 donde el cliente decide',
        'Mapa de cobertura para que sepan que llegas a su barrio',
        'Botones de llamar y cotizar fáciles de usar con un dedo',
      ],
    },
  },
  masons: {
    service: '/pricing/',
    en: {
      keyword: 'Website design for masonry contractors and bricklayers',
      intro:
        'Homeowners and general contractors hire masons by looking at finished work. This layout lets your brick and stone projects speak for themselves and turns a good impression into a quote request.',
      bullets: [
        'Project gallery that shows the quality of your brick and stone work',
        'Residential and commercial services clearly separated',
        'Reviews from homeowners and contractors you have worked with',
        'Quote request and service area visible from any phone',
      ],
    },
    es: {
      keyword: 'Diseño de páginas web para maestros de obra y mamposteros',
      intro:
        'Los dueños de casa y los contratistas eligen a quién contratar mirando trabajos terminados. Este diseño deja que tus obras en ladrillo y piedra hablen por ti y convierte esa buena impresión en una cotización.',
      bullets: [
        'Galería de obras que muestra la calidad de tu trabajo en ladrillo y piedra',
        'Servicios residenciales y comerciales separados con claridad',
        'Reseñas de clientes y contratistas con los que has trabajado',
        'Solicitud de cotización y zona de cobertura visibles desde el celular',
      ],
    },
  },
  veterinary: {
    service: '/pricing/',
    en: {
      keyword: 'Website design for veterinary clinics',
      intro:
        'Pet owners pick a vet the way they pick a doctor for their kids: by trust. This layout shows real patients, a warm team and your services, and makes booking a visit easy from a phone.',
      bullets: [
        'Patient gallery that shows the pets you already care for',
        'Services from checkups to vaccines explained simply',
        'Reviews from families and clinic location with map',
        'Appointment request button on every section',
      ],
    },
    es: {
      keyword: 'Diseño de páginas web para veterinarias',
      intro:
        'Las familias eligen veterinaria como eligen médico para sus hijos: por confianza. Este diseño muestra pacientes reales, un equipo cercano y tus servicios, y facilita agendar la cita desde el celular.',
      bullets: [
        'Galería de pacientes que muestra las mascotas que ya atiendes',
        'Servicios desde consulta hasta vacunas explicados con sencillez',
        'Opiniones de familias y ubicación de la clínica con mapa',
        'Botón para agendar cita en cada sección',
      ],
    },
  },
  dentists: {
    service: '/pricing/',
    en: {
      keyword: 'Website design for dentists and dental clinics',
      intro:
        'Many people put off the dentist out of fear, so your website has to feel calm before they ever walk in. This layout explains your treatments gently, shows your clinic and makes booking the first visit simple.',
      bullets: [
        'Treatments from cleanings to cosmetic dentistry explained without fear',
        'Clinic photos that show a calm, modern space',
        'Patient reviews and directions to your office',
        'First-visit booking that works smoothly on mobile',
      ],
    },
    es: {
      keyword: 'Diseño de páginas web para odontólogos y clínicas dentales',
      intro:
        'Mucha gente aplaza el odontólogo por miedo, así que tu web tiene que transmitir calma antes de que lleguen. Este diseño explica tus tratamientos con tranquilidad, muestra tu consultorio y facilita agendar la primera cita.',
      bullets: [
        'Tratamientos desde limpieza hasta estética dental explicados sin miedo',
        'Fotos del consultorio que muestran un espacio tranquilo y moderno',
        'Opiniones de pacientes y cómo llegar al consultorio',
        'Agenda de primera cita que funciona bien en el celular',
      ],
    },
  },
  'self-storage': {
    service: '/pricing/',
    en: {
      keyword: 'Website design for self storage facilities',
      intro:
        'People looking for storage want two answers fast: which unit size fits their things and what it costs. This layout answers both up front and lets them reserve without calling.',
      bullets: [
        'Unit size guide so customers pick the right space themselves',
        'Security, access hours and extra services clearly listed',
        'Customer reviews and facility location with map',
        'Reservation request visible from the first screen',
      ],
    },
    es: {
      keyword: 'Diseño de páginas web para bodegas de almacenamiento',
      intro:
        'Quien busca dónde guardar sus cosas quiere dos respuestas rápido: qué tamaño de bodega necesita y cuánto cuesta. Este diseño responde las dos de entrada y permite reservar sin llamar.',
      bullets: [
        'Guía de tamaños para que el cliente elija la bodega correcta solo',
        'Seguridad, horarios de acceso y servicios extra bien explicados',
        'Opiniones de clientes y ubicación del lugar con mapa',
        'Solicitud de reserva visible desde la primera pantalla',
      ],
    },
  },
  'private-chef': {
    service: '/pricing/',
    en: {
      keyword: 'Website design for private chefs and caterers',
      intro:
        'Hosts hire a private chef with their eyes first. This layout shows your dishes beautifully, lays out your menus by occasion and turns that appetite into an event inquiry.',
      bullets: [
        'Menus organized by occasion, from dinners to celebrations',
        'Food gallery that sells the experience before the tasting',
        'Chef story and reviews from hosts you cooked for',
        'Event inquiry form and coverage area in one place',
      ],
    },
    es: {
      keyword: 'Diseño de páginas web para chefs privados y catering',
      intro:
        'Quien contrata un chef privado decide primero con los ojos. Este diseño muestra tus platos de forma atractiva, organiza tus menús por ocasión y convierte ese antojo en una solicitud de evento.',
      bullets: [
        'Menús organizados por ocasión, desde cenas hasta celebraciones',
        'Galería de platos que vende la experiencia antes de probarla',
        'Historia del chef y reseñas de anfitriones que ya te contrataron',
        'Formulario de evento y zona de cobertura en un mismo lugar',
      ],
    },
  },
  'car-wash': {
    service: '/pricing/',
    en: {
      keyword: 'Website design for car washes and auto detailing',
      intro:
        'Drivers choose a car wash by package and price, usually from their phone in the parking lot. This layout shows your packages side by side, proves the shine with photos and lets them book a slot.',
      bullets: [
        'Wash and detailing packages compared with prices',
        'Before-and-after gallery that shows the difference',
        'Eco-friendly and speed highlights that set you apart',
        'Location map and booking button made for mobile',
      ],
    },
    es: {
      keyword: 'Diseño de páginas web para lavaderos de carros y detailing',
      intro:
        'El conductor elige lavadero por paquete y precio, casi siempre desde el celular. Este diseño muestra tus paquetes lado a lado, prueba el brillo con fotos y le deja reservar su turno.',
      bullets: [
        'Paquetes de lavado y detailing comparados con sus precios',
        'Galería de antes y después que muestra la diferencia',
        'Lo ecológico y lo rápido destacados para diferenciarte',
        'Mapa de ubicación y botón de reserva pensados para celular',
      ],
    },
  },
  automechanics: {
    service: '/pricing/',
    en: {
      keyword: 'Website design for auto repair shops and mechanics',
      intro:
        'Drivers are afraid of being overcharged at the shop. This layout wins their trust by explaining your services in plain English, showing your work and making it easy to book a repair.',
      bullets: [
        'Repair and maintenance services for every make and model',
        'Trust section that explains how you diagnose and quote',
        'Shop gallery, customer reviews and service area',
        'Appointment request instead of endless phone calls',
      ],
    },
    es: {
      keyword: 'Diseño de páginas web para talleres mecánicos',
      intro:
        'Al conductor le da miedo que le cobren de más en el taller. Este diseño gana su confianza explicando tus servicios con palabras sencillas, mostrando tu trabajo y facilitando agendar la reparación.',
      bullets: [
        'Servicios de reparación y mantenimiento para todas las marcas',
        'Sección que explica cómo diagnosticas y cotizas',
        'Galería del taller, opiniones de clientes y zona de cobertura',
        'Solicitud de cita en vez de llamadas interminables',
      ],
    },
  },
  'car-rental': {
    service: '/pricing/',
    en: {
      keyword: 'Website design for car rental companies',
      intro:
        'Travelers compare your fleet against the big chains in minutes. This layout shows each car clearly, explains your terms simply and makes reserving direct with you easier than going through an aggregator.',
      bullets: [
        'Fleet catalog with each vehicle type and what it includes',
        'Simple rental terms that answer questions before they ask',
        'Photo gallery, customer reviews and pickup location',
        'Direct reservation request with no third-party commissions',
      ],
    },
    es: {
      keyword: 'Diseño de páginas web para empresas de alquiler de carros',
      intro:
        'El viajero compara tu flota con las grandes cadenas en minutos. Este diseño muestra cada carro con claridad, explica tus condiciones sin letra pequeña y hace más fácil reservar directo contigo.',
      bullets: [
        'Catálogo de la flota con cada tipo de carro y lo que incluye',
        'Condiciones de alquiler claras que responden antes de preguntar',
        'Galería de fotos, opiniones de clientes y punto de entrega',
        'Reserva directa sin pagar comisión a terceros',
      ],
    },
  },
  carpenters: {
    service: '/pricing/',
    en: {
      keyword: 'Website design for carpenters and woodworkers',
      intro:
        'Custom carpentry sells on craftsmanship, and craftsmanship is seen, not described. This layout puts your furniture and built-ins up front and turns admiration into a project inquiry.',
      bullets: [
        'Portfolio gallery for furniture, cabinets and built-ins',
        'Services from custom pieces to repairs clearly listed',
        'Details on materials and joinery that justify your price',
        'Project inquiry form and service area on every page',
      ],
    },
    es: {
      keyword: 'Diseño de páginas web para carpinteros y ebanistas',
      intro:
        'La carpintería a la medida se vende por el acabado, y el acabado se ve, no se describe. Este diseño pone tus muebles y closets al frente y convierte la admiración en una solicitud de proyecto.',
      bullets: [
        'Galería de muebles, cocinas y closets a la medida',
        'Servicios desde piezas únicas hasta reparaciones bien listados',
        'Detalles de maderas y uniones que justifican tu precio',
        'Formulario de proyecto y zona de cobertura en toda la página',
      ],
    },
  },
  'salon-belleza': {
    service: '/pricing/',
    en: {
      keyword: 'Website design for beauty salons and spas',
      intro:
        'Clients book a salon on impulse, often late at night from their phone. This layout shows your services with prices, your space and your results, and lets them book without waiting for a reply.',
      bullets: [
        'Service menu with prices for hair, nails and treatments',
        'Gallery of looks and of the studio itself',
        'Client reviews that convince first-time visitors',
        'Online booking and location built for mobile',
      ],
    },
    es: {
      keyword: 'Diseño de páginas web para salones de belleza y spas',
      intro:
        'La clienta reserva por impulso, muchas veces de noche desde el celular. Este diseño muestra tus servicios con precios, tu espacio y tus resultados, y le deja reservar sin esperar respuesta.',
      bullets: [
        'Menú de servicios con precios de cabello, uñas y tratamientos',
        'Galería de trabajos y del propio estudio',
        'Opiniones de clientas que convencen a quien llega por primera vez',
        'Reserva en línea y ubicación pensadas para celular',
      ],
    },
  },
  church: {
    service: '/pricing/',
    en: {
      keyword: 'Website design for churches and ministries',
      intro:
        'Most first-time visitors look up a church online before they walk in. This layout welcomes them warmly, answers what to expect on Sunday and shows the community life beyond the service.',
      bullets: [
        'Service times and what to expect on a first visit',
        'Ministries for kids, youth and adults clearly presented',
        'Community photos and testimonies from members',
        'Location map and a simple way to get in touch',
      ],
    },
    es: {
      keyword: 'Diseño de páginas web para iglesias y ministerios',
      intro:
        'La mayoría de quienes visitan una iglesia por primera vez la buscan antes en internet. Este diseño los recibe con calidez, responde qué esperar el domingo y muestra la vida de comunidad más allá del culto.',
      bullets: [
        'Horarios de servicio y qué esperar en la primera visita',
        'Ministerios para niños, jóvenes y adultos bien presentados',
        'Fotos de la comunidad y testimonios de miembros',
        'Mapa de ubicación y una forma sencilla de contactarlos',
      ],
    },
  },
  youtuber: {
    service: '/pricing/',
    en: {
      keyword: 'Website design for YouTubers and content creators',
      intro:
        'Your channel lives on someone else’s platform. A website of your own gives sponsors a professional place to evaluate you and gives fans a home that no algorithm can take away.',
      bullets: [
        'Channel overview with what you publish every week',
        'Sponsorship and collaboration section for brands',
        'Studio gallery and quotes from sponsors and viewers',
        'Contact path for partnerships that skips your crowded inbox',
      ],
    },
    es: {
      keyword: 'Diseño de páginas web para youtubers y creadores de contenido',
      intro:
        'Tu canal vive en una plataforma ajena. Una web propia les da a las marcas un lugar profesional para evaluarte y a tu comunidad un espacio que ningún algoritmo te puede quitar.',
      bullets: [
        'Resumen del canal con lo que publicas cada semana',
        'Sección de patrocinios y colaboraciones para marcas',
        'Galería del estudio y comentarios de marcas y seguidores',
        'Contacto para alianzas que no se pierde en tu bandeja llena',
      ],
    },
  },
  cleaners: {
    service: '/pricing/',
    en: {
      keyword: 'Website design for cleaning companies',
      intro:
        'Letting a stranger into your home takes trust. This layout shows your cleaning plans, explains how you vet your team and makes it easy to sign up for recurring service instead of a one-off clean.',
      bullets: [
        'Cleaning plans for homes and offices with clear scope',
        'Trust section on background checks, insurance and guarantees',
        'Before-and-after gallery and client reviews',
        'Quote request and coverage area made for mobile',
      ],
    },
    es: {
      keyword: 'Diseño de páginas web para empresas de aseo y limpieza',
      intro:
        'Dejar entrar a un desconocido a tu casa exige confianza. Este diseño muestra tus planes de aseo, explica cómo seleccionas a tu equipo y facilita contratar un servicio fijo en vez de una limpieza suelta.',
      bullets: [
        'Planes de aseo para hogares y oficinas con alcance claro',
        'Sección de confianza sobre selección del personal y garantías',
        'Galería de antes y después y opiniones de clientes',
        'Solicitud de cotización y zona de cobertura pensadas para celular',
      ],
    },
  },
  construction: {
    service: '/pricing/',
    en: {
      keyword: 'Website design for general contractors and construction companies',
      intro:
        'Clients hiring a contractor want proof you finish on time and on budget. This layout walks them through your process, shows completed builds and makes it easy to request a bid.',
      bullets: [
        'Residential and commercial construction services clearly separated',
        'Project management section that explains how you stay on schedule',
        'Build gallery, client reviews and coverage area',
        'Bid request form visible on every screen',
      ],
    },
    es: {
      keyword: 'Diseño de páginas web para constructoras y contratistas',
      intro:
        'Quien contrata una obra quiere pruebas de que cumples en tiempo y presupuesto. Este diseño explica tu proceso, muestra obras terminadas y facilita pedir una cotización.',
      bullets: [
        'Servicios de construcción residencial y comercial bien separados',
        'Sección que explica cómo controlas plazos y avance de obra',
        'Galería de obras, opiniones de clientes y zona de cobertura',
        'Solicitud de cotización visible en toda la página',
      ],
    },
  },
  electricians: {
    service: '/pricing/',
    en: {
      keyword: 'Website design for electricians',
      intro:
        'Electrical work is about safety, so customers look for proof you are licensed before they call. This layout puts your credentials up front, lists your services and makes calling or booking instant.',
      bullets: [
        'License, insurance and code-compliance shown before they call',
        'Residential and commercial electrical services clearly listed',
        'Recent projects gallery and customer reviews',
        'Call and quote buttons plus service area for mobile visitors',
      ],
    },
    es: {
      keyword: 'Diseño de páginas web para electricistas',
      intro:
        'El trabajo eléctrico es de seguridad, así que el cliente busca pruebas de que eres certificado antes de llamar. Este diseño pone tus credenciales al frente, muestra tus servicios y permite llamar o agendar al instante.',
      bullets: [
        'Matrícula, seguros y cumplimiento de normas visibles antes de llamar',
        'Servicios eléctricos residenciales y comerciales bien listados',
        'Galería de trabajos recientes y opiniones de clientes',
        'Botones de llamar y cotizar más zona de cobertura para celular',
      ],
    },
  },
  foundation: {
    service: '/pricing/',
    en: {
      keyword: 'Website design for foundations and nonprofits',
      intro:
        'Donors give when they can see where their money goes. This layout tells your mission clearly, shows the people you serve and turns that connection into donations and volunteers.',
      bullets: [
        'Mission and impact explained in a few clear sections',
        'Breakdown of where donor support goes',
        'Stories and photos of the families you serve',
        'Donate and volunteer calls to action on every page',
      ],
    },
    es: {
      keyword: 'Diseño de páginas web para fundaciones y ONG',
      intro:
        'Los donantes aportan cuando ven a dónde va su dinero. Este diseño cuenta tu misión con claridad, muestra a las personas que acompañas y convierte esa conexión en donaciones y voluntarios.',
      bullets: [
        'Misión e impacto explicados en pocas secciones claras',
        'Detalle de a dónde va el aporte de cada donante',
        'Historias y fotos de las familias que acompañan',
        'Llamados a donar y ser voluntario en toda la página',
      ],
    },
  },
  gardeners: {
    service: '/pricing/',
    en: {
      keyword: 'Website design for landscapers and lawn care companies',
      intro:
        'Homeowners want a yard crew they can keep all year, not a one-time cleanup. This layout shows your seasonal services, your best yards and makes it easy to sign up for regular maintenance.',
      bullets: [
        'Seasonal services from lawn care to garden design',
        'Gallery of yards you keep looking good all year',
        'Client reviews and the neighborhoods you serve',
        'Quote request for recurring maintenance plans',
      ],
    },
    es: {
      keyword: 'Diseño de páginas web para jardineros y paisajistas',
      intro:
        'El dueño de casa quiere un equipo de jardinería fijo todo el año, no una limpieza suelta. Este diseño muestra tus servicios por temporada, tus mejores jardines y facilita contratar mantenimiento periódico.',
      bullets: [
        'Servicios por temporada desde césped hasta diseño de jardines',
        'Galería de jardines que mantienes bien todo el año',
        'Opiniones de clientes y los barrios donde trabajas',
        'Solicitud de cotización para planes de mantenimiento fijo',
      ],
    },
  },
  'language-school': {
    service: '/pricing/',
    en: {
      keyword: 'Website design for language schools',
      intro:
        'Students choose a language school by how the classes feel, not by the syllabus. This layout shows your courses by goal, your classrooms and real student opinions, and makes enrolling simple.',
      bullets: [
        'Courses organized by student goal: travel, work or study',
        'Teaching approach explained in a few clear points',
        'Classroom gallery and student reviews',
        'Enrollment request and school location with map',
      ],
    },
    es: {
      keyword: 'Diseño de páginas web para academias de idiomas',
      intro:
        'El estudiante elige academia por cómo se sienten las clases, no por el temario. Este diseño muestra tus cursos según el objetivo, tus salones y opiniones reales, y facilita inscribirse.',
      bullets: [
        'Cursos organizados por objetivo: viajar, trabajar o estudiar',
        'Metodología explicada en pocos puntos claros',
        'Galería de los salones y opiniones de estudiantes',
        'Solicitud de inscripción y ubicación de la academia con mapa',
      ],
    },
  },
}

export default pitches
