import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Xigua from '../views/Xigua.vue'
import Hot from '../views/Hot.vue'
import Movie from '../views/Movie.vue'
import User from '../views/User.vue'

import HomeRecommand from '../views/pages/Recommand.vue'
import UnknowPage from '../views/pages/UnknowPage.vue'

Vue.use(VueRouter)

  const routes = [
    {
      path: '/',
      redirect:'/home'
    },
  {
    path: '/home',
    name: 'Home',
    component: Home,
    children:[
      {
        path:'',
        component:HomeRecommand
      },
      {
        path:'recommand',
        component:HomeRecommand
      },
      {
        path:'unknow',
        component:UnknowPage
      }
    ]
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
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
