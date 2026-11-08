<template>
  <section class="hero">
    <div class="container hero__inner">
      <div class="hero__text">
        <p class="label">{{ text.kicker }}</p>
        <h1>{{ text.heading }}</h1>
        <p class="lead muted">{{ text.lead }}</p>
        <div class="hero__cta">
          <RouterLink v-for="p in productList" :key="p.slug" class="btn" :to="to(p.slug)">
            <img :src="p.logo" alt="" width="22" height="22" /> {{ p.name.replace('Pixplace ', '') }}
          </RouterLink>
        </div>
      </div>
      <figure class="hero__photo">
        <img src="/images/designdeck/designdeck-border.jpg" :alt="text.heroPhoto.alt" width="1600" height="1067" fetchpriority="high" />
        <figcaption>
          <span>{{ text.heroPhoto.caption }}</span><span>{{ text.heroPhoto.credit }}</span>
        </figcaption>
      </figure>
    </div>
  </section>

  <section class="section section--line">
    <div class="container">
      <article v-for="(p, i) in productList" :key="p.slug" :class="['product', { 'product--flip': i % 2 }]">
        <RouterLink class="product__shot mat" :to="to(p.slug)" tabindex="-1" aria-hidden="true">
          <img :src="p.homeShot.src" alt="" :width="p.homeShot.width" :height="p.homeShot.height" loading="lazy" />
        </RouterLink>
        <div class="product__text">
          <p class="label"><b>0{{ i + 1 }}</b> {{ text.products[p.slug].tagline }}</p>
          <h2 class="product__name">
            <img :src="p.logo" alt="" width="48" height="48" />
            <RouterLink :to="to(p.slug)">{{ p.name }}</RouterLink>
          </h2>
          <p class="muted">{{ text.products[p.slug].text }}</p>

          <dl v-if="p.slug === 'captioner'" class="demo">
            <dt>{{ text.demo.typedLabel }}</dt>
            <dd><template v-for="(part, k) in split(text.demo.typed, /(#\w+#)/)" :key="k"><mark v-if="k % 2">{{ part }}</mark><template v-else>{{ part }}</template></template></dd>
            <dt>{{ text.demo.resultLabel }}</dt>
            <dd><template v-for="(part, k) in split(text.demo.result, /(-\d+- [^(]+\([^)]+\))/)" :key="k"><mark v-if="k % 2">{{ part }}</mark><template v-else>{{ part }}</template></template></dd>
          </dl>

          <RouterLink class="link product__more" :to="to(p.slug)">{{ text.products[p.slug].more }} →</RouterLink>
        </div>
      </article>
    </div>
  </section>

  <section class="section section--line">
    <div class="container">
      <p class="label"><b>03</b> {{ text.labels.workflow }}</p>
      <h2>{{ text.workflowTitle }}</h2>
    </div>
    <!-- a contact sheet: one frame per step, edge print above -->
    <div class="container sheet-wrap">
      <ol class="sheet">
        <li v-for="(step, i) in text.workflow" :key="i" :class="{ 'frame--deck': i === text.workflow.length - 1 }">
          <p class="frame__edge">
            <span class="frame__no">▸ {{ String(i + 1).padStart(2, '0') }}</span>
            <span>{{ i === text.workflow.length - 1 ? 'Design Deck' : 'Captioner' }}</span>
          </p>
          <div class="frame">
            <h3>{{ step.title }}</h3>
            <p>{{ step.text }}</p>
          </div>
        </li>
      </ol>
    </div>
  </section>

  <section class="section section--line">
    <div class="container">
      <p class="label"><b>04</b> {{ text.labels.common }}</p>
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
      <p class="label"><b>05</b> {{ text.labels.prices }}</p>
      <h2>{{ text.pricesTitle }}</h2>
      <p class="muted">{{ text.pricesText }}</p>
      <div class="price-cols">
        <div v-for="p in productList" :key="p.slug">
          <h3>{{ p.name }}</h3>
          <PriceTable :product="p" />
          <RouterLink class="link" :to="to(p.slug, '#license')">{{ text.products[p.slug].more }} →</RouterLink>
        </div>
      </div>
    </div>
  </section>

  <section id="contact" class="section section--line">
    <div class="container contact">
      <p class="label"><b>06</b> {{ text.labels.contact }}</p>
      <h2>{{ text.contactTitle }}</h2>
      <p class="muted contact__text">{{ text.contactText }}</p>
      <a class="contact__mail" :href="`mailto:${CONTACT_EMAIL}`">{{ CONTACT_EMAIL }}</a>
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
// split with a capturing group: odd parts are the matches
const split = (s, re) => s.split(re)
</script>

