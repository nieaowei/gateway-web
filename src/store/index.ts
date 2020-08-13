import Vue from 'vue'
import Vuex from 'vuex'
import modulePublic from './modules/public'
import moduleProfile from './modules/profile'
import { DashboardRouter } from '@/router'

Vue.use(Vuex)

interface Loading {
  enable?: boolean;
  text?: string;
}

interface RootState {
  loading: Loading;
}

export default new Vuex.Store({
  state: {
    loading: {
      enable: false,
      text: '加载中'
    },
    menu: {
      defaultIndex: DashboardRouter.path
    }
  },
  mutations: {
    setLoading (state, { enable, text }) {
      state.loading.enable = enable
      state.loading.text = text
    },
    setMenuDefaultIndex (state, index) {
      state.menu.defaultIndex = index
    }
  },
  actions: {},
  modules: {
    public: modulePublic,
    profile: moduleProfile
  }
})
