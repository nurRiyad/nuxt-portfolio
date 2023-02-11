<script setup lang="ts">
interface Props {
  name: string
  session: string
  gpa: number
  institute: string
}

withDefaults(defineProps<Props>(), {
  name: 'no name',
  session: 'no session',
  institute: 'no institute',
  gpa: 0,
})
</script>

<template>
  <div
    class=" overflow-hidden border border-neutral-700 rounded-xl"
  >
    <div
      class="flex flex-col justify-between gap-y-2  hover:scale-105 ease-out transition-transform px-5 py-3"
    >
      <div class="flex flex-col gap-y-2">
        <div class="flex items-baseline justify-between">
          <span class="text-xl font-medium">{{ name }}</span>
        </div>
        <div class="flex items-center space-x-2">
          <Icon name="icon-park-outline:school" />
          <p>From {{ institute }}</p>
        </div>
        <div class="flex items-center space-x-2">
          <Icon name="ph:calendar-check" />
          <p>Session {{ session }}</p>
        </div>
        <div class="flex items-center space-x-2">
          <Icon name="material-symbols:school-outline" />
          <p>GPA/CGPA {{ gpa }}</p>
        </div>
      </div>
    </div>
  </div>
</template>
