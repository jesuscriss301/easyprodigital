# SEO Article Forge

Sistema de scripts en Node.js para generar artículos SEO de calidad con IA (multi-proveedor), análisis de la competencia en el buscador, extracción exhaustiva de palabras clave, imágenes libres de derechos y 5 plantillas de diseño rotativas.

## Integración con el sitio easyprodigital

Este generador es una **herramienta de build**, no corre en producción: escribe HTML estático + `index.json` directamente en `../public/blog/` (configurado vía `OUTPUT_DIR` en `.env`). La página `/blog` del sitio React lee ese `index.json` y lista los artículos; cada artículo es HTML independiente con la paleta de la marca (navy `#071F42` / azul `#117EAD` / lima `#C6F135`) y un header con enlace de vuelta al sitio principal.

Flujo de publicación:

```bash
# desde la raíz del repo
npm run blog:generate -- "tema del artículo"   # genera en public/blog/
npm run build                                   # el build copia public/ → dist/
# commit + deploy como siempre
```

Las API keys viven solo en `blog/.env` (gitignoreado) — nunca llegan al bundle del sitio.

## Cómo funciona el pipeline

```
Tema → 1. Búsqueda SERP (SerpAPI / Brave / DuckDuckGo)
     → 2. Scraping de las 3 primeras páginas (texto, encabezados, metadatos de imágenes)
     → 3. IA: captura de TODAS las keywords (principal, secundarias, long-tail, LSI, preguntas, huecos de la competencia)
     → 4. IA: esquema del artículo diseñado para superar a los 3 primeros resultados
     → 5. IA: redacción coherente (E-E-A-T, transiciones, sin clichés) — modo científico con citas [n] si aplica
     → 6. Imágenes: Pexels → Pixabay → Unsplash (validando resolución mínima) → IA (DALL·E) como último recurso
     → 7. Enlaces internos a artículos relacionados (por solapamiento de keywords)
     → 8. Render en 1 de 5 plantillas (rotación automática) con SEO técnico completo
     → output/slug.html + slug.json + index.json (manifiesto del sitio)
```

## Instalación

```bash
npm install
cp .env.example .env   # y completa tus API keys
```

Mínimo necesario: **una** API key de IA (Anthropic, OpenAI, Gemini o DeepSeek). Si configuras varias, el sistema hace *fallback* automático si una falla — los prompts son agnósticos al modelo.

Recomendado para producción:
- `SERPAPI_KEY` o `BRAVE_API_KEY` (resultados de búsqueda fiables; DuckDuckGo funciona sin key pero es menos estable).
- `PEXELS_API_KEY` y/o `PIXABAY_API_KEY` (gratuitas, licencia de uso libre).

## Uso

```bash
# Un artículo
node src/index.js generate "beneficios del ayuno intermitente"

# Forzar plantilla (0-4), modo científico o modo actualidad
node src/index.js generate "agujeros negros supermasivos" --scientific --template 3

# Lote: un tema por línea
node src/index.js batch temas.txt

# Previsualizar las 5 plantillas SIN API keys ni internet
node src/index.js demo
```

## Las 5 plantillas

| # | Nombre | Estilo | Rasgos |
|---|--------|--------|--------|
| 0 | `prisma-editorial` | Revista | Serif Fraunces, letra capital, reveal al hacer scroll |
| 1 | `circuito-tech` | Oscuro técnico | Barra de progreso de lectura, TOC en chips, mono IBM Plex |
| 2 | `mosaico-cards` | Claro con tarjetas | Degradado violeta→coral, hover con elevación |
| 3 | `academia-cientifico` | Divulgación | TOC lateral fijo, citas `[n]` → referencias, ideal modo científico |
| 4 | `vertiente-split` | Hero partido | Bloque bosque + imagen, subrayados animados |

Todas incluyen: JSON-LD (`Article`/`ScholarlyArticle`), Open Graph/Twitter Cards, canonical, `loading="lazy"`, animaciones que respetan `prefers-reduced-motion`, sección de **artículos relacionados** y enlaces internos `{{related}}` dentro del cuerpo. La rotación es automática (se guarda en `output/index.json`) para que páginas consecutivas nunca repitan diseño.

## Derechos de autor de las imágenes — cómo lo resuelve el sistema

1. **Bancos gratuitos primero** (Pexels, Pixabay, Unsplash): licencias de uso libre; el sistema añade el crédito del autor en el `figcaption` igualmente (buena práctica y requisito de las guidelines de Unsplash).
2. **Validación de resolución**: se descarta cualquier imagen por debajo de `MIN_IMAGE_WIDTH × MIN_IMAGE_HEIGHT` (por defecto 1200×675, ratio 16:9 apto para OG).
3. **Temas de actualidad / imágenes reales** (noticias, eventos, personas): las imágenes de los medios que aparecen en el SERP **no se copian ni descargan**. El artículo las referencia enlazando a la fuente original con crédito visible, y la redacción lo menciona ("como muestran las imágenes publicadas por…"). Esto es lo que activa el "modo actualidad" (automático o con `--news`).
4. **Último recurso**: generación por IA (DALL·E 3) con prompts que evitan marcas, logos y rostros reconocibles.

## Modo científico

Se activa automáticamente cuando la IA detecta que el tema requiere evidencia (salud, ciencia, datos verificables), o manualmente con `--scientific`:
- Citas en el texto con formato `[n]` enlazadas a la sección **Referencias**.
- Solo se citan las fuentes realmente scrapeadas del SERP (nunca inventadas).
- Lenguaje prudente cuando no hay fuente ("la evidencia sugiere…").
- Schema `ScholarlyArticle` + propiedad `citation` en el JSON-LD.

## Estructura del proyecto

```
config/default.js        Configuración central (lee .env)
src/index.js             CLI (generate | batch | demo)
src/pipeline.js          Orquestador de todo el flujo
src/ai/                  Adaptadores Claude/OpenAI/Gemini/DeepSeek + fallback
src/prompts/prompts.js   Prompts agnósticos al modelo (el corazón de la calidad)
src/serp/search.js       Búsqueda (SerpAPI, Brave, DuckDuckGo)
src/serp/scraper.js      Scraping de las 3 primeras páginas
src/images/sourcer.js    Estrategia de imágenes con derechos resueltos
src/templates/           Markdown→HTML, motor de render y 5 temas
output/                  HTML finales + JSON de metadatos + index.json
```

## Notas y límites

- **Términos de servicio**: scrapear Google directamente viola sus ToS; por eso el sistema usa APIs de búsqueda (SerpAPI/Brave) o DuckDuckGo. Respeta también los ToS de los sitios que scrapeas (el scraper solo lee contenido público, con timeout y un solo request por página).
- El contenido de la competencia se usa como **contexto de análisis**, nunca se copia: el prompt lo prohíbe explícitamente y exige un artículo original y superior.
- Revisa siempre el artículo antes de publicar — la IA puede equivocarse, especialmente en cifras. En modo científico verifica que cada cita respalde realmente la afirmación.
- Para conectar con tu CMS (WordPress, etc.) puedes leer el `slug.json` de cada artículo y publicar vía REST API; el HTML de las plantillas también sirve como sitio estático directo.
