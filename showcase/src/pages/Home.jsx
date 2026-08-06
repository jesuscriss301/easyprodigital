import { useEffect } from 'react'
import demos from '../demos/index.js'
import { Icon } from '../components/icons.jsx'

export default function Home() {
  useEffect(() => {
    document.title = 'Sample Websites by Industry — Easy Pro Digital'
  }, [])

  return (
    <div className="showcase-home">
      <div className="showcase-home-hero">
        <h1>Sample Websites by Industry</h1>
        <p>
          Real web design examples for different types of businesses, built by{' '}
          <a href="https://easyprodigital.com" style={{ color: '#fff', textDecoration: 'underline' }}>
            Easy Pro Digital
          </a>
          . Pick an industry to see the full demo.
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
              <p>View demo →</p>
            </div>
          </a>
        ))}
      </div>
    </div>
  )
}
