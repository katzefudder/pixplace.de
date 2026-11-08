import { computed } from 'vue'
import { useRoute } from 'vue-router'

import { ui } from './content/ui.js'
import { pathOf } from './routes.js'

// Language of the current page plus helpers for links in that language.
export function useLang() {
  const route = useRoute()
  const lang = computed(() => route.meta.lang || (/^\/en(\/|$)/.test(route.path) ? 'en' : 'de'))
  return {
    lang,
    t: computed(() => ui[lang.value]),
    to: (key, hash = '') => pathOf(key, lang.value) + hash,
    // same page in the other language (the legal pages exist in German only)
    other: computed(() => {
      const target = lang.value === 'de' ? 'en' : 'de'
      return route.meta.key ? pathOf(route.meta.key, target) : pathOf('home', target)
    }),
  }
}

export function formatPrice(value, lang) {
  return new Intl.NumberFormat(ui[lang].locale, { style: 'currency', currency: 'EUR' }).format(value)
}
