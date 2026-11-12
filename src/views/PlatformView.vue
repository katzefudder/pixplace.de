<template>
  <div :key="lang">
    <section class="hero">
      <div class="container">
        <p class="label hero__label">
          <img :src="platform.logo" alt="" width="56" height="56" />
          <span>{{ text.kicker }}</span>
        </p>
        <h1>{{ platform.name }}</h1>
        <div class="hero__body">
          <p class="lead">{{ text.lead }}</p>
          <p class="muted hero__intro">{{ text.intro }}</p>
          <div class="hero__cta">
            <a class="btn btn--primary" :href="platform.handout" target="_blank" rel="noopener" @click="trackHandout">
              {{ text.handoutLabel }}
            </a>
            <RouterLink class="btn" :to="to('home', '#contact')">{{ text.contactLabel }}</RouterLink>
          </div>
        </div>
      </div>
    </section>

    <section class="shots">
      <div class="container">
        <h2 class="label">{{ text.screensTitle }}</h2>
        <ScreenshotGallery id="platform-screens" layout="figures" even :images="platform.screens" />
      </div>
    </section>

    <section class="section section--line">
      <div class="container why">
        <h2>{{ text.whyTitle }}</h2>
        <div>
          <p v-for="(p, i) in text.why" :key="i" class="muted">{{ p }}</p>
        </div>
      </div>
    </section>

    <section class="section section--line">
      <div class="container">
        <h2>{{ text.stepsTitle }}</h2>
        <ol class="gains">
          <li v-for="(step, i) in text.steps" :key="i">
            <span class="gains__no">{{ String(i + 1).padStart(2, '0') }}</span>
            <span><strong>{{ step.title }}</strong> <span v-html="step.text"></span></span>
          </li>
        </ol>
      </div>
    </section>

    <!-- contact sheet like the home page's workflow: one frame per phase -->
    <section class="section section--line">
      <div class="container">
        <p class="label">{{ text.pipelineLabel }}</p>
        <h2>{{ text.pipelineTitle }}</h2>
        <p class="muted narrow">{{ text.pipelineText }}</p>
        <ol class="sheet">
          <li v-for="(phase, i) in text.phases" :key="phase.title">
            <p class="frame__edge">
              <span class="frame__no">▸ {{ String(i + 1).padStart(2, '0') }}</span>
              <span>{{ phase.title }}</span>
            </p>
            <div class="frame">
              <h3>{{ phase.title }}</h3>
              <ul>
                <li v-for="(item, k) in phase.items" :key="k" v-html="item"></li>
              </ul>
              <dl class="sample">
                <template v-for="([input, result], k) in phase.sample" :key="k">
                  <dt>{{ input }}</dt>
                  <dd>→ {{ result }}</dd>
                </template>
              </dl>
            </div>
          </li>
        </ol>
      </div>
    </section>

    <section v-for="group in text.groups" :key="group.title" class="section section--line">
      <div class="container">
        <h2>{{ group.title }}</h2>
        <div class="features">
          <div v-for="f in group.features" :key="f.title" class="feature">
            <h3>{{ f.title }}</h3>
            <p class="muted" v-html="f.html"></p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--line">
      <div class="container">
        <dl class="facts">
          <div v-for="f in text.facts" :key="f.value">
            <dt>{{ f.value }}</dt>
            <dd class="muted">{{ f.text }}</dd>
          </div>
        </dl>
      </div>
    </section>

    <section class="section section--line">
      <div class="container">
        <h2>{{ text.familyTitle }}</h2>
        <div class="family">
          <div v-for="tool in family" :key="tool.key" :class="['tool', { 'tool--here': tool.key === 'platform' }]">
            <p class="label"><b>{{ text.family[tool.key].step }}</b></p>
            <h3>
              <img :src="tool.logo" alt="" width="28" height="28" />
              <RouterLink v-if="tool.key !== 'platform'" :to="to(tool.key)">{{ tool.name }}</RouterLink>
              <span v-else>{{ tool.name }}</span>
            </h3>
            <p class="muted">{{ text.family[tool.key].text }}</p>
          </div>
        </div>
      </div>
    </section>

    <section class="section section--line">
      <div class="container uses">
        <div>
          <p class="label">{{ text.usesLabel }}</p>
          <h2>{{ text.usesTitle }}</h2>
        </div>
        <ul>
          <li v-for="use in text.uses" :key="use.name">
            <h3>{{ use.name }}</h3>
            <a v-if="use.href" class="link uses__site" :href="use.href" rel="noopener">{{ use.site }}</a>
            <span v-else class="uses__site">{{ use.site }}</span>
            <p class="muted">{{ use.text }}</p>
          </li>
        </ul>
      </div>
    </section>
  </div>
</template>

<script setup>
import { computed } from 'vue'

import ScreenshotGallery from '../components/ScreenshotGallery.vue'
import { useLang } from '../lang.js'
import { platform, products } from '../seo.js'
import { trackEvent } from '../utils/matomo.js'

const { lang, to } = useLang()
const text = computed(() => platform[lang.value])
const family = [
  { key: 'captioner', name: products.captioner.name, logo: products.captioner.logo },
  { key: 'platform', name: platform.name, logo: platform.logo },
  { key: 'designdeck', name: products.designdeck.name, logo: products.designdeck.logo },
]

function trackHandout() {
  trackEvent(platform.matomoCategory, 'Download', 'handout')
}
</script>

