// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  compatibilityDate: '2024-08-26',
  devtools: { enabled: true },

  modules: [
    '@nuxt/ui',
    '@nuxt/image',
    '@nuxtjs/robots',
    'nuxt-og-image',
    '@nuxtjs/sitemap',
    '@vueuse/nuxt',
    '@nuxt/icon',
  ],

  css: ['~/assets/css/main.css'],

  site: {
    url: 'https://www.nurriyad.com/',
    name: 'Riyad\'s Personal Website',
  },

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
        { rel: 'preconnect', href: 'https://fonts.googleapis.com' },
        { rel: 'preconnect', href: 'https://fonts.gstatic.com', crossorigin: 'anonymous' },
        { rel: 'stylesheet', href: 'https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;600&display=swap' },
      ],

    },
  },

  // https://color-mode.nuxtjs.org
  colorMode: {
    preference: 'dark', // default value of $colorMode.preference
    fallback: 'light', // fallback value if not system preference found
    classSuffix: '',
  },

  plugins: [{ src: './app/plugins/vercel.ts', mode: 'client' }],

  vite: {
    css: {
      devSourcemap: true,
    },
    build: {
      cssCodeSplit: true,
      sourcemap: false, // Disable sourcemaps in production to avoid warnings
    },
  },

  runtimeConfig: {
    githubToken: process.env.GITHUB_TOKEN || '',
    public: {
      // Public runtime config (exposed to client-side)
    },
  },

})
