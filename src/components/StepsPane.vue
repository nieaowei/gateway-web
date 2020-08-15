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
<!-- -nextAnimate 下一步切换动画 不填则为默认-->
<!-- -lastAnimate 上一步切换动画 不填则为默认-->
<!--bind：-->
<!-- - active 插槽数据传递 ， 将激活索引传递给相应的插槽-->
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
      <transition :name="animateC" mode="out-in">
        <slot name="content" v-if="active!==steps.length && !isError" v-bind:active="active" />
      </transition>

      <div class="step-content-success" v-if="active===steps.length && !isError" key="success">
        <slot name="success" v-bind:active="active"/>
      </div>
      <div class="step-content-error" v-if="isError" key="error">
        <slot name="error" v-bind:active="active"/>
      </div>
    </div>
    <div class="step-footer">

      <transition :name="animateC" mode="out-in">
        <div class="footer-button" @click="last" v-if="active>0 && active<steps.length && !isError" key="1">
          <slot name="last" v-bind:active="active"/>
        </div>
      </transition>

      <transition :name="animateC" mode="out-in">
        <div class="footer-button" @click="next" v-if="active<steps.length-1 && !isError" key="2">
          <slot name="next" v-bind:active="active"/>
        </div>
        <div class="footer-button" @click="next" v-if="active === steps.length-1 && !isError" key="3">
          <slot name="submit" v-bind:active="active"/>
        </div>
        <div class="footer-button" @click="complete" v-if="active === steps.length || isError" key="4">
          <slot name="complete" v-bind:active="active">
            <el-button :type="completeStatus" plain>
              <v-icon name="times" scale="0.8"/>
              关闭
            </el-button>
          </slot>
        </div>
      </transition>

    </div>
  </div>

</template>

<script lang="ts">
import Vue from 'vue'
import {StepItem} from '@/mixins/model'

export default Vue.extend({
  name: 'StepsPane',
  props: {
    steps: {
      type: Array,
      default: () => [{title: '123'}, {title: '321'}] as StepItem[]
    },
    nextAnimate: {
      type: String,
      default: () => ''
    },
    lastAnimate: {
      type: String,
      default: () => ''
    },
  },
  data() {
    return {
      active: 0,
      isError: false,
      animateC: 'step-slide-fade',
    }
  },
  computed: {
    completeStatus: function (): string {
      return this.isError ? 'danger' : 'success'
    },
    animateNext: function (): string {
      return this.nextAnimate===''? 'step-slide-fade':this.nextAnimate
    },
    animateLast: function (): string {
      return this.lastAnimate===''? 'step-slide-back':this.lastAnimate
    }
  },
  watch: {
    steps: {
      handler: function (val, newVal) {
        const v = val as StepItem[]
        console.log(val)
        v.some(value => {
          if (value.status === 'error') {
            this.isError = true
          }
        })
      },
      deep: true
    }
  },
  methods: {
    next() {
      if (this.active + 1 <= this.steps.length) {
        this.animateC = this.animateNext
        this.active++
        this.$emit('steps-change', this.active)
      }
    },
    last() {
      if (this.active - 1 >= 0) {
        this.animateC = this.animateLast
        this.active--
        this.$emit('steps-change', this.active)
      }
    },
    complete() {
      this.$emit('complete')
    }
  }
})
</script>

<style scoped lang="stylus">
.step-body
  display flex
  flex-direction column
  justify-content center
  align-items center

.step-header
  margin-top 1em
  width 80%

.step-content
  width 100%
  display flex
  flex-direction column
  justify-content center
  align-items center
  margin-top 2em

.step-footer
  width 100%
  margin-top 1em

.footer-button
  margin 0.5em
  display inline

.step-slide-back-enter-active
.step-slide-back-leave-active
.step-slide-fade-enter-active
.step-slide-fade-leave-active
  transition: all 0.5s ease

.step-slide-back-leave-to
.step-slide-fade-enter
  transform: translateX(100px);
  opacity: 0;


.step-slide-back-enter
.step-slide-fade-leave-to
  transform: translateX(-300px);
  opacity: 0;

</style>
