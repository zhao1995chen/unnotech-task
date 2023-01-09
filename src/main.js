import { createApp } from 'vue'
import 'virtual:windi.css'
import 'virtual:svg-icons-register'
import App from './App.vue'
import store from './store'
import router from './router'

createApp(App).use(store).use(router).mount('#app')
