// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  modules: [
    '@nuxtjs/tailwindcss',
    'nuxt-icon',
    '@nuxtjs/color-mode',
    '@nuxtjs/robots',
    '@vite-pwa/nuxt',
  ],

  app: {
    head: {
      charset: 'utf-16',
      viewport: 'width=device-width,initial-scale=1',
      title: 'Al Asad Nur Riyad',
      meta: [{ name: 'description', content: 'My personal site.' }],
      link: [
        { rel: 'icon', type: 'image/png', href: '/favicon.png' },
        { rel: 'icon', type: 'image/png', sizes: '32x32', href: '/favicon-32x32.png' },
        { rel: 'icon', type: 'image/png', sizes: '16x16', href: '/favicon-16x16.png' },
        { rel: 'apple-touch-icon', sizes: '180x180', href: '/apple-touch-icon.png' },
        { rel: 'manifest', href: '/site.webmanifest' },

      ],

    },
  },

  // https://color-mode.nuxtjs.org
  colorMode: {
    preference: 'dark', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    classSuffix: '',
  },

  plugins: [{ src: '~/plugins/vercel.ts', mode: 'client' }],

  pwa: {
    registerType: 'autoUpdate',
    manifest: {
      name: 'Al Asad Nur Riyad',
      short_name: 'Al Asad Nur Riyad',
      description: 'Al Asad Nur Riyad, Software Engineer @AppsCode in the Bytebuilder Team',
      icons: [
        {
          src: 'favicon-16x16.png',
          sizes: '16x16',
          type: 'image/png',
        },
        {
          src: 'favicon-32x32.png',
          sizes: '32x32',
          type: 'image/png',
        },
        {
          src: 'android-chrome-192x192.png',
          sizes: '192x192',
          type: 'image/png',
        },
        {
          src: 'android-chrome-512x512.png',
          sizes: '512x512',
          type: 'image/png',
        },
      ],
    },
    workbox: {
      navigateFallback: '/',
      globPatterns: ['**/*.{js,css,html,png,svg,ico}'],
    },
    client: {
      installPrompt: true,
      // you don't need to include this: only for testing purposes
      // if enabling periodic sync for update use 1 hour or so (periodicSyncForUpdates: 3600)
      periodicSyncForUpdates: 20,
    },
    devOptions: {
      enabled: true,
      type: 'module',
    },
  },

})
