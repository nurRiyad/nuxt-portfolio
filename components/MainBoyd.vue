<script setup lang="ts">
const colorMode = useColorMode()

const onDarkClick = () => colorMode.value = 'dark'
const onLightClick = () => colorMode.value = 'light'

const mode = computed(() => colorMode.value)
</script>

<template>
  <div>
    <div class="grid grid-cols-3">
      <div class="col-span-2">
        <h1 class="text-3xl sm:text-4xl font-bold items-start  pt-2 pb-4">
          Al Asad Nur Riyad
        </h1>
        <div class="flex space-x-4">
          <a href="https://twitter.com/qdnvubp" target="_blank" title="Twitter" class="hover:scale-110 transition-all ease-out">
            <Icon name="logos:twitter" size="20" />
          </a>
          <a href="https://github.com/nurRiyad" target="_blank" title="GitHub" class="hover:scale-110 transition-all ease-out">
            <Icon name="devicon:github" size="20" />
          </a>
          <a href="https://www.linkedin.com/in/nur-riyad/" target="_blank" title="LinkedIn" class="hover:scale-110 transition-all ease-out">
            <Icon name="logos:linkedin-icon" size="20" />
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
      </div>
      <div class="justify-self-start flex justify-center grid-col">
        <div class="h-24 sm:h-28 w-24 sm:w-28 rounded-full overflow-hidden">
          <img src="/rsz_1riyad.jpg" alt="Profile Picture">
        </div>
      </div>
    </div>
    <p class="pt-4 text-sm sm:text-base">
      Hello, fellow human! I'm a software wizard who spends most of his day crafting code spells at <span class="font-medium">@AppsCode</span>  in the <span class="font-medium">Bytebuilders</span> team. When I'm not crafting code, you can find me summoning solutions to problems on online judges. Just don't ask me to cast any love spells, my magic only works on machines!
    </p>
  </div>
</template>
