<script setup lang="ts">
interface Props {
  left: boolean
}

const props = withDefaults(defineProps<Props>(), { left: false })

const computeClass = computed(() => {
  return props.left ? 'timeline-block-left' : 'timeline-block-right'
})
</script>

<template>
  <div class="timeline-block" :class="computeClass">
    <div class="marker" />
    <div class="timeline-content space-y-2">
      <h3 class="mt-0 text-lg">
        Senior Software Engineer @Appscode
      </h3>
      <div>Aug 2023 - Present</div>
      <ul>
        <li>- Lorem ipsum dolor sit amet.</li>
        <li>- Lorem ipsum dolor sit.</li>
        <li>- Lorem ipsum dolor sit amet consectetur.</li>
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

.container {
   width: 100%;
   position: relative;
   overflow: hidden;
}

.container:before {
   content: '';
   position: absolute;
   top: 0;
   left: 50%;
   margin-left: -1px;
   width: 2px;
   height: 100%;
   background: #CCD1D9;
   z-index: 1
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
   margin-top: 0px;
   z-index: 9999
}

.timeline-content {
   width: 95%;
   padding: 0 15px;

}

@media screen and (max-width: 768px) {
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
