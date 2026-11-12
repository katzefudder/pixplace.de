// Pixplace, the web platform (markup rules as in captioner.js). No downloads and no prices:
// the page explains the platform and links the handout. Same texts as the handout in the
// chuc_de_2022 repository (docs/handout/handout.html), keep both in step.

const shots = '/images/pixplace'

// screenshots of chuc.de (local copy of the platform), same order as on the page:
// one wide shot, then pairs of the same aspect ratio
const screens = [
  {
    name: 'gallery', width: 2400, height: 1500, wide: true,
    alt: {
      de: 'Galerieseite auf chuc.de: großes Titelfoto vom Spiel EC Bad Nauheim gegen EV Landshut mit Datum, Ort und Anzahl der Fotos, darunter die Fotos der Galerie',
      en: 'Gallery page on chuc.de: large cover photo of the game EC Bad Nauheim vs EV Landshut with date, venue and photo count, the gallery\'s photos below',
    },
    caption: {
      de: 'Eine Galerie: Titel, Datum und Ort kommen aus den Metadaten der Fotos.',
      en: 'A gallery: title, date and venue come from the photos\' metadata.',
    },
  },
  {
    name: 'search', width: 2400, height: 1500,
    alt: {
      de: 'Suche nach „ecbn Pfleger | Bußmann“: die Begriffe als einzelne Chips, 43 Treffer, darunter die gefundenen Fotos',
      en: 'Search for “ecbn Pfleger | Bußmann”: the terms as separate chips, 43 results, the photos found below',
    },
    caption: {
      de: 'Die Suche zeigt, wie sie deine Eingabe verstanden hat: Galerie und einer von zwei Spielern.',
      en: 'The search shows how it understood your input: gallery and one of two players.',
    },
  },
  {
    name: 'lightbox', width: 2400, height: 1500,
    alt: {
      de: 'Großansicht eines Fotos: Pfostentreffer vor dem Tor des EV Landshut, darunter Fotograf und Bildunterschrift',
      en: 'Full view of a photo: a shot off the post in front of the EV Landshut goal, photographer and caption below',
    },
    caption: {
      de: 'Großansicht mit Fotograf und Bildunterschrift, blättern mit Pfeiltasten.',
      en: 'Full view with photographer and caption, browse with the arrow keys.',
    },
  },
  {
    name: 'picks', width: 2400, height: 885,
    alt: {
      de: 'Die eigene Sammlung: gemerkte Fotos mit Galerie und Dateiname, links Sortierung, Auswählen und Teilen',
      en: 'Your collection: saved photos with gallery and file name, sorting, selecting and sharing on the left',
    },
    caption: {
      de: 'Die Sammlung: merken, sortieren, als ZIP laden oder per Link teilen.',
      en: 'The collection: keep, sort, download as a ZIP or share by link.',
    },
  },
  {
    name: 'uploads', width: 2400, height: 885,
    alt: {
      de: 'Backend, Seite Fotos hochladen: Feld für den Galerienamen und eine Fläche zum Hineinziehen der JPEG-Dateien',
      en: 'Back end, upload page: a field for the gallery name and an area to drop the JPEG files',
    },
    caption: {
      de: 'Upload im Browser: Galerie benennen, Fotos hineinziehen.',
      en: 'Upload in the browser: name the gallery, drop the photos.',
    },
  },
].map((s) => ({ ...s, src: `${shots}/pixplace-${s.name}.jpg`, thumb: `${shots}/pixplace-${s.name}-thumb.jpg` }))

