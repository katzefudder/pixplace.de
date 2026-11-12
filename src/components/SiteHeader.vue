<template>
  <header class="topbar">
    <div class="container topbar__inner">
      <RouterLink class="brand" :to="to('home')" @click="open = false">
        <img src="../assets/pixplace-mark.svg" alt="" width="22" height="22" />
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
        <span></span><span></span>
      </button>

      <nav id="site-nav" class="nav" :class="{ 'nav--open': open }" @click="open = false">
        <RouterLink class="nav__page" :to="to('captioner')">{{ t.nav.captioner }}</RouterLink>
        <RouterLink class="nav__page" :to="to('designdeck')">{{ t.nav.designdeck }}</RouterLink>
        <RouterLink class="nav__page" :to="to('platform')">{{ t.nav.platform }}</RouterLink>
        <RouterLink :to="to('home', '#prices')">{{ t.nav.prices }}</RouterLink>
        <RouterLink :to="to('home', '#contact')">{{ t.nav.contact }}</RouterLink>
        <RouterLink class="nav__lang" :to="other" :hreflang="lang === 'de' ? 'en' : 'de'" :title="t.langSwitch">
          <span :class="{ on: lang === 'de' }">DE</span>/<span :class="{ on: lang === 'en' }">EN</span>
        </RouterLink>
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
  background: var(--bg);
  border-bottom: 1px solid var(--line);
}
.topbar__inner {
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 14px;
  height: 60px;
}
.brand {
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 750;
  font-stretch: 85%;
  font-size: 21px;
  letter-spacing: -0.01em;
}
.nav { display: flex; align-items: center; gap: 28px; font-size: 15px; color: var(--muted); }
.nav a { position: relative; padding: 18px 0; }
.nav a:hover { color: var(--text); }
.nav a.nav__page.router-link-active { color: var(--text); }
.nav a.nav__page.router-link-active::after {
  content: '';
  position: absolute;
  left: 0;
  right: 0;
  bottom: -1px;
  height: 2px;
  background: var(--accent);
}
.nav__lang { font-family: var(--mono); font-size: 13px; color: var(--muted2); }
.nav__lang .on { color: var(--text); }

.burger {
  display: none;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
  width: 44px;
  height: 44px;
  margin-right: -10px;
  padding: 0 10px;
  border: 0;
  background: none;
  cursor: pointer;
}
.burger span { display: block; width: 24px; height: 2px; background: var(--text); transition: transform .2s; }
.burger[aria-expanded="true"] span:nth-child(1) { transform: translateY(4px) rotate(45deg); }
.burger[aria-expanded="true"] span:nth-child(2) { transform: translateY(-4px) rotate(-45deg); }

@media (max-width: 760px) {
  .burger { display: flex; }
  .nav {
    display: none;
    position: absolute;
    top: 100%;
    left: calc(-1 * var(--gutter));
    right: calc(-1 * var(--gutter));
    flex-direction: column;
    align-items: stretch;
    gap: 0;
    padding: 4px var(--gutter) 12px;
    background: var(--bg);
    border-bottom: 1px solid var(--line);
    font-size: 18px;
  }
  .nav a { padding: 12px 0; border-bottom: 1px solid var(--line); }
  .nav a:last-child { border-bottom: 0; }
  .nav a.nav__page.router-link-active::after { display: none; }
  .nav--open { display: flex; }
}
</style>
