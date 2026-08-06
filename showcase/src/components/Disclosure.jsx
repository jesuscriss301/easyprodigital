import Reveal from './Reveal.jsx'

const DEFAULT_WHATSAPP = 'https://wa.me/573238816434'

export default function Disclosure({
  id = 'want-this',
  heading = 'This is a sample website',
  text,
  whatsappMessage = "Hi, I saw one of Easy Pro Digital's demos and I'd like a website like this for my business",
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
              Chat on WhatsApp
            </a>
            <a href="https://easyprodigital.com/portfolio/" className="demo-btn demo-btn-outline">
              View more projects
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
