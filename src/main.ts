import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import axios, {AxiosStatic} from 'axios'
import 'vue-awesome/icons'
import Icon from 'vue-awesome/components/Icon.vue'
Vue.component('v-icon', Icon)

Vue.prototype.$axios = axios

declare module 'vue/types/vue' {
    interface Vue {
        $axios: AxiosStatic;
    }
}

Vue.use(ElementUI)
Vue.config.productionTip = false

router.beforeEach((to, from, next) => {
    /* 路由发生变化修改页面title */
    if (to.meta.title) {
        document.title = to.meta.title
    }
    next()
})

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
