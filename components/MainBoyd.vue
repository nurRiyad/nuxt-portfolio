<script setup lang="ts">
const colorMode = useColorMode()
const onClick = () => (colorMode.value === 'light' ? (colorMode.preference = 'dark') : (colorMode.preference = 'light'))
</script>

<template>
  <div>
    <div class="flex">
      <div class="w-3/5">
        <h1 class="text-3xl sm:text-4xl font-bold items-start  pt-2 pb-4">
          Al Asad Nur Riyad
        </h1>
        <div class="flex space-x-4">
          <a href="https://twitter.com/qdnvubp" target="_blank" title="Twitter" class="hover:scale-110 transition-all ease-out">
            <Icon name="fa-brands:twitter" size="20" />
          </a>
          <a href="https://github.com/nurRiyad" target="_blank" title="GitHub" class="hover:scale-110 transition-all ease-out">
            <Icon name="fa-brands:github" size="20" />
          </a>
          <a href="https://www.linkedin.com/in/nur-riyad/" target="_blank" title="Twitter" class="hover:scale-110 transition-all ease-out">
            <Icon name="fa-brands:linkedin" size="20" />
          </a>
          <a href="https://stackoverflow.com/users/16781395/nur-riyad" target="_blank" title="GitHub" class="hover:scale-110 transition-all ease-out">
            <Icon name="academicons:stackoverflow-square" size="20" />
          </a>
          <a href="mailto:asadnurriyad@gmail.com" title="GitHub" class="hover:scale-110 transition-all ease-out">
            <Icon name="bxl:gmail" size="20" />
          </a>
          <a v-if="colorMode.value === 'dark'" name="dark-mode" title="GitHub" class="hover:scale-110 transition-all ease-out hover:cursor-pointer" @click="onClick">
            <Icon name="bx:bxs-moon" size="20" />
          </a>
          <a v-else name="light-mode" title="GitHub" class="hover:scale-110 transition-all ease-out hover:cursor-pointer" @click="onClick">

            <Icon name="material-symbols:sunny-rounded" size="20" />
          </a>
        </div>
      </div>
      <div class="w-2/5 flex justify-center">
        <div class="h-24 sm:h-28 w-24 sm:w-28 rounded-full overflow-hidden">
          <img src="/rsz_1riyad.jpg" alt="Profile Picture">
        </div>
      </div>
    </div>
    <p class="pt-4">
      Hello, fellow human! I'm a software wizard who spends most of their day crafting code spells at <span class="font-medium">@AppsCode</span>  in the <span class="font-medium">Bytebuilder</span> team. When I'm not crafting code, you can find me summoning solutions to problems on online judges. Just don't ask me to cast any love spells, my magic only works on machines!
    </p>
  </div>
</template>
