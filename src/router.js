import { nextTick } from 'vue'
import { createRouter, createWebHistory } from 'vue-router'

import { routes } from './routes.js'
import { applyHead } from './seo.js'
import { trackPageView } from './utils/matomo.js'
import HomeView from './views/HomeView.vue'

const pages = {
  home: HomeView,
  product: () => import('./views/ProductView.vue'),
  imprint: () => import('./views/ImprintView.vue'),
  privacy: () => import('./views/PrivacyView.vue'),
}

const router = createRouter({
  history: createWebHistory(),
  routes: [
    ...routes.map((r) => ({
      path: r.path,
      component: pages[r.page],
      meta: { lang: r.lang, key: r.key, product: r.product },
    })),
    // unknown paths; useLang() takes the language from the /en prefix
    {
      path: '/:pathMatch(.*)*',
      component: () => import('./views/NotFoundView.vue'),
    },
  ],
  scrollBehavior(to, from, saved) {
    if (saved) return saved
    if (to.hash) return { el: to.hash, top: 80 }
    return { top: 0 }
  },
})

router.afterEach(async (to, from, failure) => {
  if (failure) return
  applyHead(to.path)
  // the first page view is tracked by initMatomo()
  if (!from.matched.length || to.path === from.path) return
  await nextTick()
  trackPageView(to, from)
})

export default router
