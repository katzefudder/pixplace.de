// Pixplace Captioner page. Strings with markup (<code>, <strong>, <em>) are static and
// rendered with v-html; never put anything user-supplied in here.
const shots = '/images/captioner'
const shot = (name, width, height, de, en) => ({
  src: `${shots}/captioner-0.4-${name}.jpg`,
  thumb: `${shots}/captioner-0.4-${name}-thumb.jpg`,
  width,
  height,
  alt: { de, en },
})

const screenshots = [
  shot('gallery', 3510, 1840,
    'Hauptfenster im Dark Mode: Galerie mit Spielfotos in Reitern, Rahmen in Farbklassen, Sterne und Markierungen; Beschriftungspanel mit Template, Titel, Codes in der Beschreibung und Vorschau der fertigen Bildunterschrift',
    'Main window in dark mode: gallery of game photos in tabs with color-label frames, star ratings and tags; caption panel with template, headline, codes in the caption and a live preview of the finished caption'),
  shot('preview', 2800, 1720,
    'Großansicht: eine Torszene im Rahmen ihrer Farbklasse, Zoom und Info-Panel mit Aufnahmedaten, Bewertung und Datei',
    'Preview: a goal scene framed in its color label, zoom slider and an info panel with capture data, rating and file'),
  shot('template', 1800, 2198,
    'Template: Titel, Datum, Ort, Fotograf und Rechte, Hinweise, Kategorie, Zusatz-Tags und Anhang mit farbigen Platzhaltern und Ergebnis',
    'Template: headline, date, location, photographer and rights, instructions, category, extra tags and caption suffix with color-coded placeholders and a live result'),
  shot('map', 1520, 1360,
    'Ort wählen: OpenStreetMap-Karte mit markierter Halle, Stadt, Ort und GPS-Position für Bilder ohne Kamera-GPS',
    'Place picker: OpenStreetMap map with the venue marked, city, location and GPS position for images without camera GPS'),
  shot('replace', 1640, 1200,
    'Suchen und Ersetzen über die ausgewählten Bilder, mit Vorher/Nachher je Bild',
    'Find and replace across the selected photos, with a before/after preview per photo'),
  shot('roster', 1640, 1240,
    'Roster-Editor: eine Zeile je Code mit Nummer, Name und Team, Abschnitte je Team, Prüfung auf Fehler',
    'Roster editor: one line per code with number, name and team, sections per team, check for problems'),
  shot('rename', 1120, 434,
    'Umbenennen: ein Name für den ganzen Ordner, nummeriert nach Aufnahmezeit; RAW, JPG und Sidecar behalten dieselbe Nummer',
    'Rename: one name for the whole folder, numbered by capture time; RAW, JPG and sidecar keep the same number'),
  shot('settings', 1520, 1438,
    'Einstellungen: Roster-Quellen aus URL oder Datei, Code-Zeichen, Farbklassen für die Fotosoftware, Sprache, Rechtschreibung',
    'Settings: roster sources from a URL or file, code delimiter, color labels for photo software, language, spell checking'),
  shot('shortcuts', 1640, 1280,
    'Tastenkürzel anpassen: jede Aktion durchsuchbar, neue Tasten je Aktion aufnehmen',
    'Shortcut editor: every action searchable, new keys recorded per action'),
  shot('shortcut-overview', 1280, 1440,
    'Übersicht der Tastenkürzel (F1), nach Galerie, Großansicht und Beschriftungspanel',
    'Shortcut overview (F1), grouped by gallery, preview and caption panel'),
  shot('license', 1240, 644,
    'Lizenzfenster: Status der Testversion und Feld für den Lizenzschlüssel',
    'License window: trial status and a field for the license key'),
]

