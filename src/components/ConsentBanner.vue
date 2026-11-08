<template>
  <section v-if="consentOpen" class="consent" role="region" :aria-label="t.consent.title">
    <div class="container consent__inner">
      <p class="consent__text">
        <strong>{{ t.consent.title }}.</strong> {{ t.consent.text }}
        <RouterLink class="link" :to="to('privacy')">{{ t.consent.more }}</RouterLink>
      </p>
      <!-- both choices look the same: rejecting is as easy as agreeing -->
      <div class="consent__actions">
        <button class="btn" type="button" @click="setConsent(false)">{{ t.consent.reject }}</button>
        <button class="btn" type="button" @click="setConsent(true)">{{ t.consent.accept }}</button>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLang } from '../lang.js'
import { consentOpen, setConsent } from '../utils/matomo.js'

const { t, to } = useLang()
</script>

<style scoped>
.consent {
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 60;
  background: var(--bg2);
  border-top: 1px solid var(--line2);
  padding: 16px 0 calc(16px + env(safe-area-inset-bottom));
}
.consent__inner { display: flex; align-items: center; justify-content: space-between; gap: 16px 32px; }
.consent__text { margin: 0; max-width: 78ch; font-size: 14px; color: var(--muted); }
.consent__text strong { color: var(--text); font-weight: 600; }
.consent__actions { display: flex; gap: 8px; flex: none; }
@media (max-width: 760px) {
  .consent__inner { flex-direction: column; align-items: stretch; }
  .consent__actions .btn { flex: 1; }
}
</style>
