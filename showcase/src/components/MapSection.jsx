import Reveal from './Reveal.jsx'
import SplitText from './SplitText.jsx'
import { Icon } from './icons.jsx'

/**
 * "Find us / Service area" section — a real embedded Google Maps iframe
 * (public embed URL, no API key needed) next to address/hours/phone. Useful
 * for any local-service niche (car wash, plumber, real estate, contractor...).
 * `query` is whatever you'd type into Google Maps (address, or "Business
 * Name, City"); it's URL-encoded automatically.
 */
export default function MapSection({
  id = 'location',
  eyebrow,
  title,
  intro,
  query,
  address,
  hours = [],
  phone,
}) {
  const src = `https://maps.google.com/maps?q=${encodeURIComponent(query || address || '')}&z=14&output=embed`

  return (
    <section id={id} className="demo-section demo-section--alt">
      <div className="demo-container">
        <Reveal className="demo-section-head">
          {eyebrow && <span className="demo-eyebrow">{eyebrow}</span>}
          <SplitText tag="h2" text={title} textAlign="center" splitType="chars" delay={30} duration={0.8} />
          {intro && <p>{intro}</p>}
        </Reveal>

        <Reveal as="div" className="demo-map">
          <div className="demo-map-frame">
            <iframe
              title={title || 'Map'}
              src={src}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
          </div>
          {(address || hours.length > 0 || phone) && (
            <div className="demo-map-info">
              {address && (
                <div className="demo-map-info-row">
                  <Icon name="mapPin" />
                  <span>{address}</span>
                </div>
              )}
              {phone && (
                <div className="demo-map-info-row">
                  <Icon name="phone" />
                  <a href={`tel:${phone.replace(/[^+\d]/g, '')}`}>{phone}</a>
                </div>
              )}
              {hours.length > 0 && (
                <div className="demo-map-info-row demo-map-hours">
                  <Icon name="clock" />
                  <ul>
                    {hours.map((h) => (
                      <li key={h.days}><span>{h.days}</span><span>{h.time}</span></li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          )}
        </Reveal>
      </div>
    </section>
  )
}
