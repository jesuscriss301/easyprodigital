# Uchuva — sitio de producto

Sitio de venta del asistente de WhatsApp **Uchuva** (EasyPro Digital), publicado en
**https://uchuva.easyprodigital.com**.

Vive en su **propia rama (`uchuva`)** del repositorio `jesuscriss301/easyprodigital`, aparte del
sitio principal (`react`/`main`, GitHub Pages) y del showcase. Se despliega en **Dokploy**.

## Páginas (4, en español e inglés)

| Página | Español | Inglés |
|---|---|---|
| Inicio | `/` | `/en/` |
| Cómo funciona | `/como-funciona/` | `/en/how-it-works/` |
| Panel | `/panel/` | `/en/panel/` |
| Precio y fundadores | `/precio/` | `/en/pricing/` |

Cada una es un HTML prerenderizado (8 archivos) con su título, descripción, canonical,
hreflang, Open Graph y datos estructurados propios (`src/seo.js`).

## Editar contenido

- `src/content.js` — `PRODUCT.founders` (`total` y `taken`: el contador "10 / 25" sale de aquí),
  `PRODUCT.price` y todos los textos de secciones (`WA_CONTENT.es` / `.en`).
- `src/pagecopy.js` — título SEO, introducción y respuesta corta de cada página.
- `src/pages/*.jsx` — qué secciones lleva cada página y en qué orden.
- `src/sections.jsx` — las secciones reutilizables.
- `public/` — `robots.txt`, `llms.txt`, imágenes (`img/`), tarjetas sociales (`og/`), logo.
  El `sitemap.xml` se genera solo en el build.

Si cambias o agregas una página: ruta en `PAGES` (`src/content.js`), texto en `pagecopy.js`,
componente en `src/pages/`, vista en `App.jsx` y regla de redirección en `nginx.conf`.

## Desarrollo

```bash
npm install
npm run dev     # http://localhost:5175
npm run build   # dist/ con las 8 páginas ya renderizadas + sitemap.xml
```

## Despliegue en Dokploy

App tipo **Dockerfile**, repo `jesuscriss301/easyprodigital`, **rama `uchuva`**, build path `/`,
dominio `uchuva.easyprodigital.com` con HTTPS (Let's Encrypt), registro DNS tipo A
`uchuva` → IP del servidor. Autodeploy en cada push a `uchuva`.
