<template>
  <el-tabs v-model="bodyTabItem.currentTabIndex" type="card" closable @tab-remove="removeTab" @tab-add="addTab"
           @tab-click="clickTab">
    <el-tab-pane class="tab-pane"
                 v-for="(item) in bodyTabItem.editTabs"
                 :key="item.name"
                 :label="item.title"
                 :name="item.name"
    >
      <component v-bind:is="item.component" :temp-data="item.data"
                 v-on:complete="complete(item)" v-on:statistic-tenant="statisticTenant"
                 v-on:edit-tenant="editTenant"></component>
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts">
import Vue from 'vue'
import body from "../../mixins/body";
import {EditTabItem} from "@/mixins/model";
import {ServiceListItem} from "@/repositories/repo";

export default Vue.extend({
  name: "TenantBody",
  mixins: [body],
  methods: {
    complete(item: EditTabItem) {
      this.$emit('complete', item)
    },
    editTenant(item: ServiceListItem) {
      this.$emit('edit-tenant', item)
    },
    statisticTenant(item: ServiceListItem) {
      this.$emit('statistic-tenant', item)
    }
  }
})
</script>

<style scoped lang="stylus">

</style>
