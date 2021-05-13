<template>
  <div class="chat-view chat">
    <div class="chat-container" v-if="groupInfo">
      <div class="chat-box">
        <div class="chat-header">
          <h2 class="chat-intro">{{ groupInfo.groupName }}</h2>
          <router-link :to="{ name: 'Home' }">Logout</router-link>
        </div>
        <section class="chat-box">
          <div
            class="chat-msg"
            v-for="message in groupMessages"
            :key="message.key"
            :class="
              message.username === groupInfo.username
                ? 'message current-user'
                : 'message'
            "
          >
            <div class="message-inner">
              <span class="first-letter">{{ message.firstLetter }}</span>
              <span class="box-arrow">
                <span class="arrow"></span>
              </span>
              <span class="msg-bubble">
                <h3 class="username">
                  {{ message.username }}
                  <span
                    class="host"
                    v-if="message.username === groupInfo.hostname"
                    >(Host)</span
                  >
                </h3>
                <p class="content">{{ message.content }}</p>
                <small class="date-time">{{ message.dateTime }}</small>
              </span>
            </div>
          </div>
        </section>
        <div class="chat-footer">
          <form class="chat-form" @submit.prevent="sendMessage">
            <div class="chat-input-box">
              <input
                type="text"
                name="chat-message"
                id="chat-message"
                class="chat-message"
                placeholder="Write a message"
                v-model="inputMessage"
              />
              <input type="submit" class="send btn" value="Send" />
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from "@/db.js";

export default {
  name: "Chat",
  props: ["group"],
  data() {
    return {
      groupInfo: null,
      groupMessages: [],
      inputMessage: "",
      firstLetter: "",
      groupKey: "",
      groupsArray: [],
    };
  },
  created() {
    if (this.group === undefined) {
      this.$router.push({ name: "Home" });
    }
  },
  methods: {
    sendMessage() {
      const messagesRefObj = db
        .database()
        .ref("messages/" + this.groupKey + "/groupMessages");
      if (this.inputMessage === "" || this.inputMessage === null) {
        return;
      }
      this.firstLetter = this.groupInfo.username.slice(0, 1).toUpperCase();
      let today = new Date();
      let date =
        today.getDate() +
        "/" +
        (today.getMonth() + 1) +
        "/" +
        today.getFullYear();
      let time = today.getHours() + ":" + today.getMinutes();
      let dateTime = time + " || " + date;
      const message = {
        username: this.groupInfo.username,
        firstLetter: this.firstLetter,
        content: this.inputMessage,
        dateTime: dateTime,
      };

      // this.groupMessages.push(message);
      messagesRefObj.push(message);
      this.inputMessage = "";
    },
  },
  mounted() {
    if (this.group !== undefined) {
      this.groupInfo = JSON.parse(this.group);
      // this.groupMessages = Object.values(this.groupInfo.groupMessages);
    }
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

      this.groupsArray = groupsArr;
      this.groupsArray.forEach((item) => {
        if (item.groupId === this.groupInfo.groupId) {
          this.groupKey = item.id;
          this.groupMessages = Object.values(item.groupMessages);
        }
      });
    });
  },
};
</script>

<style scoped>
.chat-view {
  /* width: 100%; */
  max-width: 900px;
  height: 90vh;
  position: relative;
  margin: auto;
}
.chat-container {
  height: 100%;
  overflow-y: scroll;
  overflow-x: hidden;
}
.chat-container::-webkit-scrollbar {
  /* display: none; */
  width: 5px;
  background: var(--sec-color);
}
.chat-container::-webkit-scrollbar-track {
  background: var(--sec-color);
}
.chat-container::-webkit-scrollbar-thumb {
  background: var(--primary-color);
}
.chat {
  padding: 50px 20px;
}
.chat-header,
.chat-footer {
  position: absolute;
  width: 100%;
  left: 0;
  z-index: 5;
}
.chat-header {
  top: 0;
  padding: 5px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.chat-msg {
  margin-top: 15px;
  margin-bottom: 15px;
  margin-right: 10px;
}
.current-user {
  margin-right: 0px;
  margin-left: 10px;
  text-align: right;
}
.message-inner {
  display: flex;
  align-items: flex-start;
  width: 100%;
}
.current-user .message-inner {
  align-items: flex-start;
  flex-direction: row-reverse;
}
.msg-bubble {
  background: var(--sec-color);
  color: var(--light-color);
  padding: 25px 20px;
  border-radius: 10px;
  display: inline-block;
}
.username {
  font-size: 14px;
}
.content {
  font-size: 18px;
}
.first-letter {
  background: linear-gradient(
    to right,
    var(--primary-color) 0%,
    var(--sec-color) 100%
  );
  color: var(--light-color);
  /* padding: 25px 20px; */
  border-radius: 50%;
  width: 40px;
  height: 40px;
  font-size: 24px;
  /* font-weight: 700; */
  display: flex;
  align-items: center;
  justify-content: center;
}
.box-arrow {
  padding: 5px 8px;
  position: relative;
}
.arrow {
  width: 0;
  height: 0;
  border-top: 10px solid transparent;
  border-bottom: 10px solid transparent;
  border-left: 15px solid transparent;
  border-right: 15px solid var(--sec-color);
  position: absolute;
  top: 10px;
  right: 0px;
}
.current-user .msg-bubble {
  background: var(--primary-color);
}
.current-user .arrow {
  border-right: 15px solid transparent;
  border-left: 15px solid var(--primary-color);
  left: 0px;
}
.chat-footer {
  bottom: 0;
  padding: 5px 20px;
}
.chat-input-box {
  display: flex;
  align-items: center;
}
.chat-message,
.send {
  border: 1px solid;
  border-color: var(--primary-color) var(--sec-color) var(--sec-color)
    var(--primary-color);
  padding: 10px 15px;
  font-size: 18px;
}
.chat-message {
  width: 100%;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
}
.send {
  margin-bottom: 0px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}
</style>

