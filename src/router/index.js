import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue';
import Login from '../views/Login.vue';
import CreateGroup from '../views/CreateGroup.vue';
import JoinGroup from '../views/JoinGroup.vue';
import Chat from '../views/Chat.vue';

const routes = [
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  // {
  //   path: '/hom',
  //   name: 'Home',
  //   component: Home
  // },
  {
    path: '/CreateGroup',
    name: 'CreateGroup',
    component: CreateGroup,
    props: true
  },
  {
    path: '/JoinGroup',
    name: 'JoinGroup',
    component: JoinGroup,
    props: true
  },
  // {
  //   path: '/',
  //   name: 'CreateGroup',
  //   component: CreateGroup,
  //   props: true
  // },
  {
    path: '/Chat',
    name: 'Chat',
    component: Chat,
    props: true
  },
  {
    path: '/a',
    redirect: { 
      name: 'Home' 
    }
  },
  // {
  //   path: '/Chat',
  //   redirect: { 
  //     name: 'Home' 
  //   }
  // },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router
