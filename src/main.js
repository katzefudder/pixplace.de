import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import { initMatomo } from './utils/matomo.js'
import '@fontsource-variable/archivo/wdth.css'
import '@fontsource/ibm-plex-mono/latin-400.css'
import '@fontsource/ibm-plex-mono/latin-500.css'
import './assets/base.css'

initMatomo()
createApp(App).use(router).mount('#app')
