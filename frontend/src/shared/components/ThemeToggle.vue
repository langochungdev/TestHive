<template>
    <button
        class="px-4 py-2 rounded bg-gray-200 text-gray-900 dark:bg-gray-800 dark:text-white"
        @click="toggle"
    >
        {{ dark ? 'Light Mode' : 'Dark Mode' }}
    </button>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'
import { useThemeStore } from '@/app/store/useThemeStore'

const theme = useThemeStore()
const { dark } = storeToRefs(theme)

function toggle() {
    theme.toggle()
}
</script>
