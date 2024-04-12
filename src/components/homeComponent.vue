<template>
    <div>
        <h1>Welcome World!</h1>

    </div>
</template>

<script>
import axios from 'axios';

export default{
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