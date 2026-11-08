// Texts that appear on every page (header, footer, download and price blocks).

export const ui = {
  de: {
    locale: 'de-DE',
    nav: { captioner: 'Captioner', designdeck: 'Design Deck', prices: 'Preise', contact: 'Kontakt' },
    langSwitch: 'English',
    footer: {
      tagline: 'Desktop-Werkzeuge für Fotografen. Gemacht in Hessen von einem Sportfotografen.',
      imprint: 'Impressum',
      privacy: 'Datenschutz',
      personal: 'Über mich: katzefudder.de',
    },
    download: {
      dmg: 'Download {version} (DMG)',
      pkg: 'Installer (PKG)',
      exe: 'Windows (Setup)',
      published: 'veröffentlicht am {date}',
      trial: 'Kostenlose Testversion',
    },
    prices: {
      title: 'Testversion und Vollversion',
      vat: 'Preise inkl. 19 % MwSt.',
      request: 'Anfragen',
      mailSubject: 'Lizenz {product} – {duration}',
      mailBody:
        'Hallo,\n\nich möchte eine Lizenz für {product} ({duration}, {price}).\n\nName für den Lizenzschlüssel:\nRechnungsadresse:\n\nViele Grüße',
    },
    consent: {
      title: 'Reichweitenmessung',
      text:
        'Darf ich mit Matomo zählen, welche Seiten besucht und welche Apps heruntergeladen werden? Matomo läuft auf ' +
        'meinem eigenen Server, setzt dafür Cookies, und die Daten gehen an niemanden weiter. Ohne Zustimmung wird ' +
        'nichts gezählt.',
      more: 'Mehr in den Datenschutzhinweisen',
      accept: 'Zustimmen',
      reject: 'Ablehnen',
      settings: 'Cookie-Einstellungen',
    },
    gallery: { open: 'Vergrößern' },
    notFound: { title: 'Seite nicht gefunden', back: 'Zur Startseite' },
  },
  en: {
    locale: 'en-GB',
    nav: { captioner: 'Captioner', designdeck: 'Design Deck', prices: 'Pricing', contact: 'Contact' },
    langSwitch: 'Deutsch',
    footer: {
      tagline: 'Desktop tools for photographers. Made in Hesse, Germany, by a sports photographer.',
      imprint: 'Legal notice (German)',
      privacy: 'Privacy (German)',
      personal: 'About me: katzefudder.de',
    },
    download: {
      dmg: 'Download {version} (DMG)',
      pkg: 'Installer (PKG)',
      exe: 'Windows (Setup)',
      published: 'published {date}',
      trial: 'Free trial',
    },
    prices: {
      title: 'Trial and full version',
      vat: 'Prices include 19% German VAT.',
      request: 'Request',
      mailSubject: 'License {product} – {duration}',
      mailBody:
        'Hello,\n\nI would like a license for {product} ({duration}, {price}).\n\nName for the license key:\nBilling address:\n\nBest regards',
    },
    consent: {
      title: 'Analytics',
      text:
        'May I use Matomo to count which pages are visited and which apps are downloaded? Matomo runs on my own ' +
        'server, sets cookies for this and the data is not passed on to anyone. Without your consent nothing is counted.',
      more: 'More in the privacy notice (German)',
      accept: 'Accept',
      reject: 'Decline',
      settings: 'Cookie settings',
    },
    gallery: { open: 'Enlarge' },
    notFound: { title: 'Page not found', back: 'Back to the home page' },
  },
}

// '{name}' placeholders, like the apps' _('…').format(…)
export function fill(text, values) {
  return text.replace(/\{(\w+)\}/g, (m, k) => (k in values ? values[k] : m))
}
