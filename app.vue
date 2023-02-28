<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en',
  },
})

useServerSeoMeta({
  title: 'Al Asad Nur Riyad, Software Engineer @AppsCode in the Bytebuilder Team',
  ogTitle: 'Al Asad Nur Riyad, Software Engineer @AppsCode in the Bytebuilder Team',
  description: 'Hello, fellow human! I\'m a noob wizard who spends most of his day crafting code spells. When I\'m not conjuring code, you can find me summoning solutions to problems on online judges. Just don\'t ask me to cast any love spells, my magic only works on machines!',
  ogDescription: 'Hello, fellow human! I\'m a noob wizard who spends most of his day crafting code spells. When I\'m not conjuring code, you can find me summoning solutions to problems on online judges. Just don\'t ask me to cast any love spells, my magic only works on machines!',
  ogImage: '/social-card.webp',
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
