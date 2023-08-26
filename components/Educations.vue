<script setup lang="ts">
const schools = [
  {

    name: 'BSc in Computer Science & Engineering',
    institute: 'International Islamic University Chittagong',
    session: '2021',
    gpa: 'CGPA 3.444 / 4.00',
    img: 'iiuc.png',
  },
  {

    name: 'Higher Secondary School Certificate',
    institute: 'Bogura Cantonment Public College',
    session: '2015',
    gpa: 'GPA 5.00 / 5.00',
    img: 'bcpsc.png',
  },
  {
    name: 'Secondary School Certificate',
    institute: 'Bogura Police Line School',
    session: '2013',
    gpa: 'GPA 5.00 / 5.00',
    img: 'plsc.png',
  },

]
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
