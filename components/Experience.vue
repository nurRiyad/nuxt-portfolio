<script setup lang="ts">
// https://codepen.io/hassan-kamal/pen/NNvYEQ

const data = [
  {
    title: 'Senior Software Engineer @AppsCode',
    time: 'Aug 2023 - Present',
    left: false,
    list: [],

  },
  {
    title: 'Software Engineer @AppsCode',
    time: 'Aug 2021 - Jul 2023',
    left: true,
    list: [
      'Develop k8s cluster dashboard Console UI & k8s database dashboard KubeDB UI using Vue3, Typescript, Vuex, Vue Router',
      'Develop Account UI(SSR) with nuxt2, vuex & later successfully migrated to nuxt3',
      'Develop learning platform(SSG) using Nuxt3, Typescript, Pinia, Firebase, Vue Router',
      'Maintain & Update AppsCode Design System using Vue2 & later migrated to vue3',
    ],

  },
  {
    title: 'Teacher Assistant @IIUC',
    time: 'Aug 2020 - Jul 2021',
    left: false,
    list: [
      'Work as a teacher assistant for courses like Computer Programming I, Computer Programming II & Numerical Analysis.',
      'Take class test, assignment & evaluate papers. Help Teacher to take Final Viva',
    ],

  },
]
</script>

<template>
  <div>
    <h1 class="text-2xl sm:text-3xl font-bold items-start  pt-2 pb-4">
      Work Experience
    </h1>

    <div class="container">
      <CardExprience v-for="d in data" :key="d.title" :left="d.left" :title="d.title" :time="d.time" :list="d.list" />
    </div>
  </div>
</template>

<style scoped>
* {
   -webkit-box-sizing: border-box;
   -moz-box-sizing: border-box;
   box-sizing: border-box;
   outline: none;
}

.container {
   width: 100%;
   position: relative;
   overflow: hidden;
}

.container:before {
   content: '';
   position: absolute;
   top: 7px;
   left: 50%;
   margin-left: -1px;
   width: 2px;
   height: 100%;
   background: #CCD1D9;
   z-index: 1
}

@media screen and (max-width: 768px) {
   .container:before {
      left: 8px;
      width: 2px;
      height: 93%;
   }

}
</style>
