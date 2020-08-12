<template>
  <el-tabs v-model="bodyTabItem.currentTabIndex" type="card" closable @tab-remove="removeTab" @tab-add="addTab" @tab-click="clickTab">
    <el-tab-pane class="tab-pane"
                  v-for="(item) in bodyTabItem.editTabs"
                 :key="item.name"
                 :label="item.title"
                 :name="item.name"
    >
      <component v-bind:is="item.component" mode="out-in" :temp-data="item.data"></component>
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts">
import Vue from 'vue'
import { EditTabItem, BodyTabItem } from '@/mixins/model'

export default Vue.extend({
  name: 'BodyTab',
  props: {
    bodyTabItem: {
      type: Object,
      default: () => new BodyTabItem([])
    },
    clickTab: {
      type: Function,
      default: function () {
        console.log()
      }
    },
    addTab: {
      type: Function,
      default: function () {
        console.log()
      }
    },
    removeTab: {
      type: Function,
      default: function () {
        console.log()
      }
    }
  }
})
</script>

<style scoped lang="stylus">
.tab-pane
  //height 200px
</style>
