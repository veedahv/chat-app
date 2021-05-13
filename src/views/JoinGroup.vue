<template>
  <div class="join-group">
    <div class="view">
      <div class="login-box">
        <form class="auth-form" @submit.prevent="joinGroup">
          <div class="form-main">
            <h1 class="login-intro">Hiii</h1>
            <div class="form-flx-box">
              <div class="form-input-box">
                <label for="hostname" class="form-label">User name</label>
                <input
                  type="text"
                  name="username"
                  id="username"
                  class="username form-input"
                  placeholder="User Name"
                  v-model="inputUsername"
                />
              </div>
              <div class="form-input-box">
                <label for="username" class="form-label">Group Id</label>
                <input
                  type="text"
                  name="group-id"
                  id="group-id"
                  class="group-id form-input"
                  placeholder="Group Id"
                  v-model="inputGroupId"
                />
              </div>
            </div>
            <input type="submit" class="btn auth-btn" value="Join Group" />
            <router-link :to="{ name: 'CreateGroup' }">CreateGroup</router-link>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /srceeede
import db from "@/db.js";
import { reactive, ref } from "vue";

export default {
  name: "JoinGroup",
  data() {
    return {
      inputUsername: ref(""),
      inputGroupId: ref(""),
      state: reactive({
        hostname: "",
        username: "",
        groupId: "",
        groupName: "",
        groupMessages: [],
      }),
      groupInfo: "",
      groups: [],
    };
  },
  methods: {
    startGroup() {
      this.groupInfo = JSON.stringify(this.state);
      this.$router.push({ name: "Chat", params: { group: this.groupInfo } });
    },
    joinGroup() {
      this.checkGroupId();
      this.startGroup();
    },
    checkGroupId() {
      this.groups.forEach((item) => {
        if (item.groupId === this.inputGroupId) {
          this.state.hostname = item.hostname;
          this.state.groupId = item.groupId;
          this.state.groupName = item.groupName;
          this.state.groupMessages = item.groupMessages;
          this.state.username = this.inputUsername;
        }
      });
    },
  },
  mounted() {
    const messagesRef = db.database().ref("messages");
    messagesRef.on("value", (snapshot) => {
      const data = snapshot.val();
      let groupsArr = [];

      Object.keys(data).forEach((key) => {
        groupsArr.push({
          id: key,
          groupId: data[key].groupId,
          hostname: data[key].hostname,
          groupName: data[key].groupName,
          groupMessages: data[key].groupMessages,
        });
      });

      this.groups = groupsArr;
    });
  },
};
</script>

<style scoped>
input {
  display: block;
}
.header,
.footer {
  position: fixed;
  width: 100%;
  left: 0;
  z-index: 5;
}
.header {
  top: 0;
}
.footer {
  bottom: 0;
  padding: 5px 20px;
}
</style>




