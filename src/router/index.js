import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import service from '../views/service.vue'
import formpatient from '../views/formpatient.vue'
import formcrew from '../views/formcrew.vue'
import formadimin from '../views/formadimin.vue'
import registerpa from '../views/registerpa.vue'
import registerhos from '../views/registerhos.vue'
import registeradmi from '../views/registeradmi.vue'
import loginadmi from '../views/loginadmi.vue'
import loginhos from '../views/loginhos.vue'
import loginpa from '../views/loginpa.vue'
import profileadmi from '../views/profileadmi.vue'
import profilehos from '../views/profilehos.vue'
import profilepa from '../views/profilepa.vue'
import medication from '../views/medication.vue'
import store from '../store'
import internamento from '../views/internamento.vue'
import recrutar from '../views/recrutar.vue'
import formulario from '../views/formulario.vue'
import showMedication from '../views/showMedication.vue'
import showinternment from '../views/showinternment.vue'
import PageNotFound from '../views/PageNotFound.vue'
import deletehos from '../views/deletehos.vue'
import updateHos from '../views/updateHos.vue'
Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/deletehos',
    component: deletehos
  },
  {
    path: '/updateHos',
    component: updateHos
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
    path: '/registerpa',
    component: registerpa
  },
  {
    path: '/registerhos',
    component: registerhos
  },
  {
    path: '/registeradmi',
    component: registeradmi
  },
  {
    path: '/loginpa',
    component: loginpa
  },
  {
    path: '/loginhos',
    component: loginhos
  },
  {
    path: '/loginadmi',
    component: loginadmi
  },
  {
    path: '/showMedication',
    component: showMedication
  },
  {
    path: '/showinternment',
    component: showinternment
  },
  {
    path: '/medication',
    component: medication,
    beforeEnter: (to, from, next) => {
      if ((store.state.user.length == 0)) {
        console.log('user', store.state.user)
        next('/profilehos')
      } else {
        console.log('tem login')
        next()
      }
    }
  },
  {
    path: '/internamento',
    component: internamento,
    beforeEnter: (to, from, next) => {
      if ((store.state.user.length == 0)) {
        console.log('user', store.state.user)
        next('/profilehos')
      } else {
        console.log('tem login')
        next()
      }
    }
  },
  {
    path: '/profileadmi',
    component: profileadmi,
    beforeEnter: (to, from, next) => {
      if ((store.state.user.length == 0)) {
        console.log('user', store.state.user)
        next('/formadimin')
      } else {
        console.log('tem login')
        next()
      }
    }
  },
  {
    path: '/profilehos',
    component: profilehos,
    beforeEnter: (to, from, next) => {
      if ((store.state.user.length == 0)) {
        console.log('user', store.state.user)
        next('/formcrew')
      } else {
        console.log('tem login')
        next()
      }
    }
  },
  {
    path: '/profilepa',
    component: profilepa,
    beforeEnter: (to, from, next) => {
      if ((store.state.user.length == 0)) {
        console.log('user', store.state.user)
        next('/formpatient')
      } else {
        console.log('tem login')
        next()
      }
    }
  },
  {
    path: '/recrutar',
    component: recrutar,
    beforeEnter: (to, from, next) => {
      if ((store.state.user.length == 0)) {
        console.log('user', store.state.user)
        next('/formadimin')
      } else {
        console.log('tem login')
        next()
      }
    }
  },
  {
    path: '/formulario',
    component: formulario,
    beforeEnter: (to, from, next) => {
      if ((store.state.user.length == 0)) {
        console.log('user', store.state.user)
        next('/formadimin')
      } else {
        console.log('tem login')
        next()
      }
    }
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

  },
  { path: "*", component: PageNotFound }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
