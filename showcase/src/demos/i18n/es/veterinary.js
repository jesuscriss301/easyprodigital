// Contenido en español para veterinary (y sus variantes). Ver
// salonBelleza.js para la explicación del patrón.
export default {
  seo: {
    title: 'Diseño Web para Clínicas Veterinarias (Ejemplo) | Easy Pro Digital',
    description:
      'Un ejemplo real de sitio web para clínicas veterinarias y hospitales de mascotas, hecho por Easy Pro Digital. Así de bien puede verse la web de tu negocio: pacientes, servicios, precios y reservas.',
  },

  valueProps: [
    `Citas online sin contestar WhatsApp todo el día`,
    `Recordatorios automáticos de vacunas (clientes que vuelven solos)`,
    `Botón de urgencias visible`,
  ],

  hero: {
    title: 'Cuidamos a los que más quieres.',
    text: 'Medicina preventiva, cirugía, baño y estética para perros y gatos. Un equipo que entiende que tu mascota es parte de la familia.',
    primaryCta: { label: 'Agenda tu cita' },
    secondaryCta: { label: 'Ver servicios' },
    trust: [
      { label: 'pacientes felices' },
      { label: 'promedio de reseñas' },
      { label: 'años cuidando mascotas' },
    ],
  },

  patients: {
    title: 'Algunos de nuestros pacientes consentidos',
    intro: 'Sample gallery — en tu sitio real, aquí irían fotos de las mascotas que atiendes (con autorización de sus dueños, claro).',
  },

  services: {
    title: 'Servicios veterinarios integrales',
    items: [
      { title: 'Consulta general', text: 'Revisión completa, vacunas y plan de medicina preventiva.', price: 'Desde $40 USD' },
      { title: 'Cirugía', text: 'Esterilizaciones y cirugías de tejidos blandos con quirófano propio.', price: 'Desde $120 USD' },
      { title: 'Baño y estética', text: 'Baño medicado, corte de pelo y cuidado de uñas en ambiente sin estrés.', price: 'Desde $28 USD' },
      { title: 'Odontología', text: 'Profilaxis dental con ultrasonido y extracciones bajo anestesia.', price: 'Desde $90 USD' },
      { title: 'Hospitalización', text: 'Monitoreo 24/7 cuando tu mascota necesita quedarse con nosotros.', price: 'Desde $55 USD/día' },
      { title: 'Urgencias', text: 'Línea directa en horario extendido para emergencias.', price: 'Según servicio' },
    ],
  },

  features: {
    title: 'Un lugar donde las mascotas no tiemblan',
    intro: 'Cuatro razones por las que las familias nos recomiendan.',
    items: [
      { title: 'Equipo certificado', text: 'Médicos veterinarios con especialización y educación continua anual.' },
      { title: 'Ambiente libre de estrés', text: 'Salas separadas para perros y gatos, feromonas y manejo con refuerzo positivo.' },
      { title: 'Quirófano propio', text: 'No tercerizamos — operamos en nuestras instalaciones con monitoreo completo.' },
      { title: 'Seguimiento post-visita', text: 'Te escribimos al día siguiente para saber cómo sigue tu peludo.' },
    ],
  },

  testimonials: {
    title: 'Lo que dicen las familias',
    items: [
      { role: 'Mamá de Luna', quote: 'Luna nunca había estado tan tranquila en una veterinaria. El equipo la trata como si fuera suya.' },
      { role: 'Papá de Rocky', quote: 'Operaron a mi bulldog y me mandaron fotos y actualizaciones todo el día. Nunca sentí ansiedad.' },
      { role: 'Mamá de Mochi', quote: 'Mi gato odia salir de casa, pero aquí se deja revisar sin pelear. Eso ya es magia.' },
    ],
  },

  map: {
    title: 'Visítanos',
    intro: 'Parqueadero gratuito y sala de espera separada para gatos.',
    hours: [
      { days: 'Lun – Vie' },
      { days: 'Sábado' },
      { days: 'Domingo', time: '10:00 AM – 1:00 PM (urgencias)' },
    ],
  },

  cta: {
    heading: '¿Tu peludo necesita una visita?',
    text: 'Agenda en 1 minuto. Primera consulta con 20% de descuento para pacientes nuevos.',
    actions: [{ label: 'Agendar ahora' }, { label: 'Llamar al vet' }],
  },

}
