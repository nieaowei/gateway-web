<template>
  <el-row>
    <el-col id="sidebar" :xs="HomeSideBar.size.xs" :sm="HomeSideBar.size.sm" :md="HomeSideBar.size.md"
            :lg="HomeSideBar.size.lg" :xl="HomeSideBar.size.xl">
      <div class="home-sidebar">
        <div class="home-sidebar-logo">
          <el-link :underline="false" href="/home">
            <el-avatar shape="square"
                       src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
          </el-link>
          <el-link class="home-sidebar-logo-text" v-show="HomeSideBar.logo.text.show" :underline="false" href="/home">
            <span>API网关</span>
          </el-link>
        </div>
        <el-menu :collapse="HomeSideBar.nav.show" class="home-sidebar-nav" :default-active="HomeSideBar.defaultRouter"
                 background-color="#1762ab"
                 text-color="#ffffff" router>
          <el-menu-item :index="HomeSideBar.menuRoutes.dashboard.name" :route="HomeSideBar.menuRoutes.dashboard">
            <v-icon name="chart-bar"/>
            <span slot="title">仪表盘</span>
          </el-menu-item>
          <el-menu-item :index="HomeSideBar.menuRoutes.serviceManagement.name"
                        :route="HomeSideBar.menuRoutes.serviceManagement">
            <v-icon name="server"/>
            <span slot="title">服务管理</span>
          </el-menu-item>
          <el-menu-item :index="HomeSideBar.menuRoutes.tenant.name" :route="HomeSideBar.menuRoutes.tenant">
            <v-icon name="users"/>
            <span slot="title">租户管理</span>
          </el-menu-item>
        </el-menu>
      </div>
    </el-col>
    <el-col :xs="Main.size.xs" :sm="Main.size.sm" :md="Main.size.md" :lg="Main.size.lg" :xl="Main.size.xl">
      <div id="home">
        <div class="home-header" id="home-header">
          <div class="home-header-left">
            <div class="header-icon">
              <el-button class="header-icon-bt" v-on:click="toggleSideBar">
                <v-icon :name="HomeSideBar.nav.icon"/>
              </el-button>
            </div>
            <el-breadcrumb separator-class="el-icon-caret-right">
              <el-breadcrumb-item>首页</el-breadcrumb-item>
              <el-breadcrumb-item>活动管理</el-breadcrumb-item>
            </el-breadcrumb>
          </div>
          <div class="home-header-right">
            <el-dropdown @command="handleCommand">
              <el-button class="avatar-button" circle>
                <el-avatar class="header-avatar" size="medium"
                           :src="this.$store.state.public.adminInfo.avatar"></el-avatar>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="profile">
                  <v-icon name="id-card"/>
                  个人信息
                </el-dropdown-item>
                <el-dropdown-item command="changepd">
                  <v-icon name="edit"></v-icon>
                  修改密码
                </el-dropdown-item>
                <el-dropdown-item command="exit">
                  <v-icon name="sign-out-alt"></v-icon>
                  退出
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown @command="handleCommand">
              <el-button class="avatar-button" icon="el-icon-caret-bottom" circle>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item command="profile">
                  <v-icon name="id-card"/>
                  个人信息
                </el-dropdown-item>
                <el-dropdown-item command="changepd">
                  <v-icon name="edit"></v-icon>
                  修改密码
                </el-dropdown-item>
                <el-dropdown-item command="exit">
                  <v-icon name="sign-out-alt"></v-icon>
                  退出
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
        <transition name="slide-fade" mode="out-in">
          <router-view></router-view>
        </transition>
      </div>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import Vue from 'vue'
import login from '@/mixins/login'
import Service from '@/components/service/Service.vue'
import ApiExec, {AdminLogoutInput} from '@/repositories/repo'
import {DashboardRouter, HomeRouter, LoginRouter, RootRouter, ServiceRouter, TenantRouter} from '@/router'
import {ColSize} from '@/mixins/model'

const InitSideBarSize = {xs: 7, sm: 6, md: 5, lg: 3, xl: 3} as ColSize

const InitMainSize = {xs: 17, sm: 18, md: 19, lg: 21, xl: 21} as ColSize

const InSideBarSize = {xs: 3, sm: 2, md: 2, lg: 1, xl: 1} as ColSize

const InMainSize = {xs: 21, sm: 22, md: 22, lg: 23, xl: 23} as ColSize

export default Vue.extend({
  name: 'Home',
  components: {},
  mixins: [login],
  data() {
    return {
      isCollapse: false,
      HomeSideBar: {
        defaultRouter: DashboardRouter.name,
        menuRoutes: {
          dashboard: DashboardRouter,
          serviceManagement: ServiceRouter,
          tenant: TenantRouter
        },
        logo: {
          text: {
            show: true
          }
        },
        nav: {
          show: false,
          icon: 'outdent'
        },
        formerSize: InitSideBarSize,
        size: InitSideBarSize
      },
      Main: {
        currentComponent: Service,
        formerSize: InitMainSize,
        size: InitMainSize
      }
    }
  },
  created() {
    // router and mune
    if (this.$router.currentRoute.name !== null && this.$router.currentRoute.name !== HomeRouter.name) {
      this.HomeSideBar.defaultRouter = this.$router.currentRoute.name
    }
  },
  methods: {
    toggleSideBar(): void {
      this.HomeSideBar.nav.show = !this.HomeSideBar.nav.show
      this.HomeSideBar.logo.text.show = !this.HomeSideBar.logo.text.show
      if (this.HomeSideBar.nav.show) {
        this.HomeSideBar.size = InSideBarSize
        this.Main.size = InMainSize
        this.HomeSideBar.nav.icon = 'indent'
      } else {
        this.HomeSideBar.size = this.HomeSideBar.formerSize
        this.Main.size = this.Main.formerSize
        this.HomeSideBar.nav.icon = 'outdent'
      }
    },
    handleCommand(cmd: string) {
      switch (cmd) {
        case 'exit': {
          ApiExec<string>(this.$axios,new AdminLogoutInput()).then(
              value => {
                this.$message({type: 'success', message: '退出成功'})
                this.$router.push(LoginRouter)
              }
          ).catch(
              reason => {
                this.$message.error('退出失败')
              }
          )
        }
      }
    }
  }
})
</script>

<style lang="stylus">

.home-header
  width 100%
  border-bottom #98ceff 1px solid
  //box-shadow 0 20px 20px -20px black
  display flex
  flex-direction row
  align-items center
  justify-content flex-start

.home-header-left
  width 95%
  display flex
  flex-direction row
  align-items center
  justify-content flex-start

.home-header-right
  display flex
  flex-direction row
  align-items flex-end
  justify-content flex-start

.header-icon
  padding 20px

.header-icon-bt
  border 0 !important
  padding 0 !important

.avatar-button
  border 0 !important
  padding 0 !important

.header-avatar
  border gray 1px solid

.home-sidebar
  background-color #1762ab
  min-width 64px
  height 100%

.home-sidebar-logo
  display flex
  flex-direction row
  justify-content center
  align-items center
  padding-top 8%
  color aliceblue

.home-sidebar-logo-text
  color aliceblue !important
  margin-left 4%
  font-size 18px !important

.home-sidebar-nav
  border 0 !important

.body
  display flex
  flex-direction column

.el-col
  padding 0 !important
  height 100%

.el-row
  margin 0 !important
  height 100%

#home
  display flex
  flex-direction column
  justify-content flex-start
  height 100%


</style>
