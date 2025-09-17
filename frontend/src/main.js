import { createApp } from 'vue'
import App from './App.vue'
import router from './app/router/index.js'
import { createPinia } from 'pinia'
import i18n from './app/i18n'
import './assets/css/main.css'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.use(i18n)
app.mount('#app')
