<script setup lang="ts">
const Ojs = [
  {
    name: 'Codechef',
    handle: 'nur_riyad',
    rating: 1822,
    participate: 32,
    solved: 201,
    link: 'https://www.codechef.com/users/nur_riyad',
  },
  {
    name: 'Codeforces',
    handle: 'nur_riyad',
    rating: 1545,
    participate: 76,
    solved: 864,
    link: 'https://codeforces.com/profile/nur_riyad',
  }, {
    name: 'AtCoder',
    handle: 'nur_riyad',
    rating: 837,
    participate: 19,
    solved: 200,
    link: 'https://atcoder.jp/users/nur_riyad',
  }, {
    name: 'LeetCode',
    handle: 'nur_riyad',
    rating: 1532,
    participate: 5,
    solved: 121,
    link: 'https://leetcode.com/nur_riyad/',
  },
]
</script>

<template>
  <div>
    <h1 class="text-2xl sm:text-3xl font-bold items-start  pt-2 pb-4">
      Competitive Programming
    </h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-2">
      <template v-for="oj in Ojs" :key="oj.name">
        <CardContest :name="oj.name" :handle="oj.handle" :rating="oj.rating" :link="oj.link" :participate="oj.participate" :solved="oj.solved" />
      </template>
    </div>
  </div>
</template>
