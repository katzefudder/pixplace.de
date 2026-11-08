<template>
  <header class="topbar">
    <div class="container topbar__inner">
      <RouterLink class="brand" :to="to('home')" @click="open = false">
        <img src="../assets/pixplace-mark.svg" alt="" width="26" height="26" />
        <span>pixplace</span>
      </RouterLink>

      <button
        class="burger"
        type="button"
        :aria-expanded="open"
        aria-controls="site-nav"
        aria-label="Menu"
        @click="open = !open"
      >
        <span></span><span></span><span></span>
      </button>

      <nav id="site-nav" class="nav" :class="{ 'nav--open': open }" @click="open = false">
        <RouterLink :to="to('captioner')">{{ t.nav.captioner }}</RouterLink>
        <RouterLink :to="to('designdeck')">{{ t.nav.designdeck }}</RouterLink>
        <RouterLink :to="to('home', '#prices')">{{ t.nav.prices }}</RouterLink>
        <RouterLink :to="to('home', '#contact')">{{ t.nav.contact }}</RouterLink>
        <RouterLink class="nav__lang" :to="other" :hreflang="lang === 'de' ? 'en' : 'de'">{{ t.langSwitch }}</RouterLink>
      </nav>
    </div>
  </header>
</template>

<script setup>
import { ref } from 'vue'
import { useLang } from '../lang.js'

const { lang, t, to, other } = useLang()
const open = ref(false)
</script>

<style scoped>
.topbar {
  position: sticky;
  top: 0;
  z-index: 50;
  -webkit-backdrop-filter: blur(14px);
  backdrop-filter: blur(14px);
  background: rgba(10, 10, 14, 0.6);
  border-bottom: 1px solid var(--stroke);
}
.topbar__inner {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  padding: 12px 0;
}
.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  font-size: 19px;
  letter-spacing: -0.01em;
}
.nav { display: flex; align-items: center; gap: 6px; color: var(--muted); }
.nav a { padding: 8px 10px; border-radius: 12px; }
.nav a:hover,
.nav a.router-link-exact-active { background: var(--panel); color: var(--text); }
.nav__lang { border: 1px solid var(--stroke); margin-left: 6px; }

.burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 5px;
  width: 42px;
  height: 42px;
  padding: 0 10px;
  border: 1px solid var(--stroke);
  border-radius: 12px;
  background: var(--panel);
  cursor: pointer;
}
.burger span { display: block; height: 2px; background: var(--text); border-radius: 2px; transition: transform .2s, opacity .2s; }
.burger[aria-expanded="true"] span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.burger[aria-expanded="true"] span:nth-child(2) { opacity: 0; }
.burger[aria-expanded="true"] span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

@media (max-width: 760px) {
  .burger { display: flex; }
  .nav {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    flex-direction: column;
    align-items: stretch;
    gap: 4px;
    padding: 10px;
    background: rgba(10, 10, 14, 0.96);
    border: 1px solid var(--stroke);
    border-radius: 14px;
  }
  .nav--open { display: flex; }
  .nav__lang { margin-left: 0; }
}
</style>
