// src/features/auth/store/auth.store.ts
import { defineStore } from 'pinia'
import {
    loginApi,
    type LoginRequest,
    type LoginResponse,
} from '../services/auth.api'

export const useAuthStore = defineStore('auth', {
    state: () => ({
        token: null as string | null,
        user: null as LoginResponse['user'] | null,
        loading: false,
        error: null as string | null,
    }),
    actions: {
        async login(payload: LoginRequest) {
            this.loading = true
            this.error = null
            try {
                const res = await loginApi(payload)
                this.token = res.token
                this.user = res.user
                // có thể lưu token vào localStorage/sessionStorage
                localStorage.setItem('token', res.token)
            } catch (err: any) {
                this.error = err.response?.data?.message || 'Login failed'
                throw err
            } finally {
                this.loading = false
            }
        },
        logout() {
            this.token = null
            this.user = null
            localStorage.removeItem('token')
        },
    },
})
