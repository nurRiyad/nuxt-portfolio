<script setup lang="ts">
interface Props {
  name: string
  description: string
  star: number
  language: string
  link: string
}

withDefaults(defineProps<Props>(), {
  name: 'no name',
  description: 'no description ',
  star: 0,
  language: 'no language',
  link: '-',
})
</script>

<template>
  <a
    :href="link"
    target="_blank"
    class="overflow-hidden border shadow rounded-xl"
  >
    <div
      class="flex flex-col justify-between gap-y-2  hover:scale-105 ease-out transition-transform px-5 py-3"
    >
      <div class="flex flex-col gap-y-2">
        <span class="text-xl font-medium">{{ name }}</span>
        <p>{{ description }}</p>
      </div>
      <div class="flex items-center gap-x-5">
        <div class="flex gap-x-1 items-center">
          <Icon name="mdi:star-outline" size="20" />
          <span>{{ star }}</span>
        </div>
        <div class="flex space-x-2 items-center">
          <Icon name="ph-tag-bold" size="18" />
          <div class="">{{ language }}</div>
        </div>
      </div>
    </div>
  </a>
</template>
