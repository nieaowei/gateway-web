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
              <el-avatar :size="200" class="login-avatar"
                         :src="LoginCard.avatar.src">
                <v-icon name="spinner" scale="1" :spin="LoginCard.avatar.spin"></v-icon>
              </el-avatar>
            </el-col>
            <el-col :span="10">
              <el-form @submit.native.prevent :model="loginForm" status-icon style="margin-top: 10%;">
                <el-form-item prop="username" :rules="[{required:true,message:'用户名不能为空',trigger: 'blur'}]">
                  <el-input class="unInput" type="username" v-model="loginForm.username" placeholder="请输入用户名"
                            prefix-icon="el-icon-user" v-on:blur="getAvatar"/>
                </el-form-item>
                <el-form-item class="pdInput" prop="password"
                              :rules="[{required:true,message:'密码不能为空',trigger: 'blur'}]">
                  <el-input v-on:keyup.enter.native="login" type="password" v-model="loginForm.password"
                            placeholder="请输入密码" prefix-icon="el-icon-lock"
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
import ApiExec, {AdminLoginInput, AdminLoginOutput, GetAvatarInput, GetAvatarOutput} from '@/repositories/repo'
import login from '@/mixins/login'
import {HomeRouter} from '@/router'

export default Vue.extend({
  name: 'Login',
  mixins: [login],
  components: {},
  data() {
    return {
      loginForm: new AdminLoginInput(),
      LoginCard: {
        avatar: {
          src: '',
          spin: false
        }
      }
    }
  },
  methods: {
    login(): void {
      this.$store.commit('setLoading', {enable: true, text: '正在登录中......'})
      ApiExec<AdminLoginOutput>(this.$axios,this.loginForm).then(
          value => {
            this.$message({message: '登录成功', type: 'success'})
            this.$router.push(HomeRouter)
          }
      ).catch(
          reason => {
            this.$message.error(reason)
          }
      ).finally(
          () => {
            this.$store.commit('setLoading', {enable: false, text: ''})
          }
      )
    },
    getAvatar(): void {
      this.LoginCard.avatar.spin = true
      ApiExec<GetAvatarOutput>(this.$axios, new GetAvatarInput(this.loginForm.username)).then(
          value => {
            this.LoginCard.avatar.src = value.avatar
          }
      ).catch(
          reason => {
            this.$message.error(reason)
          }
      ).finally(
          () => {
            this.LoginCard.avatar.spin = false
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

.login-avatar
  background-color #226bb5
</style>
