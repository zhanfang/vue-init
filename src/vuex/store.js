import Vue from 'vue'
import Vuex from 'vuex'
import middlewares from './middlewares'
import test from './modules/test'

Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    test
  },
  middlewares
})
