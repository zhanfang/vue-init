import Vue from 'vue'
import Vuex from 'vuex'
import logger from './middlewares/logger'
import rank from './modules/rank'

const debug = process.env.NODE_ENV !== 'production'
Vue.use(Vuex)
Vue.config.debug = debug
Vue.config.warnExpressionErrors = false

export default new Vuex.Store({
  modules: {
    rank
  },
  strict: debug,
  middlewares: [logger]
})
