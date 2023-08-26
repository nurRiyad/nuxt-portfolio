<script setup lang="ts">
interface Props {
  name: string
  session: string
  gpa: string
  institute: string
  img: string
}

withDefaults(defineProps<Props>(), {
  name: 'no name',
  session: 'no session',
  institute: 'no institute',
  gpa: '-',
  img: '-',
})
</script>

<template>
  <div
    class=" overflow-hidden border dark:border-gray-700 rounded-xl shadow"
  >
    <div
      class="flex flex-col justify-between gap-y-2  hover:scale-[1.001] ease-out transition-transform px-5 py-3"
    >
      <div class="flex flex-col gap-y-2">
        <div class="flex items-center space-x-2">
          <img :src="`/images/${img}`" alt="iiuc" class="w-6 h-6">
          <span class="text-xl font-medium">{{ name }}</span>
        </div>
        <div class="flex items-center space-x-2">
          <Icon name="icon-park-outline:school" size="20" class="dark:text-cyan-500" />
          <p>From {{ institute }}</p>
        </div>
        <div class="flex items-center space-x-2">
          <Icon name="ph:calendar-check" size="20" class="dark:text-cyan-500" />
          <p>Passing Year {{ session }}</p>
        </div>
        <div class="flex items-center space-x-2">
          <Icon name="material-symbols:school-outline" size="21" class="dark:text-cyan-500" />
          <p> {{ gpa }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
