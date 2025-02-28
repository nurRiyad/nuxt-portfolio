<script setup lang="ts">
definePageMeta({
  middleware: [
    function (_to, _from) {
      return navigateTo('/')
    },
  ],
})
</script>

<template>
  <div>
    <h1>404 No Page Found</h1>
  </div>
</template>