<style scoped>
.hero { padding: 56px 0 48px; }
.hero__label { align-items: center; gap: 16px; margin-bottom: 24px; }
.hero__label img { width: 56px; height: 56px; flex: none; }
.hero h1 { margin-bottom: 24px; }
.hero__body { max-width: 760px; }
.hero__intro { margin: 0; }
.hero__cta { display: flex; gap: 10px; flex-wrap: wrap; margin-top: 28px; }
@media (max-width: 760px) {
  .hero { padding: 36px 0 32px; }
  .hero__label img { width: 44px; height: 44px; }
}

.shots { padding-bottom: 88px; }
.shots .label { margin: 0; font-weight: 500; letter-spacing: 0.02em; line-height: 1.5; }
@media (max-width: 760px) { .shots { padding-bottom: 56px; } }

.narrow { max-width: 68ch; }

.why { display: grid; grid-template-columns: minmax(0, 5fr) minmax(0, 7fr); gap: 56px; }
.why p { margin: 0 0 14px; font-size: 18px; max-width: 60ch; }
@media (max-width: 900px) { .why { grid-template-columns: minmax(0, 1fr); gap: 8px; } }

.gains { list-style: none; margin: 28px 0 0; padding: 0; border-top: 1px solid var(--line); max-width: 880px; }
.gains li {
  display: grid;
  grid-template-columns: 48px minmax(0, 1fr);
  padding: 14px 0;
  border-bottom: 1px solid var(--line);
  font-size: 18px;
  color: var(--muted);
}
.gains strong { color: var(--text); font-weight: 600; }
.gains__no { font-family: var(--mono); font-size: 13px; padding-top: 4px; color: var(--accent-text); }

/* contact sheet */
.sheet {
  list-style: none;
  margin: 32px 0 0;
  padding: 14px 14px 18px;
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
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
  display: flex;
  flex-direction: column;
  height: calc(100% - 26px);
  padding: 20px 18px;
  background: var(--bg);
  border: 1px solid var(--line2);
}
.frame h3 { font-size: 26px; }
.frame ul { list-style: none; margin: 0 0 20px; padding: 0; display: flex; flex-direction: column; gap: 10px; font-size: 15px; color: var(--muted); }
.frame li { position: relative; padding-left: 16px; }
.frame li::before { content: ''; position: absolute; left: 0; top: 0.75em; width: 8px; height: 1px; background: var(--accent); }
.frame :deep(strong) { color: var(--text); font-weight: 600; }
.sample {
  margin: auto 0 0;
  padding-top: 14px;
  border-top: 1px solid var(--line);
  font-family: var(--mono);
  font-size: 12.5px;
  line-height: 1.6;
  overflow-wrap: anywhere;
}
.sample dt { color: var(--text); }
.sample dd { margin: 0 0 6px; color: var(--accent-text); }
.sample dd:last-child { margin-bottom: 0; }
@media (max-width: 900px) {
  .sheet { grid-template-columns: minmax(0, 1fr); }
  .frame { height: auto; }
}

.features { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 48px 48px; margin-top: 32px; }
.feature { border-top: 2px solid var(--text); padding-top: 18px; }
.feature h3 { font-size: 22px; }
.feature p { margin: 0; }
@media (max-width: 900px) { .features { grid-template-columns: repeat(2, minmax(0, 1fr)); gap: 40px; } }
@media (max-width: 600px) { .features { grid-template-columns: minmax(0, 1fr); } }

/* spec sheet: four columns divided by hairlines */
.facts { display: grid; grid-template-columns: repeat(4, minmax(0, 1fr)); margin: 0; border-top: 1px solid var(--line); }
.facts > div { padding: 22px 24px 0 0; }
.facts > div + div { padding-left: 24px; border-left: 1px solid var(--line); }
.facts dt { font-size: 34px; font-weight: 750; font-stretch: 78%; line-height: 1.1; margin-bottom: 6px; }
.facts dd { margin: 0; }
@media (max-width: 900px) {
  .facts { grid-template-columns: repeat(2, minmax(0, 1fr)); }
  .facts > div:nth-child(3) { border-left: 0; padding-left: 0; }
  .facts > div:nth-child(n+3) { margin-top: 12px; }
}
@media (max-width: 520px) {
  .facts { grid-template-columns: minmax(0, 1fr); }
  .facts > div,
  .facts > div + div { padding: 18px 0; border-left: 0; margin-top: 0; }
  .facts > div + div { border-top: 1px solid var(--line); }
}

.family { display: grid; grid-template-columns: repeat(3, minmax(0, 1fr)); gap: 10px; margin-top: 32px; }
.tool { padding: 20px 18px; border: 1px solid var(--line2); background: var(--bg2); }
.tool--here { border-color: var(--accent); }
.tool .label { margin-bottom: 10px; }
.tool h3 { display: flex; align-items: center; gap: 10px; font-size: 22px; }
.tool h3 img { width: 28px; height: 28px; flex: none; }
.tool h3 a:hover { color: var(--accent-text); }
.tool p:last-child { margin: 0; }
@media (max-width: 900px) { .family { grid-template-columns: minmax(0, 1fr); } }

.uses { display: grid; grid-template-columns: minmax(0, 5fr) minmax(0, 7fr); gap: 56px; }
.uses ul { list-style: none; margin: 0; padding: 0; border-top: 1px solid var(--line); }
.uses li { padding: 22px 0; border-bottom: 1px solid var(--line); }
.uses h3 { margin-bottom: 6px; }
.uses__site { display: inline-block; font-family: var(--mono); font-size: 14px; margin-bottom: 8px; }
.uses li p { margin: 0; max-width: 60ch; }
@media (max-width: 900px) { .uses { grid-template-columns: minmax(0, 1fr); gap: 8px; } }
</style>
