<script setup lang="ts">
useHead({
  htmlAttrs: {
    lang: 'en',
  },
})

useSeoMeta({
  title: 'Riyad',
  ogTitle: 'Al Asad Nur Riyad | Senior Software Engineer @AppsCode',
  description: 'Hello, I am passionate software software engineer and problem solver. I am currently working at @AppsCode as Senior Software Engineer in @Bytebuilders team',
  ogDescription: 'Hello, I am passionate software software engineer and problem solver. I am currently working at @AppsCode as Senior Software Engineer in @Bytebuilders team',
  ogImage: 'https://www.nurriyad.xyz/social-card.webp',
  ogUrl: 'https://www.nurriyad.xyz',
  ogType: 'website',
  twitterCard: 'summary_large_image',
  twitterTitle: 'Al Asad Nur Riyad | Senior Software Engineer @AppsCode',
  twitterDescription: 'Hello, I am passionate software software engineer and problem solver. I am currently working at @AppsCode as Senior Software Engineer in @Bytebuilders team',
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
