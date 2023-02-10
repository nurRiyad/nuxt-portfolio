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
      d="M108.4 70a8 8 0 0 1 10.9-2.9l69.3 40a7.9 7.9 0 0 1 2.9 10.9a7.7 7.7 0 0 1-6.9 4a7.3 7.3 0 0 1-4-1.1l-69.3-40a8 8 0 0 1-2.9-10.9Zm90.3 24a8 8 0 0 0 5.6 2.3A8.3 8.3 0 0 0 210 94a8 8 0 0 0 0-11.3l-56.6-56.6a8 8 0 0 0-11.3 11.3ZM92.9 130.9l77.3 20.7a6.4 6.4 0 0 0 2 .3a8 8 0 0 0 2.1-15.7L97 115.5a8 8 0 1 0-4.1 15.4ZM208 144a8 8 0 0 0-8 8v56H56v-56a8 8 0 0 0-16 0v64a8 8 0 0 0 8 8h160a8 8 0 0 0 8-8v-64a8 8 0 0 0-8-8ZM88 184h80a8 8 0 0 0 0-16H88a8 8 0 0 0 0 16Z"
    />
  </svg>
</template>
