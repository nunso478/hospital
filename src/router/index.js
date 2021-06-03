import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import service from '../views/service.vue'
import formpatient from '../views/formpatient.vue'
import formcrew from '../views/formcrew.vue'
import formadimin from '../views/formadimin.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/service',
    component: service
  },
  {
    path: '/formpatient',
    component: formpatient
  },
  {
    path: '/formcrew',
    component: formcrew
  },
  {
    path: '/formadimin',
    component: formadimin
  },
  {
    path: '/about',
    name: 'About',
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: function () {
      return import(/* webpackChunkName: "about" */ '../views/About.vue')
    }
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
