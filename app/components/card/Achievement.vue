<script setup lang="ts">
interface Props {
  name?: string
  link?: string
}

withDefaults(defineProps<Props>(), {
  name: 'no name',
  link: '-',
})
</script>

<template>
  <a
    :href="link"
    target="_blank"
    class="overflow-hidden border dark:border-gray-700 shadow rounded-xl"
  >
    <div
      class="flex flex-col justify-between gap-y-2  hover:scale-[1.01] ease-out transition-transform px-5 py-3"
    >
      <div class="flex flex-col gap-y-2">
        <div class="flex flex-col items-center space-y-4 mt-2">
          <Icon name="solar:cup-star-broken" size="30" class="dark:text-cyan-500" />
          <p class="text-base sm:text-lg text-center font-medium">{{ name }}</p>
        </div>
      </div>
    </div>
  </a>
</template>
