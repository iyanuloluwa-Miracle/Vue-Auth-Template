<template>
  <main>
    <navbarComponentVue/>
    <loginComponent/>
    
   

  </main>
 
  
  
</template>

<script>
import navbarComponentVue from './components/navbarComponent.vue'
import loginComponent from './components/loginComponent.vue'



export default {
  name: 'App',
  components: {
    navbarComponentVue,
    loginComponent
    
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
