// Contenido en español para self-storage (y sus variantes). Ver
// salonBelleza.js para la explicación del patrón.
export default {
  seo: {
    title: 'Diseño Web para Empresas de Self Storage (Ejemplo) | Easy Pro Digital',
    description:
      'Un ejemplo real de sitio web para empresas de self storage y alquiler de bodegas, hecho por Easy Pro Digital. Así de bien puede verse la web de tu negocio: tamaños de unidad, precios, seguridad y reservas en línea.',
  },

  valueProps: [
    `Reserva y pago online, sin visita para cotizar`,
    `¿Qué tamaño necesito? resuelto en la web`,
    `Disponibilidad en tiempo real`,
  ],

  hero: {
    title: 'Tu espacio, bajo llave y a tu ritmo.',
    text: 'Bodegas de almacenamiento de todos los tamaños, acceso 24/7, cámaras y alarma en cada pasillo. Reserva en línea en menos de 2 minutos.',
    primaryCta: { label: 'Reservar mi bodega' },
    secondaryCta: { label: 'Ver tamaños' },
    trust: [
      { label: 'bodegas en renta' },
      { label: 'acceso y vigilancia' },
      { label: 'años operando' },
    ],
  },

  unitTypes: {
    title: 'Encuentra el tamaño justo',
    intro: 'Pasa el cursor sobre cada tamaño para ver el detalle — así se vería en tu sitio real con fotos de tus propias bodegas.',
    items: [
      { title: 'Pequeña · 1.5 m²', subtitle: 'Cajas y maletas' },
      { title: 'Mediana · 4.5 m²', subtitle: 'Muebles de 1 habitación' },
      { title: 'Grande · 9 m²', subtitle: 'Casa completa pequeña' },
      { title: 'XL · 14 m²', subtitle: 'Inventario de negocio' },
      { title: 'Vehicular', subtitle: 'Carro, moto o lancha' },
    ],
  },

  services: {
    title: 'Todo lo que necesitas para guardar tranquilo',
    items: [
      { title: 'Vigilancia 24/7', text: 'Cámaras en cada pasillo y alarma individual por bodega.', price: 'Incluido' },
      { title: 'Acceso cuando quieras', text: 'Entra y sal de tu bodega a cualquier hora, todos los días.', price: 'Incluido' },
      { title: 'Mudanza y transporte', text: 'Camión y personal para traer tus cosas el día que reservas.', price: 'Desde $35 USD' },
      { title: 'Control de clima', text: 'Bodegas con control de humedad para electrónicos y documentos.', price: 'Desde $8 USD/mes extra' },
      { title: 'Seguro de contenido', text: 'Cobertura opcional para lo que guardas, sin trámites complicados.', price: 'Desde $5 USD/mes' },
      { title: 'Soporte en sitio', text: 'Personal disponible en horario extendido para ayudarte a mudar o acomodar.', price: 'Incluido' },
    ],
  },

  features: {
    title: 'Orden, seguridad y cero sorpresas',
    intro: 'Cuatro razones por las que la gente confía sus cosas con nosotros.',
    items: [
      { title: 'Seguridad real', text: 'Cámaras, alarmas individuales y acceso con código único por cliente.' },
      { title: 'Flexibilidad total', text: 'Contratos mes a mes, sin permanencia mínima ni letra pequeña.' },
      { title: 'Ubicación accesible', text: 'Fácil acceso vehicular, pasillos amplios y carretillas gratuitas.' },
      { title: 'Precios transparentes', text: 'Lo que ves en la cotización es lo que pagas — sin cargos ocultos.' },
    ],
  },

  testimonials: {
    title: 'Lo que dicen nuestros clientes',
    items: [
      { role: 'Mudanza temporal', quote: 'Guardé todos mis muebles por 3 meses mientras me mudaba y todo llegó impecable. El acceso 24/7 me salvó varias veces.' },
      { role: 'Inventario de negocio', quote: 'Tengo mi inventario de e-commerce guardado aquí hace un año. Nunca he tenido un problema de seguridad.' },
      { role: 'Bodega vehicular', quote: 'Guardo mi moto en temporada de lluvias. El espacio es justo y el precio, muy razonable.' },
    ],
  },

  map: {
    title: 'Visítanos',
    intro: 'Entrada vehicular amplia, abierta los 365 días del año.',
    hours: [
      { days: 'Acceso bodegas', time: '24/7, todos los días' },
      { days: 'Oficina Lun–Sáb' },
      { days: 'Oficina Dom' },
    ],
  },

  cta: {
    heading: '¿Necesitas espacio extra hoy?',
    text: 'Reserva en línea y mueve tus cosas desde mañana. Primer mes con 15% de descuento.',
    actions: [{ label: 'Reservar bodega' }, { label: 'Ver todos los tamaños' }],
  },

}
