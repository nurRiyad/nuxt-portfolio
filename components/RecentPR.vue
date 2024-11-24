<script setup lang="ts">
import type { Contributions } from '~~/types'

const { data: contributions } = await useFetch<Contributions>('/api/contributions?per_page=5')

if (!contributions.value)
  throw createError('Could not load User activity')

const { prs } = contributions.value
</script>

<template>
  <div>
    <h1 class="text-2xl sm:text-3xl font-bold items-start  pt-2 pb-4">
      Recent GitHub Pull Requests
    </h1>
    <div class="flex flex-col gap-6 sm:gap-10">
      <PRView v-for="pr of prs" :key="pr.url" :data="pr" />
    </div>
  </div>
</template>
