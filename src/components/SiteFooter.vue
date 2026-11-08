<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div>
        <p class="footer__brand">
          <img src="../assets/pixplace-mark.svg" alt="" width="18" height="18" /> pixplace
        </p>
        <p class="tiny">{{ t.footer.tagline }}</p>
      </div>
      <nav class="footer__links">
        <RouterLink :to="to('imprint')">{{ t.footer.imprint }}</RouterLink>
        <RouterLink :to="to('privacy')">{{ t.footer.privacy }}</RouterLink>
        <a :href="AUTHOR.url">{{ t.footer.personal }}</a>
        <span class="footer__copy">© {{ year }} {{ AUTHOR.name }}</span>
      </nav>
    </div>
  </footer>
</template>

<script setup>
import { useLang } from '../lang.js'
import { AUTHOR } from '../site.js'

const { t, to } = useLang()
const year = new Date().getFullYear()
</script>

<style scoped>
.footer { border-top: 1px solid var(--line); padding: 32px 0 48px; }
.footer__inner { display: flex; justify-content: space-between; gap: 24px; flex-wrap: wrap; }
.footer__brand { display: flex; align-items: center; gap: 8px; font-weight: 750; font-stretch: 85%; font-size: 18px; margin: 0 0 4px; }
.footer .tiny { margin: 0; }
.footer__links { display: flex; gap: 8px 22px; align-items: center; flex-wrap: wrap; font-size: 14px; color: var(--muted); }
.footer__links a:hover { color: var(--text); }
.footer__copy { font-family: var(--mono); font-size: 12px; color: var(--muted2); }
</style>
