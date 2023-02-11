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
    class="overflow-hidden border rounded-xl shadow"
  >
    <div
      class="flex flex-col justify-between gap-y-2  hover:scale-105 ease-out transition-transform px-5 py-3"
    >
      <div class="flex flex-col gap-y-2">
        <div class="flex items-baseline justify-between">
          <span class="text-xl font-medium">{{ name }}</span>
          <span class="font-medium bg-gray-300 rounded-md px-2">{{ handle }}</span>
        </div>
        <div class="flex items-center space-x-2">
          <Icon name="ph:medal" />
          <p>Top Ratting {{ rating }}</p>
        </div>
        <div class="flex items-center space-x-2">
          <Icon name="ph:check-circle" />
          <p>Participate in {{ participate }}+ Contest</p>
        </div>
        <div class="flex items-center space-x-2">
          <Icon name="fluent:autosum-24-filled" />
          <p>Total {{ solved }}+ Problem solved</p>
        </div>
      </div>

    </div>
  </a>
</template>
