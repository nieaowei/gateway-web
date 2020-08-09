import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios, { AxiosStatic } from 'axios'

Vue.prototype.$axios = axios

declare module 'vue/types/vue' {
  interface Vue {
    $axios: AxiosStatic;
  }
}

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App)
}).$mount('#app')
