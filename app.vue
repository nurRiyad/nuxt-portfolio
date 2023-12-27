<script setup lang="ts">
const description = 'Hi, I am Riyad. A full-time software engineer building web applications for more than two years with Vue, Nuxt, Typescript, and Javascript.'
const ogTitle = 'Al Asad Nur Riyad | Senior Software Engineer @AppsCode'
const image
  = 'https://www.nurriyad.xyz/social-card.webp'
const mySite = 'https://www.nurriyad.xyz'
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    {
      name: 'description',
      content: description,
    },
    // Test on: https://developers.facebook.com/tools/debug/ or https://socialsharepreview.com/
    { property: 'og:site_name', content: mySite },
    { property: 'og:type', content: 'website' },
    {
      property: 'og:url',
      content: mySite,
    },
    {
      property: 'og:title',
      content: ogTitle,
    },
    {
      property: 'og:description',
      content: description,
    },
    {
      property: 'og:image',
      content: image,
    },
    // Test on: https://cards-dev.twitter.com/validator or https://socialsharepreview.com/
    { name: 'twitter:site', content: '@debs_obrien' },
    { name: 'twitter:card', content: 'summary_large_image' },
    {
      name: 'twitter:url',
      content: mySite,
    },
    {
      name: 'twitter:title',
      content: ogTitle,
    },
    {
      name: 'twitter:description',
      content: description,
    },
    {
      name: 'twitter:image',
      content: image,
    },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/png',
      href: '/favicon.png',
    },
  ],
})

defineOgImageComponent('SeoCard', {
  headline: 'Greetings 👋',
  title: 'Nur Riyad',
  description: 'Senior Software Engineer @AppsCode',
})
</script>

<template>
  <div>
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="postcss">
body {
  @apply bg-gray-50 dark:bg-gray-900;
}
</style>
