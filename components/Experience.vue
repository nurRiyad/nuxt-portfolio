<script setup lang="ts">
// https://codepen.io/hassan-kamal/pen/NNvYEQ
</script>

<template>
  <div>
    <h1 class="text-3xl font-bold mb-10">
      Work Experience
    </h1>

    <div class="container">
      <div class="timeline-block timeline-block-right">
        <div class="marker" />
        <div class="timeline-content">
          <h3 class="mt-0">
            Senior Software Engineer @Appscode
          </h3>
          <span>Some work experience</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
        </div>
      </div>

      <div class="timeline-block timeline-block-left">
        <div class="marker" />
        <div class="timeline-content">
          <h3>Software Engineer @AppsCode</h3>
          <span>Some work experience</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
        </div>
      </div>

      <div class="timeline-block timeline-block-right">
        <div class="marker" />
        <div class="timeline-content">
          <h3>Teacher AssisTant @IIUC</h3>
          <span>Some work experience</span>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate.</p>
        </div>
      </div>
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

body {
   margin: 0;
   padding: 0;
}

h1 span {
   font-weight: 600;
}

.container {
   width: 90%;
   position: relative;
   overflow: hidden;
}

.container:before {
   content: '';
   position: absolute;
   top: 0;
   left: 50%;
   margin-left: -2px;
   width: 4px;
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
   z-index: 9999
}

.timeline-content {
   width: 95%;
   padding: 0 15px;

}

.timeline-content h3 {
   margin-top: 5px;
   margin-bottom: 5px;
   font-size: 25px;
   font-weight: 500
}

.timeline-content span {
   font-size: 15px;
}

.timeline-content p {
   font-size: 14px;
   line-height: 1.5em;
   word-spacing: 1px;
}

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
</style>
