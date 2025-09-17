import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/features/auth/pages/LoginPage.vue'

const routes = [{ path: '/login', component: LoginPage }]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
