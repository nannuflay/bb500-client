import Home from './views/Home.vue'
import Profile from './views/Profile.vue'
import NotFound from './views/NotFound.vue'
import Register from './views/Register.vue'
import Login from './views/Login.vue'


/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { path: '/', component: Home, meta: { title: 'Home' } },
  {
    path: '/profile',
    meta: { title: 'Profile' },
    component: Profile,
  },
  {
    path: '/register',
    meta: { title: 'Register' },
    component: Register,
  },
  {
    path: '/login',
    meta: { title: 'Login' },
    component: Login,
  },
  { path: '/:path(.*)', component: NotFound },
]
