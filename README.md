# www.pixplace.de

Product site for **Pixplace Captioner**, **Pixplace Design Deck** and the **Pixplace** web platform (`/plattform`). Vue 3 + Vite, static build,
hosted on Bunny Storage + CDN like katzefudder.de. German at `/`, English under `/en`.

```sh
npm install
npm run dev       # http://localhost:5173
npm run build     # dist/, one index.html per route + 404.html + sitemap.xml
npm run preview
```

## Structure

| Path | What |
|---|---|
| `src/site.js` | Everything external: site URL, download base, contact, imprint data, Matomo |
| `src/routes.js` | Route table without components; used by the router **and** the build |
| `src/content/*.js` | All texts, per language (`de`/`en`): `ui.js` (header, footer, buttons), `home.js`, `captioner.js`, `designdeck.js` (incl. prices, screenshots, download file names) |
| `src/seo.js` | Title, description, canonical, hreflang, Open Graph, JSON-LD per route; `applyHead` (client) and `headHtml` (build) |
| `vite.config.js` | Writes `dist/<route>/index.html` with the right `<head>` (crawlers, link previews), `404.html`, `sitemap.xml` |
| `src/views/ProductView.vue` | One view for both products, driven by `src/content/<product>.js` |
| `src/views/PlatformView.vue` | The web platform (no downloads, no prices), driven by `src/content/pixplace.js`; same texts as the handout in the `chuc_de_2022` repo (`docs/handout/`) |
| `src/components/ReleaseDownloads.vue` | Download buttons; reads `latest.json` of the app's release workflow, falls back to the stable `latest/` names |
| `src/components/PriceTable.vue` | Prices + “Request” button (prefilled email until there is a shop) |
| `public/images/<product>/` | Screenshots (Captioner: `scripts/manual_screenshots.py en --website public/images/captioner`; Design Deck: `make screenshots SITE=…`) |
| `public/handouts/` | Handouts and Captioner manuals (copies of the PDFs in the app repos; `Pixplace-Handout.pdf` from `chuc_de_2022/docs/handout/`) |

Content strings with markup are rendered with `v-html`. They are static, never put user input in there.

New page: add it to `src/routes.js` (both languages share a `key`), give it a view in `src/router.js`
and its head in `src/seo.js` (`pageMeta`). The build and sitemap pick it up.

New screenshots or prices: change `src/content/<product>.js` (and the app's own texts: Captioner
`CHANGELOG.md`/handout/manuals, `licensing.DURATIONS`).

## Going live – checklist

Order matters: the site must be live before the apps and katzefudder.de point to it.

### 1. Hosting (Bunny)

