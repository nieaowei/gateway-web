<template>
  <div class="body">
    <div class="body-header">
      <slot name="header"></slot>
    </div>
    <div class="body-content">
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
.body
  display flex
  flex-direction column

.body-header
  padding-top 1em
  padding-left 1em
  padding-right 1em
  display flex
  flex-direction row
  justify-content flex-start
  align-items center

.body-header-input
  min-width 20% !important
  max-width 30% !important
  margin-right 1em

//width 20% !important
.body-content
  padding-top 1em
  padding-left 1em
  padding-right 1em

.body-content-page
  margin-top 1em
</style>
