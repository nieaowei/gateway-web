<template>
  <div class="nav-body">
    <div id="body-header" class="nav-body-header">
      <slot name="header"></slot>
    </div>
    <div class="nav-body-content">
      <slot name="content"></slot>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'NavBody'
})
</script>

<style lang="stylus" scoped>
.nav-body
  display flex
  flex-direction column

.nav-body-header
  padding-left 1em
  padding-right 1em
  display flex
  flex-direction row
  justify-content flex-start
  align-items center
  flex-wrap wrap

.nav-body-header .el-input
.nav-body-header .el-button
  margin-top 0.8em

//.body-header-input
//  min-width 20% !important
//  max-width 30% !important
//  margin-right 1em

.nav-body-content
  padding-top 1em
  padding-left 1em
  padding-right 1em

//.body-content-page
//  margin-top 1em
</style>
