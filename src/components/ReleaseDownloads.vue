<template>
  <div class="download">
    <a class="btn btn--primary" :href="release.dmg" @click="track('dmg')">
      {{ fill(t.download.dmg, { version: release.version }).replace('  ', ' ') }}
    </a>
    <a class="btn" :href="release.pkg" @click="track('pkg')">{{ t.download.pkg }}</a>
    <a class="btn" :href="release.exe" @click="track('exe')">{{ t.download.exe }}</a>
  </div>
  <p class="tiny meta">
    {{ t.download.trial }}<span v-if="release.date"> · {{ fill(t.download.published, { date: release.date }) }}</span>
    · {{ fill(text.requirements, { minMacos: release.minMacos || '26' }) }}
  </p>
  <p v-if="text.extraLinks?.length" class="docs">
    <a
      v-for="link in text.extraLinks"
      :key="link.href"
      class="link"
      :href="link.href"
      target="_blank"
      rel="noopener"
      @click="track(link.track)"
    >{{ link.label }}</a>
  </p>
</template>

<script setup>
import { computed, onMounted, reactive } from 'vue'

import { fill } from '../content/ui.js'
import { useLang } from '../lang.js'
import { DOWNLOADS } from '../site.js'
import { trackEvent } from '../utils/matomo.js'

const props = defineProps({ product: { type: Object, required: true } })
const { lang, t } = useLang()
const text = computed(() => props.product[lang.value])

// latest.json comes from the app's release workflow (job "bunny"); until it has loaded,
// or if it can't be read (offline, no CORS), the stable latest/ names are used.
const base = `${DOWNLOADS}/${props.product.slug}`
const release = reactive({
  version: '',
  date: '',
  minMacos: '',
  dmg: `${base}/${props.product.files.dmg}`,
  pkg: `${base}/${props.product.files.pkg}`,
  exe: `${base}/${props.product.files.exe}`,
})

// Matomo goal: event category = product, action "Download"
function track(type) {
  trackEvent(props.product.matomoCategory, 'Download', `${type} ${release.version || 'latest'}`)
}

onMounted(async () => {
  try {
    const res = await fetch(`${base}/latest.json`, { cache: 'no-cache' })
    if (!res.ok) return
    const data = await res.json()
    release.version = data.version || ''
    release.minMacos = data.min_macos || ''
    if (data.date) {
      release.date = new Date(data.date).toLocaleDateString(t.value.locale, {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
    }
    for (const kind of ['dmg', 'pkg', 'exe']) {
      if (data.files?.[kind]) release[kind] = `${base}/${data.files[kind]}`
    }
  } catch {
    // stay with the latest/ links
  }
})
</script>

<style scoped>
.download { display: flex; gap: 8px; flex-wrap: wrap; margin: 28px 0 12px; }
.docs { display: flex; gap: 6px 24px; flex-wrap: wrap; margin: 18px 0 0; font-size: 15px; }
.meta { font-family: var(--mono); font-size: 12px; margin: 0; }
</style>
