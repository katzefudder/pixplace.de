<template>
  <!-- key: Captioner ↔ Design Deck reuse this view, the galleries must be rebuilt -->
  <div :key="product.slug + lang">
    <section class="section">
      <div class="container hero">
        <img class="hero__logo" :src="product.logo" :alt="product.name" width="220" height="220" />
        <div>
          <p class="kicker">{{ text.kicker }}</p>
          <h1>{{ product.name }}</h1>
          <p class="lead">{{ text.lead }}</p>
          <p class="muted" v-html="text.intro"></p>
          <ReleaseDownloads :product="product" />
        </div>
      </div>
    </section>

    <section v-for="g in product.galleriesFirst || []" :key="g.id" class="section section--line">
      <div class="container">
        <h2>{{ text.galleryTitles[g.id].title }}</h2>
        <ScreenshotGallery :id="g.id" :images="g.images" :layout="g.layout" />
      </div>
    </section>

    <section class="section section--line">
      <div class="container">
        <h2>{{ text.gainsTitle }}</h2>
        <ul class="gains">
          <li v-for="(gain, i) in text.gains" :key="i" v-html="gain"></li>
        </ul>

        <div class="features">
          <div v-for="f in text.features" :key="f.title" class="card">
            <h3>{{ f.title }}</h3>
            <p class="muted" v-html="f.html"></p>
          </div>
        </div>

        <div v-for="g in product.galleries" :key="g.id" class="card">
          <h3>{{ text.galleryTitles[g.id].title }}</h3>
          <p v-if="text.galleryTitles[g.id].text" class="muted">{{ text.galleryTitles[g.id].text }}</p>
          <ScreenshotGallery :id="g.id" :images="g.images" :layout="g.layout" />
        </div>

        <div id="license" class="card">
          <h3>{{ t.prices.title }}</h3>
          <p class="muted">{{ text.trial }}</p>
          <PriceTable :product="product" />
          <p class="tiny">{{ t.prices.vat }}</p>
          <p class="muted" v-html="text.howToBuy"></p>
        </div>

        <div class="card">
          <p class="muted" v-html="text.install"></p>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'
import { useRoute } from 'vue-router'

import PriceTable from '../components/PriceTable.vue'
import ReleaseDownloads from '../components/ReleaseDownloads.vue'
import ScreenshotGallery from '../components/ScreenshotGallery.vue'
import { useLang } from '../lang.js'
import { products } from '../seo.js'

const route = useRoute()
const { lang, t } = useLang()
const product = computed(() => products[route.meta.product])
const text = computed(() => product.value[lang.value])
</script>

<style scoped>
.hero {
  display: grid;
  grid-template-columns: 220px 1fr;
  gap: 40px;
  align-items: center;
}
.hero__logo { width: 220px; height: 220px; border-radius: 44px; box-shadow: var(--shadow); }
@media (max-width: 760px) {
  .hero { grid-template-columns: 1fr; gap: 24px; }
  .hero__logo { width: 120px; height: 120px; border-radius: 26px; }
}

.gains { margin: 14px 0 28px; padding-left: 1.2em; display: grid; gap: 6px; color: var(--muted); line-height: 1.5; }
.gains :deep(strong) { color: var(--text); }

.features {
  display: grid;
  grid-template-columns: repeat(2, minmax(0, 1fr));
  gap: 0 24px;
}
@media (max-width: 760px) { .features { grid-template-columns: minmax(0, 1fr); } }
</style>
