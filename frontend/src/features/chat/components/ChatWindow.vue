<template>
    <div
        class="border border-gray-300 p-3 h-72 overflow-y-auto rounded-lg bg-white"
    >
        <div v-for="(msg, i) in messages" :key="i" class="my-1">
            <strong>{{ msg.user }}:</strong>
            {{ msg.text }}
        </div>
    </div>
</template>

<script setup>
defineProps({
    messages: { type: Array, required: true },
})
</script>
