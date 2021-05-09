<template>
  <div class="home">
    <router-link :to="{ name: 'CreateGroup' }" class="btn">CreateGroup</router-link>
    <router-link :to="{ name: 'JoinGroup' }" class="btn">Join Group</router-link>
  </div>
</template>

<script>
// @ is an alias to /sr

export default {
  name: "Home",
};
</script>

<style scoped>

.chat-input-box {
  display: flex;
  align-items: center;
}
.btn {
  display: inline-block;
  margin: 10px;
}
</style>
