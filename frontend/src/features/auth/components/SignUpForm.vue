<template>
    <!-- <style>
        .login_img_section {
            background:
                linear-gradient(rgba(2, 2, 2, 0.7), rgba(0, 0, 0, 0.7)),
                /* url(https://images.unsplash.com/photo-1650825556125-060e52d40bd0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80) */
                    center center;
        }
    </style> -->
    <div class="flex min-h-0">
        <div
            class="hidden lg:flex w-full lg:w-1/2 login_img_section justify-around items-center"
        >
            <div class="bg-black opacity-20 inset-0 z-0"></div>
            <div class="w-full mx-auto px-20 flex-col items-center space-y-6">
                <h1
                    class="text-gray-900 dark:text-white font-bold text-4xl font-sans"
                >
                    Simple App
                </h1>
                <p class="text-gray-700 dark:text-gray-300 mt-1">
                    The simplest app to use
                </p>
                <div class="flex justify-center lg:justify-start mt-6">
                    <a
                        href="#"
                        class="hover:bg-indigo-700 hover:text-white hover:-translate-y-1 transition-all duration-500 bg-white text-indigo-800 dark:bg-indigo-600 dark:text-white mt-4 px-4 py-2 rounded-2xl font-bold mb-2"
                    >
                        Get Started
                    </a>
                </div>
            </div>
        </div>
        <div
            class="flex w-full lg:w-1/2 justify-center items-center bg-white dark:bg-gray-800 space-y-8"
        >
            <div class="w-full px-8 md:px-32 lg:px-24">
                <form
                    @submit.prevent="onSubmit"
                    class="bg-white dark:bg-gray-800 rounded-md shadow-2xl p-5"
                >
                    <h1
                        class="text-gray-900 dark:text-gray-100 font-bold text-2xl mb-1"
                    >
                        Create account
                    </h1>
                    <p
                        class="text-sm font-normal text-gray-600 dark:text-gray-300 mb-8"
                    >
                        Create a new account to get started
                    </p>

                    <!-- Name -->
                    <div
                        class="flex items-center border-2 mb-6 py-2 px-3 rounded-2xl"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M5.121 17.804A13.937 13.937 0 0112 15c2.5 0 4.847.612 6.879 1.804M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                            />
                        </svg>
                        <input
                            v-model="form.name"
                            id="name"
                            class="pl-2 w-full outline-none border-none"
                            type="text"
                            name="name"
                            placeholder="Full name"
                        />
                    </div>

                    <!-- Email -->
                    <div
                        class="flex items-center border-2 mb-6 py-2 px-3 rounded-2xl"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                stroke-linecap="round"
                                stroke-linejoin="round"
                                stroke-width="2"
                                d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                            />
                        </svg>
                        <input
                            v-model="form.email"
                            id="email"
                            class="pl-2 w-full outline-none border-none"
                            type="email"
                            name="email"
                            placeholder="Email Address"
                        />
                    </div>

                    <!-- Password -->
                    <div
                        class="flex items-center border-2 mb-6 py-2 px-3 rounded-2xl"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-gray-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <input
                            v-model="form.password"
                            class="pl-2 w-full outline-none border-none"
                            type="password"
                            name="password"
                            id="password"
                            placeholder="Password"
                        />
                    </div>

                    <!-- Confirm Password -->
                    <div
                        class="flex items-center border-2 mb-4 py-2 px-3 rounded-2xl"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            class="h-5 w-5 text-gray-400"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                        >
                            <path
                                fill-rule="evenodd"
                                d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11H9v4h2V7z"
                                clip-rule="evenodd"
                            />
                        </svg>
                        <input
                            v-model="form.confirm"
                            class="pl-2 w-full outline-none border-none"
                            type="password"
                            name="confirm"
                            id="confirm"
                            placeholder="Confirm Password"
                        />
                    </div>

                    <!-- Error messages -->
                    <div v-if="errors.length" class="mb-4">
                        <ul class="text-sm text-red-600 list-disc list-inside">
                            <li v-for="(e, idx) in errors" :key="idx">
                                {{ e }}
                            </li>
                        </ul>
                    </div>

                    <button
                        type="submit"
                        class="block w-full bg-indigo-600 hover:bg-indigo-700 mt-5 py-2 rounded-2xl transition-all duration-500 text-white font-semibold mb-2"
                    >
                        Sign Up
                    </button>

                    <div class="flex justify-between mt-4">
                        <span
                            class="text-sm ml-2 text-gray-600 dark:text-gray-300"
                        >
                            Already have an account?
                        </span>
                        <RouterLink
                            to="/login"
                            class="text-sm ml-2 hover:text-blue-500 cursor-pointer hover:-translate-y-1 duration-500 transition-all"
                        >
                            Login
                        </RouterLink>
                    </div>
                </form>
            </div>
        </div>
    </div>
</template>
<script setup lang="ts">
import { reactive, ref } from 'vue'
import { useRouter, RouterLink } from 'vue-router'

const router = useRouter()

const form = reactive({ name: '', email: '', password: '', confirm: '' })
const errors = ref<string[]>([])

function validate() {
    const e: string[] = []
    if (!form.name.trim()) e.push('Name is required')
    if (!form.email.trim()) e.push('Email is required')
    else if (!/^\S+@\S+\.\S+$/.test(form.email)) e.push('Email is invalid')
    if (!form.password) e.push('Password is required')
    else if (form.password.length < 6)
        e.push('Password must be at least 6 characters')
    if (form.password !== form.confirm) e.push('Passwords do not match')
    errors.value = e
    return e.length === 0
}

function onSubmit() {
    if (!validate()) return
    // placeholder: call signup API here
    // console.log('submit', { ...form })
    // after successful signup, redirect to login or dashboard
    router.push('/login')
}
</script>
