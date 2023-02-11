<script setup lang="ts">
const colorMode = useColorMode()
const onClick = () => (colorMode.value === 'light' ? (colorMode.preference = 'dark') : (colorMode.preference = 'light'))
</script>

<template>
  <div>
    <div class="flex">
      <div class="w-3/5">
        <h1 class="text-3xl sm:text-4xl font-bold items-start text-black pt-2 pb-4">
          Al Asad Nur Riyad
        </h1>
        <div class="flex space-x-4">
          <a href="https://twitter.com/" title="Twitter" class="hover:scale-110 transition-all ease-out">
            <Icon name="fa-brands:twitter" size="20" />
          </a>
          <a href="https://github.com/" title="GitHub" class="hover:scale-110 transition-all ease-out">
            <Icon name="fa-brands:github" size="20" />
          </a>
          <a href="https://twitter.com/" title="Twitter" class="hover:scale-110 transition-all ease-out">
            <Icon name="fa-brands:linkedin" size="20" />
          </a>
          <a href="https://github.com/" title="GitHub" class="hover:scale-110 transition-all ease-out">
            <Icon name="academicons:stackoverflow-square" size="20" />
          </a>
          <a href="https://github.com/" title="GitHub" class="hover:scale-110 transition-all ease-out">
            <Icon name="bxl:gmail" size="20" />
          </a>
          <a v-if="colorMode.value === 'dark'" name="dark-mode" title="GitHub" class="hover:scale-110 transition-all ease-out hover:cursor-pointer" @click="onClick">
            <Icon name="material-symbols:sunny-rounded" size="20" />
          </a>
          <a v-else name="light-mode" title="GitHub" class="hover:scale-110 transition-all ease-out hover:cursor-pointer" @click="onClick">
            <Icon name="bx:bxs-moon" size="20" />
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
      Hi! I'm a software engineer. Currently working at @AppsCode in Bytebuilder team. I enjoy creating interesting projects and solving problems on online judges whenever I'm not coding for work.
    </p>
  </div>
</template>
