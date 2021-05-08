<template>
  <div class="home">
    
  </div>
</template>

<script>
// @ is an alias to /sr
// import HelloWorl from '@/components/HelloWorld.vue'
// import db from "@/db.js";

// import { reactive, onMounted, ref } from "vue";
// import { reactive, ref } from "vue";

export default {
  name: "Home",
  // setup() {
  //   const inputUsername = ref("");
  //   const inputMessage = ref("");
  //   const inputGroupId = ref("");

  //   const state = reactive({
  //     username: "",
  //     groupId: "",
  //     messages: [],
  //   });

  //   const login = () => {
  //     if (inputUsername.value !== "" || inputUsername.value !== null) {
  //       // alert("enter your username");
  //       state.username = inputUsername.value;
  //       inputUsername.value = "";
  //       const messagesRef = db.database().ref("messages");
  //       // if (inputMessage.value === "" || inputMessage.value === null) {
  //       //   return;
  //       // }
  //       const message = {
  //         username: state.username,
  //         groupId: state.groupId,
  //         // content: inputMessage.value,
  //         // };
  //       };
  //       messagesRef.push(message);
  //       // inputMessage.value = "";
  //     } else {
  //       alert("enter your username");
  //     }
  //   };

  //   // const logout = () => {
  //   //   state.username = "";
  //   // };

  //   // const sendMessage = () => {
  //   //   const messagesRef = db.database().ref("messages");
  //   //   if (inputMessage.value === "" || inputMessage.value === null) {
  //   //     return;
  //   //   }
  //   //   const message = {
  //   //     username: state.username,
  //   //     content: inputMessage.value,
  //   //   };

  //   //   messagesRef.push(message);
  //   //   inputMessage.value = "";
  //   // };

  //   const createGroupId = () => {
  //     let result = [];
  //     let characters =
  //       "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  //     let charactersLength = characters.length;
  //     for (var i = 0; i < 12; i++) {
  //       result.push(
  //         characters.charAt(Math.floor(Math.random() * charactersLength))
  //       );
  //     }
  //     return result.join("");
  //   };
  //   const generateGroupId = () => {
  //     inputGroupId.value = createGroupId();
  //   };

  //   // console.log(createGroupId());

  //   onMounted(() => {
  //     const messagesRef = db.database().ref("messages");
  //     console.log(createGroupId());

  //     messagesRef.on("value", (snapshot) => {
  //       const data = snapshot.val();
  //       let messages = [];

  //       Object.keys(data).forEach((key) => {
  //         messages.push({
  //           id: key,
  //           // groupId: data[key].groupId,
  //           // groupMsg: data[key].groupMsg,
  //           username: data[key].username,
  //           content: data[key].content,
  //         });
  //       });

  //       state.messages = messages;
  //     });
  //   });

  //   return {
  //     inputUsername,
  //     inputMessage,
  //     inputGroupId,
  //     generateGroupId,
  //     login,
  //     // logout,
  //     state,
  //     // sendMessage,
  //   };
  // },
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
