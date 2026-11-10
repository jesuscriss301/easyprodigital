// Sistema dedicado que se ofrece en cada demo, además de la web. Lo pinta
// components/NicheSystem.jsx debajo del bloque OwnerPitch. Cada sistema se
// arma sobre piezas que Jesús ya tiene construidas: agenda/turnos (Turnero),
// API de reservas con confirmación y anticipo, bot de WhatsApp con IA que
// responde con la información del negocio, y CRM con recordatorios. Por eso
// los textos describen lo que hace el sistema, sin cifras ni promesas de
// resultados. `base` indica la pieza principal (sirve para priorizar qué
// demo de sistema mostrar primero en una llamada de venta).
const systems = {
  realestate: {
    base: 'crm',
    en: {
      name: 'Real estate CRM with listing manager',
      intro: 'Publish properties for sale or rent once and keep every lead in one place, so no inquiry sits unanswered while you are at a showing.',
      features: [
        'Listing manager for sales and rentals that updates your website automatically',
        'Every inquiry saved with the property it came from',
        'Instant WhatsApp reply to new leads, even after hours',
        'Follow-up reminders so no buyer or owner goes cold',
      ],
    },
    es: {
      name: 'CRM inmobiliario con gestor de inmuebles',
      intro: 'Publica inmuebles en venta o arriendo una sola vez y ten todos los interesados en un mismo lugar, para que ninguna consulta quede sin respuesta mientras estás en una visita.',
      features: [
        'Gestor de inmuebles en venta y arriendo que actualiza tu web solo',
        'Cada consulta guardada junto al inmueble que la originó',
        'Respuesta inmediata por WhatsApp a cada interesado, incluso de noche',
        'Recordatorios de seguimiento para que ningún cliente se enfríe',
      ],
    },
  },
  aesthetics: {
    base: 'reservas',
    en: {
      name: 'Consultation booking and treatment follow-up',
      intro: 'Patients book their consultation online and get reminded when their next session or touch-up is due, so treatments get completed instead of forgotten.',
      features: [
        'Online consultation booking by treatment and practitioner',
        'Automatic WhatsApp confirmations and reminders',
        'Treatment history per patient with session tracking',
        'Touch-up and next-session reminders sent at the right time',
      ],
    },
    es: {
      name: 'Agenda de valoraciones y seguimiento de tratamientos',
      intro: 'El paciente agenda su valoración en línea y recibe aviso cuando le toca la siguiente sesión o retoque, para que los tratamientos se completen en vez de olvidarse.',
      features: [
        'Agenda de valoraciones en línea por tratamiento y especialista',
        'Confirmaciones y recordatorios automáticos por WhatsApp',
        'Historial de tratamientos por paciente con control de sesiones',
        'Aviso de retoques y próximas sesiones en el momento justo',
      ],
    },
  },
  lawyers: {
    base: 'crm',
    en: {
      name: 'Case management and client intake',
      intro: 'New clients fill in their intake online and sign your engagement letter digitally, and every active case keeps its deadlines and documents in one place.',
      features: [
        'Online intake form that creates the case file automatically',
        'Engagement letter signed digitally, no office visit needed',
        'Deadline and hearing reminders for each case',
        'Client updates sent by WhatsApp or email with one click',
      ],
    },
    es: {
      name: 'Gestión de casos y recepción de clientes',
      intro: 'El cliente nuevo llena su ficha en línea y firma el contrato de honorarios de forma digital, y cada caso activo guarda sus plazos y documentos en un solo lugar.',
      features: [
        'Formulario de ingreso que crea la ficha del caso automáticamente',
        'Contrato de honorarios firmado digitalmente, sin ir a la oficina',
        'Recordatorios de plazos y audiencias por cada caso',
        'Avances al cliente por WhatsApp o correo con un clic',
      ],
    },
  },
  plumbers: {
    base: 'whatsapp',
    en: {
      name: 'WhatsApp quoting and job dispatch',
      intro: 'Customers describe the problem by WhatsApp and get a starting quote and a time slot without you stopping work to answer, and every job lands on your schedule.',
      features: [
        'WhatsApp assistant that asks the right questions and sends a starting price',
        'Job scheduling by zone and technician',
        'Emergency requests flagged and sent to you right away',
        'Job history per customer for repeat calls and warranties',
      ],
    },
    es: {
      name: 'Cotización por WhatsApp y despacho de servicios',
      intro: 'El cliente describe el problema por WhatsApp y recibe un precio de referencia y un horario sin que dejes de trabajar para responder, y cada servicio queda en tu agenda.',
      features: [
        'Asistente de WhatsApp que pregunta lo necesario y envía precio desde',
        'Agenda de servicios por zona y por técnico',
        'Urgencias marcadas y enviadas a tu celular de inmediato',
        'Historial de servicios por cliente para garantías y repeticiones',
      ],
    },
  },
  masons: {
    base: 'cotizador',
    en: {
      name: 'Quote builder and job tracker',
      intro: 'Turn measurements into a clear quote in minutes and keep each job’s progress, photos and payments together, so clients and contractors always know where things stand.',
      features: [
        'Quote builder by square foot, material and type of work',
        'Job progress with photos the client can check online',
        'Payment milestones and pending balances per job',
        'Request intake from your website straight into your pipeline',
      ],
    },
    es: {
      name: 'Cotizador y seguimiento de obras',
      intro: 'Convierte las medidas en una cotización clara en minutos y lleva el avance, las fotos y los pagos de cada obra juntos, para que el cliente y el contratista sepan siempre cómo va.',
      features: [
        'Cotizador por metro cuadrado, material y tipo de trabajo',
        'Avance de obra con fotos que el cliente consulta en línea',
        'Pagos por etapas y saldos pendientes por obra',
        'Solicitudes de la web directo a tu lista de trabajos',
      ],
    },
  },
  veterinary: {
    base: 'reservas',
    en: {
      name: 'Pet records and vaccine reminders',
      intro: 'Each pet gets a digital file with visits, treatments and vaccines, and owners get reminded before a vaccine or checkup is due.',
      features: [
        'Digital record per pet: visits, treatments and weight',
        'Vaccine and deworming reminders by WhatsApp',
        'Online appointment booking by service and vet',
        'Visit summary sent to the owner after each appointment',
      ],
    },
    es: {
      name: 'Historia clínica por mascota y recordatorio de vacunas',
      intro: 'Cada mascota tiene su ficha digital con consultas, tratamientos y vacunas, y el dueño recibe aviso antes de que toque la vacuna o el control.',
      features: [
        'Ficha digital por mascota: consultas, tratamientos y peso',
        'Recordatorios de vacunas y desparasitación por WhatsApp',
        'Agenda de citas en línea por servicio y por veterinario',
        'Resumen de la consulta enviado al dueño después de cada cita',
      ],
    },
  },
  dentists: {
    base: 'reservas',
    en: {
      name: 'Dental scheduling with no-show reminders',
      intro: 'Patients book online and confirm by WhatsApp, and the empty slots left by cancellations can be offered to others instead of going unused.',
      features: [
        'Online booking by treatment, dentist and chair',
        'WhatsApp confirmation and reminder before each appointment',
        'Waiting list to fill cancelled slots',
        'Treatment plan and recall reminders per patient',
      ],
    },
    es: {
      name: 'Agenda odontológica con recordatorios contra inasistencias',
      intro: 'El paciente agenda en línea y confirma por WhatsApp, y los espacios que deja una cancelación se pueden ofrecer a otros en vez de quedar vacíos.',
      features: [
        'Agenda en línea por tratamiento, odontólogo y consultorio',
        'Confirmación y recordatorio por WhatsApp antes de cada cita',
        'Lista de espera para llenar las citas canceladas',
        'Plan de tratamiento y avisos de control por paciente',
      ],
    },
  },
  'self-storage': {
    base: 'reservas',
    en: {
      name: 'Online unit reservations and monthly billing',
      intro: 'Customers see which units are free, reserve and pay online, and you keep track of every contract and monthly payment without phone calls.',
      features: [
        'Real-time unit availability by size',
        'Online reservation with deposit',
        'Digital contract and access details sent automatically',
        'Monthly payment reminders and overdue alerts',
      ],
    },
    es: {
      name: 'Reserva de bodegas en línea y cobro mensual',
      intro: 'El cliente ve qué bodegas están libres, reserva y paga en línea, y tú llevas cada contrato y mensualidad sin llamadas.',
      features: [
        'Disponibilidad de bodegas por tamaño en tiempo real',
        'Reserva en línea con anticipo',
        'Contrato digital y datos de acceso enviados automáticamente',
        'Recordatorios de pago mensual y alertas de mora',
      ],
    },
  },
  'private-chef': {
    base: 'cotizador',
    en: {
      name: 'Menu builder with instant event quotes',
      intro: 'Hosts pick the date, number of guests and dishes, and get a quote on the spot, so you only talk to people who are ready to book.',
      features: [
        'Online menu builder by course and dietary needs',
        'Automatic quote by guests, menu and location',
        'Date availability and deposit to confirm the event',
        'Event details and shopping list ready for you',
      ],
    },
    es: {
      name: 'Configurador de menú con presupuesto inmediato',
      intro: 'El anfitrión elige fecha, número de invitados y platos, y recibe el presupuesto al instante, así solo hablas con quien está listo para reservar.',
      features: [
        'Configurador de menú en línea por tiempos y restricciones',
        'Presupuesto automático según invitados, menú y lugar',
        'Disponibilidad de fechas y anticipo para confirmar el evento',
        'Detalles del evento y lista de compras listos para ti',
      ],
    },
  },
  'car-wash': {
    base: 'turnos',
    en: {
      name: 'Time-slot booking and wash memberships',
      intro: 'Drivers book a slot instead of waiting in line, and regulars can sign up for a monthly membership that brings them back every week.',
      features: [
        'Online booking by package and time slot',
        'Live queue so walk-in customers know the wait',
        'Monthly memberships with automatic renewal',
        'Visit history and loyalty rewards per customer',
      ],
    },
    es: {
      name: 'Reserva de turnos y membresías de lavado',
      intro: 'El conductor reserva su turno en vez de hacer fila, y los clientes frecuentes pueden tomar una membresía mensual que los hace volver cada semana.',
      features: [
        'Reserva en línea por paquete y horario',
        'Fila en vivo para que quien llega sepa cuánto espera',
        'Membresías mensuales con renovación automática',
        'Historial de visitas y beneficios por cliente frecuente',
      ],
    },
  },
  automechanics: {
    base: 'crm',
    en: {
      name: 'Work orders with WhatsApp status updates',
      intro: 'Each car gets a work order, and the owner receives the diagnosis, the quote to approve and the ready-for-pickup notice by WhatsApp.',
      features: [
        'Digital work order per vehicle with photos of the issue',
        'Quote approval by the customer from their phone',
        'Status updates by WhatsApp until pickup',
        'Service history and maintenance reminders per car',
      ],
    },
    es: {
      name: 'Órdenes de trabajo con avisos por WhatsApp',
      intro: 'Cada carro tiene su orden de trabajo, y el dueño recibe el diagnóstico, la cotización para aprobar y el aviso de que está listo por WhatsApp.',
      features: [
        'Orden de trabajo digital por vehículo con fotos del daño',
        'Aprobación de la cotización desde el celular del cliente',
        'Avisos de estado por WhatsApp hasta la entrega',
        'Historial de servicios y recordatorio de mantenimiento por carro',
      ],
    },
  },
  'car-rental': {
    base: 'reservas',
    en: {
      name: 'Fleet availability, bookings and digital contracts',
      intro: 'Customers see which cars are free on their dates and reserve with a deposit, and pickup is done with a digital contract and vehicle checklist.',
      features: [
        'Real-time availability by vehicle and date',
        'Online reservation with deposit',
        'Digital contract signed on the customer’s phone',
        'Pickup and return checklist with photos',
      ],
    },
    es: {
      name: 'Disponibilidad de flota, reservas y contrato digital',
      intro: 'El cliente ve qué carros están libres en sus fechas y reserva con anticipo, y la entrega se hace con contrato digital y checklist del vehículo.',
      features: [
        'Disponibilidad en tiempo real por carro y fecha',
        'Reserva en línea con anticipo',
        'Contrato digital firmado en el celular del cliente',
        'Checklist de entrega y devolución con fotos',
      ],
    },
  },
  carpenters: {
    base: 'cotizador',
    en: {
      name: 'Project quotes and order tracking',
      intro: 'Turn a client’s measurements and wood choice into a quote fast, and keep each order’s stage, deposit and delivery date visible to you and the client.',
      features: [
        'Quote builder by piece, measurements and material',
        'Order stages from design to installation',
        'Deposits and balances per project',
        'Client portal to check progress and approve designs',
      ],
    },
    es: {
      name: 'Cotizaciones de proyectos y seguimiento de pedidos',
      intro: 'Convierte las medidas y la madera que elige el cliente en una cotización rápida, y deja visible para ti y para él la etapa, el anticipo y la fecha de entrega de cada pedido.',
      features: [
        'Cotizador por pieza, medidas y material',
        'Etapas del pedido desde el diseño hasta la instalación',
        'Anticipos y saldos por proyecto',
        'Portal del cliente para ver avances y aprobar diseños',
      ],
    },
  },
  'salon-belleza': {
    base: 'reservas',
    en: {
      name: 'Salon booking with reminders and loyalty',
      intro: 'Clients book with their favorite stylist from their phone, get reminded by WhatsApp and earn rewards, without paying a booking platform a commission.',
      features: [
        'Online booking by service and stylist',
        'WhatsApp confirmations that end the “still on for tomorrow?” messages',
        'Loyalty points and rewards for regular clients',
        'Client history with services and preferences',
      ],
    },
    es: {
      name: 'Reservas del salón con recordatorios y fidelización',
      intro: 'La clienta reserva con su estilista favorita desde el celular, recibe recordatorio por WhatsApp y acumula beneficios, sin pagarle comisión a una plataforma.',
      features: [
        'Reserva en línea por servicio y por estilista',
        'Confirmaciones por WhatsApp que acaban con el “¿sigo para mañana?”',
        'Puntos y beneficios para clientas frecuentes',
        'Historial de cada clienta con servicios y preferencias',
      ],
    },
  },
  church: {
    base: 'app',
    en: {
      name: 'Church community app',
      intro: 'Announcements, events, prayer requests and giving in one app, instead of scattered WhatsApp groups and printed flyers.',
      features: [
        'Announcements and event calendar for the whole congregation',
        'Event registration and volunteer sign-ups',
        'Online giving with receipts',
        'Ministry groups with their own updates',
      ],
    },
    es: {
      name: 'App de comunidad para la iglesia',
      intro: 'Avisos, eventos, peticiones de oración y ofrendas en una sola app, en vez de grupos de WhatsApp sueltos y volantes impresos.',
      features: [
        'Avisos y calendario de eventos para toda la congregación',
        'Inscripción a eventos y a servicio voluntario',
        'Ofrendas en línea con comprobante',
        'Grupos por ministerio con sus propias novedades',
      ],
    },
  },
  youtuber: {
    base: 'crm',
    en: {
      name: 'Sponsorship portal and media kit',
      intro: 'Brands find your up-to-date media kit, send a structured proposal and track the deal with you, instead of getting lost in your inbox.',
      features: [
        'Live media kit with your audience and channel data',
        'Sponsorship request form that filters serious brands',
        'Deal pipeline with deliverables and dates',
        'Payment and invoice tracking per campaign',
      ],
    },
    es: {
      name: 'Portal de patrocinios y media kit',
      intro: 'Las marcas encuentran tu media kit actualizado, envían una propuesta ordenada y siguen el acuerdo contigo, en vez de perderse en tu bandeja de entrada.',
      features: [
        'Media kit en vivo con datos de tu audiencia y canal',
        'Formulario de patrocinio que filtra a las marcas serias',
        'Seguimiento de acuerdos con entregables y fechas',
        'Control de pagos y facturas por campaña',
      ],
    },
  },
  cleaners: {
    base: 'turnos',
    en: {
      name: 'Recurring cleaning scheduler',
      intro: 'Clients sign up for weekly or biweekly service, and the system schedules each visit, assigns your team and reminds everyone before the day.',
      features: [
        'Recurring plans: weekly, biweekly or monthly',
        'Visit schedule with team assignment by area',
        'Reminders to clients and cleaners before each visit',
        'Checklist per home and payment tracking',
      ],
    },
    es: {
      name: 'Agenda de servicios de aseo recurrentes',
      intro: 'El cliente toma un plan semanal o quincenal, y el sistema agenda cada visita, asigna a tu equipo y les recuerda a todos antes del día.',
      features: [
        'Planes recurrentes: semanal, quincenal o mensual',
        'Agenda de visitas con asignación de personal por zona',
        'Recordatorios al cliente y al personal antes de cada visita',
        'Checklist por vivienda y control de pagos',
      ],
    },
  },
  construction: {
    base: 'erp',
    en: {
      name: 'Construction project management system',
      intro: 'Budget, purchases, progress and crew for each project in one place, instead of spread across Excel files and WhatsApp chats.',
      features: [
        'Budget vs. actual cost per project and phase',
        'Purchase orders and supplier tracking',
        'Daily site reports with photos from the phone',
        'Client view with progress and next milestones',
      ],
    },
    es: {
      name: 'Sistema de gestión de obras',
      intro: 'Presupuesto, compras, avance y personal de cada obra en un solo lugar, en vez de repartidos entre archivos de Excel y chats de WhatsApp.',
      features: [
        'Presupuesto contra costo real por obra y por etapa',
        'Órdenes de compra y seguimiento de proveedores',
        'Bitácora diaria de obra con fotos desde el celular',
        'Vista para el cliente con avance y próximos hitos',
      ],
    },
  },
  electricians: {
    base: 'crm',
    en: {
      name: 'Service orders with quotes and job reports',
      intro: 'Quote, schedule and close each job from your phone, and send the customer a report with photos and the work done for their records.',
      features: [
        'Quick quotes from a price list you control',
        'Job scheduling by technician and zone',
        'Job report with photos, materials and signature',
        'Maintenance reminders for commercial clients',
      ],
    },
    es: {
      name: 'Órdenes de servicio con cotización e informe',
      intro: 'Cotiza, agenda y cierra cada trabajo desde el celular, y envíale al cliente un informe con fotos y lo que se hizo para sus registros.',
      features: [
        'Cotizaciones rápidas desde una lista de precios que tú controlas',
        'Agenda de trabajos por técnico y por zona',
        'Informe del trabajo con fotos, materiales y firma',
        'Recordatorios de mantenimiento para clientes comerciales',
      ],
    },
  },
  foundation: {
    base: 'crm',
    en: {
      name: 'Donor and volunteer portal',
      intro: 'Manage donors, campaigns and volunteers without spreadsheets, and show each donor where their support went.',
      features: [
        'Online donations with automatic receipts',
        'Donor records with giving history',
        'Volunteer sign-ups by activity and date',
        'Campaign progress pages to share',
      ],
    },
    es: {
      name: 'Portal de donantes y voluntarios',
      intro: 'Gestiona donantes, campañas y voluntarios sin hojas de cálculo, y muéstrale a cada donante a dónde fue su aporte.',
      features: [
        'Donaciones en línea con certificado automático',
        'Registro de donantes con su historial de aportes',
        'Inscripción de voluntarios por actividad y fecha',
        'Páginas de avance de cada campaña para compartir',
      ],
    },
  },
  gardeners: {
    base: 'turnos',
    en: {
      name: 'Maintenance plans and crew routes',
      intro: 'Sell recurring yard care instead of one-off cleanups, with every visit scheduled and every crew knowing its route for the day.',
      features: [
        'Seasonal and monthly maintenance plans',
        'Visit schedule and daily routes by crew',
        'Before-and-after photos sent to the client after each visit',
        'Automatic billing for recurring plans',
      ],
    },
    es: {
      name: 'Planes de mantenimiento y rutas de cuadrillas',
      intro: 'Vende mantenimiento recurrente en vez de limpiezas sueltas, con cada visita agendada y cada cuadrilla sabiendo su ruta del día.',
      features: [
        'Planes de mantenimiento por temporada y mensuales',
        'Agenda de visitas y rutas diarias por cuadrilla',
        'Fotos de antes y después enviadas al cliente tras cada visita',
        'Cobro automático de los planes recurrentes',
      ],
    },
  },
  'language-school': {
    base: 'crm',
    en: {
      name: 'Enrollment, payments and student progress',
      intro: 'Students enroll and pay online, see their progress, and get reminded before their plan expires, so you know who might drop out in time to act.',
      features: [
        'Online enrollment by course, level and schedule',
        'Payments and plan renewals with reminders',
        'Student progress and attendance tracking',
        'Alerts for students who stop attending',
      ],
    },
    es: {
      name: 'Matrículas, pagos y progreso de estudiantes',
      intro: 'El estudiante se matricula y paga en línea, ve su avance y recibe aviso antes de que venza su plan, así sabes a tiempo quién está por abandonar.',
      features: [
        'Matrícula en línea por curso, nivel y horario',
        'Pagos y renovaciones con recordatorios',
        'Seguimiento de avance y asistencia por estudiante',
        'Alertas de estudiantes que dejan de asistir',
      ],
    },
  },
}

export default systems
