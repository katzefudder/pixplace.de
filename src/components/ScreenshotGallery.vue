<template>
  <div :id="id" :class="layout === 'figures' ? ['figures', { 'figures--even': even }] : 'thumbs'">
    <template v-if="layout === 'figures'">
      <figure v-for="img in images" :key="img.src" :class="['figure', { 'figure--wide': img.wide }]">
        <a class="pswp-item" :href="img.src" :data-pswp-width="img.width" :data-pswp-height="img.height"
          :title="t.gallery.open" target="_blank">
          <img :src="img.thumb" :alt="img.alt[lang]" :width="img.width" :height="img.height" loading="lazy" />
        </a>
        <figcaption class="muted">{{ img.caption[lang] }}</figcaption>
      </figure>
    </template>
    <template v-else>
      <a v-for="(img, i) in images" :key="img.src" class="pswp-item thumb" :href="img.src"
        :data-pswp-width="img.width" :data-pswp-height="img.height" :title="img.alt[lang]" target="_blank">
        <span class="thumb__img"><img :src="img.thumb" :alt="img.alt[lang]" loading="lazy" /></span>
        <span class="thumb__no">{{ String(i + 1).padStart(2, '0') }}</span>
      </a>
    </template>
  </div>
</template>

<script setup>
import { onBeforeUnmount, onMounted } from 'vue'
import PhotoSwipeLightbox from 'photoswipe/lightbox'
import 'photoswipe/style.css'

import { useLang } from '../lang.js'

const props = defineProps({
  id: { type: String, required: true },
  images: { type: Array, required: true },
  layout: { type: String, default: 'grid' }, // grid: square thumbnails; figures: full images with captions
  even: { type: Boolean, default: false }, // figures: two equal columns (screenshots of the same aspect ratio)
})
const { lang, t } = useLang()

let lightbox
onMounted(() => {
  lightbox = new PhotoSwipeLightbox({
    gallery: `#${props.id}`,
    children: '.pswp-item',
    pswpModule: () => import('photoswipe'),
  })
  lightbox.init()
})
onBeforeUnmount(() => lightbox?.destroy())
</script>

<style scoped>
/* contact sheet: frames on a strip, numbered along the edge */
.thumbs {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 14px 10px;
  margin-top: 20px;
  padding: 12px;
  background: var(--bg2);
  border: 1px solid var(--line);
}
.thumb { display: block; }
.thumb__img {
  display: block;
  aspect-ratio: 4 / 3;
  padding: 8px;
  background: var(--bg);
  border: 1px solid var(--line2);
  transition: border-color .15s;
}
.thumb:hover .thumb__img { border-color: var(--text); }
/* screenshots have all kinds of formats: show them whole instead of a random crop */
.thumb img { width: 100%; height: 100%; object-fit: contain; }
.thumb__no { display: block; margin-top: 6px; font-family: var(--mono); font-size: 11px; color: var(--muted2); }
.thumb:hover .thumb__no { color: var(--accent-text); }
@media (max-width: 520px) { .thumbs { grid-template-columns: repeat(2, minmax(0, 1fr)); padding: 8px; } }

.figures {
  display: grid;
  /* the two smaller screenshots share a row in the ratio of their aspect ratios */
  grid-template-columns: minmax(0, 1.55fr) minmax(0, 0.87fr);
  gap: 32px 24px;
  margin-top: 24px;
}
.figures--even { grid-template-columns: repeat(2, minmax(0, 1fr)); }
.figure { margin: 0; min-width: 0; }
.figure--wide { grid-column: 1 / -1; }
.figure a { display: block; background: var(--bg2); border: 1px solid var(--line); padding: 10px; transition: border-color .15s; }
.figure a:hover { border-color: var(--line2); }
.figure img { width: 100%; height: auto; }
.figure figcaption { margin-top: 10px; font-size: 14px; }
@media (max-width: 760px) {
  .figures { grid-template-columns: minmax(0, 1fr); }
  .figure a { padding: 6px; }
}
</style>