export default {
  slug: 'platform',
  name: 'Pixplace',
  logo: `${shots}/pixplace-mark.svg`,
  handout: '/handouts/Pixplace-Handout.pdf',
  matomoCategory: 'Plattform',
  ogImage: { src: `${shots}/pixplace-gallery.jpg`, width: 2400, height: 1500 },
  screens,

  de: {
    title: 'Pixplace – Bildplattform für professionelle Fotografen | Galerien, Suche, Download',
    description:
      'Pixplace nimmt fertig bearbeitete und beschriftete Fotos auf und macht sie in Sekunden durchsuchbar: Upload per ' +
      'Browser oder SFTP, Suche über IPTC-Bildunterschriften und Schlagwörter, Sammlung, ZIP-Download und Teilen per Link.',
    ogDescription:
      'Aus Fotos wird durchsuchbarer Content, in Sekunden. Pixplace liest die Metadaten deiner Fotos und macht sie über ' +
      'Namen, Orte und Schlagwörter auffindbar.',
    ogAlt: 'Eine Galerie auf chuc.de, veröffentlicht mit Pixplace',
    screensTitle: 'Ein Blick in Pixplace · chuc.de',
    kicker: 'Bildplattform · Web',
    lead: 'Aus Fotos wird durchsuchbarer Content, in Sekunden.',
    intro:
      'Pixplace fügt sich in den Workflow professioneller Fotografen ein. Du bearbeitest und beschriftest deine Fotos vor ' +
      'Ort, beim Sport, beim Konzert oder beim Shooting, und lädst sie fertig hoch. Pixplace liest die Metadaten aus, ' +
      'erstellt die Vorschaubilder und setzt dein Wasserzeichen. Jedes Foto ist danach über Namen, Orte und Schlagwörter ' +
      'auffindbar, über alle Galerien hinweg.',
    handoutLabel: 'Handout (PDF)',
    contactLabel: 'Kontakt',

    whyTitle: 'Wer ein Foto braucht, sucht nach einem Namen.',
    why: [
      'Nach einem Spiel, einem Konzert oder einem Shooting kommen schnell 150 Fotos zusammen, nach einer Saison einige ' +
        'Tausend. Wer ein Bild von einer bestimmten Person braucht, blättert sich sonst durch eine Galerie nach der anderen.',
      'Pixplace durchsucht die Bildunterschriften und Schlagwörter, die du vor Ort ins Foto schreibst. Ein Tippfehler im ' +
        'Namen schadet nicht, und gefundene Fotos lassen sich sammeln, als ZIP herunterladen oder per Link weitergeben.',
    ],

    stepsTitle: 'Für Fotografen: in drei Schritten online',
    steps: [
      { title: 'Vor Ort bearbeiten', text: 'Du bearbeitest deine Fotos direkt am Spielfeldrand, im Graben oder am Set und schreibst Bildunterschrift und Schlagwörter als IPTC ins Foto.' },
      { title: 'Hochladen', text: 'Zieh die fertigen JPEGs ins Browserfenster oder lade sie per SFTP hoch, auch automatisch aus deiner Software. Der Ordnername wird zur Galerie, etwa <code>20261108_ECN_DEG</code>.' },
      { title: 'Durchsuchbar', text: 'Pixplace liest die Metadaten aus, und die Fotos sind in Sekunden über die Suche zu finden. Wer möchte, bekommt die neue Galerie sofort angezeigt oder per Mail.' },
    ],

    pipelineLabel: 'Vom Upload bis zum Fund',
    pipelineTitle: 'Jedes Feld, das du beschriftest, wird zum Suchbegriff.',
    pipelineText:
      'Pixplace liest beim Upload alle Metadaten aus, bereitet sie für die deutsche Sprache auf und macht sie über eine ' +
      'Suche zugänglich, die Tippfehler verzeiht und die besten Treffer nach oben stellt.',
    phases: [
      {
        title: 'Indexieren',
        items: [
          '<strong>IPTC:</strong> Überschrift, Bildunterschrift, Schlagwörter, Kategorie, Ort, Fotograf und Copyright',
          '<strong>EXIF:</strong> Aufnahmezeit mit Zeitzone, Kamera, Objektiv, Blende, Belichtungszeit und ISO',
          '<strong>Deutsch verstanden:</strong> Groß- und Kleinschreibung, Umlaute und Wortformen spielen keine Rolle, Füllwörter werden übergangen',
          '<strong>Duplikate erkannt</strong> am Bildinhalt, auch unter anderem Dateinamen',
        ],
        sample: [['Tore', 'findet auch „Tor“'], ['Müller', 'findet auch „Mueller“']],
      },
      {
        title: 'Suchen',
        items: [
          '<strong>Zehn Felder</strong> in einer Suche, von der Bildunterschrift bis zum Dateinamen. Treffer in Überschrift und Beschreibung zählen doppelt',
          '<strong>Suchsyntax:</strong> UND, ODER, NICHT, Minus, „genauer Wortlaut“ und Wortanfang mit *',
          '<strong>Ähnliche Schreibweisen</strong> abgestuft nach Wortlänge: ab vier Zeichen ein Fehler, ab acht zwei. Genaue Treffer bleiben oben',
          '<strong>Sortiert nach Relevanz</strong>, bei Gleichstand das neueste Foto zuerst',
        ],
        sample: [['"Max Müller" | Torwart -Training', 'Max Müller oder Torwart, ohne Training']],
      },
      {
        title: 'Finden',
        items: [
          '<strong>Fundstelle markiert</strong> in Bildunterschrift und Schlagwörtern',
          '<strong>Schlagwörter anklickbar:</strong> ein Klick zeigt alle Fotos mit genau diesem Schlagwort',
          '<strong>Kategorien</strong> mit Vorschaubildern, Galerien nach dem neuesten Foto sortiert',
          '<strong>Jedes Ergebnis verlinkbar:</strong> die Suche selbst, ein einzelnes Foto oder seine Stelle in der Galerie',
        ],
        sample: [['tag:Torjubel', 'alle Fotos mit dem Schlagwort Torjubel']],
      },
    ],

    groups: [
      {
        title: 'Für Besucher',
        features: [
          { title: 'Suche über alle Galerien', html: 'Begriffe kombinieren, mit Minus ausschließen, mit Anführungszeichen einen genauen Namen suchen, mit * nach einem Wortanfang. „Ähnlich“ findet auch Tippfehler und Namensvarianten.' },
          { title: 'Großansicht mit Lupe', html: 'Blättern mit Pfeiltasten oder per Wischen, Zoom per Klick oder Fingertipp. Jedes Foto hat einen eigenen Link, den du direkt verschicken kannst.' },
          { title: 'Sammlung', html: 'Fotos aus beliebigen Galerien merken, sortiert nach Reihenfolge, Galerie oder Aufnahmedatum. Die Sammlung hängt am Konto und ist auf jedem Gerät dieselbe.' },
          { title: 'ZIP-Download', html: 'Ganze Sammlungen oder eine Auswahl als ZIP. Große Mengen kommen automatisch in mehreren Teilen, der Download beginnt mit dem ersten fertigen Foto.' },
          { title: 'Teilen per Link', html: 'Ein Link schickt die Sammlung an jemanden ohne Konto. Er läuft ab und lässt sich jederzeit widerrufen. Der Empfänger kann die Fotos in seine eigene Sammlung übernehmen.' },
          { title: 'Neue Galerien', html: 'Eine neue Galerie erscheint live als Hinweis mit Vorschaubild, auf Wunsch auch per Mail. Was du verpasst hast, ist in der Übersicht als neu markiert.' },
        ],
      },
      {
        title: 'Für Betreiber',
        features: [
          { title: 'Rollen und Zugänge', html: 'Gäste, Nutzer, Fotografen und Administratoren. Fotografen sehen nur ihre Uploads, Administratoren das ganze Backend.' },
          { title: 'Upload-Status', html: 'Je Galerie siehst du, was wartet, was verarbeitet ist und was abgelehnt wurde, mit Grund: kein JPEG, EXIF oder IPTC fehlt, Duplikat.' },
          { title: 'Backend', html: 'Galerien nach Monat, Benutzer, Nachrichten aus dem Kontaktformular, Download-Statistik und Systemzustand von Indexer und Suche auf einen Blick.' },
          { title: 'Eigenes Erscheinungsbild', html: 'Farbschema und Logo stellst du im Backend um. Die Änderung gilt sofort für alle Besucher.' },
          { title: 'Ohne Fremddienste', html: 'Der Spam-Schutz im Kontaktformular kommt ohne externen Dienst aus, Fehler meldet die Anwendung per Mail. Besucherdaten gehen an niemanden weiter.' },
          { title: 'Hilfe eingebaut', html: 'Kurze Rundgänge erklären Backend, Upload, Sammlung und Großansicht beim ersten Besuch. Neue Funktionen kündigt ein einzelner Hinweis an.' },
        ],
      },
      {
        title: 'Sicher gehostet',
        features: [
          { title: 'Lokal oder in der Cloud', html: 'Die Fotos liegen auf deinem eigenen Server oder in einem S3-kompatiblen Cloud-Speicher wie Cloudflare R2. Der Wechsel ist eine Frage der Konfiguration.' },
          { title: 'Originale geschützt', html: 'Öffentlich sind nur Vorschaubilder mit Wasserzeichen. Originale in voller Auflösung gibt Pixplace erst nach dem Login heraus, direkt aus dem Speicher sind sie nicht abrufbar.' },
          { title: 'Abgeschottet und gesichert', html: 'Verschlüsselt per HTTPS, Datenbank und Suchindex sind von außen nicht erreichbar, Anfragen pro Besucher begrenzt. Die Datenbank wird täglich gesichert.' },
        ],
      },
    ],

    facts: [
      { value: 'IPTC · EXIF', text: 'Metadaten, aus denen die Suche entsteht' },
      { value: '2', text: 'Wege zum Upload: Browser und SFTP' },
      { value: '4', text: 'Rollen von Gast bis Administrator' },
      { value: 'DE · EN', text: 'Oberfläche auf Deutsch und Englisch' },
    ],

    familyTitle: 'Ein Ablauf, drei Werkzeuge',
    family: {
      captioner: { step: 'Sichten', text: 'Bewerten und beschriften auf dem Rechner, mit Kürzeln für Spielernamen. Die Bildunterschriften landen als IPTC im Foto.' },
      platform: { step: 'Veröffentlichen', text: 'Nimmt die fertigen Fotos auf und macht sie über genau diese Bildunterschriften durchsuchbar.' },
      designdeck: { step: 'Posten', text: 'Baut aus denselben Fotos ein Instagram-Karussell mit Rand, Collage, Panorama oder Text.' },
    },

    usesLabel: 'Im Einsatz',
    usesTitle: 'Hier arbeitet Pixplace',
    uses: [
      { name: 'Chuc Sport- und Pressefotografie', site: 'chuc.de', href: 'https://chuc.de', text: 'Veröffentlicht die eigenen Galerien öffentlich, mit Suche, Sammlung und Download für angemeldete Nutzer.' },
      { name: 'DEL2', site: 'del-2.org', text: 'Sammelt die Fotos der akkreditierten Standortfotografen aller Clubs in einer zentralen Datenbank und stellt sie einem festen Nutzerkreis zur Verfügung. Die Plattform ist nicht öffentlich zugänglich.' },
    ],
  },

  en: {
    title: 'Pixplace – Photo Platform for Professional Photographers | Galleries, Search, Download',
    description:
      'Pixplace takes finished, captioned photos and makes them searchable in seconds: upload via browser or SFTP, search ' +
      'across IPTC captions and keywords, collections, ZIP download and sharing by link.',
    ogDescription:
      'Photos become searchable content, in seconds. Pixplace reads your photos\' metadata and makes them findable by ' +
      'names, places and keywords.',
    ogAlt: 'A gallery on chuc.de, published with Pixplace',
    screensTitle: 'A look at Pixplace · chuc.de',
    kicker: 'Photo platform · Web',
    lead: 'Photos become searchable content, in seconds.',
    intro:
      'Pixplace fits into the workflow of professional photographers. You edit and caption your photos on location, at ' +
      'the game, the concert or the shoot, and upload them finished. Pixplace reads the metadata, creates the previews ' +
      'and adds your watermark. Every photo can then be found by names, places and keywords, across all galleries.',
    handoutLabel: 'Handout (PDF, German)',
    contactLabel: 'Contact',

    whyTitle: 'Whoever needs a photo searches for a name.',
    why: [
      'A game, a concert or a shoot quickly adds up to 150 photos, a season to several thousand. Anyone who needs a picture ' +
        'of a particular person would otherwise page through one gallery after another.',
      'Pixplace searches the captions and keywords you write into the photo on location. A typo in a name doesn\'t ' +
        'matter, and the photos you find can be collected, downloaded as a ZIP or passed on by link.',
    ],

    stepsTitle: 'For photographers: online in three steps',
    steps: [
      { title: 'Edit on location', text: 'Edit your photos right at the rink, in the pit or on set, and write caption and keywords into the photo as IPTC.' },
      { title: 'Upload', text: 'Drag the finished JPEGs into the browser window or upload them via SFTP, also automatically from your software. The folder name becomes the gallery, e.g. <code>20261108_ECN_DEG</code>.' },
      { title: 'Searchable', text: 'Pixplace reads the metadata and the photos can be found by search within seconds. Anyone who wants to sees the new gallery right away or gets it by email.' },
    ],

    pipelineLabel: 'From upload to find',
    pipelineTitle: 'Every field you caption becomes a search term.',
    pipelineText:
      'On upload Pixplace reads all metadata, prepares it for the German language and makes it available through a search ' +
      'that forgives typos and puts the best matches first.',
    phases: [
      {
        title: 'Index',
        items: [
          '<strong>IPTC:</strong> headline, caption, keywords, category, location, photographer and copyright',
          '<strong>EXIF:</strong> capture time with time zone, camera, lens, aperture, shutter speed and ISO',
          '<strong>German understood:</strong> case, umlauts and word forms don\'t matter, filler words are skipped',
          '<strong>Duplicates detected</strong> by image content, even under a different file name',
        ],
        sample: [['Tore', 'also finds “Tor”'], ['Müller', 'also finds “Mueller”']],
      },
      {
        title: 'Search',
        items: [
          '<strong>Ten fields</strong> in one search, from the caption to the file name. Matches in headline and description count double',
          '<strong>Search syntax:</strong> AND, OR, NOT, minus, “exact phrase” and word prefix with *',
          '<strong>Similar spellings</strong> graded by word length: one typo from four letters, two from eight. Exact matches stay on top',
          '<strong>Sorted by relevance</strong>, newest photo first on a tie',
        ],
        sample: [['"Max Müller" | Torwart -Training', 'Max Müller or Torwart, without Training']],
      },
      {
        title: 'Find',
        items: [
          '<strong>Matches highlighted</strong> in caption and keywords',
          '<strong>Clickable keywords:</strong> one click shows all photos with exactly that keyword',
          '<strong>Categories</strong> with previews, galleries sorted by their newest photo',
          '<strong>Every result has a link:</strong> the search itself, a single photo or its place in the gallery',
        ],
        sample: [['tag:Torjubel', 'all photos with the keyword Torjubel']],
      },
    ],

    groups: [
      {
        title: 'For visitors',
        features: [
          { title: 'Search across all galleries', html: 'Combine terms, exclude with a minus, search an exact name in quotes, a word prefix with *. “Similar” also finds typos and name variants.' },
          { title: 'Full view with magnifier', html: 'Browse with arrow keys or by swiping, zoom with a click or a tap. Every photo has its own link you can send right away.' },
          { title: 'Collection', html: 'Keep photos from any gallery, sorted by order, gallery or capture date. The collection belongs to your account and is the same on every device.' },
          { title: 'ZIP download', html: 'Whole collections or a selection as a ZIP. Large sets come in several parts automatically, the download starts with the first finished photo.' },
          { title: 'Share by link', html: 'A link sends the collection to someone without an account. It expires and can be revoked at any time. The recipient can copy the photos into their own collection.' },
          { title: 'New galleries', html: 'A new gallery shows up live as a notice with a preview, by email if you like. Whatever you missed is marked as new in the overview.' },
        ],
      },
      {
        title: 'For operators',
        features: [
          { title: 'Roles and access', html: 'Guests, users, photographers and administrators. Photographers see only their uploads, administrators the whole back end.' },
          { title: 'Upload status', html: 'Per gallery you see what is waiting, what is processed and what was rejected, with the reason: not a JPEG, EXIF or IPTC missing, duplicate.' },
          { title: 'Back end', html: 'Galleries by month, users, messages from the contact form, download statistics and the state of indexer and search at a glance.' },
          { title: 'Your own look', html: 'Change colour scheme and logo in the back end. The change applies to all visitors right away.' },
          { title: 'No third-party services', html: 'The contact form\'s spam protection needs no external service, errors are reported by email. Visitor data is not passed on to anyone.' },
          { title: 'Help built in', html: 'Short tours explain back end, upload, collection and full view on the first visit. New features are announced with a single hint.' },
        ],
      },
      {
        title: 'Hosted securely',
        features: [
          { title: 'Local or in the cloud', html: 'Photos live on your own server or in S3-compatible cloud storage such as Cloudflare R2. Switching is a matter of configuration.' },
          { title: 'Originals protected', html: 'Only watermarked previews are public. Pixplace hands out full-resolution originals only after login, they can\'t be fetched from the storage directly.' },
          { title: 'Locked down and backed up', html: 'Encrypted via HTTPS, database and search index unreachable from outside, requests per visitor limited. The database is backed up daily.' },
        ],
      },
    ],

    facts: [
      { value: 'IPTC · EXIF', text: 'Metadata the search is built from' },
      { value: '2', text: 'Ways to upload: browser and SFTP' },
      { value: '4', text: 'Roles from guest to administrator' },
      { value: 'DE · EN', text: 'Interface in German and English' },
    ],

    familyTitle: 'One workflow, three tools',
    family: {
      captioner: { step: 'Cull', text: 'Rate and caption on your computer, with codes for player names. The captions go into the photo as IPTC.' },
      platform: { step: 'Publish', text: 'Takes the finished photos and makes them searchable by exactly these captions.' },
      designdeck: { step: 'Post', text: 'Turns the same photos into an Instagram carousel with borders, collages, panoramas or text.' },
    },

    usesLabel: 'In use',
    usesTitle: 'Where Pixplace works',
    uses: [
      { name: 'Chuc Sport- und Pressefotografie', site: 'chuc.de', href: 'https://chuc.de', text: 'Publishes its own galleries to the public, with search, collection and download for signed-in users.' },
      { name: 'DEL2', site: 'del-2.org', text: 'Collects the photos of every club\'s accredited venue photographers in one central database and makes them available to a fixed group of users. The platform is not publicly accessible.' },
    ],
  },
}
