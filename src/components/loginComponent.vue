<template>
  <form @submit.prevent="handlesubmit">
    <div class="container">
      <label for="uname"><b>Email</b></label>
      <input type="text" placeholder="Enter email" name="uname" v-model="email" required />

      <label for="psw"><b>Password</b></label>
      <input type="password" placeholder="Enter email" name="psw"  v-model="password" required />

      <button type="submit">Login</button>
    </div>
  </form>
</template>

<script>

import axios from 'axios'

export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },

  methods:{
    async handlesubmit(){


      const response = await axios.post('signin', {

        email: this.email,
        password: this.password

      })
      console.log(response)
      localStorage.setItem('accessToken', response.data.accessToken)
       this.$router.push('/')
    }
  }
};
</script>

<style scoped>
form {
  border: 3px solid #f1f1f1;
}
/* Full-width inputs */
input[type="text"],
input[type="password"] {
  width: 100%;
  padding: 12px 20px;
  margin: 8px 0;
  display: inline-block;
  border: 1px solid #ccc;
  box-sizing: border-box;
}

/* Set a style for all buttons */
button {
  background-color: #04aa6d;
  color: white;
  padding: 14px 20px;
  margin: 8px 0;
  border: none;
  cursor: pointer;
  width: 100%;
}
</style>
