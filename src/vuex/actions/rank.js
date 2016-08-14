import { GET_ANCHOR_RANK_FAILURE, GET_ANCHOR_RANK_SUCCESS, GET_FANS_RANK_SUCCESS } from 'store/constants/'
import api from 'api/'

export const getAnchorRank = ({dispatch}, params) => {
  api.getAnchorRank(params).then(res => {
    const data = JSON.parse(res.data)
    if (data.retcode === 0) {
      return dispatch(GET_ANCHOR_RANK_SUCCESS, data.result)
    } else {
      return dispatch(GET_ANCHOR_RANK_FAILURE, {errorMsg: data.retcode})
    }
  })
}

export const getFansRank = ({dispatch}, params) => {
  api.getFansRank(params).then(res => {
    const data = JSON.parse(res.data)
    if (data.retcode === 0) {
      return dispatch(GET_FANS_RANK_SUCCESS, data.result)
    } else {
      return dispatch(GET_ANCHOR_RANK_FAILURE, {errorMsg: data.retcode})
    }
  })
}
