import { createApp } from 'vue'
import App from './App.vue'
import router from './router.js'
import { initMatomo } from './utils/matomo.js'
import './assets/base.css'

initMatomo()
createApp(App).use(router).mount('#app')
