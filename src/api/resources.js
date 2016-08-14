import Vue from 'vue'
import VueResource from 'vue-resource'

const API_ROOT = '/api/'

Vue.use(VueResource)
Vue.http.options.emulateJSON = true

// HTTP相关
Vue.http.options.crossOrigin = true
Vue.http.options.xhr = {
  withCredentials: true
}

Vue.http.interceptors.push({
  request (request) {
    // 这里对请求体进行处理
    request.headers = request.headers || {}
    return request
  },
  response (response) {
    // 这里可以对响应的结果进行处理
    if (response.status === 404) {
      window.router.go('error')
    }
    return response
  }
})

export const UserResource = Vue.resource(API_ROOT + 'users{/id}')
export const AuthResource = Vue.resource(API_ROOT + 'login')
export const GetUserResource = Vue.resource(API_ROOT + 'user')
export const LogoutResource = Vue.resource(API_ROOT + 'logout')
export const RegisterResource = Vue.resource(API_ROOT + 'register')
export const TodosResource = Vue.resource(API_ROOT + 'todos')
export const SaveResource = Vue.resource(API_ROOT + 'save')
export const GetAnchorRank = Vue.resource(API_ROOT + 'get_rank_of_anchor')
export const GetFansRank = Vue.resource(API_ROOT + 'get_rank_of_fans')

