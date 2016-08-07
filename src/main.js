import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routeMap from './routes'
import { sync } from 'vuex-router-sync'
import store from './vuex/store.js'

Vue.use(VueRouter)

const router = new VueRouter({
  saveScrollPosition: true,
  suppressTransitionError: true
})

sync(store, router)
routeMap(router)

router.start(App, 'app')
