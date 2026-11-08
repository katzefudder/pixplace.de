<template>
  <!-- key: Captioner ↔ Design Deck reuse this view, the galleries must be rebuilt -->
  <div :key="product.slug + lang">
    <section class="hero">
      <div class="container">
        <p class="label hero__label">
          <img :src="product.logo" alt="" width="56" height="56" />
          <span>{{ text.kicker }}</span>
        </p>
        <h1>{{ product.name }}</h1>
        <div class="hero__body">
          <p class="lead">{{ text.lead }}</p>
          <p class="muted hero__intro" v-html="text.intro"></p>
          <ReleaseDownloads :product="product" />
        </div>
      </div>
    </section>

    <section v-for="g in product.galleriesFirst || []" :key="g.id" class="shots">
      <div class="container">
        <h2 class="label">{{ text.galleryTitles[g.id].title }}</h2>
        <ScreenshotGallery :id="g.id" :images="g.images" :layout="g.layout" />
      </div>
    </section>

    <section class="section section--line">
      <div class="container">
        <h2>{{ text.gainsTitle }}</h2>
        <ol class="gains">
          <li v-for="(gain, i) in text.gains" :key="i">
            <span class="gains__no">{{ String(i + 1).padStart(2, '0') }}</span>
            <span v-html="gain"></span>
          </li>
        </ol>
      </div>
    </section>

    <section class="section section--line">
      <div class="container features">
        <div v-for="f in text.features" :key="f.title" class="feature">
          <h3>{{ f.title }}</h3>
          <p class="muted" v-html="f.html"></p>
        </div>
      </div>
    </section>

    <section v-for="g in product.galleries" :key="g.id" class="section section--line">
      <div class="container">
        <h2>{{ text.galleryTitles[g.id].title }}</h2>
        <p v-if="text.galleryTitles[g.id].text" class="muted narrow">{{ text.galleryTitles[g.id].text }}</p>
        <ScreenshotGallery :id="g.id" :images="g.images" :layout="g.layout" />
      </div>
    </section>

    <section id="license" class="section section--line">
      <div class="container license">
        <div>
          <h2>{{ t.prices.title }}</h2>
          <p class="muted">{{ text.trial }}</p>
          <p class="muted" v-html="text.howToBuy"></p>
        </div>
        <div>
          <PriceTable :product="product" />
          <p class="tiny">{{ t.prices.vat }}</p>
        </div>
      </div>
      <div class="container">
        <aside class="note"><p v-html="text.install"></p></aside>
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
.hero { padding: 56px 0 48px; }
.hero__label { align-items: center; gap: 16px; margin-bottom: 24px; }
.hero__label img { width: 56px; height: 56px; flex: none; }
.hero h1 { margin-bottom: 24px; }
.hero__body { max-width: 760px; }
.hero__intro { margin: 0; }
@media (max-width: 760px) {
  .hero { padding: 36px 0 32px; }
  .hero__label img { width: 44px; height: 44px; }
}

.shots { padding-bottom: 88px; }
.shots .label { margin: 0; font-weight: 500; letter-spacing: 0.02em; line-height: 1.5; }
@media (max-width: 760px) { .shots { padding-bottom: 56px; } }

.narrow { max-width: 68ch; }

.gains { list-style: none; margin: 28px 0 0; padding: 0; border-top: 1px solid var(--line); max-width: 880px; }
.gains li {
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr);
  padding: 14px 0;
  border-bottom: 1px solid var(--line);
  font-size: 18px;
  color: var(--muted);
}
.gains :deep(strong) { color: var(--text); font-weight: 600; }
.gains__no { font-family: var(--mono); font-size: 13px; padding-top: 4px; color: var(--accent-text); }

.features { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 56px 64px; }
.feature { border-top: 2px solid var(--text); padding-top: 18px; }
.feature p { margin: 0; }
@media (max-width: 760px) { .features { grid-template-columns: minmax(0, 1fr); gap: 40px; } }

.license { display: grid; grid-template-columns: minmax(0, 7fr) minmax(0, 5fr); gap: 56px; }
.license > div:last-child { padding-top: 62px; }
@media (max-width: 900px) {
  .license { grid-template-columns: minmax(0, 1fr); gap: 8px; }
  .license > div:last-child { padding-top: 0; }
}

.note { margin-top: 56px; padding: 4px 0 4px 18px; border-left: 2px solid var(--accent); max-width: 880px; }
.note p { margin: 0; font-size: 14px; color: var(--muted); }
.note :deep(strong) { color: var(--text); }
</style>
