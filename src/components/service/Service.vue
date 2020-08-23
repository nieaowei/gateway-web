<template>
  <NavBody>
    <template v-slot:header>
      <el-input class="body-header-input" size="small" v-model="Header.input"
                v-on:keyup.enter.native="SearchService(Header.input)"></el-input>
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
      <BodyTab v-on:edit-service="editService" :body-tab-item="Content.editableTabs" :remove-tab="removeTab"
               v-on:complete="complete" v-on:statistic-service="addStatistic"></BodyTab>
    </template>
  </NavBody>
</template>

<script lang="ts">
import Vue from 'vue'
import NavBody from '@/components/base/NavBody.vue'
import BodyTab from '@/components/base/BodyTab.vue'
import ServiceOpPane, {
  ServiceOpPaneData,
  ServiceOpPaneOp,
  ServiceOpPaneType
} from '@/components/service/SeviceOpPane.vue'
import {BodyTabItem, EditTabItem} from '@/mixins/model'
import ServiceListPane, {ServiceListPaneData} from '@/components/service/ServiceListPane.vue'
import {ServiceListItem} from "@/repositories/repo";
import StatisticPane, {StatisticPaneData} from "@/components/service/StatisticPane.vue";

export default Vue.extend({
  name: 'Service',
  components: {NavBody, BodyTab},
  data() {
    return {
      Header: {
        input: ''
      },
      Content: {
        editableTabs: new BodyTabItem([
          {
            name: '1',
            title: '服务列表',
            component: ServiceListPane,
            data: new ServiceListPaneData()
          }
        ] as EditTabItem[])
      }
    }
  },
  methods: {
    SearchService(val: string): void {
      this.Content.editableTabs.editTabs[0].data.input = val
    },
    removeTab(name: string) {
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
    addTab(newItem: EditTabItem) {
      const tabs = this.Content.editableTabs
      newItem.name = tabs.nameNum.toString()
      tabs.editTabs.push(newItem)
      tabs.nameNum++
      tabs.currentTabIndex = newItem.name
    },
    addHttp() {
      const newItem = new EditTabItem('', '新建HTTP服务', ServiceOpPane)
      newItem.data = new ServiceOpPaneData({type: ServiceOpPaneType.HTTP, op: ServiceOpPaneOp.ADD})
      this.addTab(newItem)
    },
    addGrpc() {
      const newItem = new EditTabItem('', '新建GRPC服务', ServiceOpPane)
      newItem.data = new ServiceOpPaneData({type: ServiceOpPaneType.GRPC, op: ServiceOpPaneOp.ADD})
      this.addTab(newItem)
    },
    addTcp() {
      const newItem = new EditTabItem('', '新建TCP服务', ServiceOpPane)
      newItem.data = new ServiceOpPaneData({type: ServiceOpPaneType.TCP, op: ServiceOpPaneOp.ADD})
      this.addTab(newItem)
    },
    addStatistic(item: ServiceListItem) {
      const newItem = new EditTabItem('', item.service_name + '服务统计', StatisticPane)
      newItem.data = new StatisticPaneData({id: item.id})
      this.addTab(newItem)
    },
    complete(item: EditTabItem) {
      this.removeTab(item.name)
    },
    editService(item: ServiceListItem) {
      const newItem = new EditTabItem('', '修改' + item.service_name + '服务', ServiceOpPane)
      const str = item.load_type?.toLowerCase() as ServiceOpPaneType
      newItem.data = new ServiceOpPaneData({op: ServiceOpPaneOp.EDIT, id: item.id, type: str})
      this.addTab(newItem)
    }
  }
})
</script>

<style lang="stylus">

.body-header-input
  min-width 20% !important
  max-width 30% !important
  margin-right 1em

</style>
