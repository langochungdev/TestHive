<template>
    <div
        class="min-h-screen flex flex-col bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100"
    >
        <header
            class="w-full border-b bg-white dark:bg-gray-800 dark:border-gray-700"
        >
            <div
                class="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between"
            >
                <div class="font-bold">My App</div>
                <div class="flex items-center gap-3">
                    <LanguageToggle />
                    <ThemeToggle />
                </div>
            </div>
        </header>

        <main class="flex-1 flex items-center justify-center">
            <div class="w-full max-w-6xl px-4">
                <slot />
            </div>
        </main>
    </div>
</template>

<script setup>
import ThemeToggle from '@/shared/components/ThemeToggle.vue'
import LanguageToggle from '@/shared/components/LanguageToggle.vue'
</script>
