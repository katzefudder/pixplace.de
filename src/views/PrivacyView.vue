<template>
  <section class="section">
    <div class="container legal">
      <h1>Datenschutzhinweise</h1>
      <p v-if="lang === 'en'" class="muted">This page is available in German only.</p>

      <div class="legal__body">
        <h2>Verantwortlicher</h2>
        <p>
          {{ OWNER.name }}, {{ OWNER.street }}, {{ OWNER.city }}<br />
          E-Mail: <a class="link" :href="`mailto:${CONTACT_EMAIL}`">{{ CONTACT_EMAIL }}</a>
        </p>

        <h2>Hosting und Downloads</h2>
        <p>
          Diese Website und die Downloads der Apps liegen bei <a class="link" href="https://bunny.net/" target="_blank"
          rel="noopener">bunny.net</a> (BunnyWay d.o.o., Slowenien) in Storage und CDN. Beim Aufruf verarbeitet
          bunny.net technisch notwendige Zugriffsdaten (IP-Adresse, Zeitpunkt, angeforderte Datei, Referrer,
          User-Agent) in Logfiles, um die Seite auszuliefern und die Sicherheit des Dienstes zu gewährleisten
          (Art. 6 Abs. 1 lit. f DSGVO).
          Die Downloads und die Versionsinformation (<code>latest.json</code>) werden von
          <code>www.katzefudder.de</code> geladen, das ebenfalls über bunny.net ausgeliefert wird und ebenfalls von mir
          betrieben wird.
        </p>
        <p>
          Domain und DNS verwalte ich bei Cloudflare, Inc. (San Francisco, USA). Cloudflare übernimmt dabei nur die
          Namensauflösung: Die Website wird nicht über Cloudflare ausgeliefert, deine Zugriffe gehen direkt an
          bunny.net. Gebaut und veröffentlicht wird die Website mit GitHub Actions; beim Besuch der Website werden
          dabei keine Daten an GitHub übertragen.
        </p>
        <p>
          Die Website lädt keine Schriften, Skripte oder Inhalte von Drittanbietern und setzt keine Cookies<span
          v-if="tracking">, außer denen der unten beschriebenen Reichweitenmessung, und auch die nur mit deiner
          Zustimmung</span>.
        </p>

        <template v-if="tracking">
          <h2>Reichweitenmessung mit Matomo</h2>
          <p>
            Wenn du zustimmst, nutze ich eine selbst betriebene Matomo-Installation (piwik.katzefudder.de), um zu
            sehen, welche Seiten besucht und welche Apps heruntergeladen werden. Verarbeitet werden die gekürzte
            IP-Adresse, Zeitpunkt, besuchte Seiten, Referrer sowie Browser und Gerät. Matomo setzt Cookies, um
            wiederkehrende Besuche zu erkennen. Die Daten werden nicht an Dritte weitergegeben. Rechtsgrundlage ist
            deine Einwilligung (Art. 6 Abs. 1 lit. a DSGVO, § 25 Abs. 1 TDDDG).
          </p>
          <p>
            Ohne deine Zustimmung wird Matomo gar nicht erst geladen. Deine Entscheidung speichert die Website im
            lokalen Speicher deines Browsers (Eintrag <code>pixplace-consent</code>), damit sie nicht bei jedem Besuch
            neu fragt (§ 25 Abs. 2 Nr. 2 TDDDG). Du kannst deine Einwilligung jederzeit mit Wirkung für die Zukunft
            widerrufen: über <button class="link inline" type="button" @click="consentOpen = true">Cookie-Einstellungen</button>
            hier oder unten auf jeder Seite. Dabei werden die Matomo-Cookies gelöscht.
          </p>
        </template>

        <h2>Kontakt per E-Mail</h2>
        <p>
          Wenn du mir schreibst, etwa um eine Lizenz anzufragen, verarbeite ich deine Angaben, um die Anfrage zu
          beantworten und die Lizenz auszustellen (Art. 6 Abs. 1 lit. b DSGVO). Für ausgestellte Lizenzen und
          Rechnungen gelten die gesetzlichen Aufbewahrungsfristen (§ 147 AO, § 257 HGB).
        </p>

        <h2>Die Apps</h2>
        <p>
          Pixplace Captioner und Pixplace Design Deck arbeiten lokal auf deinem Rechner. Es gibt kein Konto, keine
          Nutzungsstatistik und keine Übertragung deiner Fotos. Der Lizenzschlüssel wird offline geprüft.
        </p>
        <p>
          Pixplace Captioner stellt nur in diesen Fällen eine Verbindung her: die gebündelte Mac- und Windows-Version
          fragt höchstens einmal am Tag <code>latest.json</code> bei www.katzefudder.de ab, um auf Updates
          hinzuweisen; Roster, die du als URL einträgst, werden von dort geladen; der Dialog „Ort wählen“ lädt
          Kartenkacheln von OpenStreetMap und sucht Orte über Nominatim (OpenStreetMap Foundation, Großbritannien),
          sobald du ihn öffnest bzw. eine Suche abschickst. Pixplace Design Deck stellt keine Verbindungen her.
        </p>

        <h2>Deine Rechte</h2>
        <p>
          Du hast das Recht auf Auskunft, Berichtigung, Löschung, Einschränkung der Verarbeitung,
          Datenübertragbarkeit und Widerspruch (Art. 15–21 DSGVO) sowie das Recht auf Beschwerde bei einer
          Aufsichtsbehörde, etwa dem Hessischen Beauftragten für Datenschutz und Informationsfreiheit. Schreib mir
          dafür eine E-Mail.
        </p>
      </div>
    </div>
  </section>
</template>

<script setup>
import { useLang } from '../lang.js'
import { CONTACT_EMAIL, OWNER } from '../site.js'
import { consentOpen, tracking } from '../utils/matomo.js'

const { lang } = useLang()
</script>

<style scoped>
.legal { max-width: 760px; }
.legal h1 { font-size: clamp(36px, 5vw, 56px); }
.legal__body { margin-top: 32px; padding-top: 8px; border-top: 1px solid var(--line); }
.legal h2 { font-size: 24px; margin-top: 36px; }
.legal h2:first-child { margin-top: 0; }
.legal p { line-height: 1.6; color: var(--muted); }
.inline { padding: 0; border: 0; background: none; font: inherit; cursor: pointer; }
</style>
