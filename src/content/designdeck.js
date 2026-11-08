// Pixplace Design Deck page (markup rules as in captioner.js).

const shots = '/images/designdeck'

// images of an example post, as the app writes them
const examples = [
  ['border', 'Einzelfoto mit weißem Rand: zwei Eishockeyspieler im Zweikampf um den Puck',
    'Single photo with a white border: two ice hockey players fighting for the puck'],
  ['grid', '2 × 2-Raster mit vier Porträts von Spielern auf der Bank',
    '2 × 2 grid with four portraits of players on the bench'],
  ['panorama-1', 'Panorama, erstes Bild: zwei Stürmer im Zweikampf vor dem Schiedsrichter',
    'Panorama, first slide: two forwards fighting for the puck in front of the referee'],
  ['panorama-2', 'Panorama, zweites Bild: der Torhüter vor seinem Tor',
    'Panorama, second slide: the goalie in front of his net'],
  ['text', 'Text-Kachel: Torhütermaske im Profil mit der Überschrift „Heimspiel“ und dem Datum',
    'Text tile: goalie mask in profile with the heading “Heimspiel” and the date'],
].map(([name, de, en]) => ({
  src: `${shots}/designdeck-${name}.jpg`,
  thumb: `${shots}/designdeck-${name}-thumb.jpg`,
  width: 1600,
  height: 1067,
  alt: { de, en },
}))

// screenshots of the app (`make screenshots` in the app's repository)
const screens = [
  {
    name: 'app-text', width: 2400, height: 1547, wide: true,
    alt: {
      de: 'Fenster von Pixplace Design Deck: Fotokatalog links, die Kacheln des Posts oben, eine Text-Kachel auf der Arbeitsfläche, rechts die Text-Einstellungen',
      en: 'Pixplace Design Deck window: photo catalog on the left, the tiles of the post on top, a text tile on the canvas with the text panel on the right',
    },
    caption: {
      de: 'Katalog, Kacheln des Posts und Arbeitsfläche: Texte mit Akzentwörtern stehen direkt auf dem Foto.',
      en: 'Catalog, tiles of the post and the canvas: texts with accent words go right onto the photo.',
    },
  },
  {
    name: 'app-panorama', width: 2400, height: 1547,
    alt: {
      de: 'Ein Panorama über zwei Bilder auf der Arbeitsfläche, mit der Schnittlinie zwischen den Bildern und den Hintergrundeffekten rechts',
      en: 'A panorama across two slides on the canvas, with the cut line between the images and the background effects on the right',
    },
    caption: {
      de: 'Ein Panorama über zwei Bilder – die Schnittlinie zeigt, wo Instagram teilt.',
      en: 'A panorama across two slides – the cut line shows where Instagram splits it.',
    },
  },
  {
    name: 'app-preview', width: 888, height: 1022,
    alt: {
      de: 'Instagram-Vorschau des Posts: die Text-Kachel als fünftes von fünf Bildern, darunter die Bildunterschrift',
      en: 'Instagram preview of the post: the text tile as the fifth of five images, with the caption below',
    },
    caption: {
      de: 'Die Instagram-Vorschau zeigt den Post, bevor du ihn hochlädst.',
      en: 'The Instagram preview shows the post before you upload it.',
    },
  },
].map((s) => ({ ...s, src: `${shots}/designdeck-${s.name}.jpg`, thumb: `${shots}/designdeck-${s.name}-thumb.jpg` }))