export default {
  slug: 'captioner',
  name: 'Pixplace Captioner',
  logo: `${shots}/captioner-logo.svg`,
  // file names under <DOWNLOADS>/captioner/latest/, used until latest.json has loaded
  files: {
    dmg: 'latest/Captioner-arm64.dmg',
    pkg: 'latest/Captioner-arm64.pkg',
    exe: 'latest/Captioner-x64-setup.exe',
  },
  matomoCategory: 'Captioner',
  ogImage: { src: `${shots}/captioner-0.4-gallery.jpg`, width: 3510, height: 1840 },
  // the app window on the home page
  homeShot: { src: `${shots}/captioner-0.4-gallery.jpg`, width: 3510, height: 1840 },
  prices: [
    { duration: { de: '1 Monat', en: '1 month' }, price: 4.99 },
    { duration: { de: '3 Monate', en: '3 months' }, price: 11.99 },
    { duration: { de: '12 Monate', en: '12 months' }, price: 39.99 },
  ],
  // the main window large on top, the dialogs as a contact sheet further down
  galleriesFirst: [{
    id: 'captioner-main',
    layout: 'figures',
    images: [{
      ...screenshots[0],
      wide: true,
      caption: {
        de: 'Galerie mit Farbklassen und Sternen, rechts das Beschriftungspanel: Codes in der Beschreibung, darunter die fertige Bildunterschrift.',
        en: 'The gallery with color labels and stars, the caption panel on the right: codes in the caption, the finished caption below.',
      },
    }],
  }],
  galleries: [{ id: 'captioner-screenshots', layout: 'grid', images: screenshots.slice(1) }],

  de: {
    title: 'Pixplace Captioner – Bilder beschriften für Sportfotografen | macOS & Windows',
    description:
      'Pixplace Captioner beschriftet Sportfotos im Tastaturtempo: kurze Roster-Codes werden zu vollen Spielernamen, ' +
      'IPTC/XMP-Metadaten gehen direkt nach Lightroom. Kostenlose Testversion für macOS und Windows.',
    ogDescription:
      'Von der Speicherkarte zur beschrifteten Auswahl in einem Durchgang: #bi99# statt des ganzen Namens tippen, ' +
      'dann die Fotos mit Beschreibung, Stichwörtern und Bewertung nach Lightroom ziehen.',
    ogAlt: 'Hauptfenster von Pixplace Captioner mit Spielfotos und dem Beschriftungspanel',
    kicker: 'Bilder beschriften · macOS · Windows',
    lead: 'Von der Speicherkarte zur beschrifteten Auswahl in einem Durchgang – und direkt weiter nach Lightroom.',
    intro:
      'Nach einem Spiel liegen schnell ein paar hundert Fotos auf der Karte, und jedes gute braucht eine Bildunterschrift ' +
      'mit Spielernamen, Nummern, Teams, Ort und Datum, bevor es an Zeitungen und Vereine geht. Von Hand dauert das und ' +
      'geht leicht schief. Mit Pixplace Captioner wird es Tastaturarbeit: Karte öffnen, die guten Bilder auswählen, ' +
      '<code>#bi99#</code> statt des ganzen Namens tippen und die fertige Auswahl in die Fotosoftware ziehen. Gebaut für ' +
      'den Sport und genauso nützlich bei jeder Veranstaltung mit vielen Menschen und vielen Fotos.',
    requirements: 'macOS {minMacos}, Apple Silicon · Windows 64 Bit',
    extraLinks: [
      { href: '/handouts/Pixplace-Captioner-Handout.pdf', label: 'Handout (PDF)', track: 'handout' },
      { href: '/handouts/Captioner-Anleitung.pdf', label: 'Anleitung (PDF)', track: 'manual-de' },
    ],
    gainsTitle: 'Wo Pixplace Captioner Zeit spart',
    gains: [
      '<strong>Ein paar Tasten pro Name</strong> statt Namen, Nummern und Teams von Hand',
      '<strong>Keine falsch geschriebenen Spielernamen</strong>: unbekannte Codes fallen auf, bevor etwas gespeichert wird',
      '<strong>Spieldaten einmal eingeben</strong>: Titel, Ort, Copyright und Stichwörter für die ganze Auswahl',
      '<strong>Sichten ohne Maus</strong>: Sterne, Farbklassen und Markierungen über die Tastatur',
      '<strong>Nichts doppelt in Lightroom</strong>: Beschreibung, Stichwörter, Sterne und Farben kommen beim Import mit',
    ],
    features: [
      {
        title: 'Codes tippen, fertige Bildunterschriften bekommen',
        html:
          'Roster-Dateien ordnen kurzen Codes Personen zu: <code>Zweikampf um den Puck #bi99# gegen #bn23#</code> wird zu ' +
          '„Zweikampf um den Puck -99- John Doe (Bietigheim Steelers) gegen -23- Marius Erk (EC Bad Nauheim), DEL 2 - ' +
          'EC Bad Nauheim gegen Bietigheim Steelers, Bad Nauheim, Colonel-Knight-Stadion, 09.10.26“. Wer <code>#bi</code> ' +
          'tippt, sieht die Codes des Teams, die beiden Teams aus dem Titel zuerst. Jeder Name landet automatisch in den ' +
          'Stichwörtern, so findet man die Fotos später nach Spieler.',
      },
      {
        title: 'Richtige Namen, jedes Mal',
        html:
          'Unbekannte Codes werden rot und blockieren das Speichern, ein Tippfehler landet also nie in einer ' +
          'veröffentlichten Bildunterschrift. Roster lassen sich von einer URL laden und von einem ganzen Team von ' +
          'Fotografen teilen. Ein eingebauter Editor zeigt fehlerhafte Zeilen und doppelte Codes. Auf dem Mac streicht die ' +
          'Rechtschreibprüfung Tippfehler an und lässt Namen aus dem Roster in Ruhe.',
      },
      {
        title: 'Spieldaten einmal eingeben',
        html:
          'Ein Template enthält Titel, Ort, Fotograf, Copyright, Hinweise wie Kontakt oder Honorar, zusätzliche ' +
          'Stichwörter und den Anhang an jede Beschreibung: auch ein Foto ohne Beschreibung bekommt so Titel, Ort und ' +
          'Datum. Es gilt mit einem Schritt für die ganze Auswahl. Eine Beschriftung kopierst du mit ' +
          '<code>⌘⇧C</code> und fügst sie mit <code>⌘⇧V</code> in ein oder viele Fotos ein: die Codes werden je Foto neu ' +
          'aufgelöst, das Datum kommt aus dem Foto. Templates sind einfache Dateien, die du an Kollegen weitergeben kannst.',
      },
      {
        title: 'Sichten im Tastaturtempo',
        html:
          '<code>1</code>–<code>8</code> für Farbklassen, <code>⌘1</code>–<code>⌘5</code> für Sterne, <code>T</code> ' +
          'zum Markieren, <code>⌘N</code> speichert und geht weiter. RAW und JPG sind eine Kachel. Die Großansicht ist ' +
          'fast sofort scharf, lädt die nächsten Fotos vor und behält Zoom und Ausschnitt beim Blättern durch eine Serie, ' +
          'so vergleichst du die Schärfe an derselben Stelle. Filter nach Bewertung, Markierung, Kamera oder Uhrzeit, ' +
          'etwa nur das zweite Drittel.',
      },
      {
        title: 'Ganze Karten, mehrere Kameras',
        html:
          'Zieh eine oder zwei Speicherkarten aufs Fenster, und jeder Bildordner öffnet sich in einem eigenen Reiter. Alle ' +
          'Fotos eines Ordners liegen in einer Galerie, die Kachelgröße stellst du per Regler ein. Zwei Gehäuse desselben ' +
          'Modells unterscheidet die App an der Seriennummer. Reiter kommen beim nächsten Start wieder, und Fotos lassen ' +
          'sich zwischen Reitern kopieren, RAW, JPG und Sidecar bleiben zusammen.',
      },
      {
        title: 'Direkt nach Lightroom, nichts geht verloren',
        html:
          'Metadaten werden als IPTC/XMP in JPG, DNG und TIFF geschrieben oder als Sidecar neben die RAW-Datei. Zieh die ' +
          'Auswahl ins Lightroom-Raster, und Titel, Beschreibung, Stichwörter, Sterne und Farben kommen beim Import mit. ' +
          'Auf der Karte gewählte Orte werden zur GPS-Position. RAW-Dateien werden nie verändert, und <code>⌘Z</code> ' +
          'macht jede Änderung rückgängig, auch über viele Fotos.',
      },
    ],
    galleryTitles: {
      'captioner-main': { title: 'Ein Blick in die App' },
      'captioner-screenshots': {
        title: 'Screenshots',
        text:
          'Großansicht mit Metadaten, Template, Ort wählen mit Karte, Suchen und ' +
          'Ersetzen, Roster-Editor, Umbenennen, Einstellungen, Tastenkürzel und Lizenz (Version 0.4).',
      },
    },
    trial:
      'Die kostenlose Testversion kann alles, was die Vollversion kann, für bis zu 100 Fotos. Jedes Foto zählt einmal, ' +
      'egal wie oft du es änderst. In jede Bildunterschrift schreibt sie einen kurzen Hinweis auf die Testversion. Ein ' +
      'Lizenzschlüssel schaltet die Vollversion ohne Grenze frei, der Hinweis verschwindet beim nächsten Speichern. ' +
      'Lizenzen laufen ab dem Ausstellungstag, für ein Turnier genauso wie für eine ganze Saison:',
    howToBuy:
      'Du bekommst den Lizenzschlüssel per E-Mail und trägst ihn in der App ein (<em>Hilfe → Lizenz…</em>). Er ' +
      'funktioniert offline, ein Konto brauchst du nicht.',
    install:
      '<strong>Hinweis:</strong> Die Mac-Version ist nur ad-hoc signiert, deshalb blockiert macOS den ersten Start. ' +
      'Erlaube ihn einmal unter <em>Systemeinstellungen → Datenschutz &amp; Sicherheit → „Dennoch öffnen“</em> oder im ' +
      'Terminal mit <code>xattr -dr com.apple.quarantine /Applications/Captioner.app</code>. Unter Windows kann ' +
      'SmartScreen vor dem Installer warnen: <em>„Weitere Informationen“ → „Trotzdem ausführen“</em>.',
  },

  en: {
    title: 'Pixplace Captioner – Photo Captioning Tool for Sports Photographers | macOS & Windows',
    description:
      'Pixplace Captioner captions sports photos at keyboard speed: short roster codes become full player names, ' +
      'IPTC/XMP metadata goes straight into Lightroom. Free trial for macOS and Windows.',
    ogDescription:
      'From memory card to captioned selection in one pass: type #bi99# instead of a full name, ' +
      'then drag the photos into Lightroom with captions, keywords and ratings.',
    ogAlt: 'Pixplace Captioner main window with a gallery of game photos and the caption panel',
    kicker: 'Photo captioning tool · macOS · Windows',
    lead: 'From memory card to captioned selection in one pass – then straight into Lightroom.',
    intro:
      'After a sports game there are easily a few hundred photos on the card, and every keeper needs a caption with ' +
      'player names, numbers, teams, venue and date before it goes out to newspapers and clubs. Typing that by hand is ' +
      'slow and error-prone. Pixplace Captioner turns it into keyboard work: open the card, pick the keepers, type ' +
      '<code>#bi99#</code> instead of a full name, and drag the finished selection into your photo management tool. ' +
      'Built for sports, and just as useful for any event with lots of people and lots of photos.',
    requirements: 'macOS {minMacos}, Apple Silicon · Windows 64-bit',
    extraLinks: [
      { href: '/handouts/Pixplace-Captioner-Handout.pdf', label: 'Handout (PDF, German)', track: 'handout' },
      { href: '/handouts/Captioner-Manual.pdf', label: 'Manual (PDF)', track: 'manual-en' },
    ],
    gainsTitle: 'Where Pixplace Captioner saves you time',
    gains: [
      '<strong>A few keystrokes per name</strong> instead of typing names, numbers and teams by hand',
      '<strong>No misspelled player names</strong> – unknown codes are flagged before anything is saved',
      '<strong>Game data entered once</strong> – headline, venue, copyright and keywords go onto the whole selection',
      '<strong>Culling without the mouse</strong> – stars, color classes and tags from the keyboard',
      '<strong>No retyping in Lightroom</strong> – captions, keywords, ratings and labels come along on import',
    ],
    features: [
      {
        title: 'Type codes, get full captions',
        html:
          'Roster files map short codes to people: <code>Battle for the puck #bi99# vs #bn23#</code> becomes “Battle for ' +
          'the puck -99- John Doe (Bietigheim Steelers) vs -23- Marius Erk (EC Bad Nauheim), DEL 2 - EC Bad Nauheim ' +
          'gegen Bietigheim Steelers, Bad Nauheim, Colonel-Knight-Stadion, 09.10.26”. Typing <code>#bi</code> lists the ' +
          'team\'s codes, with the two teams from the headline first. Every name is added to the keywords automatically, ' +
          'so the photos can be found by player later.',
      },
      {
        title: 'Correct names, every time',
        html:
          'Unknown codes turn red and block saving, so a typo never ends up in a published caption. Rosters can be loaded ' +
          'from a URL and shared by a whole team of photographers. A built-in editor flags broken lines and conflicting ' +
          'codes. On macOS the spell checker underlines typos and leaves roster names alone.',
      },
      {
        title: 'Enter the game data once',
        html:
          'A template holds the headline, venue, photographer, copyright, special instructions such as contact or payment ' +
          'details, extra keywords and the suffix added to every caption: even a photo saved without a caption gets ' +
          'headline, venue and date. Apply it to the whole selection in one step. Copy a caption with ' +
          '<code>⌘⇧C</code> and paste it into one or many photos with <code>⌘⇧V</code>: the codes are resolved again for ' +
          'each photo, and the date comes from the photo itself. Templates are plain files you can pass on to colleagues.',
      },
      {
        title: 'Cull at keyboard speed',
        html:
          '<code>1</code>–<code>8</code> for color classes, <code>⌘1</code>–<code>⌘5</code> for stars, <code>T</code> ' +
          'to tag, <code>⌘N</code> to save and move on. RAW and JPG show as one tile. The preview is sharp almost ' +
          'instantly, preloads the next photos and keeps zoom and position while you flip through a burst, so you can ' +
          'compare sharpness at the same spot. Filter by rating, tag, camera body or time range, e.g. just the second period.',
      },
      {
        title: 'Whole cards, several bodies',
        html:
          'Drop one or two memory cards onto the window and every image folder opens in its own tab. All photos of a ' +
          'folder sit in one scrollable gallery, with a slider for the thumbnail size. Photos from two bodies of the same ' +
          'model are told apart by serial number. Tabs are restored on the next start, and you can copy photos between ' +
          'tabs with RAW, JPG and sidecar kept together.',
      },
      {
        title: 'Straight into Lightroom, nothing lost',
        html:
          'Metadata is written as IPTC/XMP into JPG, DNG and TIFF, or as a sidecar next to the RAW file. Drag the ' +
          'selection into the Lightroom grid, and title, caption, keywords, stars and color labels come along on import. ' +
          'Venues picked on the map are added as GPS positions. RAW files are never touched, and <code>⌘Z</code> undoes ' +
          'any change, even across many photos.',
      },
    ],
    galleryTitles: {
      'captioner-main': { title: 'A look at the app' },
      'captioner-screenshots': {
        title: 'Screenshots',
        text:
          'The preview with metadata, the template dialog, the place picker with ' +
          'the map, find and replace across photos, the roster editor, renaming, settings, shortcuts and the license ' +
          'window (version 0.4).',
      },
    },
    trial:
      'The free trial can do everything the full version does, for up to 100 photos – each photo counts once, however ' +
      'often you change it – and adds a short note about the trial to every caption it writes. A license key unlocks ' +
      'the full version without limits; the note disappears the next time you save a photo. Licenses run from the day ' +
      'of issue, so a single tournament is covered as well as a whole season:',
    howToBuy:
      'You get the license key by email and enter it in the app (<em>Help → License…</em>). It works offline, no ' +
      'account needed.',
    install:
      '<strong>Note:</strong> Mac releases are only ad-hoc signed, so macOS blocks the app on first launch. Allow it ' +
      'once via <em>System Settings → Privacy &amp; Security → “Open Anyway”</em>, or run ' +
      '<code>xattr -dr com.apple.quarantine /Applications/Captioner.app</code> in Terminal. On Windows, SmartScreen may ' +
      'warn about the installer – click <em>“More info” → “Run anyway”</em>.',
  },
}
