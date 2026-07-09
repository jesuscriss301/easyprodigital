# Easy Pro Digital — Jesús Manuel Cristancho

Web personal de desarrollador freelance construida con **React + Vite + React Router**, desplegada en **GitHub Pages** con el dominio `easyprodigital.com`.

## Páginas

| Ruta | Contenido |
|---|---|
| `/` | Home: hero personal, servicios, proyectos destacados |
| `/services/` | Los 6 servicios completos (web, mobile, SaaS, SEO, marketing, AI) |
| `/portfolio/` | Todos los proyectos |
| `/about/` | Sobre Jesús Manuel Cristancho |
| `/contact/` | Email, WhatsApp, LinkedIn, TikTok, GitHub |
| `/privacy/` `/terms/` `/cookies/` | Legales (pega el texto de tus páginas originales) |
| `/plan/` `/blog/` | Redirigen a services/home (conservan URLs antiguas indexadas) |

## Personalizar contenido

Todo vive en `src/data/profile.js`:
- `github` → **pon tu usuario real** (dice `yourusername`)
- `projects` → **reemplaza los 3 placeholders** con proyectos reales
- `services`, `about`, `available` → edita libremente

Las páginas legales tienen un placeholder en `src/pages/pages.jsx` (componente `Legal`) — pega ahí el texto de tus páginas originales.

## SEO incluido

- Title, meta description, canonical y Open Graph **únicos por página** (componente `Seo`)
- JSON-LD: `Person` (home/about) y `ProfessionalService` con los 6 servicios (services)
- `sitemap.xml` y `robots.txt` en `public/`
- Redirects de URLs antiguas (`/plan/`, `/blog/`) para no perder enlaces indexados
- `404.html` = copia del index (GitHub Pages sirve la SPA en rutas profundas)

**Después del deploy:** entra a [Google Search Console](https://search.google.com/search-console), verifica el dominio y envía `https://easyprodigital.com/sitemap.xml`.

## Rutas disponibles

### Frontend

| Ruta | Estado | Descripción |
|---|---|---|
| `/` | Activa | Home |
| `/services` | Activa | Servicios |
| `/portfolio` | Activa | Portafolio |
| `/about` | Activa | Sobre mí |
| `/contact` | Activa | Contacto |
| `/rag-form` | Activa | Formulario de descubrimiento |
| `/privacy` | Activa | Política de privacidad |
| `/terms` | Activa | Términos y condiciones |
| `/cookies` | Activa | Política de cookies |
| `/plan` | Redirección | Lleva a `/services/` |
| `/blog` | Redirección | Lleva a `/` |
| `/sign_in` | Redirección | Lleva a `/` |
| `/log_in` | Redirección | Lleva a `/` |

### Backend

| Ruta | Método | Descripción |
|---|---|---|
| `/api/health` | `GET` | Verifica que la API y la base de datos respondan |
| `/api/rag-form` | `POST` | Guarda el formulario de descubrimiento y envía correo de agradecimiento |
| `/api/docs` | `GET` | Interfaz Swagger UI |
| `/api/docs.json` | `GET` | Documento OpenAPI en JSON |

## Desarrollo y deploy

### Frontend

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # genera dist/
```

### Backend

```bash
cd server
npm install
npm start        # http://localhost:3001
# Documentación Swagger: http://localhost:3001/api/docs
```

Deploy: sube a GitHub → **Settings → Pages → Source: GitHub Actions** → el workflow `.github/workflows/deploy.yml` publica solo en cada push a `main`. El `CNAME` va en `public/`, así el dominio no se pierde.
