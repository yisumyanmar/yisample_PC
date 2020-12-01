import qs from 'qs'
import axios from 'axios'
import {
  Message
} from 'element-ui'

import VueRouter from 'vue-router'
const Router = new VueRouter({
  mode: 'history'
})
axios.defaults.withCredentials = true // 让ajax携带cookie
// 添加响应拦截器
axios.interceptors.response.use(response => {
  return response
}, error => {
  Message({
    message: '网络请求失败，请重试~',
    type: 'error',
    duration: 2000
  })
  console.log(error)
})

var HTTP = function (API_URL, params, requestType, checkLogin = true) {
  
  return new Promise(async (resolve, reject) => {
    if (requestType === 'post') {
      let res = await axios.post(API_URL, qs.stringify(params))

      if (res.data.status === 10001) {
        sessionStorage.removeItem('userName')
        sessionStorage.removeItem('userHeaderImg')
        sessionStorage.removeItem('token')
        // localStorage.removeItem('userName')
        // localStorage.removeItem('userHeaderImg')

        if (!checkLogin) {
          location.href = '/passwordLogin'
          return false
        } else {
          resolve(res)
        }
      } else if (res.data.status === 20010) {
        Message({
          message: `${res.data.message}`,
          type: 'error',
          duration: 2000
        })
        resolve(res)
      } else if (res.data.status === 1) {
        // console.log(res);
        resolve(res)
      } else {
        // Message.info(res.data.message)
        // return resolve(res)
        reject(res)
      }
    } else {
      axios({
        method: 'get',
        url: API_URL,
        params: params
      }).then((res) => {
        if (res.data.status === 10001) {
          if (!checkLogin) {
            Router.push('/passwordLogin')
            window.location.reload()
          } else {
            resolve(res)
          }
        } else if (res.data.status === 1) {
          resolve(res)
        } else {
          Message.info(res.data.message)
          reject(res)
        }
      })
    }
  })
}
export default HTTP
