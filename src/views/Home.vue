<template>
  <el-row>
    <el-col id="sidebar" :xs="HomeSideBar.size.xs" :sm="HomeSideBar.size.sm" :md="HomeSideBar.size.md" :lg="HomeSideBar.size.lg" :xl="HomeSideBar.size.xl">
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
        <el-menu :collapse="HomeSideBar.nav.show" class="home-sidebar-nav" default-active="1" background-color="#124485"
                 text-color="#ffffff">
          <el-menu-item index="1">
            <v-icon name="chart-bar" />
            <span slot="title">仪表盘</span>
          </el-menu-item>
          <el-menu-item index="2">
            <v-icon name="server" />
            <span slot="title">服务管理</span>
          </el-menu-item>
          <el-menu-item index="3">
            <v-icon name="users"/>
            <span slot="title">租户管理</span>
          </el-menu-item>
        </el-menu>
      </div>
    </el-col>
    <el-col :xs="Main.size.xs" :sm="Main.size.sm" :md="Main.size.md" :lg="Main.size.lg" :xl="Main.size.xl">
      <el-container>
        <div class="home-header">
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
            <el-dropdown>
              <el-button class="avatar-button" circle>
                <el-avatar class="header-avatar" size="medium"
                           src="https://cube.elemecdn.com/0/88/03b0d39583f48206768a7534e55bcpng.png"></el-avatar>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <v-icon name="id-card"/>个人信息
                </el-dropdown-item>
                <el-dropdown-item>
                  <v-icon name="edit"></v-icon>修改密码
                </el-dropdown-item>
                <el-dropdown-item>
                  <v-icon name="sign-out-alt"></v-icon>退出
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
            <el-dropdown>
              <el-button class="avatar-button" icon="el-icon-caret-bottom" circle>
              </el-button>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item>
                  <v-icon name="id-card"/>个人信息
                </el-dropdown-item>
                <el-dropdown-item>
                  <v-icon name="edit"></v-icon>修改密码
                </el-dropdown-item>
                <el-dropdown-item>
                  <v-icon name="sign-out-alt"></v-icon>退出
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
        <div class="body"></div>
      </el-container>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import Vue from 'vue'
import login from '@/mixins/login'

interface Pong {
  message?: string;
}

class Size {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

export default Vue.extend({
  name: 'Home',
  components: {},
  mixins: [login],
  data () {
    return {
      isCollapse: false,
      HomeSideBar: {
        logo: {
          text: {
            show: true
          }
        },
        nav: {
          show: false,
          icon: 'outdent'
        },
        formerSize: {
          xs: 7,
          sm: 6,
          md: 5,
          lg: 3,
          xl: 3
        } as Size,
        size: {
          xs: 7,
          sm: 6,
          md: 5,
          lg: 3,
          xl: 3
        } as Size
      },
      Main: {
        formerSize: {
          xs: 17,
          sm: 18,
          md: 19,
          lg: 21,
          xl: 21
        } as Size,
        size: {
          xs: 17,
          sm: 18,
          md: 19,
          lg: 21,
          xl: 21
        } as Size
      }
    }
  },
  methods: {
    test (): void {
      console.log('123')
    },
    toggleSideBar (): void {
      this.HomeSideBar.nav.show = !this.HomeSideBar.nav.show
      this.HomeSideBar.logo.text.show = !this.HomeSideBar.logo.text.show
      if (this.HomeSideBar.nav.show) {
        this.HomeSideBar.size = { xs: 3, sm: 2, md: 2, lg: 1, xl: 1 } as Size
        this.Main.size = { xs: 21, sm: 22, md: 22, lg: 23, xl: 23 } as Size
        this.HomeSideBar.nav.icon = 'indent'
      } else {
        this.HomeSideBar.size = this.HomeSideBar.formerSize
        this.Main.size = this.Main.formerSize
        this.HomeSideBar.nav.icon = 'outdent'
      }
    }
  }
})
</script>

<style lang="stylus">

.home-header
  width 100%
  border-bottom #98ceff 1px solid
  box-shadow 0 20px 20px -20px black
  display flex
  flex-direction row
  place-items center
  justify-items flex-start

.home-header-left
  width 95%
  display inline-flex
  flex-direction row
  align-items center
  justify-items flex-start

.home-header-right
  display inline-flex
  flex-direction row
  align-items flex-end
  justify-items flex-start

.header-icon
  padding 20px
.header-icon-bt
  border 0 !important
  padding  0 !important

.avatar-button
  border 0 !important
  padding 0 !important

.header-avatar
  border gray 1px solid

.home-sidebar
  background-color #124485
  min-width 64px

//height 2000px

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

.el-col
  padding 0 !important

.el-row
  margin 0 !important

</style>
