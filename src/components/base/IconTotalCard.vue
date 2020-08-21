<template>
  <el-card :body-style="{ padding: '20px' }">
    <div style="display: flex; flex-direction: row; justify-content: flex-start;">
      <div style="width: 30%;">
        <v-icon :name="icon" scale="3" :style="{color: color}"></v-icon>
      </div>
      <div style="width: 70%; display: flex;flex-direction: column;justify-content: flex-start;align-items: flex-end;">
        <slot name="label">
          <span>{{ label }}</span>
        </slot>
        <slot name="content">
          <span>{{ content }}</span>
        </slot>
      </div>
    </div>
  </el-card>
</template>

<script lang="ts">
import Vue from 'vue'

export class IconTotalCardData{
  icon = 'th-list'
  color = '#1467a5'
  label = '标签'
  content = 0
}

export default Vue.extend({
  name: "IconTotalCard",
  props: {
    icon: {
      type: String,
      default: 'th-list'
    },
    color:{
      type: String,
      default: '#1467a5'
    },
    label: {
      type: String,
      default: '标签'
    },
    content: {
      type: Number,
      default: 0
    }
  }

})
</script>

<style scoped>

</style>
