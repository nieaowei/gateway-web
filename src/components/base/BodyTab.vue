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
                 v-on:complete="complete(item)" v-on:statistic-service="statisticService"
                 v-on:edit-service="editService"></component>
    </el-tab-pane>
  </el-tabs>
</template>

<script lang="ts">
import Vue from 'vue'
import {EditTabItem, BodyTabItem} from '@/mixins/model'
import {ServiceListItem} from "@/repositories/repo";
import body from '@/mixins/body'

export default Vue.extend({
  name: 'BodyTab',
  // mixins: {body},
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
      default: function (): void {
        console.log()
      }
    }
  },
  methods: {
    complete(item: EditTabItem) {
      this.$emit('complete', item)
    },
    editService(item: ServiceListItem) {
      this.$emit('edit-service', item)
    },
    statisticService(item: ServiceListItem) {
      this.$emit('statistic-service', item)
    }
  }
})
</script>

<style scoped lang="stylus">
//.slide-fade-enter-active
//  transition: all 2s ease

//.slide-fade-leave-active
//  transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0)

//.slide-fade-enter
//  transform: translateX(200px);
//  opacity: 0;
</style>
