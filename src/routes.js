// Route table without components, shared by the router (src/router.js) and the build
// (vite.config.js writes dist/<path>/index.html with the head tags and the sitemap).
// `key` joins the language versions of a page (hreflang, language switch).

export const LANGS = ['de', 'en']

export const routes = [
  { path: '/', key: 'home', lang: 'de', page: 'home' },
  { path: '/en', key: 'home', lang: 'en', page: 'home' },
  { path: '/captioner', key: 'captioner', lang: 'de', page: 'product', product: 'captioner' },
  { path: '/en/captioner', key: 'captioner', lang: 'en', page: 'product', product: 'captioner' },
  { path: '/designdeck', key: 'designdeck', lang: 'de', page: 'product', product: 'designdeck' },
  { path: '/en/designdeck', key: 'designdeck', lang: 'en', page: 'product', product: 'designdeck' },
  // legal pages exist in German only, the English footer links to them
  { path: '/impressum', key: 'imprint', lang: 'de', page: 'imprint' },
  { path: '/datenschutz', key: 'privacy', lang: 'de', page: 'privacy' },
]

export function alternates(route) {
  return routes.filter((r) => r.key === route.key)
}

// Path of page `key` in `lang` (falls back to the German page, e.g. for the legal pages).
export function pathOf(key, lang) {
  const all = routes.filter((r) => r.key === key)
  return (all.find((r) => r.lang === lang) || all[0]).path
}

export function findRoute(path) {
  const clean = path.replace(/\/+$/, '') || '/'
  return routes.find((r) => r.path === clean)
}
