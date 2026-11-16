<template>
  <section class="hero">
    <div class="container hero__inner">
      <div class="hero__text">
        <p class="label hero__label">
          <img :src="platform.logo" alt="" width="28" height="28" />
          <span>{{ text.kicker }}</span>
        </p>
        <h1>{{ text.heading }}</h1>
        <p class="lead muted">{{ text.lead }}</p>
        <div class="hero__cta">
          <a class="btn btn--primary" :href="demoHref(lang)" @click="trackDemo('hero')">{{ t.demo.label }}</a>
          <RouterLink class="btn" :to="to('platform')">{{ text.platformMore }} →</RouterLink>
        </div>
      </div>
      <figure class="hero__shot">
        <div class="mat">
          <img :src="platform.ogImage.src" :alt="text.heroShot.alt" :width="platform.ogImage.width" :height="platform.ogImage.height" fetchpriority="high" />
        </div>
        <figcaption>
          <span>{{ text.heroShot.caption }}</span>
          <a class="link" href="https://chuc.de" rel="noopener">chuc.de</a>
        </figcaption>
      </figure>
    </div>
  </section>

  <!-- one photo's metadata on the left, the content Pixplace builds from it on the right -->
  <section class="section section--line">
    <div class="container content">
      <div>
        <p class="label"><b>01</b> {{ text.labels.content }}</p>
        <h2>{{ text.contentTitle }}</h2>
        <p class="muted">{{ text.contentText }}</p>
      </div>
      <table class="meta">
        <thead>
          <tr><th scope="col">{{ text.contentHeads.input }}</th><th scope="col">{{ text.contentHeads.output }}</th></tr>
        </thead>
        <tbody>
          <tr v-for="row in text.contentRows" :key="row.field">
            <td>
              <span class="meta__field">{{ row.field }}</span>
              <span class="meta__value">{{ row.value }}</span>
            </td>
            <td class="meta__result">{{ row.result }}</td>
          </tr>
        </tbody>
      </table>
    </div>
  </section>

  <section class="section section--line">
    <div class="container">
      <p class="label"><b>02</b> {{ text.labels.flow }}</p>
      <h2 class="narrow">{{ text.flowTitle }}</h2>
    </div>
    <!-- a contact sheet: one frame per step, edge print above -->
    <div class="container sheet-wrap">
      <ol class="sheet">
        <li v-for="(step, i) in text.flow" :key="i" :class="{ 'frame--here': step.edge === 'Pixplace' }">
          <p class="frame__edge">
            <span class="frame__no">▸ {{ String(i + 1).padStart(2, '0') }}</span>
            <span>{{ step.edge }}</span>
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
      <p class="label"><b>03</b> {{ text.labels.audience }}</p>
      <h2 class="narrow">{{ text.audienceTitle }}</h2>
      <div class="common">
        <div v-for="a in text.audience" :key="a.title">
          <h3>{{ a.title }}</h3>
          <p class="muted">{{ a.text }}</p>
        </div>
      </div>
      <p class="muted hosting">{{ text.hosting }}</p>
    </div>
  </section>

  <section class="section section--line">
    <div class="container uses">
      <div>
        <p class="label"><b>04</b> {{ text.labels.uses }}</p>
        <h2>{{ platformText.usesTitle }}</h2>
      </div>
      <ul>
        <li v-for="use in platformText.uses" :key="use.name">
          <h3>{{ use.name }}</h3>
          <a v-if="use.href" class="link uses__site" :href="use.href" rel="noopener">{{ use.site }}</a>
          <span v-else class="uses__site">{{ use.site }}</span>
          <p class="muted">{{ use.text }}</p>
          <ul v-if="use.facts" class="uses__facts">
            <li v-for="f in use.facts" :key="f">{{ f }}</li>
          </ul>
          <a v-if="use.link" class="link uses__more" :href="use.link.href" rel="noopener">{{ use.link.label }} →</a>
        </li>
      </ul>
    </div>
  </section>

  <section class="section section--line">
    <div class="container">
      <p class="label"><b>05</b> {{ text.labels.companions }}</p>
      <h2>{{ text.companionsTitle }}</h2>
      <p class="muted narrow">{{ text.companionsText }}</p>
      <div class="apps">
        <article v-for="p in productList" :key="p.slug" class="app">
          <RouterLink class="app__shot mat" :to="to(p.slug)" tabindex="-1" aria-hidden="true">
            <img :src="p.homeShot.src" alt="" :width="p.homeShot.width" :height="p.homeShot.height" loading="lazy" />
          </RouterLink>
          <p class="label">{{ text.products[p.slug].tagline }}</p>
          <h3 class="app__name">
            <img :src="p.logo" alt="" width="36" height="36" />
            <RouterLink :to="to(p.slug)">{{ p.name }}</RouterLink>
          </h3>
          <p class="muted">{{ text.products[p.slug].text }}</p>

          <dl v-if="p.slug === 'captioner'" class="demo">
            <dt>{{ text.demo.typedLabel }}</dt>
            <dd><template v-for="(part, k) in split(text.demo.typed, /(#\w+#)/)" :key="k"><mark v-if="k % 2">{{ part }}</mark><template v-else>{{ part }}</template></template></dd>
            <dt>{{ text.demo.resultLabel }}</dt>
            <dd><template v-for="(part, k) in split(text.demo.result, /(-\d+- [^(]+\([^)]+\))/)" :key="k"><mark v-if="k % 2">{{ part }}</mark><template v-else>{{ part }}</template></template></dd>
          </dl>

          <p class="app__links">
            <RouterLink class="link" :to="to(p.slug)">{{ text.products[p.slug].more }} →</RouterLink>
            <RouterLink class="link" :to="to(p.slug, '#license')">{{ text.pricesLink }} →</RouterLink>
          </p>
        </article>
      </div>
    </div>
  </section>

  <section id="contact" class="section section--line">
    <div class="container contact">
      <p class="label"><b>06</b> {{ text.labels.contact }}</p>
      <h2>{{ text.contactTitle }}</h2>
      <p class="muted contact__text">{{ text.contactText }}</p>
      <div class="hero__cta">
        <a class="btn btn--primary" :href="demoHref(lang)" @click="trackDemo('contact')">{{ t.demo.label }}</a>
      </div>
      <a class="contact__mail" :href="`mailto:${CONTACT_EMAIL}`">{{ CONTACT_EMAIL }}</a>
    </div>
  </section>
