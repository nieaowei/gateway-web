<template>
  <el-row :gutter="10" v-loading="this.$store.state.loading.enable"
          :element-loading-text="this.$store.state.loading.text">
    <el-col :xs="3" :sm="4" :md="6" :lg="7" :xl="8">
      <div class="blank"/>
    </el-col>
    <el-col :xs="18" :sm="16" :md="12" :lg="10" :xl="8">
      <el-card class="login-card" shadow="hover">
        <div slot="header" class="clearfix">
          <span>登录</span>
        </div>
        <div>
          <el-row type="flex">
            <el-col :span="14">
              <el-avatar :size="200"
                         src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
            </el-col>
            <el-col :span="10">
              <el-form :model="loginForm" status-icon style="margin-top: 10%;">
                <el-form-item prop="username" :rules="[{required:true,message:'用户名不能为空',trigger: 'blur'}]">
                  <el-input class="unInput" type="username" v-model="loginForm.username" placeholder="请输入用户名"
                            prefix-icon="el-icon-user"/>
                </el-form-item>
                <el-form-item class="pdInput" prop="password"
                              :rules="[{required:true,message:'密码不能为空',trigger: 'blur'}]">
                  <el-input type="password" v-model="loginForm.password" placeholder="请输入密码" prefix-icon="el-icon-lock"
                            show-password/>
                </el-form-item>
                <el-button type="primary" v-on:click="login" icon="el-icon-circle-check">登录</el-button>
              </el-form>
            </el-col>
          </el-row>
        </div>
      </el-card>

    </el-col>
    <el-col :xs="3" :sm="4" :md="6" :lg="7" :xl="8">
      <div class="grid-content bg-purple"></div>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import Vue from 'vue'
import { AdminLoginInput } from '@/repositories/repo'
import login from '@/mixins/login'

export default Vue.extend({
  name: 'Login',
  mixins: [login],
  components: {},
  data () {
    return {
      loginForm: new AdminLoginInput()
    }
  },
  methods: {
    login (): void {
      this.$store.commit('setLoading', { enable: true, text: '正在登录中......' })
      this.loginForm.Exec(this.$axios).then(
        value => {
          if (value.data.errno !== 0) {
            this.$message({ message: value.data.errmsg, type: 'error' })
            return
          }
          this.$message({ message: '登录成功', type: 'success' })
          this.$router.push('/about')
        }
      ).catch(
        reason => {
          this.$message({ message: reason, type: 'error' })
        }
      ).finally(
        () => {
          this.$store.commit('setLoading', { enable: false, text: '' })
        }
      )
    }
  }
})

</script>

<style scoped lang="stylus">
.blank
  min-height 1em
.login-card
  margin-top 20%
</style>
