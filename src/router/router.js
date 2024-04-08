import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/homeComponent.vue'
import Login from '../components/loginComponent.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
  ]
})

export default router
