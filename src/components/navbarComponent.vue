<template>
  <Header>
    <nav>
      <router-link to="/">Home</router-link>
    </nav>
    <div class="header">
      <router-link to="/login">Login</router-link>
      <router-link to="/register">Signup</router-link>
    </div>
    

  </Header>

</template>

<script>

</script>

<style scoped>
header{
  display: flex;
  align-items: center;
  justify-content: space-around;
  font-size: larger;
  margin: 30px 0;

  color: white;
}
.header{
  display: flex;
  align-items: center;
}
.signup{
  margin-left: 30px;

}
a{
  text-decoration: none;
  font-size: larger;
  color:white;

}
</style>