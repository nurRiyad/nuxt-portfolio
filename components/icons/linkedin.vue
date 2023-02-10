<script setup lang="ts">
interface Props {
  width: number
}
withDefaults(defineProps<Props>(), {
  width: 32,
})
</script>

<template>
  <svg :width="width" height="32" viewBox="0 0 256 256">
    <path
      fill="#888888"
      d="M212 28H44a16 16 0 0 0-16 16v168a16 16 0 0 0 16 16h168a16 16 0 0 0 16-16V44a16 16 0 0 0-16-16ZM96 176a8 8 0 0 1-16 0v-64a8 8 0 0 1 16 0Zm-8-84a12 12 0 1 1 12-12a12 12 0 0 1-12 12Zm96 84a8 8 0 0 1-16 0v-36a20 20 0 0 0-40 0v36a8 8 0 0 1-16 0v-64a8 8 0 0 1 15.8-1.8A36 36 0 0 1 184 140Z"
    />
  </svg>
</template>
