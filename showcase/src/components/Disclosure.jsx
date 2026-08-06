import Reveal from './Reveal.jsx'

const DEFAULT_WHATSAPP = 'https://wa.me/573238816434'

export default function Disclosure({
  id = 'quieres-esto',
  heading = 'Esta es una web de muestra',
  text,
  whatsappMessage = 'Hola, vi una de las demos de Easy Pro Digital y quiero una web así para mi negocio',
}) {
  const whatsappHref = `${DEFAULT_WHATSAPP}?text=${encodeURIComponent(whatsappMessage)}`

  return (
    <section id={id} className="demo-section demo-section--tight demo-section--alt">
      <div className="demo-container">
        <Reveal as="div" className="demo-disclosure">
          <h3>{heading}</h3>
          <p>{text}</p>
          <div className="demo-cta-actions">
            <a href={whatsappHref} className="demo-btn demo-btn-primary" target="_blank" rel="noopener noreferrer">
              Hablar por WhatsApp
            </a>
            <a href="https://easyprodigital.com/portfolio/" className="demo-btn demo-btn-outline">
              Ver más proyectos
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
