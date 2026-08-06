import { useEffect } from 'react'
import demos from '../demos/index.js'
import { Icon } from '../components/icons.jsx'

export default function Home() {
  useEffect(() => {
    document.title = 'Webs de muestra por nicho — Easy Pro Digital'
  }, [])

  return (
    <div className="showcase-home">
      <div className="showcase-home-hero">
        <h1>Webs de muestra por nicho</h1>
        <p>
          Ejemplos reales de diseño web para distintos tipos de negocio, creados por{' '}
          <a href="https://easyprodigital.com" style={{ color: '#fff', textDecoration: 'underline' }}>
            Easy Pro Digital
          </a>
          . Elige un rubro para ver la demo completa.
        </p>
      </div>
      <div className="showcase-grid">
        {demos.map((d) => (
          <a key={d.slug} href={`/${d.slug}`} className="showcase-card">
            <div
              className="showcase-card-visual"
              style={{ background: `linear-gradient(135deg, ${d.theme.primary}, ${d.theme.primaryDark})` }}
            >
              <Icon name={d.hero.visualIcon} />
            </div>
            <div className="showcase-card-body">
              <span className="tag">{d.niche}</span>
              <h3>{d.brand}</h3>
              <p>Ver demo →</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
