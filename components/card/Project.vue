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
    class="hover:no-underline overflow-hidden border border-neutral-700 rounded-xl"
  >
    <div
      class="flex flex-col justify-between gap-y-2  hover:scale-105 ease-out transition-transform px-5 py-3"
    >
      <div class="flex flex-col gap-y-2">
        <span class="text-xl font-medium">{{ name }}</span>
        <p class="text-(sm neutral-200)">{{ description }}</p>
      </div>
      <div class="flex items-center gap-x-5 text-(sm neutral-200)">
        <div class="flex gap-x-1 items-center">
          <span>
            <IconsStar />
          </span>
          <span>{{ star }}</span>
        </div>
        <div class="flex space-x-2 items-center">
          <span> <Icon name="ph-tag-bold" size="1em" /> </span>
          <div class="">{{ language }}</div>
        </div>
      </div>
    </div>
  </a>
</template>
