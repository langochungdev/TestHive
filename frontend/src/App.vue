<template>
    <div class="max-w-6xl mx-auto py-6 px-4">
        <ThemeToggle />
        <LanguageToggle />
        <router-view />
    </div>
</template>

<script setup>
import ThemeToggle from '@/shared/components/ThemeToggle.vue'
import LanguageToggle from '@/shared/components/LanguageToggle.vue'
</script>
