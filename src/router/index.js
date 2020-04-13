import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Xigua from '../views/Xigua.vue'
import Hot from '../views/Hot.vue'
import Movie from '../views/Movie.vue'
import User from '../views/User.vue'
import Search from '../views/Search.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      redirect:'/home'
    },
  {
    path: '/home',
    name: 'Home',
    component: Home
  },
  {
    path: '/xigua',
    name: 'Xigua',
    component: Xigua
  },
  {
    path: '/hot',
    name: 'Hot',
    component: Hot
  },
  {
    path: '/movie',
    name: 'Movie',
    component: Movie
  },
  {
    path: '/user',
    name: 'User',
    component: User
  },
  {
    path: '/search',
    name: 'Search',
    component: Search
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
