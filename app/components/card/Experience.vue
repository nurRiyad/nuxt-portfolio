<script setup lang="ts">
interface Props {
  left?: boolean
  title?: string
  time?: string
  list?: Array<string>
}

const props = withDefaults(defineProps<Props>(), {
  left: false,
  title: 'no title',
  time: 'no time',
  list: () => ([]),
})

const computeClass = computed(() => {
  return props.left ? 'timeline-block-left' : 'timeline-block-right'
})
</script>

<template>
  <div class="timeline-block" :class="computeClass">
    <div class="marker" />
    <div class="timeline-content">
      <h2 class="text-base sm:text-lg font-semibold">
        {{ title }}
      </h2>
      <p>
        {{ time }}
      </p>
      <ul v-if="list.length > 0" class="space-y-2 text-sm pt-3">
        <li v-for="itm in list" :key="itm">
          {{ itm }}
        </li>
      </ul>
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

.timeline-block {
   width: -webkit-calc(50% + 8px);
   width: -moz-calc(50% + 8px);
   width: calc(50% + 8px);
   display: -webkit-box;
   display: -webkit-flex;
   display: -moz-box;
   display: flex;
   -webkit-box-pack: justify;
   -webkit-justify-content: space-between;
   -moz-box-pack: justify;
   justify-content: space-between;
   clear: both;
}

.timeline-block-right {
   float: right;
}

.timeline-block-left {
   float: left;
   direction: rtl
}

.marker {
   width: 16px;
   height: 16px;
   border-radius: 50%;
   border: 2px solid #F5F7FA;
   background: #4FC1E9;
   margin-top: 7px;
   z-index: 9999
}

.timeline-content {
   width: 95%;
   padding: 0 15px;

}

@media screen and (max-width: 5000px) {
   .container:before {
      left: 8px;
      width: 2px;
   }
   .timeline-block {
      width: 100%;
      margin-bottom: 30px;
   }
   .timeline-block-right {
      float: none;
   }

   .timeline-block-left {
      float: none;
      direction: ltr;
   }
}
</style>
