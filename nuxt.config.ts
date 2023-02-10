// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: ['@nuxtjs/tailwindcss'],
  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=500, initial-scale=1',
      title: 'Al Asad Nur Riyad',
      meta: [{ name: 'description', content: 'My personal site.' }],
    },
  },

  plugins: [{ src: '~/plugins/vercel.ts', mode: 'client' }],
})
