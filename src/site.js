// Everything that ties the site to the outside world, in one place.

// Canonical origin. pixplace.de (without www) forwards here (DNS: see README).
export const SITE_URL = 'https://www.pixplace.de'

// The apps' release workflows (job "bunny") publish here: <DOWNLOADS>/<product>/latest.json,
// latest/<stable names>, v<version>/…. Still on katzefudder.de, because installed apps poll
// that latest.json for updates. Fetching latest.json from pixplace.de needs CORS on that pull
// zone; without it the page falls back to the stable latest/ links (README, "Downloads").
export const DOWNLOADS = 'https://www.katzefudder.de/downloads'

// Imprint (§ 5 DDG) and license requests.
export const OWNER = {
  name: 'Florian Dehn',
  street: 'Feldbornstrasse 2',
  city: '35510 Butzbach',
  phone: '+49 151 24147281',
  // USt-IdNr. (§ 27a UStG); required in the imprint once there is one. Empty = not shown.
  vatId: '',
}
export const CONTACT_EMAIL = 'flo@katzefudder.de'

// Self-hosted Matomo. Empty siteId = no tracking at all (and the privacy page says so).
export const MATOMO = { url: 'https://piwik.katzefudder.de/', siteId: '2' }

export const AUTHOR = { name: 'Florian Dehn', url: 'https://www.katzefudder.de' }
