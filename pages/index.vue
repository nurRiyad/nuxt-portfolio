<script setup lang="ts">
definePageMeta({
  title: 'Md. Al Asad Nur Riyad'
})

</script>

<template>
  <div class="container gradient-text">
    <h1>Md. Al Asad Nur Riyad</h1>
    <div class="link">
      <a href="https://github.com/nurRiyad">Github</a>
      <a href="https://www.linkedin.com/in/nur-riyad/">LinkedIn</a>
    </div>
  </div>
</template>

<style>
html, body {
  margin: 0;
  padding: 0;
}
.container{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  overflow: hidden;
}
.gradient-text {
  /* Fallback: Set a background color. */
  background-color: red;
  
  /* Create the gradient. */
  background-image: linear-gradient(45deg, #f3ec78, #af4261);
  
  /* Set the background size and repeat properties. */
  background-size: 100%;
  background-repeat: repeat;

  /* Use the text as a mask for the background. */
  /* This will show the gradient as a text color rather than element bg. */
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent; 
  -moz-background-clip: text;
  -moz-text-fill-color: transparent;
}

h1 {
  font-family: "Archivo Black", sans-serif;
  font-weight: normal;
  font-size: 3em;
  text-align: center;
  margin-top: 0;
  margin-bottom: 0;
  margin-bottom: -0.25em;
}
a{
  margin: 5px;
}
</style>