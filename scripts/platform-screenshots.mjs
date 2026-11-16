// Screenshots of the Pixplace platform for /plattform (and pixplace-home for katzefudder.de), taken from a
// local copy of chuc.de (Docker stack of the chuc_de_2022 repository on http://localhost).
//
// Before: theme "ecbn" like the live site, an administrator account with all tours marked as seen
// (users.seen_tours), 12 photos of the gallery ecbn-evl in that account's collection.
// Writes PNGs (1600 px window at 1.5x = 2400 px wide) to the output folder; convert them to
// public/images/pixplace/pixplace-<name>.jpg + -thumb.jpg (1200 px), e.g. with sips.
//
// Usage: PIXPLACE_USER=… PIXPLACE_PASSWORD=… npx -y -p playwright@1.56 node scripts/platform-screenshots.mjs <out> [names…]
// names: home gallery search lightbox picks uploads themes dark (default: all)
import { chromium } from 'playwright'

const BASE = process.env.PIXPLACE_URL || 'http://localhost'
const [OUT = 'screenshots', ...only] = process.argv.slice(2)
const want = (n) => !only.length || only.includes(n)

async function session(scheme = 'light') {
  const browser = await chromium.launch({ executablePath: process.env.CHROME || undefined }) // CHROME: an installed Chromium
  const ctx = await browser.newContext({
    viewport: { width: 1600, height: 1000 }, deviceScaleFactor: 1.5, colorScheme: scheme,
    locale: 'de-DE', timezoneId: 'Europe/Berlin',
  })
  const page = await ctx.newPage()
  await page.goto(BASE + '/login', { waitUntil: 'networkidle' })
  await page.fill('#email', process.env.PIXPLACE_USER)
  await page.fill('#password', process.env.PIXPLACE_PASSWORD)
  await page.getByRole('button', { name: 'Einloggen' }).click()
  await page.waitForURL((u) => !u.pathname.startsWith('/login'))
  await page.waitForLoadState('networkidle')
  return { browser, page }
}

async function go(page, path) {
  await page.goto(BASE + path, { waitUntil: 'networkidle' })
  const consent = page.getByRole('button', { name: 'Akzeptieren' })
  if (await consent.isVisible().catch(() => false)) await consent.click()
  await page.waitForTimeout(1200)
}

const shot = (page, name, height = 1000) =>
  page.screenshot({ path: `${OUT}/${name}.png`, clip: { x: 0, y: 0, width: 1600, height } })

const { browser, page } = await session()
if (want('home')) { await go(page, '/'); await shot(page, 'home', 664) }
if (want('gallery')) { await go(page, '/gallery/ecbn-evl'); await shot(page, 'gallery') }
if (want('search')) { await go(page, '/search/' + encodeURIComponent('ecbn Pfleger | Bußmann')); await shot(page, 'search') }
if (want('lightbox')) { await go(page, '/gallery/ecbn-evl/foto/20261023_ECN_EVL_fdehn_029.jpg'); await shot(page, 'lightbox') }
if (want('picks')) { await go(page, '/photobucket'); await shot(page, 'picks', 590) }
if (want('uploads')) { await go(page, '/backend/uploads'); await shot(page, 'uploads', 590) }
if (want('themes')) { await go(page, '/backend/settings'); await shot(page, 'themes') }
await browser.close()

if (want('dark')) {
  const dark = await session('dark')
  await go(dark.page, '/gallery/ecbn-evl')
  await dark.page.evaluate(() => {
    const tile = document.querySelector('.image-tile')
    window.scrollTo(0, tile.getBoundingClientRect().top + window.scrollY - 88)
  })
  await dark.page.waitForTimeout(1500)
  await shot(dark.page, 'dark')
  await dark.browser.close()
}
