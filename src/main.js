import Vue from 'vue'
import App from './App'
import VueRouter from 'vue-router'
import routeMap from './routes'

Vue.use(VueRouter)

const router = new VueRouter()

routeMap(router)

router.start(App, 'app')
