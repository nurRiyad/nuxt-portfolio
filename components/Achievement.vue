<script setup lang="ts">
const Projects = [
  {
    name: '4th, RMSTU Bangabandhu Online Divisional Programming Contest - 2021',
    link: 'https://toph.co/c/rmstu-bangabandhu-online-divisional-2021/standings',
  },
  {
    name: '4th, NSTU Inter University Programming Contest,2020',
    link: 'https://toph.co/c/nstu-ice-fest-regional-2020/standings',
  },
  {
    name: '6th, IIUC Inter University Programming Contest,2020',
    link: 'https://algo.codemarshal.org/contests/iiuc-2020/standings',
  },
  {
    name: '7th, BAIUST Inter University Programming Contest,2020',
    link: 'https://drive.google.com/file/d/1n274rybru1TzYLpIIcZ8dbPl0jHh1dFc/view',
  },
]
</script>

<template>
  <div>
    <h1 class="text-2xl sm:text-3xl font-bold items-start  pt-2 pb-4">
      Achievement
    </h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
      <template v-for="project in Projects" :key="project.name">
        <CardAchievement :name="project.name" :link="project.link" />
      </template>
    </div>
  </div>
</template>
