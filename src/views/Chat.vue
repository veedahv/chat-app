<template>
  <div class="home">
    <div class="view chat">
      <div class="chat-box">
        <header class="header">
          <h1 class="chat-intro">{{ groupInfo.groupName }}</h1>
          <!-- <h1 class="chat-intro">Hiii {{ state.username }}</h1> -->
          <!-- <button class="logout" @click="logout">Logout</button> -->
        </header>
        <!-- <section class="chat-box">
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
        </section> -->
        <!-- <footer class="footer">
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
        </footer> -->
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorl from '@/components/HelloWorld.vue'

export default {
  name: 'Chat',
  props: ['group'],
  // components: {
  //   HelloWorld
  // }
  data() {
    return {
      groupInfo: JSON.parse(this.group)
    }
  },
  mounted() {
    console.log(this.group);
    console.log(this.groupInfo);
  },
}
</script>



<style scoped>

.view {
  width: 100vw;
  height: 100vh;
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

