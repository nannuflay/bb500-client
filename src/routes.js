import Home from './views/Home.vue'
import Profile from './views/Profile.vue'
import ArtistProfile from './views/ArtistProfile.vue'
import NotFound from './views/NotFound.vue'
import Register from './views/Register.vue'
import Login from './views/Login.vue'
import Logout from './views/Logout.vue'


/** @type {import('vue-router').RouterOptions['routes']} */
export const routes = [
  { name: 'Home', path: '/', component: Home, meta: { title: 'Home' } },
  {
    name: 'ProfileSettings',
    path: '/my-profile',
    meta: { title: 'Profile' },
    component: Profile,
  },
  {
    name: 'ArtistProfile',
    path: '/profile/:id',
    meta: { title: 'Artist Profile' },
    component: ArtistProfile,
  },
  {
    path: '/register',
    meta: { title: 'Register' },
    component: Register,
  },
  {
    name: 'Login',
    path: '/login',
    meta: { title: 'Login' },
    component: Login,
  },
  {
    name: 'Logout',
    path: '/logout',
    meta: { title: 'Logout' },
    component: Logout,
  },
  { path: '/:path(.*)', component: NotFound },
]
