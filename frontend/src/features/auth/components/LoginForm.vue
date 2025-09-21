<script setup lang="ts">
import { ref } from 'vue'
import { useAuthStore } from '../store/auth.store'
import { useRouter } from 'vue-router'

const email = ref('')
const password = ref('')
const authStore = useAuthStore()
const router = useRouter()

async function onSubmit() {
    try {
        await authStore.login({ email: email.value, password: password.value })
        router.push('/dashboard') // điều hướng sau login thành công
    } catch (e) {
        // error đã có trong store.error
    }
}
</script>

<template>
    <div class="flex min-h-0">
        <!-- bên trái -->
        <div
            class="hidden lg:flex w-full lg:w-1/2 login_img_section justify-around items-center"
        >
            <div class="w-full mx-auto px-20 flex-col items-center space-y-6">
                <h1
                    class="text-gray-900 dark:text-white font-bold text-4xl font-sans"
                >
                    Simple App
                </h1>
                <p class="text-gray-700 dark:text-gray-300 mt-1">
                    The simplest app to use
                </p>
            </div>
        </div>

        <!-- form login -->
        <div
            class="flex w-full lg:w-1/2 justify-center items-center bg-white dark:bg-gray-800"
        >
            <div class="w-full px-8 md:px-32 lg:px-24">
                <form
                    @submit.prevent="onSubmit"
                    class="bg-white dark:bg-gray-800 rounded-md shadow-2xl p-5"
                >
                    <h1
                        class="text-gray-900 dark:text-gray-100 font-bold text-2xl mb-1"
                    >
                        Hello Again!
                    </h1>
                    <p
                        class="text-sm font-normal text-gray-600 dark:text-gray-300 mb-8"
                    >
                        Welcome Back
                    </p>

                    <!-- email -->
                    <div
                        class="flex items-center border-2 mb-8 py-2 px-3 rounded-2xl"
                    >
                        <input
                            v-model="email"
                            id="email"
                            class="pl-2 w-full outline-none border-none"
                            type="email"
                            placeholder="Email Address"
                            required
                        />
                    </div>

                    <!-- password -->
                    <div
                        class="flex items-center border-2 mb-4 py-2 px-3 rounded-2xl"
                    >
                        <input
                            v-model="password"
                            id="password"
                            class="pl-2 w-full outline-none border-none"
                            type="password"
                            placeholder="Password"
                            required
                        />
                    </div>

                    <!-- error -->
                    <p v-if="authStore.error" class="text-red-500 text-sm mb-4">
                        {{ authStore.error }}
                    </p>

                    <!-- button -->
                    <button
                        type="submit"
                        :disabled="authStore.loading"
                        class="block w-full bg-indigo-600 hover:bg-indigo-700 mt-5 py-2 rounded-2xl transition-all duration-500 text-white font-semibold mb-2 disabled:opacity-50"
                    >
                        <span v-if="authStore.loading">Loading...</span>
                        <span v-else>Login</span>
                    </button>

                    <div class="flex justify-between mt-4">
                        <span
                            class="text-sm ml-2 text-gray-600 dark:text-gray-300 hover:text-blue-500 cursor-pointer"
                        >
                            Forgot Password ?
                        </span>
                        <RouterLink
                            to="/signup"
                            class="text-sm ml-2 text-blue-600 dark:text-blue-400 hover:text-blue-500 cursor-pointer"
                        >
                            Don't have an account yet?
                        </RouterLink>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