1. **Storage zone** `pixplace` (region like katzefudder's).
2. **Pull zone** with that storage zone as origin, hostname `www.pixplace.de` (+ free SSL, Force SSL).
   - Check that `/captioner` serves `captioner/index.html` (works on katzefudder.de's zone the same way).
   - Custom 404: the build writes `/404.html`; set it as the zone's error page if Bunny doesn't pick it up.
3. Optional short links as **Edge Rules** (301): `captioner.pixplace.de/*` → `https://www.pixplace.de/captioner`,
   `designdeck.pixplace.de/*` → `https://www.pixplace.de/designdeck` (add those hostnames to the pull zone).

### 2. DNS (Cloudflare)

Domain and DNS are managed at Cloudflare. Keep the records **DNS only** (grey cloud): Bunny serves
the site and its certificate, and the privacy notice says that visits don't go through Cloudflare.
A proxied (orange) record would change both.

- `www.pixplace.de` → `CNAME` to the pull zone's hostname `pixplace.b-cdn.net`, DNS only.
- `pixplace.de` (apex): Cloudflare flattens a `CNAME` at the apex, so `@` → `pixplace.b-cdn.net`,
  DNS only. Add `pixplace.de` as a hostname to the pull zone (free SSL) and redirect it with an
  Edge Rule (301) to `https://www.pixplace.de`. A Cloudflare Redirect Rule would need a proxied
  record instead, which then belongs in the privacy notice.

### 3. GitHub

1. Create the repository (private is fine), push `main`.
2. Secrets: `BUNNY_STORAGE_ZONE`, `BUNNY_STORAGE_ACCESS_KEY`, `BUNNY_STORAGE_REGION` (optional),
   `BUNNY_PULL_ZONE_ID`, `BUNNY_API_KEY`. The first push uploads everything; later pushes upload only
   changed images. `workflow_dispatch` with *full upload* re-uploads all of them.

### 4. Downloads (stay on katzefudder.de)

Installed apps check `https://www.katzefudder.de/downloads/<product>/latest.json` for updates, so
downloads stay there (`DOWNLOADS` in `src/site.js`). For the version number and release date on
the download buttons, the **katzefudder.de pull zone** must allow cross-origin reads:

- Pull zone → *Headers* → **Add CORS headers**: on, extensions include `json`
  (today the response has no `Access-Control-Allow-Origin`, checked 2026-11-08).

Without it the buttons still work (stable `latest/` links), they just don't show version and date.
Moving the downloads to pixplace.de later means the apps' release workflows upload to both places
for a long while, and `updates.DOWNLOAD_URL` (Captioner) changes in a release.

### 5. Analytics

`MATOMO.siteId` in `src/site.js` is empty, so nothing is tracked and the privacy page leaves Matomo
out. To track: add `www.pixplace.de` as a new site in piwik.katzefudder.de (with IP anonymisation),
put its ID in `siteId`. The privacy page then shows the Matomo section by itself. Download events:
category `Captioner` / `Design Deck`, action `Download`; license requests: action `License request`.

### 6. Legal (before selling via this site)

- **USt-IdNr.**: prices include 19% VAT, so if you have a VAT ID it belongs in the imprint
  (`OWNER.vatId` in `src/site.js`).
- **Withdrawal (Widerrufsbelehrung) for digital content** and **terms (AGB/EULA)**: needed for sales
  to consumers. Not written here on purpose, have them drafted or reviewed (e.g. IT-Recht Kanzlei,
  Händlerbund). The apps' `LICENSE` files could be published as the EULA.
- **Data processing agreement** with bunny.net (accept it in the Bunny dashboard), then the privacy
  page may say so.
- Check the imprint and privacy texts (`src/views/ImprintView.vue`, `PrivacyView.vue`); they are
  adapted from katzefudder.de, not legal advice.

### 7. Switch the apps and katzefudder.de over (branches are ready, not pushed)

| Repo | Branch | What |
|---|---|---|
| `captioner` | `pixplace-website` | `website_link()`/`buy_link()` by UI language, trial watermark with the new address (old one still removed), manuals, handout, installer URL |
| `designdeck` | `pixplace-website` | About/Help → Website to pixplace.de instead of the private GitHub repo, installer URLs, handout source (PDF: `make handout PHOTOS=…`) |
| `katzefudder_de_2026` | `pixplace-redirects` | `/captioner`, `/designdeck` → redirect stubs to `/en/…`, top bar and About link to pixplace.de |

Merge the app branches into `main` only when the site is live: each push to `main` releases.

On top of the katzefudder.de redirect stubs, add **Edge Rules** in the katzefudder.de pull zone
(real 301s; trial watermarks and old links in photos point there forever):

- `https://www.katzefudder.de/captioner*` → `https://www.pixplace.de/en/captioner`
- `https://www.katzefudder.de/designdeck*` → `https://www.pixplace.de/en/designdeck`

Careful not to match `/downloads/captioner/…`: the patterns above start at the path root, so
they don't.

## Open

- **Buying.** “Request” opens a prefilled email. A shop (e.g. Paddle or Lemon Squeezy as
  merchant of record, which also takes care of EU VAT and invoices) could issue keys via
  webhook → `make license`; then replace `PriceTable`'s mailto.
- English handouts.
- Light mode (the site is dark only, like katzefudder.de).
