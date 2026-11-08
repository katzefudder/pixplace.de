// Self-hosted Matomo, only when MATOMO.siteId is set (src/site.js). Without it nothing
// is loaded and the privacy page leaves the Matomo section out.
import { MATOMO } from '../site.js'

export const tracking = Boolean(MATOMO.siteId)

function push(...command) {
  if (!tracking) return
  window._paq = window._paq || []
  window._paq.push(command)
}

export function initMatomo() {
  if (!tracking) return
  push('trackPageView')
  push('enableLinkTracking')
  push('setTrackerUrl', MATOMO.url + 'matomo.php')
  push('setSiteId', MATOMO.siteId)
  const script = document.createElement('script')
  script.async = true
  script.src = MATOMO.url + 'matomo.js'
  document.head.appendChild(script)
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
