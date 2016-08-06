import {SHOW_TEST} from '../types'

const state = {
  test: ''
}

const mutations = {
  [SHOW_TEST] (state, action) {
    state.test = action.data
  }
}

export default {
  state,
  mutations
}
