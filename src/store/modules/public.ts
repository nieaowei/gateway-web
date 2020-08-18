import Vuex from 'vuex'
import {AdminInfoOutput} from "@/repositories/repo";
let modulePublic

export default modulePublic  = {
  namespaced: true,
  state: {
    loading: true,
    adminInfo: new AdminInfoOutput()
  },
  getters: {},
  mutations: {
    setAdminInfo(state: any,adminInfo: AdminInfoOutput){
      state.adminInfo = adminInfo
    }
  },
  actions: {}
}
