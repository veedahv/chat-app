<template>
  <div class="home">
    <div class="chat-view chat">
    <div class="chat-container">
      <div class="chat-box">
        <header class="header">
          <h1 class="chat-intro">{{ groupInfo.groupName }}</h1>
          <!-- <button class="logout" @click="logout">Logout</button> -->
      <!-- <router-link :to="{name: 'Home'}">Home</router-link>  -->
        </header>
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
              <span class="msg-bubble">
                <div class="username">{{ message.username }} <span class="host" v-if="message.username === groupInfo.hostname">(Host)</span></div>
                <div class="content">{{ message.content }}</div>
                <div class="date-time">{{ message.dateTime }}</div>
              </span>
            </div>
          </div>
        </section>
        <footer class="footer">
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
        </footer>
      </div>
    </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorl from '@/components/HelloWorld.vue'
import db from "@/db.js";

export default {
  name: "Chat",
  props: ["group"],
  // components: {
  //   HelloWorld
  // }
  data() {
    return {
      groupInfo: JSON.parse(this.group),
      groupMessages: [],
      inputMessage: "",
      groupKey: "",
      groupsArray: [],
    };
  },
  methods: {
    sendMessage() {
      // const messagesRef = db.database().ref("messages");
      // const messagesRefObj = db.database().ref("messages/" + this.groupKey);
      const messagesRefObj = db
        .database()
        .ref("messages/" + this.groupKey + "/groupMessages");
      if (this.inputMessage === "" || this.inputMessage === null) {
        return;
      }
      let today = new Date();
      let date = today.getDate()  + '/' + (today.getMonth() + 1) + '/' +today.getFullYear();
      let time = today.getHours() + ':' + today.getMinutes();
      let dateTime = time + ' || ' + date;
      const message = {
        username: this.groupInfo.username,
        content: this.inputMessage,
        dateTime: dateTime,
      };

      this.groupMessages.push(message);
      messagesRefObj.push(message);
      console.log(messagesRefObj);

      // messagesRef.on("value", (snapshot) => {
      // const data = snapshot.val();
      // let groupsArr = [];
      // console.log(data[this.groupKey].groupMessages);

      // data[this.groupKey].groupMessages.push(message);

      // console.log(data[this.groupKey].groupMessages);
      // messagesRef.update(data[this.groupKey].groupMessages);
      // });

      // messagesRef.push(message);
      this.inputMessage = "";
    },
  },
  mounted() {
    console.log(this.group);
    console.log(this.groupInfo);
      this.groupInfo.groupMessages = JSON.parse(this.groupInfo.groupMessages);
      this.groupMessages = Object.values(this.groupInfo.groupMessages);
    console.log(this.groupInfo.groupMessages);
    console.log(this.groupMessages);

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
          // username: data[key].username,
          // content: data[key].content,
        });
      });

      this.groupsArray = groupsArr;
      console.log(this.groupsArray);

      this.groupsArray.forEach((item) => {
        if (item.groupId === this.groupInfo.groupId) {
          console.log(item.id);
          this.groupKey = item.id;
          console.log(this.groupKey);
        }
      });
      // state.messages = messages;
    });
  },
};
</script>



<style scoped>
.chat-view {
  width: 100vw;
  height: 95vh;
  position: relative;
}
.chat-container {
  height: 100%;
  overflow-y: scroll;
}
.chat {
  padding: 50px 20px;
}
.header,
.footer {
  position: absolute;
  width: 100%;
  left: 0;
  z-index: 5;
}
.header {
  top: 0;
}
.chat-msg {
  margin-top: 15px;
  margin-right: 10px;
}
.current-user {
  margin-right: 0px;
  margin-left: 10px;
  text-align: right;
}
.msg-bubble {
  background: var(--sec-color);
  color: var(--light-color);
  padding: 25px 20px;
  border-radius: 10px;
  display: inline-block;
}
.current-user .msg-bubble {
  background: var(--primary-color);
}
.footer {
  bottom: 0;
  padding: 5px 20px;
}
.chat-input-box {
  display: flex;
  align-items: center;
}
.chat-message {
  width: 100%;
  padding: 10px 15px;
  border-top-left-radius: 15px;
  border-bottom-left-radius: 15px;
  font-size: 18px;
  border: 1px solid;
  border-color: var(--primary-color) var(--sec-color) var(--sec-color) var(--primary-color);
}
.send {
  border: 1px solid;
  border-color: var(--primary-color) var(--sec-color) var(--sec-color) var(--primary-color);
  padding: 10px 15px;
  margin-bottom: 0px;
  font-size: 18px;
  border-top-left-radius: 0px;
  border-bottom-left-radius: 0px;
}
</style>

