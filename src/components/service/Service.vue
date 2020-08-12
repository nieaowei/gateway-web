<template>
  <NavBody>
    <template v-slot:header>
      <el-input class="body-header-input" size="small" v-model="Header.input"></el-input>
      <el-button type="primary" size="small" v-on:click="SearchService(Header.input)">
        <v-icon name="search"/>
        搜索
      </el-button>
      <el-button type="primary" size="small" v-on:click="addHttp">
        <v-icon name="plus-circle"/>
        添加HTTP服务
      </el-button>
      <el-button type="primary" size="small" v-on:click="addGrpc">
        <v-icon name="plus-circle"/>
        添加GRPC服务
      </el-button>
      <el-button type="primary" size="small" v-on:click="addTcp">
        <v-icon name="plus-circle"/>
        添加TCP服务
      </el-button>
    </template>
    <template v-slot:content>
      <BodyTab :body-tab-item="Content.editableTabs" :remove-tab="removeTab"></BodyTab>
    </template>
  </NavBody>
</template>

<script lang="ts">
import Vue, { Component } from 'vue'
import NavBody from '@/components/NavBody.vue'
import BodyTab from '@/components/BodyTab.vue'
import HttpPane from '@/components/service/HttpPane.vue'
import { EditTabItem, BodyTabItem } from '@/mixins/model'
import ServiceListPane from '@/components/service/ServiceListPane.vue'
export default Vue.extend({
  name: 'Service',
  components: { NavBody, BodyTab },
  data () {
    return {
      Header: {
        input: ''
      },
      Content: {
        editableTabs: new BodyTabItem([
          {
            name: '1',
            title: '服务列表',
            component: ServiceListPane
          }
        ]as EditTabItem[])
      }
    }
  },
  methods: {
    SearchService (val: string): void {
      console.log(val)
    },
    removeTab (name: string) {
      console.log(name)
      // if last
      const tabs = this.Content.editableTabs
      if (name === tabs.editTabs[tabs.editTabs.length - 1].name) {
        tabs.editTabs.pop()
        if (name === tabs.currentTabIndex) {
          tabs.currentTabIndex = tabs.editTabs[tabs.editTabs.length - 1].name
        }
        return
      }
      // if first
      if (name === tabs.editTabs[0].name) {
        tabs.editTabs.shift()
        if (name === tabs.currentTabIndex) {
          tabs.currentTabIndex = tabs.editTabs[0].name
        }
        return
      }
      // if middle
      tabs.editTabs.some(
        function (value: EditTabItem, index: number) {
          if (name === value.name) {
            tabs.editTabs.splice(index, 1)
            if (name === tabs.currentTabIndex) {
              tabs.currentTabIndex = tabs.editTabs[index].name
            }
            return true
          }
        }
      )
    },
    addTab (newItem: EditTabItem) {
      const tabs = this.Content.editableTabs
      newItem.name = tabs.nameNum.toString()
      console.log('num' + tabs.nameNum)
      console.log(newItem.name)
      tabs.editTabs.push(newItem)
      tabs.nameNum++
      tabs.currentTabIndex = newItem.name
    },
    addHttp () {
      const newItem = new EditTabItem('', '新建HTTP服务', HttpPane)
      newItem.data = { data: '9090' } as object
      this.addTab(newItem)
    },
    addGrpc () {
      this.addTab(new EditTabItem('', '新建GRPC服务', HttpPane))
    },
    addTcp () {
      this.addTab(new EditTabItem('', '新建TCP服务', HttpPane))
    }
  }
})
</script>

<style lang="stylus">

.body-header-input
  min-width 20% !important
  max-width 30% !important
  margin-right 1em

.body-content-page
  margin-top 1em

</style>
