import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import store from '@/store'

Vue.use(VueRouter)

const routes = [{
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/:country',
    name: 'Country',
    props: true,
    component: () => import( /* webpackChunkName: "about" */ '../views/CountryDetails.vue'),
    beforeEnter: (to, from, next) => {
      let exist = store.getters.countries.find(elem => elem.alpha3Code == to.params.country || elem.name === to.params.country);
      if (exist) {
        next()
      } else {
        next({
          name: 'NotFound'
        })
      }
    }
  },
  {
    path: '/404',
    alias: '*',
    name: 'NotFound',
    component: () => import( /* webpackChunkName: "404" */ '../views/NotFound.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router