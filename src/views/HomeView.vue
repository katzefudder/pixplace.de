<template>
  <section class="section hero">
    <div class="container">
      <p class="kicker">{{ text.kicker }}</p>
      <h1 class="hero__title">{{ text.heading }}</h1>
      <p class="lead hero__lead">{{ text.lead }}</p>
    </div>
  </section>

  <section class="section section--tight">
    <div class="container products">
      <RouterLink v-for="p in productList" :key="p.slug" class="card product" :to="to(p.slug)">
        <img class="product__logo" :src="p.logo" :alt="p.name" width="96" height="96" />
        <p class="kicker">{{ text.products[p.slug].tagline }}</p>
        <h2>{{ p.name }}</h2>
        <p class="muted">{{ text.products[p.slug].text }}</p>
        <span class="product__more">{{ text.products[p.slug].more }} →</span>
      </RouterLink>
    </div>
  </section>

  <section class="section section--line">
    <div class="container">
      <h2>{{ text.workflowTitle }}</h2>
      <ol class="steps">
        <li v-for="(step, i) in text.workflow" :key="i" :class="{ 'steps__item--deck': i === text.workflow.length - 1 }">
          <span class="steps__no">{{ i + 1 }}</span>
          <h3>{{ step.title }}</h3>
          <p class="muted">{{ step.text }}</p>
          <span class="steps__app">{{ i === text.workflow.length - 1 ? 'Design Deck' : 'Captioner' }}</span>
        </li>
      </ol>
    </div>
  </section>

  <section class="section section--line">
    <div class="container">
      <h2>{{ text.commonTitle }}</h2>
      <div class="common">
        <div v-for="c in text.common" :key="c.title">
          <h3>{{ c.title }}</h3>
          <p class="muted">{{ c.text }}</p>
        </div>
      </div>
    </div>
  </section>

  <section id="prices" class="section section--line">
    <div class="container">
      <h2>{{ text.pricesTitle }}</h2>
      <p class="muted">{{ text.pricesText }}</p>
      <div class="products">
        <div v-for="p in productList" :key="p.slug" class="card">
          <h3>{{ p.name }}</h3>
          <PriceTable :product="p" />
          <RouterLink class="link" :to="to(p.slug, '#license')">{{ text.products[p.slug].more }} →</RouterLink>
        </div>
      </div>
    </div>
  </section>

  <section id="contact" class="section section--line">
    <div class="container contact">
      <div>
        <h2>{{ text.contactTitle }}</h2>
        <p class="muted">{{ text.contactText }}</p>
      </div>
      <a class="btn btn--primary btn--wide" :href="`mailto:${CONTACT_EMAIL}`">{{ CONTACT_EMAIL }}</a>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

import PriceTable from '../components/PriceTable.vue'
import home from '../content/home.js'
import { useLang } from '../lang.js'
import { products } from '../seo.js'
import { CONTACT_EMAIL } from '../site.js'

const { lang, to } = useLang()
const text = computed(() => home[lang.value])
const productList = [products.captioner, products.designdeck]
</script>

<style scoped>
.hero { padding-bottom: 24px; }
.hero__title { font-size: clamp(38px, 6vw, 72px); max-width: 14ch; }
.hero__lead { max-width: 60ch; color: var(--muted); }

.section--tight { padding-top: 24px; }
.products { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 24px; }
@media (max-width: 760px) { .products { grid-template-columns: minmax(0, 1fr); } }
.product { display: flex; flex-direction: column; padding: 26px; transition: border-color .2s, transform .2s; }
.product:hover { border-color: var(--stroke2); transform: translateY(-2px); }
.product__logo { width: 96px; height: 96px; border-radius: 22px; margin-bottom: 18px; }
.product__more { margin-top: auto; padding-top: 8px; color: var(--accent); font-weight: 600; }

.steps {
  list-style: none;
  padding: 0;
  margin: 18px 0 0;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 14px;
  counter-reset: none;
}
.steps li {
  position: relative;
  padding: 18px 16px;
  border: 1px solid var(--stroke);
  border-radius: var(--radius);
  background: var(--panel);
}
.steps h3 { font-size: 17px; margin-top: 10px; }
.steps p { margin: 0 0 12px; font-size: 14px; }
.steps__no {
  display: inline-grid;
  place-items: center;
  width: 28px;
  height: 28px;
  border-radius: 999px;
  background: var(--panel2);
  font-weight: 700;
  font-size: 14px;
}
.steps__app { font-size: 12px; color: var(--muted2); text-transform: uppercase; letter-spacing: .1em; }
.steps__item--deck { border-color: var(--accent-soft); }
.steps__item--deck .steps__app { color: var(--accent); }
@media (max-width: 900px) { .steps { grid-template-columns: minmax(0, 1fr); } }

.common { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); gap: 24px; margin-top: 18px; }
.common h3 { font-size: 18px; }
@media (max-width: 900px) { .common { grid-template-columns: repeat(2, minmax(0, 1fr)); } }
@media (max-width: 520px) { .common { grid-template-columns: minmax(0, 1fr); } }

.contact { display: flex; justify-content: space-between; align-items: center; gap: 24px; flex-wrap: wrap; }
.contact > div { max-width: 60ch; }
</style>
