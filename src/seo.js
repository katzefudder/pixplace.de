// Head tags per route. Used twice: the router swaps the live <head> on navigation, and
// vite.config.js bakes them into dist/<path>/index.html, so crawlers and link previews
// that don't run JavaScript see the right title, description, hreflang and JSON-LD.
import { AUTHOR, SITE_URL } from './site.js'
import { alternates, findRoute, routes } from './routes.js'
import home from './content/home.js'
import captioner from './content/captioner.js'
import designdeck from './content/designdeck.js'
import platform from './content/pixplace.js'

export const products = { captioner, designdeck }
export { platform }

const OG_LOCALE = { de: 'de_DE', en: 'en_GB' }
const abs = (path) => SITE_URL + (path === '/' ? '/' : path)

function offers(product) {
  return product.prices.map((p) => ({
    '@type': 'Offer',
    name: p.duration.en,
    price: p.price.toFixed(2),
    priceCurrency: 'EUR',
  }))
}

function productLd(product, lang, route) {
  const text = product[lang]
  return {
    '@context': 'https://schema.org',
    '@type': 'SoftwareApplication',
    name: product.name,
    applicationCategory: 'MultimediaApplication',
    operatingSystem: 'macOS (Apple Silicon), Windows (64-bit)',
    description: text.description,
    inLanguage: lang,
    url: abs(route.path),
    image: SITE_URL + product.ogImage.src,
    screenshot: SITE_URL + product.ogImage.src,
    offers: offers(product),
    author: { '@type': 'Person', name: AUTHOR.name, url: AUTHOR.url },
  }
}

// title, description, og image and JSON-LD of one route
function pageMeta(route) {
  const lang = route.lang
  if (route.page === 'product') {
    const product = products[route.product]
    const text = product[lang]
    return {
      title: text.title,
      description: text.description,
      ogDescription: text.ogDescription,
      image: product.ogImage,
      imageAlt: text.ogAlt,
      jsonLd: productLd(product, lang, route),
    }
  }
  if (route.page === 'platform') {
    const text = platform[lang]
    return {
      title: text.title,
      description: text.description,
      ogDescription: text.ogDescription,
      image: platform.ogImage,
      imageAlt: text.ogAlt,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'WebApplication',
        name: platform.name,
        applicationCategory: 'MultimediaApplication',
        operatingSystem: 'Web',
        description: text.description,
        inLanguage: lang,
        url: abs(route.path),
        image: SITE_URL + platform.ogImage.src,
        author: { '@type': 'Person', name: AUTHOR.name, url: AUTHOR.url },
      },
    }
  }
  if (route.page === 'home') {
    const text = home[lang]
    return {
      title: text.title,
      description: text.description,
      image: captioner.ogImage,
      imageAlt: text.ogAlt,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'WebSite',
        name: 'Pixplace',
        url: abs(route.path),
        inLanguage: lang,
        publisher: { '@type': 'Person', name: AUTHOR.name, url: AUTHOR.url },
      },
    }
  }
  const legal = {
    imprint: ['Impressum – Pixplace', 'Impressum von pixplace.de: Anbieter und Kontakt.'],
    privacy: ['Datenschutz – Pixplace', 'Datenschutzhinweise für pixplace.de.'],
  }[route.page]
  return { title: legal[0], description: legal[1], noindex: false }
}

export function notFoundMeta() {
  return { title: 'Pixplace', description: '', noindex: true }
}

// List of {tag, attrs} for `path`; unknown paths get the not-found head.
export function headFor(path) {
  const route = findRoute(path)
  const meta = route ? pageMeta(route) : notFoundMeta()
  const tags = []
  const meta_ = (attrs) => tags.push({ tag: 'meta', attrs })
  const link = (attrs) => tags.push({ tag: 'link', attrs })

  if (meta.description) meta_({ name: 'description', content: meta.description })
  if (meta.noindex) meta_({ name: 'robots', content: 'noindex' })
  if (route) {
    link({ rel: 'canonical', href: abs(route.path) })
    const alts = alternates(route)
    if (alts.length > 1) {
      for (const alt of alts) link({ rel: 'alternate', hreflang: alt.lang, href: abs(alt.path) })
      link({ rel: 'alternate', hreflang: 'x-default', href: abs(alts.find((a) => a.lang === 'de').path) })
    }
    meta_({ property: 'og:url', content: abs(route.path) })
    meta_({ property: 'og:type', content: 'website' })
    meta_({ property: 'og:title', content: meta.title })
    meta_({ property: 'og:description', content: meta.ogDescription || meta.description })
    meta_({ property: 'og:locale', content: OG_LOCALE[route.lang] })
    if (meta.image) {
      const image = SITE_URL + meta.image.src
      meta_({ property: 'og:image', content: image })
      meta_({ property: 'og:image:width', content: String(meta.image.width) })
      meta_({ property: 'og:image:height', content: String(meta.image.height) })
      meta_({ property: 'og:image:alt', content: meta.imageAlt })
      meta_({ name: 'twitter:card', content: 'summary_large_image' })
      meta_({ name: 'twitter:image', content: image })
    }
  }
  return { lang: route?.lang || 'de', title: meta.title, tags, jsonLd: meta.jsonLd }
}

// Every tag the site manages carries data-head, so a navigation can drop all of them at once.
export function applyHead(path) {
  const head = headFor(path)
  document.documentElement.lang = head.lang
  document.title = head.title
  document.head.querySelectorAll('[data-head]').forEach((el) => el.remove())
  for (const t of head.tags) {
    const el = document.createElement(t.tag)
    for (const [k, v] of Object.entries(t.attrs)) el.setAttribute(k, v)
    el.setAttribute('data-head', '')
    document.head.appendChild(el)
  }
  if (head.jsonLd) {
    const script = document.createElement('script')
    script.type = 'application/ld+json'
    script.setAttribute('data-head', '')
    script.textContent = JSON.stringify(head.jsonLd)
    document.head.appendChild(script)
  }
}

// Same tags as HTML, for the build.
export function headHtml(path) {
  const head = headFor(path)
  const esc = (s) => String(s).replace(/&/g, '&amp;').replace(/"/g, '&quot;').replace(/</g, '&lt;')
  const lines = head.tags.map(
    (t) => `<${t.tag} ${Object.entries(t.attrs).map(([k, v]) => `${k}="${esc(v)}"`).join(' ')} data-head>`,
  )
  if (head.jsonLd) {
    const json = JSON.stringify(head.jsonLd).replace(/</g, '\\u003c')
    lines.push(`<script type="application/ld+json" data-head>${json}</script>`)
  }
  return { lang: head.lang, title: esc(head.title), html: lines.join('\n    ') }
}

export function sitemapXml() {
  const urls = routes.map((route) => {
    const alts = alternates(route)
    const links = alts.length > 1
      ? alts.map((a) => `\n    <xhtml:link rel="alternate" hreflang="${a.lang}" href="${abs(a.path)}"/>`).join('')
      : ''
    return `  <url>\n    <loc>${abs(route.path)}</loc>${links}\n  </url>`
  })
  return (
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9" xmlns:xhtml="http://www.w3.org/1999/xhtml">\n' +
    urls.join('\n') +
    '\n</urlset>\n'
  )
}
