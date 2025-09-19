import { createRouter, createWebHistory } from 'vue-router'
import LoginPage from '@/features/auth/pages/LoginPage.vue'
import SignUpPage from '@/features/auth/pages/SignUpPage.vue'

const routes = [
    { path: '/login', component: LoginPage },
    { path: '/signup', component: SignUpPage },
]

const router = createRouter({
    history: createWebHistory(),
    routes,
})

export default router