</template>

<script setup>
import { computed } from 'vue'

import home from '../content/home.js'
import { demoHref } from '../content/ui.js'
import { useLang } from '../lang.js'
import { platform, products } from '../seo.js'
import { CONTACT_EMAIL } from '../site.js'
import { trackEvent } from '../utils/matomo.js'

const { lang, t, to } = useLang()
const text = computed(() => home[lang.value])
const platformText = computed(() => platform[lang.value])
const productList = [products.captioner, products.designdeck]
// split with a capturing group: odd parts are the matches
const split = (s, re) => s.split(re)

function trackDemo(where) {
  trackEvent(platform.matomoCategory, 'Demo request', where)
}
</script>

<style scoped>
.narrow { max-width: 24ch; }
p.narrow { max-width: 64ch; }

/* hero: headline left, the platform itself right, on a mat like a print */
.hero { padding: 64px 0 88px; }
.hero__inner {
  display: grid;
  grid-template-columns: minmax(0, 5fr) minmax(0, 7fr);
  gap: 56px;
  align-items: end;
}
.hero__label { align-items: center; }
.hero__label img { width: 28px; height: 28px; flex: none; }
/* no automatic hyphens: "Hochla-den" reads badly at this size */
.hero h1 { font-size: clamp(40px, 4.8vw, 72px); hyphens: manual; }
.hero__cta { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 28px; }
.hero__shot { margin: 0; }
.hero__shot figcaption {
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

/* metadata → content: an IPTC panel on the left, the result in red on the right */
.content { display: grid; grid-template-columns: minmax(0, 5fr) minmax(0, 7fr); gap: 56px; align-items: start; }
.content p { max-width: 46ch; }
.meta { width: 100%; border-collapse: collapse; font-size: 15px; }
.meta th {
  text-align: left;
  font-family: var(--mono);
  font-size: 12px;
  font-weight: 500;
  color: var(--muted2);
  padding: 0 16px 10px 0;
  border-bottom: 1px solid var(--line2);
}
.meta td { vertical-align: top; padding: 14px 16px 14px 0; border-bottom: 1px solid var(--line); }
.meta td:first-child { width: 46%; }
.meta__field { display: block; font-family: var(--mono); font-size: 11px; letter-spacing: 0.04em; text-transform: uppercase; color: var(--muted2); }
.meta__value { display: block; font-family: var(--mono); font-size: 13.5px; color: var(--text); overflow-wrap: anywhere; }
.meta__result { color: var(--muted); }
.meta__result::before { content: '→ '; color: var(--accent-text); }
@media (max-width: 900px) {
  .content { grid-template-columns: minmax(0, 1fr); gap: 24px; }
}
@media (max-width: 520px) {
  .meta thead { display: none; }
  .meta tr { display: block; padding: 12px 0; border-bottom: 1px solid var(--line); }
  .meta td { display: block; width: auto !important; padding: 0; border: 0; }
  .meta__result { margin-top: 4px; }
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
.frame--here .frame { border-color: var(--accent); }
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
.hosting { margin: 40px 0 0; max-width: 72ch; padding-top: 18px; border-top: 1px solid var(--line); }
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

/* references */
.uses { display: grid; grid-template-columns: minmax(0, 5fr) minmax(0, 7fr); gap: 56px; }
.uses ul { list-style: none; margin: 0; padding: 0; border-top: 1px solid var(--line); }
.uses li { padding: 22px 0; border-bottom: 1px solid var(--line); }
.uses h3 { margin-bottom: 6px; }
.uses__site { display: inline-block; font-family: var(--mono); font-size: 14px; margin-bottom: 8px; }
.uses li p { margin: 0; max-width: 60ch; }
.uses .uses__facts { list-style: none; display: flex; flex-wrap: wrap; gap: 8px; margin: 14px 0 0; padding: 0; border: 0; }
.uses .uses__facts li { padding: 3px 10px; border: 1px solid var(--line2); border-radius: 999px; font-family: var(--mono); font-size: 12.5px; color: var(--text); }
.uses__more { display: inline-block; margin-top: 14px; font-size: 15px; font-weight: 600; }
@media (max-width: 900px) { .uses { grid-template-columns: minmax(0, 1fr); gap: 8px; } }

/* companion apps: two equal columns, smaller than the platform above */
.apps { display: grid; grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 56px; margin-top: 40px; }
.app { display: flex; flex-direction: column; min-width: 0; }
.app__shot { display: block; margin-bottom: 22px; transition: border-color .2s; }
.app__shot:hover { border-color: var(--line2); }
.app .label { margin-bottom: 10px; }
.app__name { display: flex; align-items: center; gap: 12px; font-size: 28px; }
.app__name img { width: 36px; height: 36px; flex: none; }
.app__name a:hover { color: var(--accent-text); }
.app > p.muted { margin: 0; }
.app__links { display: flex; flex-wrap: wrap; gap: 8px 24px; margin: auto 0 0; padding-top: 18px; font-weight: 600; }
@media (max-width: 760px) { .apps { grid-template-columns: minmax(0, 1fr); gap: 56px; } }

/* typed codes → saved caption */
.demo {
  display: grid;
  grid-template-columns: auto minmax(0, 1fr);
  gap: 10px 16px;
  margin: 20px 0 0;
  padding: 14px 0;
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

.contact__text { max-width: 60ch; }
.contact__mail {
  display: inline-block;
  margin-top: 28px;
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
