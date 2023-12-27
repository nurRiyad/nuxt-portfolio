<script setup lang="ts">
import { cp } from '@/data/info'
</script>

<template>
  <div>
    <h1 class="text-2xl sm:text-3xl font-bold items-start  pt-2 pb-4">
      Competitive Programming
    </h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
      <template v-for="oj in cp" :key="oj.name">
        <CardContest :name="oj.name" :handle="oj.handle" :rating="oj.rating" :link="oj.link" :participate="oj.participate" :solved="oj.solved" />
      </template>
    </div>
  </div>
</template>
