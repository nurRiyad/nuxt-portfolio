<script setup lang="ts">
const colorMode = useColorMode()
</script>

<template>
  <div>
    <h1 class="text-2xl sm:text-3xl font-bold items-start  pt-2 pb-4">
      Tech Stack
    </h1>
    <div class="overflow-hidden border dark:border-gray-700 shadow rounded-xl">
      <div class="ease-out transition-transform px-5 py-3">
        <div class="flex flex-wrap pb-4 gap-2 justify-start items-baseline ">
          <div class="border dark:border-gray-600 p-2 border-gray-200 bg-gray-100 dark:bg-gray-700  rounded-md">
            <Icon name="logos:javascript" class="hover:scale-[1.1] ease-out transition-transform" size="35" />
          </div>
          <div class="border dark:border-gray-600 p-2 border-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md">
            <Icon name="logos:typescript-icon" class="hover:scale-[1.1] ease-out transition-transform" size="35" />
          </div>
          <div class="border dark:border-gray-600 p-2 border-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md">
            <Icon name="logos:c-plusplus" class="hover:scale-[1.1] ease-out transition-transform" size="35" />
          </div>
          <div class="border dark:border-gray-600 p-2 border-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md">
            <Icon name="logos:nodejs-icon" class="hover:scale-[1.1] ease-out transition-transform" size="35" />
          </div>
          <div class="border dark:border-gray-600 p-2 border-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md">
            <Icon name="simple-icons:express" :color="colorMode" class="hover:scale-[1.1] ease-out transition-transform" size="35" />
          </div>
          <div class="border dark:border-gray-600 p-2 border-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md">
            <Icon name="logos:vue" class="hover:scale-[1.1] ease-out transition-transform" size="35" />
          </div>
          <div class="border dark:border-gray-600 p-2 border-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md">
            <Icon name="logos:nuxt-icon" class="hover:scale-[1.1] ease-out transition-transform" size="35" />
          </div>
          <div class="border dark:border-gray-600 p-2 border-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md">
            <Icon name="logos:vitejs" class="hover:scale-[1.1] ease-out transition-transform" size="35" />
          </div>
          <div class="border dark:border-gray-600 p-2 border-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md">
            <Icon name="logos:pinia" class="hover:scale-[1.1] ease-out transition-transform" size="35" />
          </div>
          <div class="border dark:border-gray-600 p-2 border-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md">
            <Icon name="logos:supabase-icon" class="hover:scale-[1.1] ease-out transition-transform" size="35" />
          </div>
          <div class="border dark:border-gray-600 p-2 border-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md">
            <Icon name="logos:firebase" class="hover:scale-[1.1] ease-out transition-transform" size="35" />
          </div>
          <div class="border dark:border-gray-600 p-2 border-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md">
            <Icon name="logos:mongodb-icon" class="hover:scale-[1.1] ease-out transition-transform" size="35" />
          </div>
          <div class="border dark:border-gray-600 p-2 border-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md">
            <Icon name="logos:linux-tux" class="hover:scale-[1.1] ease-out transition-transform" size="35" />
          </div>
          <div class="border dark:border-gray-600 p-2 border-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md">
            <Icon name="simple-icons:macos" :color="colorMode" class="hover:scale-[1.1] ease-out transition-transform" size="35" />
          </div>
          <div class="border dark:border-gray-600 p-2 border-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md">
            <Icon name="logos:git-icon" class="hover:scale-[1.1] ease-out transition-transform" size="35" />
          </div>
          <div class="border dark:border-gray-600 p-2 border-gray-200 bg-gray-100 dark:bg-gray-700 rounded-md">
            <Icon name="logos:docker-icon" class="hover:scale-[1.1] ease-out transition-transform" size="35" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
