# Easy Pro Digital — Showcase (webs de muestra por nicho/prospecto)

Sub-proyecto independiente (React + Vite + React Router), del mismo estilo
que `server/` y `blog/` en la raíz del repo: su propio `package.json`, su
propio build, y se **despliega por separado en Dokploy** — no forma parte
del build de GitHub Pages del sitio principal.

Cada demo vive en `https://demos.easyprodigital.com/<slug>` y se ve
completamente distinta a easyprodigital.com a propósito: son ejemplos del
tipo de web que le construiríamos a un negocio de ese rubro, no páginas de
la marca Easy Pro Digital.

## Desarrollo local

```bash
cd showcase
npm install
npm run dev       # http://localhost:5174
```

## Agregar una nueva demo

Ver `src/demos/README.md` — resumen: copiar `src/demos/salonBelleza.js`,
cambiar todo el contenido/paleta, registrar en `src/demos/index.js`.

## Estructura

```
src/
  components/   # Nav, Hero, Services, Features, Gallery, Testimonials,
                # CtaBanner, Disclosure, Footer, Badge, Seo, Reveal, icons
  demos/        # un archivo de configuración por demo (contenido + tema)
  pages/        # Home (índice de demos), DemoPage (renderiza cualquier
                # demo a partir de su config), NotFound
```

`Hero` y `Services` aceptan una prop `variant` para no partir de cero en
cada demo nueva (ver `src/demos/README.md`), y cada demo define su propia
paleta de colores/tipografía vía el objeto `theme` — así cada una se ve
distinta sin duplicar CSS.

## Despliegue en Dokploy

1. En Dokploy, crea una nueva aplicación de tipo **Dockerfile**, apuntando
   a este repositorio (rama `main`).
2. Configura el **build context / directorio base en `showcase/`** — así
   Dokploy solo construye este sub-proyecto y no toca el resto del monorepo.
   El `Dockerfile` ya está listo aquí (build con Node + servido con nginx,
   con fallback SPA para que `/salon-belleza` funcione entrando directo por
   URL, no solo navegando desde `/`).
3. Configura el dominio `demos.easyprodigital.com` en la app de Dokploy.
4. En tu proveedor de DNS, agrega un registro (A o CNAME, según indique
   Dokploy) para `demos` apuntando al servidor/IP de Dokploy — el mismo
   procedimiento que ya usaste para `store.` y `turnero.`.
5. Cada push a `main` que toque `showcase/` puede configurarse en Dokploy
   para redeploy automático (webhook de GitHub), igual que las otras apps.

No hace falta tocar `.github/workflows/deploy.yml` — ese workflow solo
construye la raíz del repo para GitHub Pages y no entra a `showcase/`.
