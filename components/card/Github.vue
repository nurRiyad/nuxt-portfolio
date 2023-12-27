<script setup lang="ts">
import { github } from '@/data/info'
</script>

<template>
  <a
    href="https://github.com/nurRiyad"
    target="_blank"
    class=" overflow-hidden border dark:border-gray-700 rounded-xl shadow"
  >
    <div
      class="flex flex-col justify-between gap-y-2  hover:scale-[1.01] ease-out transition-transform px-5 py-3"
    >
      <div class="flex flex-col gap-y-2">
        <div class="flex items-center space-x-2">
          <Icon name="logos:github-octocat" size="20" />
          <span class="text-xl font-medium">GitHub</span>
        </div>
        <div class="flex items-center space-x-2">
          <Icon name="heroicons:star" size="20" class="dark:text-cyan-500" />
          <p>Total star Earned {{ github.stars }}</p>
        </div>
        <div class="flex items-center space-x-2">
          <Icon name="ic:outline-commit" size="20" class="dark:text-cyan-500" />
          <p>Total Contribution {{ github.contribution }}</p>
        </div>
        <div class="flex items-center space-x-2">
          <Icon name="ph:git-pull-request" size="20" class="dark:text-cyan-500" />
          <p>Total Pull Request {{ github.pr }}</p>
        </div>
        <div class="flex items-center space-x-2">
          <Icon name="codicon:issues" size="20" class="dark:text-cyan-500" />
          <p>Total Issues {{ github.issue }}</p>
        </div>
      </div>
    </div>
  </a>
</template>
