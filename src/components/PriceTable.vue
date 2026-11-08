<template>
  <ul class="prices">
    <li v-for="p in product.prices" :key="p.price">
      <span>{{ p.duration[lang] }}</span>
      <strong>{{ formatPrice(p.price, lang) }}</strong>
      <a v-if="request" class="btn btn--small" :href="mailto(p)" @click="track(p)">{{ t.prices.request }}</a>
    </li>
  </ul>
</template>

<script setup>
import { fill } from '../content/ui.js'
import { formatPrice, useLang } from '../lang.js'
import { CONTACT_EMAIL } from '../site.js'
import { trackEvent } from '../utils/matomo.js'

const props = defineProps({
  product: { type: Object, required: true },
  request: { type: Boolean, default: true },
})
const { lang, t } = useLang()

// Until there is a shop: the request button opens a prefilled email.
function mailto(p) {
  const values = { product: props.product.name, duration: p.duration[lang.value], price: formatPrice(p.price, lang.value) }
  const subject = encodeURIComponent(fill(t.value.prices.mailSubject, values))
  const body = encodeURIComponent(fill(t.value.prices.mailBody, values))
  return `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`
}

function track(p) {
  trackEvent(props.product.matomoCategory, 'License request', p.duration.en)
}
</script>

<style scoped>
.prices { list-style: none; margin: 16px 0 18px; padding: 0; max-width: 460px; border-top: 1px solid var(--line); }
.prices li {
  display: grid;
  grid-template-columns: 1fr auto auto;
  align-items: center;
  gap: 20px;
  min-height: 52px;
  border-bottom: 1px solid var(--line);
  color: var(--muted);
}
.prices strong { font-family: var(--mono); font-weight: 500; font-size: 15px; color: var(--text); font-variant-numeric: tabular-nums; text-align: right; }
</style>
