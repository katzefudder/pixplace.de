<template>
  <section class="section">
    <div class="container legal">
      <h1>Impressum</h1>
      <p v-if="lang === 'en'" class="muted">This page is available in German only.</p>

      <div class="legal__body">
        <p class="muted">Angaben gemäß § 5 DDG</p>
        <p>
          <strong>{{ OWNER.name }}</strong><br />
          {{ OWNER.street }}<br />
          {{ OWNER.city }}<br />
          Deutschland
        </p>
        <p>
          <strong>Kontakt</strong><br />
          E-Mail: <a class="link" :href="`mailto:${CONTACT_EMAIL}`">{{ CONTACT_EMAIL }}</a><br />
          Telefon: {{ OWNER.phone }}
        </p>
        <p v-if="OWNER.vatId">
          <strong>Umsatzsteuer-Identifikationsnummer</strong> gemäß § 27a UStG<br />
          {{ OWNER.vatId }}
        </p>
        <p>
          <strong>Verantwortlich für den Inhalt</strong> nach § 18 Abs. 2 MStV<br />
          {{ OWNER.name }}, Anschrift wie oben
        </p>
        <p>
          <strong>Verbraucherstreitbeilegung</strong><br />
          Ich bin nicht bereit und nicht verpflichtet, an Streitbeilegungsverfahren vor einer
          Verbraucherschlichtungsstelle teilzunehmen.
        </p>
        <p>
          <strong>Urheberrecht</strong><br />
          Texte, Screenshots und Fotos auf dieser Website stammen, sofern nicht anders angegeben, von
          {{ OWNER.name }}. Ihre Nutzung außerhalb dieser Website bedarf der ausdrücklichen Zustimmung.
          Pixplace Captioner und Pixplace Design Deck sind proprietäre Software; die Lizenzbedingungen
          liegen den Apps bei.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLang } from '../lang.js'
import { CONTACT_EMAIL, OWNER } from '../site.js'

const { lang } = useLang()
</script>

<style scoped>
.legal { max-width: 760px; }
.legal h1 { font-size: clamp(36px, 5vw, 56px); }
.legal__body { margin-top: 32px; padding-top: 8px; border-top: 1px solid var(--line); }
.legal p { line-height: 1.6; }
</style>
