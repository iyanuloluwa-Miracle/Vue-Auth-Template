<template>
    <form>
      <div class="container">
        <label for="uname"><b>FirstName</b></label>
        <input type="text" placeholder="Enter firstname" name="uname" required />

        <label for="uname"><b>Lastname</b></label>
        <input type="text" placeholder="Enter Lastname" name="uname" required />
  
        <label for="psw"><b>Password</b></label>
        <input type="password" placeholder="Enter Password" name="psw" required />
  
        <button type="submit">Register</button>
      </div>
    </form>
  </template>
  
  <script>
    export default{
      methods:{
        
      }
    }
  
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