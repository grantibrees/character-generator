import Vue from 'vue'
import Router from 'vue-router'
import Home from '../views/Home.vue'
import Boards from '../views/Boards.vue'
import Board from '../views/Board.vue'
import { authGuard } from "@bcwdev/auth0-vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/charactergen',
      name: 'charactergen',
      component: CharacterGen,
    },
    {
      path: '/mycharacters',
      name: 'mycharacters',
      component: MyCharacters,
      beforeEnter: authGuard
    },
    {
      path: '/cultures',
      name: 'cultures',
      component: Cultures,
    },
    {
      path: '/species',
      name: 'species',
      component: Species,
    },
    {
      path: '/languages',
      name: 'languages',
      component: Languages,
    },
    {
      path: '/religions',
      name: 'relgions',
      component: Religions,
    },
    {
      path: '/sliders',
      name: 'sliders',
      component: Sliders,
    },
    {
      path: "*",
      redirect: '/'
    }
  ]
})