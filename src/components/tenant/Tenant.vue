<template>
  <NavBody>
    <template v-slot:header>
      <el-input class="body-header-input" size="small" v-model="Header.input"
                v-on:keyup.enter.native="SearchTenant(Header.input)"></el-input>
      <el-button type="primary" size="small" v-on:click="SearchTenant(Header.input)">
        <v-icon name="search"/>
        搜索
      </el-button>
      <el-button type="primary" size="small" v-on:click="addTenant">
        <v-icon name="plus-circle"/>
        添加租户
      </el-button>
    </template>
    <template v-slot:content>
      <TenantBody v-on:edit-tenant="editTenant" :body-tab-item="Content.editableTabs" :remove-tab="removeTab"
                  v-on:complete="complete" v-on:statistic-tenant="addStatistic"></TenantBody>
    </template>
  </NavBody>
</template>

<script lang="ts">
import Vue from 'vue'
import NavBody from '@/components/base/NavBody.vue'
import TenantBody from "@/components/tenant/TenantBody.vue";
import {BodyTabItem, EditTabItem} from "@/mixins/model";

import TenantStatisticPane, {StatisticPaneData} from "@/components/tenant/TenantStatisticPane.vue";
import TenantListPane, {TenantListPaneData} from "@/components/tenant/TenantListPane.vue";
import TenantOpPane, {TenantOpPaneData, TenantOpPaneOp} from "@/components/tenant/TenantOpPane.vue";
import {AppListItem} from "@/repositories/repo";

export default Vue.extend({
  name: 'Tenant',
  components: {NavBody, TenantBody},
  data() {
    return {
      Header: {
        input: ''
      },
      Content: {
        editableTabs: new BodyTabItem([
          {
            name: '1',
            title: '租户列表',
            component: TenantListPane,
            data: new TenantListPaneData()
          }
        ] as EditTabItem[])
      }
    }
  },
  methods: {
    SearchTenant(val: string): void {
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
    addTenant() {
      const newItem = new EditTabItem('', '添加租户', TenantOpPane)
      newItem.data = new TenantOpPaneData({op: TenantOpPaneOp.ADD})
      this.addTab(newItem)
    },
    addStatistic(item: AppListItem) {
      const newItem = new EditTabItem('', item.name + '租户统计', TenantStatisticPane)
      newItem.data = new StatisticPaneData({id: item.id})
      this.addTab(newItem)
    },
    complete(item: EditTabItem) {
      this.removeTab(item.name)
    },
    editTenant(item: AppListItem) {
      const newItem = new EditTabItem('', '修改' + item.name + '租户', TenantOpPane)
      newItem.data = new TenantOpPaneData({op: TenantOpPaneOp.EDIT, id: item.id})
      this.addTab(newItem)
    }
  }
})
</script>

<style scoped>

</style>
