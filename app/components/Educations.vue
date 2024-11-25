<script setup lang="ts">
import { schools } from '../data/info'
</script>

<template>
  <div>
    <h1 class="text-2xl sm:text-3xl font-bold items-start  pt-2 pb-4">
      Educations
    </h1>
    <div class="space-y-4">
      <template v-for="school in schools" :key="school.name">
        <CardEducation
          :name="school.name"
          :gpa="school.gpa"
          :session="school.session"
          :institute="school.institute"
          :img="school.img"
        />
      </template>
    </div>
  </div>
</template>
