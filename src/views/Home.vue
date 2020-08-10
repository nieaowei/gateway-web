<template>
  <el-row :gutter="10">
    <el-col  :xs="7" :sm="6" :md="5" :lg="3" :xl="3">
      <el-menu default-active="1" background-color="#124485" text-color="#ffffff">
        <el-menu-item index="1">
          <i class="el-icon-s-help"></i>
          <span slot="title">仪表盘</span>
        </el-menu-item>
        <el-menu-item index="2">
          <i class="el-icon-menu"></i>
          <span slot="title">服务管理</span>
        </el-menu-item>
        <el-menu-item index="3">
          <i class="el-icon-user-solid"></i>
          <span slot="title">租户管理</span>
        </el-menu-item>
      </el-menu>
    </el-col>
    <el-col :xs="17" :sm="18" :md="19" :lg="21" :xl="21">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>首页</el-breadcrumb-item>
        <el-breadcrumb-item>活动管理</el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </el-col>
  </el-row>
</template>

<script lang="ts">
import Vue from 'vue'
import login from '@/mixins/login'

interface Pong {
  message?: string;
}

export default Vue.extend({
  name: 'Home',
  components: {},
  mixins: [login],
  data () {
    return {
      isCollapse: false
    }
  },
  methods: {
    test (): void {
      console.log('123')
    }
  }
})
</script>

<style lang="stylus">
.el-main
  color #ffffff
</style>
