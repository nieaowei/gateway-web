<template>
  <StepsPane :steps="stepsItems" v-on:steps-change="change">
    <template slot="content">
      <!--      <transition name="slide-fade">-->
      <el-form v-if="active===0" key="0">
        <el-form-item label="input:">
          <el-input></el-input>
        </el-form-item>
      </el-form>
      <!--      </transition>-->
      <!--      <transition name="slide-fade">-->
      <el-form v-if="active===1" key="1">
        <el-form-item label="input1:">
          <el-input></el-input>
        </el-form-item>
      </el-form>
      <!--      </transition>-->
      <!--      <transition name="slide-fade">-->
      <el-form v-if="active===2" key="2">
        <el-form-item label="input2:">
          <el-input></el-input>
        </el-form-item>
      </el-form>
      <!--      </transition>-->
      <!--      <transition name="slide-fade">-->
      <el-form v-if="active===3" key="3">
        <el-form-item label="input3:">
          <el-input></el-input>
        </el-form-item>
      </el-form>
      <!--      </transition>-->

    </template>
    <template v-slot:last>
      <el-button>last</el-button>
    </template>
    <template slot="next">
      <el-button>next</el-button>
    </template>
  </StepsPane>
</template>

<script lang="ts">
import Vue from 'vue'
import StepsPane from "@/components/base/StepsPane.vue";
import {AddHttpServiceInput} from "@/repositories/repo";
import {StepItem} from '@/mixins/model';

export default Vue.extend({
  name: "Test",
  components: {StepsPane},
  data() {
    return {
      active: 0,
      stepsItems: [
        new StepItem('填写服务信息'),
        new StepItem('填写服务详细'),
        new StepItem('填写访问控制信息'),
        new StepItem('填写负载均衡信息'),
      ] as StepItem[],
      isError: false,
      animate: 'slide-fade',
      obj: {
        input: '',
        a: ''
      }
    }
  },
  watch: {
    obj: {
      deep: true,
      handler: function (val,oldVal) {
        console.log(val)
        console.log(oldVal)

      }
    }
  },
  methods: {
    change(v: number) {
      this.active = v
      this.obj.input=v.toString()
    }
  }
})
</script>

<style scoped lang="stylus">
.slide-fade-enter-active
  transition all 0.5s ease

.slide-fade-enter
  transform translateX(300px)
  opacity 0
</style>
