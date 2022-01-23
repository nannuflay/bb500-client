import { createApp } from 'vue'
import './tailwind.css'
import App from './App.vue'
import { routes } from './routes.js'
import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios';

const instance = axios.create({
  baseURL: 'http://localhost:3669',
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
})

const app = createApp(App)

const router = createRouter({
  history: createWebHistory(),
  routes,
})

app.config.globalProperties.axios = instance;

app.use(router)
app.mount('#app')
