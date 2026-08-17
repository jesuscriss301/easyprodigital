# Memoria persistente (Graphiti + FalkorDB)

Servidor MCP de memoria persistente para Claude, basado en
[Graphiti](https://github.com/getzep/graphiti) (grafo de conocimiento
temporal) con [FalkorDB](https://falkordb.com) como base de datos.

Vive como una app independiente dentro del monorepo — mismo patrón que
`showcase/`, `blog/` y `server/`, pero **no tiene nada que ver con el sitio
web**: es un servicio propio para que Claude pueda recordar cosas entre
sesiones (preferencias tuyas, decisiones de proyectos, procedimientos,
etc.).

## Por qué Anthropic + Voyage (no Ollama)

Al revisar el `config.yaml` real de Graphiti (`getzep/graphiti`, carpeta
`mcp_server/config/`), confirmé que **Ollama no es un proveedor soportado**
ni para el LLM de extracción de hechos ni para los embeddings. Las
opciones reales son:

- LLM: `openai`, `azure_openai`, `anthropic`, `gemini`, `groq`
- Embeddings: `openai`, `azure_openai`, `gemini`, `voyage` (Anthropic no
  ofrece API de embeddings propia)

Por eso esta configuración usa:

- **LLM**: Anthropic (`ANTHROPIC_API_KEY`) — para extraer entidades y
  hechos de las conversaciones y guardarlos en el grafo.
- **Embeddings**: Voyage AI (`VOYAGE_API_KEY`) — es el partner de
  embeddings recomendado por la propia Anthropic, y tiene capa gratuita
  (revisa los límites actuales en https://www.voyageai.com/ antes de
  decidir el plan).

Esto es distinto a lo que mencioné al principio (dije que usaría Ollama
para no necesitar ninguna API key) — lo corrijo aquí porque la
configuración real necesita ambas keys.

## Qué se despliega

Dos servicios, ambos en `docker-compose.yml`:

1. **`falkordb`** — base de datos del grafo (imagen oficial
   `falkordb/falkordb:latest`), con volumen persistente `falkordb_data`.
2. **`graphiti-mcp`** — el servidor MCP en sí (imagen prearmada
   `zepai/knowledge-graph-mcp:standalone`, no requiere build local),
   expone el protocolo MCP por HTTP en el puerto `8000`.

## Cómo desplegarlo en Dokploy

1. En el panel de Dokploy, crea una nueva aplicación de tipo **Compose**.
2. Apunta el "Build Path" / "Compose Path" a esta carpeta: `memory/`
   (rama `showcase` de este repo — o la rama que decidas usar para este
   servicio; no tiene que ser la misma que el sitio de demos).
3. En la sección de variables de entorno de esa aplicación, agrega:
   - `ANTHROPIC_API_KEY` — tu API key de Anthropic (console.anthropic.com).
   - `VOYAGE_API_KEY` — tu API key de Voyage AI (voyageai.com), regístrate
     y genera una key.
   - Opcional: `FALKORDB_PASSWORD` (recomendado en producción, déjalo
     vacío solo si el servicio no queda expuesto públicamente sin
     autenticación adicional).
   - Opcional: `GRAPHITI_GROUP_ID` (por defecto `jesus-cristancho`) — así
     todos los hechos que Claude guarde quedan bajo tu propio namespace en
     el grafo, sin mezclarse si en el futuro usas el mismo servidor para
     otra cosa.
4. Dale "Deploy". Dokploy construirá/traerá las imágenes y levantará los
   dos contenedores.
5. Una vez arriba, asígnale un dominio/subdominio en Dokploy (por ejemplo
   `memory.easyprodigital.com`) con HTTPS — igual que ya tienes configurado
   para `demos.easyprodigital.com`. Anota la URL pública resultante, la
   necesitas para el siguiente paso.

## Paso final (fuera de Dokploy): conectar Claude a este servidor

Desplegar el servidor **no lo conecta automáticamente** a tus
conversaciones con Claude. Falta un paso más, en tu cuenta de Claude/Cowork
(no en Dokploy):

1. Ve a la configuración de conectores/MCP de tu cuenta de Claude
   (Settings → Connectors, o el equivalente en Cowork).
2. Agrega un "custom connector" apuntando a la URL pública que le diste a
   `graphiti-mcp` en el paso anterior (ej. `https://memory.easyprodigital.com`).
3. Una vez conectado, en cada sesión futura Claude podrá guardar y
   consultar hechos en este grafo — por ejemplo, tus preferencias, el
   estado de tus proyectos, o procedimientos que ya definimos juntos.

Sin este paso, el servidor queda desplegado pero inactivo (no hay ninguna
sesión de Claude usándolo todavía).

## Relación con el vault de Obsidian

En paralelo a esto, ya creé un vault de Obsidian en tu máquina
(`Documents/proyectos/ClaudeMemory/`) con notas en Markdown — es memoria
"manual" y legible por ti directamente, sin necesitar ningún servidor
desplegado. Los dos sistemas son complementarios, no compiten:

- **Obsidian**: notas curadas, las editas tú o te las actualizo yo cuando
  lo pidas explícitamente — útil como referencia rápida y para que tú
  también puedas leerlas/editarlas fuera de Claude.
- **Graphiti**: memoria automática tipo grafo, se alimenta de las
  conversaciones mismas una vez esté conectado como MCP — útil para que
  Claude recuerde detalles sin que tengas que anotarlos tú.

## Seguridad

Este `docker-compose.yml` y `config.yaml` NO contienen ninguna API key —
todas se inyectan como variables de entorno desde el panel de Dokploy. No
hay credenciales en este repo.
