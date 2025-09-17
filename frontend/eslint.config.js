import vue from 'eslint-plugin-vue'
import importPlugin from 'eslint-plugin-import'
import path from 'path'
import eslintConfigPrettier from 'eslint-config-prettier'

const vue3Recommended = vue.configs['flat/recommended']

export default [
    ...vue3Recommended,
    eslintConfigPrettier,

    // Rule cho file .vue (chỉ check import trong script, script setup, script lang ts)
    {
        files: ['**/*.vue'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        plugins: {
            import: importPlugin,
        },
        settings: {
            'import/resolver': {
                alias: {
                    map: [['@', path.resolve('./src')]],
                    extensions: ['.js', '.vue', '.ts'],
                },
                node: {
                    extensions: ['.js', '.vue', '.ts'],
                },
            },
            'import/core-modules': ['@tailwindcss/vite'],
        },
        rules: {
            'import/no-unresolved': 'error',
            // tắt check template (plugin-vue có rule riêng cho template)
            'vue/no-unused-vars': 'off',
        },
    },

    // Rule cho file .ts (check full)
    {
        files: ['**/*.ts'],
        languageOptions: {
            ecmaVersion: 'latest',
            sourceType: 'module',
        },
        plugins: {
            import: importPlugin,
        },
        settings: {
            'import/resolver': {
                alias: {
                    map: [['@', path.resolve('./src')]],
                    extensions: ['.ts', '.js', '.vue'],
                },
                node: {
                    extensions: ['.ts', '.js', '.vue'],
                },
            },
        },
        rules: {
            // giữ nguyên rule import mặc định => check full
        },
    },

    // Những file khác (không check gì cả)
    {
        files: ['**/*.*'],
        excludedFiles: ['**/*.vue', '**/*.ts'],
        rules: {
            // tắt hết rule
            'import/no-unresolved': 'off',
        },
    },
]
