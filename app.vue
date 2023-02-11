<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en',
  },
  meta: [
    { name: 'description', content: 'Al Asad Nur Riyad\'s personal website ✨' },
  ],
  link: [
    {
      rel: 'icon',
      type: 'image/webp',
      href: '/riyad.png',
    },
  ],
})

useServerSeoMeta({
  title: 'Meet the Code Wizard: Crafting Magic at @AppsCode in the Bytebuilder Team',
  ogTitle: 'Meet the Code Wizard: Crafting Magic at @AppsCode in the Bytebuilder Team',
  description: 'Meet the Code Wizard: Crafting Magic at @AppsCode in the Bytebuilder Team',
  ogDescription: 'Meet the Code Wizard: Crafting Magic at @AppsCode in the Bytebuilder Team',
  ogImage: 'public/social-card.webp',
  twitterCard: 'summary_large_image',
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
