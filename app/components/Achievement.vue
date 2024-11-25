<script setup lang="ts">
import { achievement } from '../data/info'
</script>

<template>
  <div>
    <h1 class="text-2xl sm:text-3xl font-bold items-start  pt-2 pb-4">
      Achievement
    </h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
      <template v-for="project in achievement" :key="project.name">
        <CardAchievement :name="project.name" :link="project.link" />
      </template>
    </div>
  </div>
</template>
