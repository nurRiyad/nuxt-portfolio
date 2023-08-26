<script setup lang="ts">
interface Props {
  name: string
  handle: string
  rating: number
  participate: number
  solved: number
  link: string
}

withDefaults(defineProps<Props>(), {
  name: 'no name',
  handle: 'no handle',
  rating: 0,
  participate: 0,
  solved: 0,
  link: '-',
})
</script>

<template>
  <a
    :href="link"
    target="_blank"
    class="overflow-hidden border dark:border-gray-700 rounded-xl shadow"
  >
    <div
      class="flex flex-col justify-between gap-y-2  hover:scale-[1.01] ease-out transition-transform px-5 py-3"
    >
      <div class="flex flex-col gap-y-2">
        <div class="flex items-center space-x-2">
          <IconsCodeforces v-if="name === 'Codeforces'" class="w-7 h-7" />
          <IconsCodechef v-else-if="name === 'Codechef'" class="w-7 h-7" />
          <IconsLeetcode v-else-if="name === 'LeetCode'" class="w-7 h-7" />
          <IconsAtcoder v-else-if="name === 'AtCoder'" class="w-8 h-8" />

          <span class="text-xl font-medium">{{ name }}</span>

        </div>
        <div class="flex items-center space-x-2">
          <Icon name="ph:medal" size="20" class="dark:text-cyan-500" />
          <p>Top Rating {{ rating }}</p>
        </div>
        <div class="flex items-center space-x-2">
          <Icon name="ph:check-circle" size="20" class="dark:text-cyan-500" />
          <p>Participated in {{ participate }}+ Contest</p>
        </div>
        <div class="flex items-center space-x-2">
          <Icon name="fluent:autosum-24-filled" size="20" class="dark:text-cyan-500" />
          <p>Total {{ solved }}+ Problem solved</p>
        </div>
      </div>

    </div>
  </a>
</template>