<style scoped>
/* hero: headline left, a real photo right, captioned like a press print */
.hero { padding: 64px 0 88px; }
.hero__inner {
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
  gap: 56px;
  align-items: end;
}
.hero h1 { font-size: clamp(44px, 5.6vw, 84px); }
.hero__cta { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 28px; }
.hero__cta img { width: 22px; height: 22px; }
.hero__photo { margin: 0; }
.hero__photo img { width: 100%; height: auto; }
.hero__photo figcaption {
  font-family: var(--mono);
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  gap: 2px 16px;
  margin-top: 10px;
  font-size: 12px;
  color: var(--muted2);
}
@media (max-width: 900px) {
  .hero { padding: 40px 0 56px; }
  .hero__inner { grid-template-columns: minmax(0, 1fr); gap: 36px; }
}

/* products: big app window on a mat, text beside it */
.product {
  display: grid;
  grid-template-columns: minmax(0, 7fr) minmax(0, 5fr);
  gap: 56px;
  align-items: center;
}
.product + .product { margin-top: 96px; }
.product--flip .product__shot { order: 2; }
.product__shot { display: block; transition: border-color .2s; }
.product__shot:hover { border-color: var(--line2); }
.product__name { display: flex; align-items: center; gap: 14px; }
.product__name img { width: 48px; height: 48px; flex: none; }
.product__name a:hover { color: var(--accent-text); }
.product__more { display: inline-block; margin-top: 8px; font-weight: 600; }
@media (max-width: 900px) {
  .product { grid-template-columns: minmax(0, 1fr); gap: 24px; }
  .product--flip .product__shot { order: 0; }
  .product + .product { margin-top: 64px; }
}

/* typed codes → saved caption */
.demo {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 10px 16px;
  margin: 24px 0;
  padding: 16px 0;
  border-top: 1px solid var(--line);
  border-bottom: 1px solid var(--line);
  font-family: var(--mono);
  font-size: 13px;
  line-height: 1.6;
}
.demo dt { color: var(--muted2); }
.demo dd { margin: 0; }
.demo mark { background: none; color: var(--accent-text); }
@media (max-width: 520px) {
  .demo { grid-template-columns: minmax(0, 1fr); gap: 2px; }
  .demo dd + dt { margin-top: 10px; }
}

/* contact sheet */
.sheet-wrap { margin-top: 32px; }
.sheet {
  list-style: none;
  margin: 0;
  padding: 14px 14px 18px;
  display: grid;
  grid-template-columns: repeat(5, minmax(0, 1fr));
  gap: 10px;
  background: var(--bg2);
  border: 1px solid var(--line);
}
.frame__edge {
  display: flex;
  justify-content: space-between;
  margin: 0 2px 8px;
  font-family: var(--mono);
  font-size: 11px;
  letter-spacing: 0.04em;
  text-transform: uppercase;
  color: var(--muted2);
}
.frame__no { color: var(--accent-text); font-weight: 500; }
.frame {
  height: calc(100% - 26px);
  min-height: 190px;
  padding: 18px 16px;
  background: var(--bg);
  border: 1px solid var(--line2);
}
.frame h3 { font-size: 21px; }
.frame p { margin: 0; font-size: 14px; color: var(--muted); }
.frame--deck .frame { border-color: var(--accent); }
@media (max-width: 900px) {
  /* scroll the strip like a film strip on a light table */
  .sheet-wrap { width: 100%; padding: 0 var(--gutter); overflow-x: auto; scroll-snap-type: x mandatory; scroll-padding: 0 var(--gutter); }
  .sheet { grid-template-columns: repeat(5, 72vw); width: max-content; }
  .sheet li { scroll-snap-align: start; scroll-margin-left: 15px; }
  .frame { min-height: 160px; }
}

/* spec sheet: four columns divided by hairlines */
.common { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); margin-top: 32px; border-top: 1px solid var(--line); }
.common > div { padding: 22px 24px 0 0; }
.common > div + div { padding-left: 24px; border-left: 1px solid var(--line); }
.common h3 { font-size: 22px; }
.common p { margin: 0; }
@media (max-width: 900px) {
  .common { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .common > div:nth-child(3) { border-left: 0; padding-left: 0; }
  .common > div:nth-child(n+3) { margin-top: 12px; }
}
@media (max-width: 520px) {
  .common { grid-template-columns: minmax(0, 1fr); }
  .common > div,
  .common > div + div { padding: 18px 0; border-left: 0; margin-top: 0; }
  .common > div + div { border-top: 1px solid var(--line); }
}

.price-cols { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 56px; margin-top: 32px; }
.price-cols h3 { font-size: 26px; }
@media (max-width: 760px) { .price-cols { grid-template-columns: minmax(0, 1fr); gap: 40px; } }

.contact__text { max-width: 60ch; }
.contact__mail {
  display: inline-block;
  margin-top: 20px;
  font-size: clamp(28px, 5vw, 60px);
  font-weight: 750;
  font-stretch: 78%;
  letter-spacing: -0.01em;
  line-height: 1.1;
  border-bottom: 3px solid var(--accent);
  overflow-wrap: anywhere;
}
.contact__mail:hover { color: var(--accent-text); }
</style>
