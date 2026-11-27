import { articles } from 'virtual:articles-index'
import { pickFrom } from './articlePicks.js'

// Lista liviana (sin cuerpos) para menús, columna lateral y blog; los cuerpos
// viven en articles.js y solo los carga la página del artículo.
export { articles }

export function pickArticles(pathname, count = 3) {
  return pickFrom(articles, pathname, count)
}
