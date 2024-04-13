<template>
  <div>
    <h3 v-if="user">Hi, {{ user.first_name }} {{user.last_name}}</h3>
    <h3 v-if="!user">You are not logged in !Fucking Login</h3>

  </div>
    
</template>

<script>
import axios from 'axios';

export default{

  data(){
    return{
      user: null
    }
  },
  async created(){
    const response = await axios.get('user');

    console.log(response)
  }
}

</script>

<style scoped>
h1{
  text-align: center;
  font-size: larger;
  color:white;
}

</style>