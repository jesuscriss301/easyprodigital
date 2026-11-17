# Uchuva — página de producto

Página de venta del asistente de WhatsApp **Uchuva** (EasyPro Digital), publicada en
**https://uchuva.easyprodigital.com** (español en `/`, inglés en `/en/`).

Sub-proyecto independiente, igual que `showcase/`: su propio `package.json`, su propio
build, y se despliega aparte en **Dokploy** (no en GitHub Pages).

## Editar contenido

Todo está en `src/content.js`:

- `PRODUCT.founders.taken` — cupos de fundador ya tomados (el contador baja solo).
- `PRODUCT.price` — precio de lanzamiento.
- `WA_CONTENT.es` / `WA_CONTENT.en` — textos de la página.

Imágenes del sistema en `public/img/`, logo en `public/uchuva.svg`, tarjetas para
compartir en `public/og/`.

## Desarrollo

```bash
cd uchuva
npm install
npm run dev     # http://localhost:5175
npm run build   # genera dist/ con HTML ya renderizado para / y /en/
```

## Despliegue en Dokploy

App tipo **Dockerfile**, repositorio `jesuscriss301/easyprodigital`, build path `uchuva/`,
dominio `uchuva.easyprodigital.com` con HTTPS (Let's Encrypt). Registro DNS tipo A
`uchuva` → IP del servidor de Dokploy.
