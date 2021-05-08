<template>
  <div id="app-main">
  <div id="nav">
    <!-- <router-link to="/">Login</router-link> | -->
    <!-- <router-link :to="{name: 'Home'}">Home</router-link>  -->
  </div>
  <router-view/>
  </div>
</template>

<style>

:root {
  --primary-color: #F2A766;
  --sec-color: #BF8756;
  --tertiary-color: #404040;
  --light-color: #F2F2F2;
  --spare-color: #77788C;
  --white-color: #ffffff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /* text-align: center; */
  /* color: #2c3e50; */
  color: var(--tertiary-color);
}

/* #nav {
  padding: 30px;
} */

#nav a {
  font-weight: bold;
  /* color: #2c3e50; */
}

/* #nav a.router-link-exact-active {
  color: #42b983;
} */

.btn {
  background: linear-gradient(to right, var(--primary-color)  0%, var(--sec-color) 100%);
  padding: 15px 35px;
  border: none;
  outline: none;
  border-radius: 10px;
}

</style>
