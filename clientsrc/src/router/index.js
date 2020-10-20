import Vue from 'vue'
import Router from 'vue-router'
// @ts-ignore
import CharacterGen from '../views/CharacterGen.vue'
// @ts-ignore
import Cultures from '../views/Cultures.vue'
// @ts-ignore
import { authGuard } from "@bcwdev/auth0-vue"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'charactergen',
      component: CharacterGen,
    },
    {
      path: '/cultures',
      name: 'cultures',
      component: Cultures,
    },
    // {
    //   path: '/mycharacters',
    //   name: 'mycharacters',
    //   component: MyCharacters,
    //   beforeEnter: authGuard
    // },
    // {
    //   path: '/species',
    //   name: 'species',
    //   component: Species,
    //   beforeEnter: authGuard
    // },
    // {
    //   path: '/languages',
    //   name: 'languages',
    //   component: Languages,
    //   beforeEnter: authGuard
    // },
    // {
    //   path: '/religions',
    //   name: 'relgions',
    //   component: Religions,
    //   beforeEnter: authGuard
    // },
    // {
    //   path: '/sliders',
    //   name: 'sliders',
    //   component: Sliders,
    //   beforeEnter: authGuard
    // },
    {
      path: "*",
      redirect: '/'
    }
  ]
})