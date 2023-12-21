<script setup lang="ts">
interface Meddle {
  bronze: number
  silver: number
  gold: number
}

interface StackOverflow {
  badge_counts: Meddle
  reputation: number
  user_id: number
  link: string
}

const { data } = useFetch('https://api.stackexchange.com/2.3/users/16781395?order=desc&sort=reputation&site=stackoverflow&filter=!)DlgOcS2h0G1*66Qs2sho3rmdYa5-jwSJLhT(*71YtqEcC')

const formattedData = computed(() => {
  return (data.value as { items: Array<StackOverflow> }).items[0]
})
</script>

<template>
  <a
    :href="formattedData.link"
    target="_blank"
    class=" overflow-hidden border dark:border-gray-700 rounded-xl shadow"
  >
    <div
      class="flex flex-col justify-between gap-y-2  hover:scale-[1.01] ease-out transition-transform px-5 py-3"
    >
      <div class="flex flex-col gap-y-2">
        <div class="flex items-center space-x-2">
          <Icon name="logos:stackoverflow-icon" size="20" />
          <span class="text-xl font-medium">StackOverflow</span>
        </div>
        <div class="flex items-center space-x-2">
          <Icon name="ph:check-circle" size="20" class="dark:text-cyan-500" />
          <p>Total Reputation {{ formattedData?.reputation }}</p>
        </div>
        <div class="flex items-center space-x-2">
          <Icon name="fa-regular:handshake" size="19" class="dark:text-cyan-500" />
          <p>Total Impact ~24K+</p>
        </div>
        <div class="flex items-center space-x-2">
          <Icon name="material-symbols:airline-stops-rounded" size="20" class="dark:text-cyan-500" />
          <p>Top 4% This Year</p>
        </div>
        <div class="flex items-center space-x-5">
          <div class="flex items-center space-x-1">
            <Icon name="emojione:1st-place-medal" />
            <p>{{ formattedData?.badge_counts?.gold }}</p>
          </div>
          <div class="flex items-center space-x-1">
            <Icon name="emojione:2nd-place-medal" />
            <p>{{ formattedData?.badge_counts.silver }}</p>
          </div>
          <div class="flex items-center space-x-1">
            <Icon name="emojione:3rd-place-medal" />
            <p>{{ formattedData?.badge_counts.bronze }}</p>
          </div>
        </div>
      </div>
    </div>
  </a>
</template>
