import { createRouter, createWebHistory } from 'vue-router'
import Home from '../components/homeComponent.vue'
import Login from '../components/loginComponent.vue'
import Register from '../components/registerComponent.vue'


const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', component: Home },
    { path: '/login', component: Login },
    { path: '/register', component: Register },
  ]
})

export default router
