# ⚠️ Movido — este proyecto ya no vive aquí

SEO Article Forge se separó a su propio proyecto, con persistencia en MySQL y una API REST propia, en vez de escribir HTML estático directo en `public/blog/` de este repo.

**Nueva ubicación:** `../../seo-article-forge/` (carpeta hermana de `easyprodigital/`, junto a `turnero` y `bagisto` en `proyectos/`).

Esta carpeta (`easyprodigital/blog/`) queda obsoleta y puede borrarse una vez confirmes que el proyecto nuevo funciona — este entorno no pudo eliminarla automáticamente por una limitación del sandbox, pero tú puedes borrarla sin problema desde el explorador de archivos o con `rm -rf blog` en tu propia terminal.

`src/pages/Blog.jsx` en este proyecto ahora lee de `VITE_BLOG_API_URL` (ver `.env.example` en la raíz) en vez de `public/blog/posts.json`.
