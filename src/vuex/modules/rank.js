import { GET_ANCHOR_RANK_SUCCESS, GET_ANCHOR_RANK_FAILURE, GET_FANS_RANK_SUCCESS } from 'store/constants'

const state = {
  anchor: [],
  fans: [],
  error: false,
  errorMsg: ''
}

const mutations = {
  [GET_ANCHOR_RANK_SUCCESS] (state, action) {
    state.error = false
    state.anchor = action.anchor
  },
  [GET_FANS_RANK_SUCCESS] (state, action) {
    state.error = false
    state.anchor = action.fans
  },
  [GET_ANCHOR_RANK_FAILURE] (state, action) {
    state.errorMsg = action.errorMsg
    state.error = true
  }
}

export default {
  state,
  mutations
}
