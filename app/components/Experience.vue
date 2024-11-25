<script setup lang="ts">
// https://codepen.io/hassan-kamal/pen/NNvYEQ
import { workExperience } from '../data/info'
</script>

<template>
  <div>
    <h1 class="text-2xl sm:text-3xl font-bold items-start  pt-2 pb-4">
      Work Experience
    </h1>

    <div class="container">
      <CardExperience
        v-for="d in workExperience"
        :key="d.title"
        :title="d.title"
        :time="d.time"
        :list="d.list"
      />
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
   left: 8px;
   margin-left: -1px;
   width: 2px;
   height: 93%;
   background: #CCD1D9;
   z-index: 1
}

@media screen and (max-width: 5000px) {
   .container:before {
      left: 8px;
      width: 2px;
      height: 93%;
   }

}
</style>
