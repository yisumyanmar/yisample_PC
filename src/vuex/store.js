// state为状态数据，触发action，mutations会去改变state的值，getters对外提拱state的值。 ######修改main.js。（main.js为webpack打包入口文件）
import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex) // 要记得use一下哦

export default new Vuex.Store({
  state: {
    count: 1
  },
  mutations: {
    Count (state, platform) {
      state.count = platform
    }
  },
  actions: {
    setCount ({ commit }, platform) {
      commit('Count', platform)
    }
  },
  getters: {
    getCount: (state) => state.count
  }
})
