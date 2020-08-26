<template>
  <el-container>
    <el-aside style="background-color: rgb(238, 241, 246);width: auto;">
      <el-menu :collapse="open">
        <template slot="title"><i class="el-icon-message"></i>导航一</template>
        <el-menu-item index="1-1">选项123456788</el-menu-item>
        <el-menu-item index="1-2">选项2</el-menu-item>
        <el-menu-item index="1-3">选项3</el-menu-item>
        <el-menu-item index="1-4-1">选项4</el-menu-item>
      </el-menu>
    </el-aside>

    <el-container>
      <el-header style="text-align: right; font-size: 12px">
        <!--        <el-button @click="open=!open">111</el-button>-->
        <div class="home-header" id="home-header">
          <div class="home-header-left">
            <div class="header-icon">
              <el-button class="header-icon-bt" v-on:click="open=!open">
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
      </el-header>

      <el-main>
        <Service></Service>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import Vue from 'vue'
import {DashboardRouter, ServiceRouter, TenantRouter} from "@/router";
import Service from "@/components/service/Service.vue";


export default Vue.extend({
  name: "Test",
  components: {Service},
  data() {
    return {
      open: false,
      obj: {
        b: 1,
        a: 0
      },
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
      },
    }
  },
  mounted() {
    setInterval(() => {
    }, 500)
  },
  computed: {
    a: function (): number {
      return this.obj.a
    }
  },
  watch: {
    a: {
      handler: function (val, oldVal) {
        console.log(val)
        console.log(oldVal)
      }
    }
  },
  methods: {
    change(v: number) {
      this.obj.a = v
    }
  }
})
</script>

<style scoped lang="stylus">
.slide-fade-enter-active
  transition all 0.5s ease

.slide-fade-enter
  transform translateX(300px)
  opacity 0
</style>
