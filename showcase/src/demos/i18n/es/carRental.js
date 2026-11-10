// Contenido en español para car-rental (y sus variantes). Ver
// salonBelleza.js para la explicación del patrón.
export default {
  seo: {
    title: 'Diseño Web para Empresas de Alquiler de Carros (Ejemplo) | Easy Pro Digital',
    description:
      'Un ejemplo real de sitio web para agencias de alquiler de carros, hecho por Easy Pro Digital. Así de bien puede verse la web de tu negocio: flota, precios, entrega en aeropuerto y reservas en línea.',
  },

  valueProps: [
    `Reservas directas sin pagar comisión a plataformas`,
    `Web bilingüe para turistas`,
    `Entrega en aeropuerto o hotel como diferencial`,
  ],

  hero: {
    title: 'Conduce lo que quieras, cuando quieras.',
    text: 'Flota renovada cada año, entrega en el aeropuerto o tu hotel, y reserva 100% en línea. Desde sedanes económicos hasta SUVs premium.',
    primaryCta: { label: 'Reservar mi carro' },
    secondaryCta: { label: 'Ver flota' },
    trust: [
      { label: 'vehículos en flota' },
      { label: 'calificación promedio' },
      { label: 'años rentando' },
    ],
  },

  services: {
    title: 'Un carro para cada plan',
    items: [
      { title: 'Económico', text: 'Chevrolet Spark o similar. Ideal para ciudad, bajo consumo.', price: 'Desde $28 USD/día' },
      { title: 'Sedán Ejecutivo', text: 'Toyota Corolla o similar. Espacioso, cómodo para viajes largos.', price: 'Desde $42 USD/día' },
      { title: 'SUV Compacta', text: 'Chevrolet Tracker o similar. Para carretera y terrenos mixtos.', price: 'Desde $55 USD/día' },
      { title: 'SUV Premium', text: 'Toyota Fortuner o similar. Lujo y potencia para la familia completa.', price: 'Desde $78 USD/día' },
      { title: 'Camioneta 4x4', text: 'Toyota Hilux o similar. Para rutas exigentes fuera de la ciudad.', price: 'Desde $85 USD/día' },
      { title: 'Van de Pasajeros', text: 'Hasta 12 personas. Perfecta para grupos y eventos corporativos.', price: 'Desde $95 USD/día' },
    ],
  },

  features: {
    title: 'Reservar un carro no debería ser complicado',
    intro: 'Cuatro razones por las que la gente nos elige una y otra vez.',
    items: [
      { title: 'Entrega donde estés', text: 'Aeropuerto, hotel o tu casa — llevamos el carro hasta ti sin costo extra en el área metro.' },
      { title: 'Seguro todo riesgo', text: 'Todos nuestros vehículos incluyen cobertura completa sin deducibles sorpresa.' },
      { title: 'Flota renovada', text: 'Vehículos de máximo 2 años, revisados y desinfectados antes de cada entrega.' },
      { title: 'Soporte en ruta', text: 'Línea de asistencia 24/7 si algo pasa durante tu renta.' },
    ],
  },

  gallery: {
    title: 'Conoce la flota',
    intro: 'En tu sitio real, aquí irían fotos reales de tus propios vehículos.',
    items: [
      { label: 'Sedán' },
      { label: 'SUV' },
      { label: 'Pickup' },
      { label: 'Económico' },
    ],
  },

  testimonials: {
    title: 'Lo que dicen nuestros clientes',
    items: [
      { role: 'Viaje de negocios', quote: 'Reservé desde el aeropuerto y el carro ya me estaba esperando. Todo el proceso tomó 5 minutos.' },
      { role: 'Viaje familiar', quote: 'Rentamos la SUV premium para un viaje a la costa y llegó impecable, con tanque lleno y todo revisado.' },
      { role: 'Renta mensual', quote: 'Rento mensual para mi trabajo hace más de un año. El precio y el servicio son consistentes siempre.' },
    ],
  },

  map: {
    title: 'Oficina y entrega',
    intro: 'Entregamos en el aeropuerto José María Córdova sin costo adicional.',
    hours: [
      { days: 'Lun – Dom' },
      { days: 'Entrega aeropuerto', time: '24/7, bajo reserva' },
    ],
  },

  cta: {
    heading: '¿Listo para tu próximo viaje?',
    text: 'Reserva en línea en menos de 3 minutos. Cancelación gratuita hasta 24h antes.',
    actions: [{ label: 'Reservar ahora' }, { label: 'Ver toda la flota' }],
  },

}