export default {
  slug: 'designdeck',
  name: 'Pixplace Design Deck',
  logo: `${shots}/designdeck-icon.png`,
  files: {
    dmg: 'latest/Pixplace-Design-Deck-arm64.dmg',
    pkg: 'latest/Pixplace-Design-Deck-arm64.pkg',
    exe: 'latest/Pixplace-Design-Deck-x64-setup.exe',
  },
  matomoCategory: 'Design Deck',
  ogImage: { src: `${shots}/designdeck-grid.jpg`, width: 1600, height: 1067 },
  prices: [
    { duration: { de: '1 Monat', en: '1 month' }, price: 3.99 },
    { duration: { de: '3 Monate', en: '3 months' }, price: 6.99 },
    { duration: { de: '12 Monate', en: '12 months' }, price: 12.99 },
  ],
  // screens before the features, the example post after them
  galleriesFirst: [{ id: 'designdeck-screens', layout: 'figures', images: screens }],
  galleries: [{ id: 'designdeck-examples', layout: 'grid', images: examples }],

  de: {
    title: 'Pixplace Design Deck – Instagram-Karussells für Fotografen | macOS & Windows',
    description:
      'Pixplace Design Deck macht aus einem Ordner Fotos ein fertiges Instagram-Karussell: Ränder, Collagen, Raster, ' +
      'Panoramen über bis zu zehn Bilder, Texte, Logos und Wasserzeichen. Kostenlose Testversion für macOS und Windows.',
    ogDescription:
      'Vom Ordner mit Spielfotos zum fertigen Instagram-Karussell: Ränder, Raster, Panoramen über mehrere Bilder, ' +
      'Texte und Logos – nichts wird aus Versehen abgeschnitten.',
    ogAlt: 'Ein 2 × 2-Raster mit Spielerporträts, gemacht mit Pixplace Design Deck',
    kicker: 'Instagram-Karussells · macOS · Windows',
    lead: 'Vom Ordner mit Spielfotos zum fertigen Instagram-Karussell – ohne dass etwas abgeschnitten wird.',
    intro:
      'Instagram schneidet jedes Bild eines Karussells auf das Format des ersten zu, ein Hochformat zwischen ' +
      'Querformaten verliert also oben und unten. Mit Pixplace Design Deck legst du jedes Bild vor dem Hochladen als ' +
      'Kachel an: Einzelfotos mit weißem Rand, Collagen und Raster, Panoramen über mehrere Bilder, Texte und Logos. ' +
      'Jede Kachel wird ein fertiges JPG, nummeriert in der Reihenfolge des Posts.',
    requirements: 'macOS {minMacos}, Apple Silicon · Windows 10 (1809) oder 11, 64 Bit',
    extraLinks: [{ href: '/handouts/Pixplace-Design-Deck-Handout.pdf', label: 'Handout (PDF)', track: 'handout' }],
    gainsTitle: 'Wo Pixplace Design Deck Zeit spart',
    gains: [
      '<strong>Keine bösen Überraschungen beim Zuschnitt</strong>: die Instagram-Vorschau zeigt den Post so, wie ihn deine Follower sehen',
      '<strong>Bis zu 20 Bilder pro Post</strong>, nummeriert in der Reihenfolge und bereit zum Hochladen',
      '<strong>Panoramen über bis zu 10 Bilder</strong>, die beim Wischen nahtlos aneinander passen',
      '<strong>Vereinslogos und dein Wasserzeichen</strong> auf jedem Bild, ohne ein weiteres Programm',
    ],
    features: [
      {
        title: 'Ränder, Collagen und Raster',
        html:
          'Das ganze Foto in einem weißen Rahmen, die Kachel ganz gefüllt oder mehrere Fotos in einem Raster: Spalten, ' +
          'Zeilen, 2 × 2, ein großes Foto mit kleinen, diagonale und schräge Teilungen, runde Fotos mit Ring. Die Abstände ' +
          'folgen dem Rand oder bekommen eine eigene Breite.',
      },
      {
        title: 'Panoramen',
        html:
          'Ein breites Bild wird in bis zu zehn aufeinanderfolgende Bilder geteilt. Gestrichelte Schnittlinien auf der ' +
          'Arbeitsfläche zeigen, wo die Bilder enden, damit Gesichter und der Puck nicht auf einer Naht landen.',
      },
      {
        title: 'Texte und Vorlagen',
        html:
          'Überschriften und Absätze in jeder Systemschrift, mit Akzentwörtern, Verläufen und Schlagschatten. Vorlagen für ' +
          'Storytelling, Statistik, Listen und Thumbnails richten Raster, Texte und eine Abdunklung mit einem Klick ein; ' +
          'eine fertige Kachel speicherst du als eigene Vorlage für den nächsten Spieltag.',
      },
      {
        title: 'Logos und Wasserzeichen',
        html:
          'Vereins- und Sponsorenlogos liegen in der Logo-Bibliothek und lassen sich auf jede Kachel ziehen. Dein ' +
          'Wasserzeichen kommt auf jedes Bild; je Kachel kannst du es verschieben, skalieren oder weglassen.',
      },
    ],
    galleryTitles: {
      'designdeck-screens': { title: 'Ein Blick in die App' },
      'designdeck-examples': {
        title: 'Gemacht mit Pixplace Design Deck',
        text: 'Ein Post, fünf Bilder, so wie die App sie schreibt: ein Foto mit Rand, ein 2 × 2-Raster, ein Panorama über zwei Bilder und eine Text-Kachel.',
      },
    },
    trial:
      'Die kostenlose Testversion macht Posts mit bis zu 5 Bildern und schreibt „created with Pixplace“ auf jedes Bild. ' +
      'Projekte speichern, eigene Vorlagen, die Logo-Bibliothek, Panoramen über mehr als zwei Bilder und das Rendern ' +
      'mehrerer Projekte gibt es in der Vollversion:',
    howToBuy:
      'Du bekommst den Lizenzschlüssel per E-Mail und trägst ihn in der App ein (<em>Pixplace Design Deck → Lizenz…</em> ' +
      'auf dem Mac, <em>Hilfe → Lizenz…</em> unter Windows).',
    install:
      '<strong>Hinweis:</strong> Die Mac-Version ist nur ad-hoc signiert, deshalb blockiert macOS den ersten Start. ' +
      'Erlaube ihn einmal unter <em>Systemeinstellungen → Datenschutz &amp; Sicherheit → „Dennoch öffnen“</em> oder im ' +
      'Terminal mit <code>xattr -dr com.apple.quarantine "/Applications/Pixplace Design Deck.app"</code>. Auch der ' +
      'Windows-Installer ist nicht signiert: wenn SmartScreen warnt, <em>„Weitere Informationen“ → „Trotzdem ausführen“</em>.',
  },

  en: {
    title: 'Pixplace Design Deck – Instagram Carousel Designer for Photographers | macOS & Windows',
    description:
      'Pixplace Design Deck turns a folder of photos into a finished Instagram carousel: borders, collages, grids, ' +
      'panoramas across up to ten slides, texts, logos and watermark. Free trial for macOS and Windows.',
    ogDescription:
      'From a folder of game photos to a finished Instagram carousel: borders, grids, panoramas across slides, ' +
      'texts and logos – nothing cropped by accident.',
    ogAlt: 'A 2 × 2 grid of player portraits made with Pixplace Design Deck',
    kicker: 'Instagram carousel designer · macOS · Windows',
    lead: 'From a folder of game photos to a finished Instagram carousel – nothing cropped by accident.',
    intro:
      'Instagram crops every image of a carousel to the format of the first one, so a portrait shot between landscape ' +
      'ones loses its top and bottom. Pixplace Design Deck lets you lay out each image as a tile before you upload: ' +
      'single photos with a white border, collages and grids, panoramas that run across several slides, texts and logos. ' +
      'Every tile becomes a finished JPG, numbered in posting order.',
    requirements: 'macOS {minMacos}, Apple Silicon · Windows 10 (1809) or 11, 64-bit',
    extraLinks: [{ href: '/handouts/Pixplace-Design-Deck-Handout.pdf', label: 'Handout (PDF, German)', track: 'handout' }],
    gainsTitle: 'Where Pixplace Design Deck saves you time',
    gains: [
      '<strong>No surprise crops</strong> – the Instagram preview shows the post as your followers will see it',
      '<strong>Up to 20 images per post</strong>, numbered in posting order and ready to upload',
      '<strong>Panoramas across up to 10 slides</strong> that line up seamlessly when swiping',
      '<strong>Club logos and your watermark</strong> on every image, without opening another tool',
    ],
    features: [
      {
        title: 'Borders, collages and grids',
        html:
          'Keep the whole photo inside a white frame, fill the tile, or drag several photos into a grid: columns, rows, ' +
          '2 × 2, one large photo with small ones, diagonal and slanted splits, round photos with a ring. The gaps follow ' +
          'the border or get their own width.',
      },
      {
        title: 'Panoramas',
        html:
          'One wide picture is split into up to ten consecutive slides. Dashed cut lines on the canvas show where the ' +
          'images end, so faces and the puck don\'t land on a seam.',
      },
      {
        title: 'Texts and templates',
        html:
          'Headers and paragraphs in any system font, with accent words, gradients and drop shadows. Templates for ' +
          'storytelling, stats, lists and thumbnails set up grid, texts and a shade in one click; save a finished tile as ' +
          'your own template for the next game day.',
      },
      {
        title: 'Logos and watermark',
        html:
          'Keep club and sponsor logos in the logo library and drag them onto any tile. Your watermark goes onto every ' +
          'image – per tile it can be moved, resized or left out.',
      },
    ],
    galleryTitles: {
      'designdeck-screens': { title: 'A look at the app' },
      'designdeck-examples': {
        title: 'Made with Pixplace Design Deck',
        text: 'One post, five images as the app writes them: a photo with a border, a 2 × 2 grid, a panorama across two slides and a text tile.',
      },
    },
    trial:
      'The free trial makes posts with up to 5 images and adds “created with Pixplace” to every image. Saving projects, ' +
      'own templates, the logo library, panoramas across more than two slides and rendering several projects come with ' +
      'the full version:',
    howToBuy:
      'You get the license key by email and enter it in the app (<em>Pixplace Design Deck → License…</em> on the Mac, ' +
      '<em>Help → License…</em> on Windows).',
    install:
      '<strong>Note:</strong> Mac releases are only ad-hoc signed, so macOS blocks the app on first launch. Allow it ' +
      'once via <em>System Settings → Privacy &amp; Security → “Open Anyway”</em>, or run ' +
      '<code>xattr -dr com.apple.quarantine "/Applications/Pixplace Design Deck.app"</code> in Terminal. The Windows ' +
      'installer isn\'t code-signed either: when SmartScreen warns, click <em>“More info” → “Run anyway”</em>.',
  },
}
