<script setup lang="ts">
import type { Contributions } from '@@/types'

const { data: contributions, error, pending } = await useFetch<Contributions>('/api/contributions')

const prs = computed(() => contributions.value?.prs ?? [])
const recentPrs = computed(() => prs.value.filter((_: unknown, ind: number) => ind < 5))
</script>

<template>
  <div>
    <h1 class="text-2xl sm:text-3xl font-bold items-start  pt-2 pb-4">
      Recent Activity
    </h1>
    <div v-if="pending" class="flex items-center justify-center py-8">
      <p>
        Loading recent activity...
      </p>
    </div>
    <div v-else-if="error" class="flex flex-col items-center justify-center py-8 gap-2">
      <p class="text-red-600 dark:text-red-400 font-medium">
        Failed to load recent activity
      </p>
      <p class="text-sm text-gray-500 dark:text-gray-400">
        {{ error.message || 'An error occurred' }}
      </p>
    </div>
    <div v-else-if="recentPrs.length === 0" class="flex items-center justify-center py-8">
      <p class="text-gray-500 dark:text-gray-400">
        No recent activity found
      </p>
    </div>
    <div v-else class="flex flex-col gap-2">
      <CardPullRequest v-for="pr of recentPrs" :key="pr.url" :data="pr" />
    </div>
  </div>
</template>
