<script setup lang="ts">
const colorMode = useColorMode()

const onDarkClick = () => colorMode.value = 'dark'
const onLightClick = () => colorMode.value = 'light'

const mode = computed(() => colorMode.value)

const aboutMe = 'Hello, I am passionate software software engineer and problem solver. I am currently working at @AppsCode as Senior Software Engineer in @Bytebuilders team'
</script>

<template>
  <div>
    <div class="grid grid-cols-3 gap-5">
      <div class="col-span-2">
        <div class="flex justify-between">
          <h1 class="text-2xl sm:text-3xl font-bold items-start  pt-2 pb-4">
            Al Asad Nur Riyad
          </h1>
        </div>
        <div class="flex space-x-3 items-center">
          <a href="https://twitter.com/qdnvubp" target="_blank" title="Twitter" class="hover:scale-110 transition-all ease-out">
            <Icon name="logos:twitter" size="20" />
          </a>
          <a href="https://github.com/nurRiyad" target="_blank" title="GitHub" class="hover:scale-110 transition-all ease-out">
            <Icon name="logos:github-octocat" size="20" />
          </a>
          <a href="https://www.linkedin.com/in/nur-riyad/" target="_blank" title="LinkedIn" class="hover:scale-110 transition-all ease-out">
            <Icon name="devicon:linkedin" size="20" />
          </a>
          <a href="https://stackoverflow.com/users/16781395/nur-riyad" target="_blank" title="Stackoverflow" class="hover:scale-110 transition-all ease-out">
            <Icon name="logos:stackoverflow-icon" size="20" />
          </a>
          <a href="mailto:asadnurriyad@gmail.com" title="Gmail" class="hover:scale-110 transition-all ease-out">
            <Icon name="logos:google-gmail" size="20" />
          </a>
          <a v-if="mode === 'dark'" name="dark-mode" title="Dark" class="hover:scale-110 transition-all ease-out hover:cursor-pointer" @click="onLightClick">
            <Icon name="icon-park:moon" size="20" />
          </a>
          <a v-if="mode === 'light'" name="light-mode" title="Light" class="hover:scale-110 transition-all ease-out hover:cursor-pointer" @click="onDarkClick">

            <Icon name="noto:sun" size="20" />
          </a>
        </div>

        <p class="pt-4 text-sm sm:text-base hidden sm:block">
          {{ aboutMe }}
        </p>
      </div>
      <div class="justify-center mt-3 items-start flex">
        <div class="rounded-md w-20 sm:w-40 overflow-hidden">
          <NuxtImg src="/rsz_1riyad.jpg" alt="Profile Picture" width="160px" />
        </div>
      </div>
    </div>
    <p class="pt-4 text-sm sm:text-lg block sm:hidden">
      {{ aboutMe }}
    </p>
  </div>
</template>
