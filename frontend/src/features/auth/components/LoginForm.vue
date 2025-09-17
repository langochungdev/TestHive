<template>
    <div class="max-w-md mx-auto mt-8 px-4">
        <form
            class="bg-white shadow rounded-xl p-6"
            @submit.prevent="handleSubmit"
        >
            <div class="mb-4">
                <input
                    v-model="form.username"
                    type="text"
                    :placeholder="$t('username')"
                    class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            <div class="mb-4">
                <input
                    v-model="form.password"
                    type="password"
                    :placeholder="$t('password')"
                    class="w-full rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                />
            </div>

            <button
                type="submit"
                class="w-full bg-blue-600 text-white font-medium py-2 rounded-lg hover:bg-blue-700 transition"
            >
                {{ $t('login') }}
            </button>

            <div
                v-if="error"
                class="mt-4 rounded-lg bg-red-100 border border-red-400 text-red-700 px-4 py-3"
            >
                {{ error }}
            </div>
        </form>
    </div>
</template>

<script setup>
import { reactive } from 'vue'
import { useAuth } from '../composables/useAuth'

const { login, error } = useAuth()
const form = reactive({ username: '', password: '' })

const handleSubmit = () => login(form)
</script>
