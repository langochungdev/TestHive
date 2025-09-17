import { createApp } from 'vue'
import App from './App.vue'
import router from './app/router/index'
import { createPinia } from 'pinia'
import i18n from './app/i18n'
import { useThemeStore } from '@/app/store/useThemeStore'
import './style.css'

const app = createApp(App)
const pinia = createPinia()
app.use(pinia)
app.use(router)
app.use(i18n)

// gọi init sau khi pinia sẵn sàng
const theme = useThemeStore()
theme.init()

app.mount('#app')
