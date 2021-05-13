<template>
  <div class="home">
    <h1 class="home-intro">
      Wlcom to lalala
    </h1>
    <p class="not">A safe space to converse with your friends in groups</p>
    <p class="not">You can create a group or join an existing group</p>
    <router-link :to="{ name: 'CreateGroup' }" class="btn">Create Group</router-link>
    <router-link :to="{ name: 'JoinGroup' }" class="btn">Join Group</router-link>
    <small class="ps">PS: Conversions on veechat are not encryted</small>
  </div>
</template>

<script>
export default {
  name: "Home",
};
</script>

<style scoped>

.home {
  padding: 80px 5px;
  text-align: center;
}
.btn {
  display: inline-block;
  margin: 10px;
  width: 185px;
}
.ps {
  display: block;
  margin: 10px;
}
</style>
