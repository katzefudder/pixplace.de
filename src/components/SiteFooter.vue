<template>
  <footer class="footer">
    <div class="container footer__inner">
      <div>
        <p class="footer__brand">
          <img src="../assets/pixplace-mark.svg" alt="" width="20" height="20" /> pixplace
        </p>
        <p class="tiny">{{ t.footer.tagline }}</p>
      </div>
      <nav class="footer__links">
        <RouterLink :to="to('imprint')">{{ t.footer.imprint }}</RouterLink>
        <RouterLink :to="to('privacy')">{{ t.footer.privacy }}</RouterLink>
        <a :href="AUTHOR.url">{{ t.footer.personal }}</a>
        <span class="tiny">© {{ year }} {{ AUTHOR.name }}</span>
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
.footer { border-top: 1px solid var(--stroke); padding: 36px 0 48px; }
.footer__inner { display: flex; justify-content: space-between; gap: 24px; flex-wrap: wrap; }
.footer__brand { display: flex; align-items: center; gap: 8px; font-weight: 700; margin: 0 0 6px; }
.footer__links { display: flex; gap: 18px; align-items: center; flex-wrap: wrap; color: var(--muted); }
.footer__links a:hover { color: var(--text); }
</style>
