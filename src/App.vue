<template>
  <div id="app-main">
    <div id="nav">
      <router-link :to="{name: 'Home'}"><h1 class="logo">veechat</h1></router-link> 
    </div>
    <router-view />
    <footer>
      <div class="body-container">
        <p class="copyright">
          &#169; 2021 ||
          <a href="https://victoria-akpan.netlify.app/" class="portfolio"
            >By Veedahv</a
          >
        </p>
      </div>
    </footer>
  </div>
</template>

<style>
/* 
:root {
  --primary-color: #F2A766;
  --sec-color: #BF8756;
  --tertiary-color: #404040;
  --light-color: #F2F2F2;
  --spare-color: #77788C;
  --white-color: #ffffff;
} */

:root {
  --primary-color: #e800a3;
  --sec-color: #9c068f;
  --tertiary-color: #000000;
  --light-color: #ffffff;
  --spare-color: #a8a4a8;
  --white-color: #ffffff;
}

/* Color Theme Swatches in Hex */
.ThePINKmic-1-hex {
  color: #000000;
}
.ThePINKmic-2-hex {
  color: #ffffff;
}
.ThePINKmic-3-hex {
  color: #a8a4a8;
}
.ThePINKmic-4-hex {
  color: #e800a3;
}
.ThePINKmic-5-hex {
  color: #9c068f;
}

/* Color Theme Swatches in RGBA */
.ThePINKmic-1-rgba {
  color: rgba(0, 0, 0, 1);
}
.ThePINKmic-2-rgba {
  color: rgba(255, 255, 255, 1);
}
.ThePINKmic-3-rgba {
  color: rgba(168, 163, 168, 1);
}
.ThePINKmic-4-rgba {
  color: rgba(232, 0, 163, 1);
}
.ThePINKmic-5-rgba {
  color: rgba(155, 6, 143, 1);
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: 'Poppins', sans-serif;
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

.view {
  width: 100vw;
  height: 100vh;
  padding: 20px;
  background: var(--spare-color);
}
.auth-btn {
  width: 100%;
}
.auth-form {
  /* background: var(--spare-color); */
  background: var(--tertiary-color);
  color: var(--light-color);
  max-width: 600px;
  padding: 50px 20px;
  margin: 10px auto;
  border-radius: 10px;
}

.form-flx-box {
  display: flex;
  /* align-items: center; */
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
  /* background: var(--light-color); */
  background: transparent;
  color: var(--light-color);
  /* color: var(--tertiary-color); */
  outline: none;
  width: 100%;
  /* border: none; */
  border-radius: 10px;
  padding: 10px 30px;
  border: 1px solid;
  border-color: var(--primary-color) var(--sec-color) var(--sec-color) var(--primary-color);
}

.copyright {
  text-align: center;
}

@media only screen and (max-width: 567px) {
  .form-flx-box {
    flex-direction: column;
  }
}

</style>
