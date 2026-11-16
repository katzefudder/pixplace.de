// Home page: the Pixplace platform first (content management through photos), the two desktop
// apps as companions further down. Platform prices are not public yet (calculation open), so
// the page asks for a demo instead.

export default {
  de: {
    title: 'Pixplace – Content Management über Fotos | Fotoplattform für Fotografen, Vereine und Ligen',
    description:
      'Mit Pixplace entsteht beim Hochladen Content: Aus den Metadaten deiner Fotos werden Galerien, Suche und ' +
      'Benachrichtigungen, in Sekunden. Für Fotografen, Agenturen, Vereine, Redaktionen und Ligen. Gehostet in Deutschland ' +
      'oder auf deinem eigenen Server.',
    ogAlt: 'Eine Galerie auf chuc.de, veröffentlicht mit Pixplace',
    kicker: 'Pixplace · Content Management über Fotos',
    heading: 'Beim Hochladen entsteht Content.',
    lead:
      'Du lädst fertig beschriftete Fotos hoch, Pixplace macht daraus Galerien, Suche und Benachrichtigungen. Kein CMS, ' +
      'keine Galerie von Hand: Die Bildunterschrift im Foto ist die ganze Redaktionsarbeit.',
    platformMore: 'So funktioniert Pixplace',
    heroShot: {
      alt: 'Galerieseite auf chuc.de: großes Titelfoto vom Spiel EC Bad Nauheim gegen EV Landshut mit Datum, Ort und Anzahl der Fotos',
      caption: 'Eine Galerie auf chuc.de · Titel, Datum und Ort aus den Fotos',
    },
    labels: {
      content: 'Aus einem Foto',
      flow: 'Ablauf',
      audience: 'Für wen',
      uses: 'Im Einsatz',
      companions: 'Dazu passend',
      contact: 'Kontakt',
    },

    contentTitle: 'Was im Foto steht, steht danach auf der Seite.',
    contentText:
      'Pixplace liest beim Upload EXIF und IPTC aus und baut daraus die Inhalte. Niemand legt Galerien an, tippt Titel ab ' +
      'oder verschlagwortet ein zweites Mal.',
    contentHeads: { input: 'Im Foto', output: 'Daraus wird' },
    contentRows: [
      { field: 'Ordner', value: '20261108_ECN_DEG', result: 'eine Galerie mit eigener Seite und eigenem Link' },
      { field: 'Aufnahmezeit · EXIF', value: '08.11.2026, 19:42', result: 'Datum der Galerie, neueste Fotos zuerst' },
      { field: 'Bildunterschrift · IPTC', value: 'Max Müller (ECN) nach seinem Tor zum 2:1', result: 'Treffer für „Müller“, „Mueller“ und „Tore“, über alle Galerien' },
      { field: 'Schlagwörter · IPTC', value: 'Torjubel, Heimspiel', result: 'anklickbare Schlagwörter und Kategorien' },
      { field: 'Fotograf · IPTC', value: 'Florian Dehn', result: 'Credit unter jedem Foto, Wasserzeichen auf der Vorschau' },
      { field: 'Upload fertig', value: '148 Fotos', result: 'Meldung an Presse und Vereine, live oder per Mail' },
    ],

    flowTitle: 'Je schneller in Umlauf, desto besser für den Fotografen.',
    flow: [
      { edge: 'Vor Ort', title: 'Beschriften', text: 'Am Spielfeldrand, im Graben oder am Set: Bildunterschrift und Schlagwörter ins Foto schreiben.' },
      { edge: 'Upload', title: 'Hochladen', text: 'Fertige JPEGs ins Browserfenster ziehen oder per SFTP, auch automatisch aus Lightroom.' },
      { edge: 'Pixplace', title: 'Content entsteht', text: 'Galerie, Vorschaubilder, Wasserzeichen und Suchindex, in Sekunden.' },
      { edge: 'Pixplace', title: 'Kunden informiert', text: 'Die neue Galerie erscheint live als Hinweis oder kommt per Mail.' },
      { edge: 'Abnehmer', title: 'In Umlauf', text: 'Presse und Vereine suchen, sammeln, laden als ZIP oder teilen per Link.' },
    ],

    audienceTitle: 'Für alle, deren Fotos schnell ankommen müssen.',
    audience: [
      { title: 'Fotografen', text: 'Sport, Konzert, Event, Presse: deine Fotos online und auffindbar, bevor du den Platz verlässt.' },
      { title: 'Teams und Agenturen', text: 'Mehrere Fotografen, ein Bestand. Jeder sieht seine Uploads, die Suche läuft über alle.' },
      { title: 'Vereine und Redaktionen', text: 'Das richtige Foto für Artikel und Post, gesucht nach Name statt geblättert nach Datum.' },
      { title: 'Ligen und Verbände', text: 'Die Fotos aller Clubs in einer geschlossenen Datenbank, mit Rollen und festem Nutzerkreis.' },
    ],
    hosting:
      'Gehostet in Deutschland oder auf deinem eigenen Server. Öffentlich sind nur Vorschaubilder mit Wasserzeichen, ' +
      'Originale gibt es erst nach dem Login.',

    companionsTitle: 'Zwei Apps für davor und danach',
    companionsText:
      'Captioner schreibt die Bildunterschriften, aus denen Pixplace seine Inhalte baut. Design Deck macht aus denselben ' +
      'Fotos einen Instagram-Post. Beide laufen auf macOS und Windows, mit kostenloser Testversion und ohne Abo.',
    demo: {
      typed: 'Zweikampf um den Puck #bi99# gegen #bn23#',
      result: 'Zweikampf um den Puck -99- John Doe (Bietigheim Steelers) gegen -23- Marius Erk (EC Bad Nauheim)',
      typedLabel: 'Getippt',
      resultLabel: 'Gespeichert',
    },
    products: {
      captioner: {
        tagline: 'Davor: sichten und beschriften',
        text:
          'Roster-Codes statt Spielernamen tippen, Titel, Ort und Rechte einmal per Template, Sterne und Farbklassen über ' +
          'die Tastatur. Die Metadaten gehen als IPTC/XMP direkt nach Lightroom.',
        more: 'Mehr zu Captioner',
      },
      designdeck: {
        tagline: 'Danach: Instagram-Karussells gestalten',
        text:
          'Ränder, Raster, Collagen und Panoramen über bis zu zehn Bilder, dazu Texte, Logos und Wasserzeichen. Jede ' +
          'Kachel wird ein fertiges JPG in der Reihenfolge des Posts.',
        more: 'Mehr zu Design Deck',
      },
    },
    pricesLink: 'Preise und Testversion',

    contactTitle: 'Pixplace mit deinen Fotos sehen',
    contactText:
      'Schreib mir, was du fotografierst und wer deine Fotos braucht. Ich zeige dir Pixplace und richte dir einen ' +
      'Testzugang ein. Fragen zu Captioner und Design Deck oder eine Lizenz? Gleiche Adresse. Ich bin selbst ' +
      'Sportfotograf und baue Pixplace für meine eigene Arbeit an der Bande.',
  },
  en: {
    title: 'Pixplace – Content Management Through Photos | Photo Platform for Photographers, Clubs and Leagues',
    description:
      'With Pixplace, uploading creates content: your photos\' metadata becomes galleries, search and notifications, in ' +
      'seconds. For photographers, agencies, clubs, newsrooms and leagues. Hosted in Germany or on your own server.',
    ogAlt: 'A gallery on chuc.de, published with Pixplace',
    kicker: 'Pixplace · Content management through photos',
    heading: 'Uploading creates content.',
    lead:
      'You upload finished, captioned photos, Pixplace turns them into galleries, search and notifications. No CMS, no ' +
      'galleries built by hand: the caption in the photo is all the editing it takes.',
    platformMore: 'How Pixplace works',
    heroShot: {
      alt: 'Gallery page on chuc.de: large cover photo of the game EC Bad Nauheim vs EV Landshut with date, venue and photo count',
      caption: 'A gallery on chuc.de · headline, date and venue from the photos',
    },
    labels: {
      content: 'From one photo',
      flow: 'Workflow',
      audience: 'Who it\'s for',
      uses: 'In use',
      companions: 'Companion apps',
      contact: 'Contact',
    },

    contentTitle: 'What\'s in the photo ends up on the page.',
    contentText:
      'On upload Pixplace reads EXIF and IPTC and builds the content from them. Nobody creates galleries, retypes headlines ' +
      'or adds keywords a second time.',
    contentHeads: { input: 'In the photo', output: 'Becomes' },
    contentRows: [
      { field: 'Folder', value: '20261108_ECN_DEG', result: 'a gallery with its own page and link' },
      { field: 'Capture time · EXIF', value: '08 Nov 2026, 19:42', result: 'the gallery date, newest photos first' },
      { field: 'Caption · IPTC', value: 'Max Müller (ECN) after his goal for 2–1', result: 'hits for “Müller”, “Mueller” and the typo “Muler”, across all galleries' },
      { field: 'Keywords · IPTC', value: 'goal celebration, home game', result: 'clickable keywords and categories' },
      { field: 'Photographer · IPTC', value: 'Florian Dehn', result: 'a credit under every photo, a watermark on the preview' },
      { field: 'Upload done', value: '148 photos', result: 'a notice to press and clubs, live or by email' },
    ],

    flowTitle: 'The sooner photos are out, the better for the photographer.',
    flow: [
      { edge: 'On site', title: 'Caption', text: 'At the rink, in the pit or on set: write caption and keywords into the photo.' },
      { edge: 'Upload', title: 'Upload', text: 'Drag finished JPEGs into the browser or send them via SFTP, also straight from Lightroom.' },
      { edge: 'Pixplace', title: 'Content appears', text: 'Gallery, previews, watermark and search index, in seconds.' },
      { edge: 'Pixplace', title: 'Clients notified', text: 'The new gallery shows up live as a notice or arrives by email.' },
      { edge: 'Clients', title: 'Out there', text: 'Press and clubs search, collect, download as a ZIP or share by link.' },
    ],

    audienceTitle: 'For everyone whose photos need to arrive fast.',
    audience: [
      { title: 'Photographers', text: 'Sports, concerts, events, press: your photos online and findable before you leave the venue.' },
      { title: 'Teams and agencies', text: 'Several photographers, one archive. Each sees their own uploads, search covers all of them.' },
      { title: 'Clubs and newsrooms', text: 'The right photo for the article or post, searched by name instead of paged through by date.' },
      { title: 'Leagues and federations', text: 'Every club\'s photos in one closed database, with roles and a fixed group of users.' },
    ],
    hosting:
      'Hosted in Germany or on your own server. Only watermarked previews are public, originals only after login.',

    companionsTitle: 'Two apps for before and after',
    companionsText:
      'Captioner writes the captions Pixplace builds its content from. Design Deck turns the same photos into an Instagram ' +
      'post. Both run on macOS and Windows, with a free trial and no subscription.',
    demo: {
      typed: 'Battle for the puck #bi99# vs #bn23#',
      result: 'Battle for the puck -99- John Doe (Bietigheim Steelers) vs -23- Marius Erk (EC Bad Nauheim)',
      typedLabel: 'Typed',
      resultLabel: 'Saved',
    },
    products: {
      captioner: {
        tagline: 'Before: cull and caption',
        text:
          'Type roster codes instead of player names, set headline, venue and rights once with a template, rate and label ' +
          'from the keyboard. The metadata goes straight into Lightroom as IPTC/XMP.',
        more: 'More about Captioner',
      },
      designdeck: {
        tagline: 'After: design Instagram carousels',
        text:
          'Borders, grids, collages and panoramas across up to ten slides, plus texts, logos and a watermark. Every tile ' +
          'becomes a finished JPG in posting order.',
        more: 'More about Design Deck',
      },
    },
    pricesLink: 'Pricing and free trial',

    contactTitle: 'See Pixplace with your photos',
    contactText:
      'Tell me what you photograph and who needs your photos. I\'ll show you Pixplace and set up a trial account. ' +
      'Questions about Captioner and Design Deck or want a license? Same address. I\'m a sports photographer myself and ' +
      'build Pixplace for my own work at the rink.',
  },
}
