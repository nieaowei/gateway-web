import {AdminInfoOutput} from '@/repositories/repo'
import Vue from 'vue'
import {HomeRouter, LoginRouter} from '@/router'

export default Vue.extend({
    name: 'loginMixin',
    data() {
        return {}
    },
    created() {
        new AdminInfoOutput().Exec(this.$axios).then(
            value => {
                // not login
                if (value.data.errno !== 0) {
                    if (this.$router.currentRoute.path !== LoginRouter.path) {
                        this.$router.push(LoginRouter)
                        this.$message({message: '您尚未登录', type: 'warning'})
                    }
                    return
                }
                // logined
                if (this.$router.currentRoute.path === LoginRouter.path) {
                    this.$message({message: '您已经登录', type: 'success'})
                    this.$router.push(HomeRouter)
                }
            }
        ).catch(
            reason => {
                this.$message({message: '网络错误', type: 'error'})
            }
        )
    }
})
