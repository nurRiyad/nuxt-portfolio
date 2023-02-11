<script setup lang="ts">
const Projects = [
  {
    name: 'hacker-news',
    description: 'Hacker News built with Vue3, Pinia, Vue Router, VueUse, Tailwind',
    star: 22,
    language: 'Vue3',
    link: 'https://github.com/nurRiyad/hacker-news',
  },
  {
    name: 'nuxt/blog',
    description: 'Personal blog site built with Nuxt3, Nuxt-Content V2 & Tailwind. Deployed in vercel',
    star: 8,
    language: 'Nuxt3',
    link: 'https://github.com/nurRiyad/blog',
  },
  {
    name: 'task-manager-api',
    description: 'A simple api server for creating user account and user-specific tasks with complete & incomplete status',
    star: 1,
    language: 'Express',
    link: 'https://github.com/nurRiyad/task-manager-api',
  },
  {
    name: 'vuefire-todos',
    description: 'Vue3, Vuefire, Firebase, Tailwindcss powered to-do app. Create, update, delete tasks with ease, and user authentication.',
    star: 4,
    language: 'Vue, Firebase',
    link: 'https://github.com/nurRiyad/vuefire-todos',
  },
]
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold pb-5">
      Projects
    </h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <template v-for="project in Projects" :key="project.name">
        <CardProject :name="project.name" :description="project.description" :star="project.star" :link="project.link" :language="project.language" />
      </template>
    </div>
  </div>
</template>
