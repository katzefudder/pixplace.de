<template>
  <div :id="id" :class="layout === 'figures' ? 'figures' : 'thumbs'">
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
      <a v-for="img in images" :key="img.src" class="pswp-item thumb" :href="img.src"
        :data-pswp-width="img.width" :data-pswp-height="img.height" :title="img.alt[lang]" target="_blank">
        <img :src="img.thumb" :alt="img.alt[lang]" loading="lazy" />
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
.thumbs {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  gap: 10px;
  margin-top: 14px;
}
.thumb {
  display: block;
  aspect-ratio: 4 / 3;
  overflow: hidden;
  border-radius: 12px;
  border: 1px solid var(--stroke);
}
.thumb { background: rgba(0, 0, 0, 0.35); }
/* screenshots have all kinds of formats: show them whole instead of a random crop */
.thumb img { width: 100%; height: 100%; object-fit: contain; transition: transform .25s ease; }
.thumb:hover img { transform: scale(1.04); }

.figures {
  display: grid;
  /* the two smaller screenshots share a row in the ratio of their aspect ratios */
  grid-template-columns: minmax(0, 1.55fr) minmax(0, 0.87fr);
  gap: 24px;
  margin-top: 18px;
}
.figure { margin: 0; min-width: 0; }
.figure--wide { grid-column: 1 / -1; }
.figure a { display: block; }
.figure img {
  width: 100%;
  height: auto;
  border-radius: 12px;
  border: 1px solid var(--stroke);
  box-shadow: var(--shadow);
}
.figure figcaption { margin-top: 10px; font-size: 14px; }
@media (max-width: 760px) {
  .figures { grid-template-columns: minmax(0, 1fr); }
}
</style>
