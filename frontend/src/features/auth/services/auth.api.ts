// src/features/auth/services/auth.api.ts
import axios from 'axios'

const API_URL = import.meta.env.VITE_API_URL + '/auth'

export interface LoginRequest {
    email: string
    password: string
}

export interface LoginResponse {
    token: string
    refreshToken?: string
    user: {
        id: string
        email: string
        fullName: string
    }
}

export async function loginApi(payload: LoginRequest): Promise<LoginResponse> {
    const { data } = await axios.post<LoginResponse>(
        `${API_URL}/login`,
        payload,
    )
    return data
}
