<template>
  <div class="home">
    <h1 class="home-intro">
      Wlom to lalala
    </h1>
    <router-link :to="{ name: 'CreateGroup' }" class="btn">Create Group</router-link>
    <router-link :to="{ name: 'JoinGroup' }" class="btn">Join Group</router-link>
    <small class="ps">PS: Conversions on veechat are not encryted</small>
  </div>
</template>

<script>
// @ is an alias to /sr

export default {
  name: "Home",
};
</script>

<style scoped>

.home {
  text-align: center;
}

.chat-input-box {
  display: flex;
  align-items: center;
}
.btn {
  display: inline-block;
  margin: 10px;
  width: 190px;
}
.ps {
  display: block;
  margin: 10px;
}
</style>
