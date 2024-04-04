<template>
  <navbarComponentVue/>
  
  
</template>

<script>

import navbarComponentVue from './components/navbarComponent.vue'



export default {
  name: 'App',
  components: {
    navbarComponentVue
    
  }
}
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Ojuju:wght@200..800&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Ojuju", sans-serif;
  background-color: #003f5c;
}

</style>
