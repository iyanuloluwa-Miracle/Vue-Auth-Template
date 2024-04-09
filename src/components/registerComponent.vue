<template>
  <form @submit.prevent="handleSubmit">
    <div class="container">
      <label for="uname"><b>FirstName</b></label>
      <input
        type="text"
        placeholder="Enter firstname"
        name="first_name"
        v-model="first_name"
        required
      />

      <label for="uname"><b>Lastname</b></label>
      <input
        type="text"
        placeholder="Enter Lastname"
        name="last_name"
        v-model="last_name"
        required
      />

      <label for="uname"><b>Email</b></label>
      <input
        type="text"
        placeholder="Email"
        name="email"
        v-model="email"
        required
      />

      <label for="psw"><b>Password</b></label>
      <input
        type="password"
        placeholder="Enter Password"
        name="password"
        required
        v-model="password"
      />

      <label for="psw"><b>Confirm Password</b></label>
      <input
        type="password"
        placeholder="Enter Password"
        name="confirmed password"
        required
        v-model="password_confirm"
      />

      <button type="submit">Register</button>
    </div>
  </form>
</template>

<script>
import axios from 'axios'
export default {
  data() {
    return {
      first_name: "",
      last_name: "",
      email: "",
      password: "",
      password_confirm: "",
    };
  },
  methods: {
    handleSubmit() {
      const data = {
        first_name: this.first_name,
        last_name: this.last_name,
        email: this.email,
        password: this.password_confirm,
      };
      console.log(data);
    },
  },
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
