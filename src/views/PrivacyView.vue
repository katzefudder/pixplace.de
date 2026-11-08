<template>
  <section class="section">
    <div class="container legal">
      <h1>Datenschutzhinweise</h1>
      <p v-if="lang === 'en'" class="muted">This page is available in German only.</p>

      <div class="card">
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
          Die Domain und ihr DNS liegen bei IONOS SE, Montabaur. Gebaut und veröffentlicht wird die Website mit
          GitHub Actions; beim Besuch der Website werden dabei keine Daten an GitHub übertragen.
        </p>
        <p>
          Die Website lädt keine Schriften, Skripte oder Inhalte von Drittanbietern und setzt keine Cookies<span
          v-if="tracking">, außer denen der unten beschriebenen Reichweitenmessung</span>.
        </p>

        <template v-if="tracking">
          <h2>Reichweitenmessung mit Matomo</h2>
          <p>
            Ich nutze eine selbst betriebene Matomo-Installation, um zu sehen, welche Seiten besucht und welche Apps
            heruntergeladen werden (Art. 6 Abs. 1 lit. f DSGVO). Verarbeitet werden die gekürzte IP-Adresse,
            Zeitpunkt, besuchte Seiten, Referrer sowie Browser und Gerät. Die Daten werden nicht an Dritte
            weitergegeben. Matomo kann Cookies setzen, um wiederkehrende Besuche zu erkennen. Du kannst dem jederzeit
            widersprechen, indem du Cookies für diese Seite blockierst oder in deinem Browser „Do Not Track“
            aktivierst.
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
import { tracking } from '../utils/matomo.js'

const { lang } = useLang()
</script>

<style scoped>
.legal { max-width: 760px; }
.legal h2 { font-size: 20px; margin-top: 22px; }
.legal h2:first-child { margin-top: 0; }
.legal p { line-height: 1.6; color: var(--muted); }
</style>
