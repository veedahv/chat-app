<template>
  <div id="app-main">
    <div id="nav">
      <router-link :to="{ name: 'Home' }">
        <h1 class="logo">veechat</h1>
      </router-link>
      <p>{{ time }}</p>
    </div>
    <router-view />
    <footer class="footer">
      <div class="body-container">
        <p class="copyright">
          &#169; 2021 ||
          <a href="https://victoria-akpan.netlify.app/" class="portfolio">
            By Veedahv
          </a>
        </p>
      </div>
    </footer>
  </div>
</template>


<script>
export default {
  data() {
    return {
      time: "",
    };
  },
  methods: {
    setTime() {
      let today = new Date();
      let time =
        today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
      this.time = time;
    },
  },
  mounted() {
    setInterval(this.setTime, 1000);
  },
};
</script>



<style>
:root {
  --primary-color: #e800a3;
  --sec-color: #9c068f;
  --tertiary-color: #000000;
  --light-color: #ffffff;
  --spare-color: #a8a4a8;
  --white-color: #ffffff;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

a {
  text-decoration: none;
  color: inherit;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: var(--tertiary-color);
}

#nav {
  /* padding: 10px 30px; */
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 900px;
  margin: 0px auto;
}

#nav a {
  font-weight: bold;
}

/* #nav a.router-link-exact-active {
  color: #42b983;
} */

.btn {
  background: linear-gradient(
    to right,
    var(--primary-color) 0%,
    var(--sec-color) 100%
  );
  color: var(--light-color);
  padding: 10px 30px;
  border: none;
  outline: none;
  border-radius: 10px;
  margin-bottom: 20px;
  font-size: 18px;
}
button:hover,
.btn:hover {
  cursor: pointer;
}

.view {
  width: 100%;
  min-height: 95vh;
  padding: 40px 20px;
  background: var(--spare-color);
}
.auth-btn {
  width: 100%;
}
.auth-form {
  background: var(--tertiary-color);
  color: var(--light-color);
  max-width: 600px;
  padding: 50px 20px;
  margin: 10px auto;
  border-radius: 10px;
}

.form-flx-box {
  display: flex;
  justify-content: space-between;
}
.form-flx-box > * {
  flex-basis: 48%;
}

.form-label {
  margin-bottom: 5px;
  display: inline-block;
  font-size: 18px;
}

.form-input {
  font-size: 18px;
  margin-bottom: 20px;
  background: transparent;
  color: var(--light-color);
  outline: none;
  width: 100%;
  border-radius: 10px;
  padding: 10px 30px;
  border: 1px solid;
  border-color: var(--primary-color) var(--sec-color) var(--sec-color)
    var(--primary-color);
}

.copyright {
  text-align: center;
}

.footer {
  padding: 10px 20px;
}

@media only screen and (max-width: 567px) {
  .form-flx-box {
    flex-direction: column;
  }
}
</style>
