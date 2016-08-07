import { GET_ANCHOR_RANK_SUCCESS, GET_ANCHOR_RANK_FAILURE } from 'store/constants'

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
  [GET_ANCHOR_RANK_FAILURE] (state, action) {
    state.errorMsg = action.errorMsg
    state.error = true
  }
}

export default {
  state,
  mutations
}
