<template>
    <form class="flex gap-2 mt-3" @submit.prevent="handleSend">
        <input
            v-model="text"
            placeholder="Type a message..."
            class="flex-1 rounded-lg border border-gray-300 px-3 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
        />
        <button
            type="submit"
            class="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
        >
            Send
        </button>
    </form>
</template>

<script setup>
import { ref } from 'vue'

const props = defineProps({
    onSend: { type: Function, required: true },
})

const text = ref('')

function handleSend() {
    if (text.value.trim()) {
        props.onSend(text.value)
        text.value = ''
    }
}
</script>
