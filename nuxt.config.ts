// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    compatibilityDate: '2024-04-03',
    devtools: { enabled: true },
    css: ['~/assets/css/tailwind.css'],
    modules: [
        '@nuxt/content',
        '@nuxt/ui',
        '@nuxtjs/tailwindcss',
        '@nuxtjs/color-mode',
        '@nuxt/icon',
        '@nuxt/image'
    ],
    content: {
        highlight: {
            theme: 'one-dark-pro',
        },
    },
})