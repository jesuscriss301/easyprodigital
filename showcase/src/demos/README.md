# Cómo agregar una nueva demo

1. Copia `salonBelleza.js` a un nuevo archivo, ej. `restaurantes.js` o
   `clinicaSonrisa.js` (nombre del prospecto si es una demo personalizada).
2. Cambia todos los campos: `slug`, `brand`, `niche`, `kind`, `seo`, `theme`
   (paleta + fuentes) y todo el contenido (hero, services, features, gallery,
   testimonials, cta, disclosure). Nunca dejes texto de otra demo sin revisar.
3. Si es una **demo de nicho** (atrae tráfico de ese rubro): `kind: 'nicho'`,
   `seo.robots: 'index, follow'`.
   Si es una **demo para un prospecto concreto**: `kind: 'prospecto'`,
   `seo.robots: 'noindex, nofollow'` — no debe indexarse.
4. Elige variantes según el rubro:
   - `hero.variant`: `'split'` (visual al lado, versátil) o `'centered'`
     (fondo a todo lo ancho, más dramático — bien para restaurantes, hoteles,
     eventos).
   - `services.variant`: `'grid'` (tarjetas, ideal con 4-8 servicios y precio)
     o `'list'` (fila horizontal, ideal con pocos ítems o texto más largo).
   - `hero.visualIcon`: cualquier key de `src/components/icons.jsx`
     (`scissors`, `droplet`, `sparkle`, `leaf`, `sun`, `brush`, `award`,
     `waves`, `users`, `flower`). Si el rubro necesita un ícono nuevo,
     agrégalo ahí primero.
5. Registra la demo en `src/demos/index.js`:
   ```js
   import restaurantes from './restaurantes.js'
   const demos = [salonBelleza, restaurantes]
   ```
   Si es una demo de prospecto que NO quieres que aparezca listada en la
   página de inicio del showcase (para no exponerla públicamente aunque no
   se indexe en Google), no la agregues al arreglo `demos` — en su lugar
   impórtala directamente en una ruta dedicada en `App.jsx`.
6. El WhatsApp de contacto en `Disclosure` ya apunta por defecto al número
   real de Easy Pro Digital — no lo cambies por uno inventado del negocio
   ficticio.
7. Corre `npm run dev` y revisa `http://localhost:5174/<slug>` antes de
   hacer commit.

Ver `../../README.md` para las instrucciones de despliegue en Dokploy.
