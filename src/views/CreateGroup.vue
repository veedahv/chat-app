<template>
  <div class="create-group">
    <div class="view">
      <div class="login-box">
        <form class="auth-form" @submit.prevent="createGroup">
          <div class="form-main">
            <h1 class="login-intro">Hiii</h1>
            <div class="form-flx-box">
              <div class="form-input-box">
                <label for="hostname" class="form-label">Host name</label>
                <input
                  type="text"
                  name="hostname"
                  id="hostname"
                  class="hostname form-input"
                  placeholder="Host Name"
                  v-model="inputHostname"
                />
              </div>
              <div class="form-input-box">
                <label for="username" class="form-label">Group name</label>
                <input
                  type="text"
                  name="groupname"
                  id="groupname"
                  class="groupname form-input"
                  placeholder="Group Name"
                  v-model="inputGroupName"
                />
              </div>
            </div>
            <div class="form-flx-box">
              <button type="button" class="btn" @click="generateGroupId">
                Generate group Id
              </button>
              <div class="form-input-box">
                <div class="copy-box">
                  <input
                    type="text"
                    name="input-group-id"
                    id="input-group-id"
                    class="input-group-id form-input"
                    v-model="inputGroupId"
                    disabled
                  />
                  <button class="copy-btn" type="button" @click="copyId">
                    <i class="fa fa-clipboard" aria-hidden="true"></i>
                  </button>
                </div>
              </div>
            </div>
            <input type="submit" class="btn auth-btn" value="Create Group" />
            <router-link :to="{ name: 'JoinGroup' }">Join Group</router-link>
          </div>
        </form>
                  <input
                    type="text"
                    name="input-not-visible"
                    id="input-not-visible"
                    class="input-not-visible form-input"
                    v-model="inputGroupId"
                  />
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/db.js";

import { reactive, ref } from "vue";

export default {
  name: "CreateGroup",
  data() {
    return {
      inputHostname: ref(""),
      inputGroupName: ref(""),
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
      (this.groupInfo = JSON.stringify(this.state));
      this.$router.push({ name: "Chat", params: { group: this.groupInfo } });
    },
    createGroup() {
      if (this.inputHostname !== "" || this.inputHostname !== null) {
        this.state.hostname = this.inputHostname;
        this.state.username = this.inputHostname;
        this.state.groupId = this.inputGroupId;
        this.state.groupName = this.inputGroupName;
        const newMessage = {
          username: this.state.username,
          content: "initial",
        };
        this.state.groupMessages.push(newMessage);
        this.inputHostname = "";
        this.inputGroupId = "";
        this.inputGroupName = "";
        const messagesRef = db.database().ref("messages");
        const message = {
          hostname: this.state.hostname,
          groupId: this.state.groupId,
          groupName: this.state.groupName,
          groupMessages: this.state.groupMessages,
        };
        messagesRef.push(message);
        this.startGroup();
      } else {
        alert("enter your username");
      }
    },
    copyId() {
      var copyText = document.querySelector("#input-not-visible");
      copyText.select();
      document.execCommand("copy");
    },
    createGroupId() {
      let result = [];
      let characters =
        "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
      let charactersLength = characters.length;
      for (var i = 0; i < 12; i++) {
        result.push(
          characters.charAt(Math.floor(Math.random() * charactersLength))
        );
      }
      return result.join("");
    },
    generateGroupId() {
      console.log(this.groups);
      console.log(this.createGroupId());
      this.groups.forEach((group) => {
        console.log(group.groupId);
        if (this.createGroupId === group.groupId) {
          this.generateGroupId();
        } else {
          this.inputGroupId = this.createGroupId();
        }
      });
    },
  },
  mounted() {
    const messagesRef = db.database().ref("messages");
    console.log(this.groups);

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
      console.log(this.groups);
    });
  },
};
</script>

<style scoped>
input {
  display: block;
}
.input-not-visible {
  position: absolute;
  top: -9999px;
  left: -9999px;
}
.copy-box {
  position: relative;
}
.copy-btn {
  position: absolute;
  top: 50%;
  right: 25px;
  /* right: 30px; */
  transform: translateY(-50%);
  background: transparent;
  color: var(--light-color);
  border: none;
  outline: none;
  font-size: 22px;
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
