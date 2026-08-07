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
     `waves`, `users`, `flower`, `car`, `bucket`, `clock`, `mapPin`, `phone`,
     `shieldCheck`, `hammer`, `tree`, `wrench`, `house`, `brick`, `crane`,
     `gauge`). Si el rubro necesita un ícono nuevo, agrégalo ahí primero
     (mismo estilo: `viewBox 0 0 24 24`, stroke, sin relleno).
5. **Orden de secciones** (opcional): agrega `layout: { order: [...] }` con
   cualquier subconjunto/orden de `'hero' | 'services' | 'features' |
   'gallery' | 'testimonials' | 'map' | 'cta'`. Si lo omites, se usa el orden
   por defecto (`hero, services, features, gallery, testimonials, map, cta`).
   `nav`, `disclosure`, `footer`, el badge y el `StyleSwitcher` siempre van
   fijos (arriba/abajo). Ejemplo (galería justo después del hero, para
   negocios muy visuales):
   ```js
   layout: { order: ['hero', 'gallery', 'services', 'features', 'testimonials', 'map', 'cta'] },
   ```
6. **Imágenes reales** (opcional, si no las agregas se usan íconos/gradientes
   decorativos):
   - `hero.image` + `hero.imageAlt`: reemplaza el ícono del hero por una foto.
   - `gallery.items`: acepta strings (gradiente decorativo, comportamiento
     anterior) u objetos `{ label, image, alt }` para fotos reales.
   Guarda las imágenes en `public/images/<slug>/` y referencia con ruta
   absoluta (`/images/<slug>/archivo.jpg`). Si las sacas de un banco gratuito
   (ej. Pixabay, licencia libre sin atribución obligatoria), deja un
   `CREDITS.md` en esa misma carpeta con el link de cada foto por trazabilidad
   (ver `public/images/salon-belleza/CREDITS.md` de ejemplo).
7. **Video real** (opcional, en vez de foto): `hero.video` (+ `hero.videoPoster`
   opcional) reemplaza la imagen del hero por un `<video autoplay muted loop>`.
   En `gallery.items`, un objeto con `video` en vez de `image` hace lo mismo
   para ese tile. Mismo criterio de carpeta/CREDITS.md que las fotos.
8. **Sección de mapa** (opcional): agrega un bloque `map` al objeto de la
   demo e inclúyelo en `layout.order` (normalmente al final, antes de `cta`):
   ```js
   map: {
     eyebrow: 'Find Us',
     title: 'Where to find us',
     intro: 'Stop by or check our service area on the map.',
     query: 'Bella Aura Studio, Miami, FL', // lo que buscarías en Google Maps
     address: '123 Main St, Miami, FL 33101',
     phone: '+1 (305) 555-0100',
     hours: [
       { days: 'Mon – Fri', time: '9:00 AM – 7:00 PM' },
       { days: 'Saturday', time: '10:00 AM – 4:00 PM' },
     ],
   },
   ```
   Usa un iframe público de Google Maps (`?q=...&output=embed`) — no requiere
   API key. `query` puede ser una dirección real o "Negocio, Ciudad" si el
   negocio es ficticio (cae en una ubicación real de esa ciudad, suficiente
   para una demo).
9. **Stats animados (CountUp)**: en `hero.trust`, cada item acepta `value`
   (texto estático, ej. `'4.9 ★'`) O `end` (número, ej. `500`) + `prefix`/
   `suffix` opcionales (ej. `suffix: '+'`) para que cuente hacia arriba al
   entrar en pantalla en vez de aparecer como texto fijo — usa el número que
   sea real/creíble para el rubro (clientes atendidos, años, trabajos
   completados). Mezclar ambos tipos en el mismo array está bien.
10. **Variantes de estilo** (opcional, recomendado): para ofrecer la misma
    demo en 3 paletas/tipografías distintas (un selector "Same website,
    another style" arriba de las secciones), no dupliques el contenido —
    crea 2 archivos hermanos que importen la demo base y sobrescriban solo
    `slug`, `seo.title`, `seo.robots` y `theme` (ver `salonBellezaModern.js` /
    `salonBellezaBotanical.js` como plantilla). Agrega el array
    `styleVariants: [{ slug, label, primary }, ...]` (idéntico, con las 3+
    variantes — `primary` es el color de esa variante, para que el pill del
    selector se vea con SU propia paleta) al archivo BASE; los hermanos lo
    heredan automáticamente vía `...base`. Regístralos en `demos/index.js`
    dentro de `styleOnlyVariants` (no en `demos`, para no duplicar la
    tarjeta en la home) y márcalos `kind: 'prospecto'` + `seo.robots:
    'noindex, nofollow'` para no indexar contenido duplicado.
11. Registra la demo en `src/demos/index.js`:
    ```js
    import restaurantes from './restaurantes.js'
    const demos = [salonBelleza, restaurantes]
    ```
    Si es una demo de prospecto que NO quieres que aparezca listada en la
    página de inicio del showcase (para no exponerla públicamente aunque no
    se indexe en Google), no la agregues al arreglo `demos` — en su lugar
    impórtala directamente en una ruta dedicada en `App.jsx`.
12. El WhatsApp de contacto en `Disclosure` ya apunta por defecto al número
    real de Easy Pro Digital — no lo cambies por uno inventado del negocio
    ficticio.
13. Corre `npm run dev` y revisa `http://localhost:5174/<slug>` antes de
    hacer commit.

Ver `../../README.md` para las instrucciones de despliegue en Dokploy.
