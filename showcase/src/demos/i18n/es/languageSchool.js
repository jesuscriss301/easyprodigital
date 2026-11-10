// Contenido en español para language-school (y sus variantes). Ver
// salonBelleza.js para la explicación del patrón.
export default {
  seo: {
    title: 'Diseño Web para Escuelas de Idiomas (Ejemplo) | Easy Pro Digital',
    description:
      'Un ejemplo real de sitio web para escuelas de idiomas y academias, hecho por Easy Pro Digital. Así de bien puede verse la web de tu negocio: cursos, profesores nativos, galería de estudiantes y testimonios.',
  },

  valueProps: [
    `Clase de prueba gratis que se agenda sola`,
    `Prueba de nivel online que capta datos`,
    `Grupos llenos con lista de espera`,
  ],

  hero: {
    eyebrow: 'Language School · 5 Idiomas',
    title: 'Habla el idioma, vive el país.',
    text: 'Clases en grupos pequeños, profesores nativos y una metodología que te hace hablar desde la primera semana. Inglés, español, francés, chino mandarín y japonés.',
    primaryCta: { label: 'Reserva tu clase gratis' },
    secondaryCta: { label: 'Ver cursos' },
    trust: [
      { label: 'estudiantes activos' },
      { value: '5 idiomas', label: 'enseñados por nativos' },
      { label: 'años en Medellín' },
    ],
  },

  services: {
    title: 'Un idioma por cada motivación',
    items: [
      { title: 'Inglés General', text: 'A1 a C1 — niveles alineados con el Marco Común Europeo. Clases 2x por semana.', price: 'Desde $120 USD/mes' },
      { title: 'Español para Extranjeros', text: 'DELE y uso diario. Grupos reducidos de hasta 6 estudiantes.', price: 'Desde $140 USD/mes' },
      { title: 'Francés', text: 'DELF/DALF, con énfasis en conversación y comprensión auditiva.', price: 'Desde $130 USD/mes' },
      { title: 'Chino Mandarín', text: 'HSK 1-4 con profesor nativo. Incluye introducción a caracteres y pinyin.', price: 'Desde $160 USD/mes' },
      { title: 'Japonés', text: 'JLPT N5-N3, cultura japonesa integrada en cada clase.', price: 'Desde $160 USD/mes' },
      { title: 'Business English', text: 'Para profesionales que necesitan presentar, negociar y escribir en inglés.', price: 'Desde $180 USD/mes' },
    ],
  },

  features: {
    title: 'Una academia pensada para que hables, no solo estudies',
    intro: 'Cuatro razones por las que nuestros estudiantes se quedan curso tras curso.',
    items: [
      { title: 'Grupos pequeños', text: 'Máximo 6 estudiantes por clase. Hablas más, el profesor te corrige más.' },
      { title: 'Profesores nativos', text: 'Todos nuestros docentes son nativos del idioma y certificados en enseñanza.' },
      { title: 'Metodología conversacional', text: 'Desde la primera clase hablas. Nada de meses de gramática antes de abrir la boca.' },
      { title: 'Horarios flexibles', text: 'Clases en la mañana, tarde, noche y sábados. Virtual o presencial.' },
    ],
  },

  gallery: {
    title: 'Un espacio para aprender hablando',
    intro: 'En tu sitio real, aquí irían las fotos de tus salones, eventos culturales y estudiantes.',
  },

  testimonials: {
    title: 'Lo que dicen nuestros estudiantes',
    items: [
      { role: 'Business English, nivel B2', quote: 'En 6 meses pasé de bloquearme en reuniones a liderarlas en inglés. Las clases en grupos pequeños fueron la clave.' },
      { role: 'Francés, nivel A2', quote: 'Me preparé para irme a Montreal y llegué hablando. La metodología conversacional funciona de verdad.' },
      { role: 'Japonés, JLPT N5', quote: 'Pensé que el japonés iba a ser imposible, y a los 4 meses ya pedía sushi en Tokio como local.' },
    ],
  },

  map: {
    title: 'Visítanos en Medellín',
    intro: 'Pasa por nuestra sede o toma la clase de muestra online — tú eliges.',
    hours: [
      { days: 'Lun – Vie' },
      { days: 'Sábado' },
      { days: 'Domingo', time: 'Cerrado' },
    ],
  },

  cta: {
    heading: '¿Listo para hablar un nuevo idioma?',
    text: 'Agenda tu clase gratuita de 45 minutos. Sin tarjeta, sin compromiso.',
    actions: [{ label: 'Reservar clase gratis' }, { label: 'Ver todos los cursos' }],
  },

}
