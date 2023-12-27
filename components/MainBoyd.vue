<script setup lang="ts">
import { mainBody } from '@/data/info'
const colorMode = useColorMode()

const onDarkClick = () => colorMode.value = 'light'
const onLightClick = () => colorMode.value = 'dark'

const mode = computed(() => colorMode.value)
</script>

<template>
  <div>
    <div class="grid grid-cols-3 gap-5">
      <div class="col-span-2">
        <div class="flex justify-between">
          <h1 class="text-2xl sm:text-3xl font-bold items-start  pt-2 pb-4">
            {{ mainBody.name }}
          </h1>
        </div>
        <div class="flex space-x-3 items-center">
          <a :href="`https://twitter.com/${mainBody.twitter}`" target="_blank" title="Twitter" class="hover:scale-110 transition-all ease-out">
            <Icon name="logos:twitter" size="20" />
          </a>
          <a :href="`https://github.com/${mainBody.github}`" target="_blank" title="GitHub" class="hover:scale-110 transition-all ease-out">
            <Icon name="logos:github-octocat" size="20" />
          </a>
          <a :href="`https://www.linkedin.com/in/${mainBody.linkedIn}`" target="_blank" title="LinkedIn" class="hover:scale-110 transition-all ease-out">
            <Icon name="devicon:linkedin" size="20" />
          </a>
          <a :href="`https://stackoverflow.com/users/16781395/${mainBody.stackOverflow}`" target="_blank" title="Stackoverflow" class="hover:scale-110 transition-all ease-out">
            <Icon name="logos:stackoverflow-icon" size="20" />
          </a>
          <a :href="`mailto:${mainBody.email}`" title="Gmail" class="hover:scale-110 transition-all ease-out">
            <Icon name="logos:google-gmail" size="20" />
          </a>
          <a v-if="mode === 'light'" name="dark-mode" title="Dark" class="hover:scale-110 transition-all ease-out hover:cursor-pointer" @click="onLightClick">
            <Icon name="icon-park:moon" size="20" />
          </a>
          <a v-if="mode === 'dark'" name="light-mode" title="Light" class="hover:scale-110 transition-all ease-out hover:cursor-pointer" @click="onDarkClick">

            <Icon name="noto:sun" size="20" />
          </a>
        </div>

        <p class="pt-4 text-sm sm:text-base hidden sm:block">
          {{ mainBody.about }}
        </p>
      </div>
      <div class="justify-center mt-3 items-start flex">
        <div class="rounded-md w-20 sm:w-40 overflow-hidden">
          <NuxtImg src="/rsz_1riyad.jpg" alt="Profile Picture" width="160px" />
        </div>
      </div>
    </div>
    <p class="pt-4 text-sm sm:text-lg block sm:hidden">
      {{ mainBody.about }}
    </p>
  </div>
</template>
