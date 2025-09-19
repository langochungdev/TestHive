<template>
    <div class="flex gap-2">
        <button
            class="px-3 py-1.5 text-sm rounded border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition"
            @click="setLang('en')"
        >
            EN
        </button>
        <button
            class="px-3 py-1.5 text-sm rounded border border-blue-500 text-blue-500 hover:bg-blue-500 hover:text-white transition"
            @click="setLang('vi')"
        >
            VI
        </button>
    </div>
</template>

<script setup>
import { useI18n } from 'vue-i18n'

const { locale } = useI18n()

function setLang(lang) {
    locale.value = lang
    localStorage.setItem('lang', lang)
}
</script>
