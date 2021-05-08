<template>
  <div class="home">
    <div
      class="view login"
      v-if="state.username === '' || state.username === null"
    >
      <div class="login-box">
        <form class="login-form" @submit.prevent="login">
          <div class="form-main">
            <h1 class="login-intro">Hiii</h1>
            <label for="username" class="user-label">Your name</label>
            <input
              type="text"
              name="username"
              id="username"
              class="username"
              placeholder="Username"
              v-model="inputUsername"
            />
            <input type="submit" value="Login" />
          </div>
        </form>
      </div>
    </div>
    <div class="view chat" v-else>
      <div class="chat-box">
        <header class="header">
          <h1 class="chat-intro">Hiii {{ state.username }}</h1>
          <button class="logout" @click="logout">Logout</button>
        </header>
        <section class="chat-box">
          <div
            class="chat-msg"
            v-for="message in state.messages"
            :key="message.key"
            :class="
              message.username === state.username
                ? 'message current-user'
                : 'message'
            "
          >
            <div class="message-inner">
              <div class="username">{{ message.username }}</div>
              <div class="content">{{ message.content }}</div>
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
              <input type="submit" class="send" value="Send" />
            </div>
          </form>
        </footer>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /sr
// import HelloWorl from '@/components/HelloWorld.vue'
import db from "@/db.js";

import { reactive, onMounted, ref } from "vue";
// import { reactive, ref } from "vue";

export default {
  name: "Login",
  // methods: {
  //   createGroupId(){
  //     let result = [];
  //     let characters =
  //       "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  //     let charactersLength = characters.length;
  //     for (var i = 0; i < 10; i++) {
  //       result.push(
  //         characters.charAt(Math.floor(Math.random() * charactersLength))
  //       );
  //     }
  //     return result.join("");
  //   }
  // },
  setup() {
    const inputUsername = ref("");
    const inputMessage = ref("");

    const state = reactive({
      username: "",
      messages: [],
    });

    const login = () => {
      if (inputUsername.value !== "" || inputUsername.value !== null) {
        // alert("enter your username");
        state.username = inputUsername.value;
        inputUsername.value = "";
      } else {
        alert("enter your username");
      }
    };

    const logout = () => {
      state.username = "";
    };

    const sendMessage = () => {
      const messagesRef = db.database().ref("messages");
      if (inputMessage.value === "" || inputMessage.value === null) {
        return;
      }
      const message = {
        username: state.username,
        content: inputMessage.value,
      };

      messagesRef.push(message);
      inputMessage.value = "";
    };

    const createGroupId = () => {
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
    };

    // console.log(createGroupId());

    onMounted(() => {
      const messagesRef = db.database().ref("messages");
      console.log(createGroupId());

      messagesRef.on("value", (snapshot) => {
        const data = snapshot.val();
        let messages = [];

        Object.keys(data).forEach((key) => {
          messages.push({
            id: key,
            groupId: data[key].groupId,
            groupMsg: data[key].groupMsg,
            // username: data[key].username,
            // content: data[key].content,
          });
        });

        state.messages = messages;
      });
    });

    return {
      inputUsername,
      inputMessage,
      login,
      logout,
      state,
      sendMessage,
    };
  },
};
</script>

<style scoped>
.view {
  width: 100vw;
  height: 100vh;
}
.login {
  display: flex;
  align-items: center;
}
.chat {
  padding: 50px 20px;
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
.current-user {
  text-align: right;
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
}
.send {
  padding: 10px 15px;
}
</style>
