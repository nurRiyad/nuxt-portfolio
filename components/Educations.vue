<script setup lang="ts">
const schools = [
  {

    name: 'BSc in Computer Science & Engineering',
    institute: 'IIUC',
    session: '2021',
    gpa: 3.44,
  },
  {

    name: 'Higher Secondary School Certificate',
    institute: 'Bogra Cantonment Public College',
    session: '2015',
    gpa: 5.00,
  },
  {
    name: 'Secondary School Certificate',
    institute: 'Bogra Police Line School',
    session: '2013',
    gpa: 5.00,
  },

]
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold pb-5">
      Educations
    </h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
      <template v-for="school in schools" :key="school.name">
        <CardEducation :name="school.name" :gpa="school.gpa" :session="school.session" :institute="school.institute" />
      </template>
    </div>
  </div>
</template>
