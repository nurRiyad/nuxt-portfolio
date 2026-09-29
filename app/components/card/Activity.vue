<script setup lang="ts">
import type { Activity } from '@@/types'

defineProps<{
  data: Activity
}>()

function formatStars(stars: number) {
  return new Intl.NumberFormat('en-US', {
    notation: 'compact',
    maximumFractionDigits: 1,
  }).format(stars)
}
</script>

<template>
  <div class="flex items-center gap-2 sm:gap-4 sm:p-4 p-2 border dark:border-gray-700 shadow rounded-xl">
    <a
      :href="`https://github.com/${data.repo}`"
      target="_blank"
      rel="noopener noreferrer"
      class="size-10 sm:size-12 shrink-0 border border-gray-200 dark:border-gray-800 overflow-hidden shadow-sm"
      :class="[data.type === 'Organization' ? 'rounded-lg' : 'rounded-full']"
      :aria-label="`${data.repo} on GitHub`"
    >
      <img :src="`https://github.com/${data.repo.split('/')[0]}.png`" :alt="data.repo" class="size-full">
    </a>

    <div class="flex-1 flex justify-between gap-2 lg:gap-4 min-w-0">
      <div class="flex flex-col min-w-0 gap-0.5 sm:gap-1">
        <a :href="data.url" target="_blank" rel="noopener noreferrer" class="text-sm sm:text-base flex items-center gap-1 hover:underline text-gray-900 dark:text-white">
          <UIcon
            :name="data.activityType === 'commit' ? 'i-lucide-git-commit-horizontal' : 'i-lucide-git-pull-request'"
            :class="data.activityType === 'commit' ? 'text-blue-500 dark:text-blue-400' : {
              'text-green-500 dark:text-green-400': data.state === 'open',
              'text-gray-500 dark:text-gray-400': data.state === 'draft',
              'text-purple-500 dark:text-purple-400': data.state === 'merged',
            }"
            class="size-4 sm:size-5 shrink-0"
          />
          <span class="truncate">{{ data.title }}</span>
        </a>

        <div class="flex gap-2 items-center">
          <a :href="`https://github.com/${data.repo}`" target="_blank" rel="noopener noreferrer" class="text-sm sm:text-base inline-flex gap-1 hover:text-black dark:hover:text-white truncate">
            <span class="opacity-75">{{ data.repo.split('/')[0] }}</span>
            <span class="opacity-50">/</span>
            <span class="truncate">{{ data.repo.split('/')[1] }}</span>
          </a>
          <a :href="`https://github.com/${data.repo}`" target="_blank" rel="noopener noreferrer" class="items-center hidden sm:inline-flex gap-0.5 text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white truncate">
            <UIcon name="i-lucide-star" class="size-3 shrink-0" />
            <span class="text-xs">{{ formatStars(data.stars) }}</span>
          </a>
        </div>
      </div>

      <div class="flex flex-col justify-between shrink-0 text-right">
        <a v-if="data.activityType === 'pull_request'" :href="data.url" target="_blank" rel="noopener noreferrer" class="hover:underline text-xs sm:text-sm">
          #{{ data.number }}
        </a>
        <span v-else class="text-xs sm:text-sm text-gray-500 dark:text-gray-400">Commit</span>
        <time :datetime="data.created_at" class="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
          {{ useTimeAgo(new Date(data.created_at)) }}
        </time>
      </div>
    </div>
  </div>
</template>
