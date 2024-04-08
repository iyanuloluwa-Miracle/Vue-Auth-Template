import { createApp } from 'vue'
import App from './App.vue'
import router from '../src/router/router'

// Create the Vue app instance and pass the router object
createApp(App).use(router).mount('#app')
