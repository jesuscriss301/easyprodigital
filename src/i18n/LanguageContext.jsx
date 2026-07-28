import { createContext, useContext, useMemo } from 'react'
import { getData, getStrings } from './content.js'

const LanguageContext = createContext({
  lang: 'en',
  href: (path) => path,
  data: getData('en'),
  t: getStrings('en'),
})

/**
 * Provee el idioma activo a todo el árbol montado bajo esta rama de rutas.
 * `href(path)` antepone /es cuando corresponde — úsalo en TODO Link/href
 * interno para que el enlace se quede en el idioma activo.
 */
export function LanguageProvider({ lang, children }) {
  const value = useMemo(() => {
    const prefix = lang === 'es' ? '/es' : ''
    return {
      lang,
      href: (path) => `${prefix}${path.startsWith('/') ? path : `/${path}`}`,
      data: getData(lang),
      t: getStrings(lang),
    }
  }, [lang])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}

export function useLanguage() {
  return useContext(LanguageContext)
}
