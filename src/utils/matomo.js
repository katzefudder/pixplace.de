// Self-hosted Matomo, only when MATOMO.siteId is set (src/site.js) and only after the visitor
// agreed in the consent banner. Before that, matomo.js is not even loaded. Without a siteId
// nothing is loaded, no banner is shown and the privacy page leaves the Matomo section out.
import { ref } from 'vue'

import { MATOMO } from '../site.js'

export const tracking = Boolean(MATOMO.siteId)

// The decision lives in localStorage (no cookie before consent). It can be unavailable
// (private mode, blocked site data): then the banner simply asks again next time.
const KEY = 'pixplace-consent'
function readChoice() {
  try {
    const value = localStorage.getItem(KEY)
    return value === 'granted' || value === 'denied' ? value : null
  } catch {
    return null
  }
}
function saveChoice(value) {
  try {
    localStorage.setItem(KEY, value)
  } catch {
    // not stored; asked again on the next visit
  }
}

// 'granted' | 'denied' | null (not asked yet)
export const consent = ref(tracking ? readChoice() : 'denied')
// the banner; also opened again from "Cookie settings" in the footer
export const consentOpen = ref(tracking && consent.value === null)

let loaded = false

function push(...command) {
  if (!tracking || consent.value !== 'granted') return
  window._paq = window._paq || []
  window._paq.push(command)
}

function load() {
  if (loaded) return
  loaded = true
  push('trackPageView')
  push('enableLinkTracking')
  push('setTrackerUrl', MATOMO.url + 'matomo.php')
  push('setSiteId', MATOMO.siteId)
  const script = document.createElement('script')
  script.async = true
  script.src = MATOMO.url + 'matomo.js'
  document.head.appendChild(script)
}

export function initMatomo() {
  if (consent.value === 'granted') load()
}

export function setConsent(granted) {
  consent.value = granted ? 'granted' : 'denied'
  saveChoice(consent.value)
  consentOpen.value = false
  if (granted) {
    load()
  } else if (loaded) {
    // revoked after tracking ran: remove Matomo's cookies; push() sends nothing from now on
    window._paq.push(['disableCookies'])
    window._paq.push(['deleteCookies'])
  }
}

export function trackPageView(to, from) {
  push('setReferrerUrl', window.location.origin + from.fullPath)
  push('setCustomUrl', window.location.origin + to.fullPath)
  push('setDocumentTitle', document.title)
  push('trackPageView')
  push('enableLinkTracking')
}

export function trackEvent(category, action, name) {
  push('trackEvent', category, action, name)
}
