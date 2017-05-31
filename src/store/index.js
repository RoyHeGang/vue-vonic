import Vue from 'vue'
import Vuex from 'Vuex'
import login from './modules/login'
import fav from './modules/fav'
import video from './modules/video'

import * as types from './types'

// 判断一下再加载，开发时会加载，发布不能再调用这个来加载，因为Store会让Vuex自动注册
if (!(typeof window !== 'undefined' && window.Vue)) {
  Vue.use(Vuex);
}

const state = {
  // 支持三种主题样式 ios/android/weixin
  theme: 'ios',
  themeList: ['ios', 'android', 'weixin']
}

const getters = {
  [types.G_APP_THEME_INDEX](state) {
    return state.themeList.indexOf(state.theme);
  }
}

const mutations = {
  [types.M_APP_SET_THEME](state, payload) {
    state.theme = state.themeList[payload];
  }
}

export default new Vuex.Store({
  state,
  mutations,
  getters,
  modules: {
    login, fav, video
  }
})