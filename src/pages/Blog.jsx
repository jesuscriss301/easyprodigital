import { useEffect, useState } from 'react'
import Seo from '../components/Seo.jsx'

/**
 * Listado del blog. Los artículos son HTML estático generado por blog/
 * (SEO Article Forge) y publicado en public/blog/. Este componente solo
 * lee el manifiesto /blog/posts.json — no necesita backend.
 * (Se llama posts.json y no index.json porque GitHub Pages sirve index.json
 * como índice del directorio /blog/, rompiendo la ruta de la SPA.)
 */
export default function Blog() {
  const [articles, setArticles] = useState(null) // null = cargando

  useEffect(() => {
    fetch('/blog/posts.json')
      .then((r) => (r.ok ? r.json() : { articles: [] }))
      .then((m) => setArticles(Array.isArray(m.articles) ? [...m.articles].reverse() : []))
      .catch(() => setArticles([]))
  }, [])

  return (
    <>
      <Seo
        title="Blog — Easy Pro Digital"
        description="Artículos sobre desarrollo web, IA aplicada y SEO: guías prácticas escritas desde la experiencia construyendo software productivo."
        path="/blog/"
      />
      <div className="page-head container">
        <p className="eyebrow">Blog</p>
        <h1>Guías y artículos</h1>
        <p className="hero-tagline">
          Desarrollo web, IA aplicada y SEO — contenido práctico, directo al grano.
        </p>
      </div>

      <section>
        <div className="container">
          {articles === null && <p className="blog-empty">Cargando artículos…</p>}
          {articles && articles.length === 0 && (
            <p className="blog-empty">Aún no hay artículos publicados. Vuelve pronto.</p>
          )}
          {articles && articles.length > 0 && (
            <div className="blog-grid">
              {articles.map((a) => (
                <a className="blog-card" key={a.slug} href={`/blog/${a.slug}.html`}>
                  {a.featuredImage && (
                    <img src={a.featuredImage} alt={a.title} loading="lazy" />
                  )}
                  <div className="blog-card-body">
                    <h2>{a.title}</h2>
                    <p>{a.description}</p>
                    <span className="blog-card-more">Leer artículo →</span>
                  </div>
                </a>
              ))}
            </div>
          )}
        </div>
      </section>
    </>
  )
}
