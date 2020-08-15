<!--slot：-->
<!-- - header 步骤条-->
<!-- - content 显示内容-->
<!-- - success 成功后的显示内容-->
<!-- - error 失败后的显示内容-->
<!-- - last 上一步点击事件 ， 在父组件也是可以声明click事件的， 且互不影响-->
<!-- - next 下一步点击事件 ， 在父组件也是可以声明click事件的， 且互不影响-->
<!-- - submit 提交点击事件 ， 在父组件也是可以声明click事件的， 且互不影响-->
<!-- - complete 完成事件 ， 在父组件也是可以声明click事件的， 且互不影响-->
<!--event：-->
<!-- - steps-change ， 步骤条发生改变事将索引index发射出去-->
<!--props：-->
<!-- - steps 步骤条相关数组-->
<template>
  <div class="step-body">
    <div class="step-header">
      <el-steps align-center :active="active" finish-status="success">
        <el-step v-for="(item, index) in steps" :key="index" :status="item.status">
          <span slot="title">{{ item.title }}</span>
        </el-step>
      </el-steps>
    </div>
    <div class="step-content">
      <slot name="content" v-if="active!==steps.length && !isError"/>
      <slot name="success" v-if="active===steps.length && !isError"/>
      <slot name="error" v-if="isError"/>
    </div>
    <div class="step-footer">
      <div class="footer-button" @click="last" v-if="active>0 && active<steps.length && !isError">
        <slot name="last"></slot>
      </div>
      <div class="footer-button" @click="next" v-if="active<steps.length-1 && !isError">
        <slot name="next"></slot>
      </div>
      <div class="footer-button" @click="next" v-if="active === steps.length-1 && !isError">
        <slot name="submit"></slot>
      </div>
      <div class="footer-button" @click="complete" v-if="active === steps.length || isError">
        <slot name="complete"></slot>
      </div>
    </div>
  </div>

</template>

<script lang="ts">
import Vue from 'vue'
import { StepItem } from '@/mixins/model'

export default Vue.extend({
  name: 'StepsPane',
  props: {
    steps: {
      type: Array,
      default: () => [{ title: '123' }, { title: '321' }] as StepItem[]
    }
  },
  data () {
    return {
      active: 0,
      isError: false,
      stepsItems: this.steps
    }
  },
  watch: {
    steps: {
      handler: function (val, newVal) {
        const v = val as StepItem[]
        v.some(value => {
          if (value.status === 'error') {
            this.isError = true
          }
        })
      },
      deep: true,
      immediate: true
    }
  },
  methods: {
    next () {
      if (this.active + 1 <= this.steps.length) {
        this.active++
        this.$emit('steps-change', this.active)
      }
    },
    last () {
      if (this.active - 1 >= 0) {
        this.active--
        this.$emit('steps-change', this.active)
      }
    },
    complete () {
      this.$emit('complete')
    }
  }
})
</script>

<style scoped lang="stylus">
.step-body

.step-header
  margin-top 1em
  width 100%

.step-content
  width 100%
  display flex
  flex-direction column
  justify-content center
  align-items center
  margin-top 2em

.step-footer
  margin-top 1em

.footer-button
  margin 0.5em
  display inline
</style>
