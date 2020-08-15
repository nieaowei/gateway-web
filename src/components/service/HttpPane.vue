<template>
  <StepsPane v-bind:steps="stepsItems" v-on:steps-change="stepsChange" v-on:complete="complete">
    <template v-slot:content="step">
      <el-form @submit.native.prevent class="content" v-if="step.active===0" label-width="120px" v-model="formData"
               label-position="left"
               label-suffix="："
               key="10">
        <el-form-item label="服务名称" prop="service_name">
          <el-input v-focus v-model="formData.service_name"></el-input>
        </el-form-item>
        <el-form-item label="服务描述" prop="service_desc">
          <el-input type="textarea" :autosize="DefaultTextArea"
                    v-model="formData.service_desc"></el-input>
        </el-form-item>
      </el-form>
      <el-form @submit.native.prevent class="content" v-if="step.active===1" label-width="120px" v-model="formData"
               label-position="left"
               label-suffix="：" key="11">
        <el-form-item label="接入类型" prop="rule_type">
          <el-input v-focus v-model="formData.rule">
            <el-select style="width: 100px;" v-model="formData.rule_type" slot="prepend" placeholder="请选择">
              <el-option label="路径" :value="0"></el-option>
              <el-option label="域名" :value="1"></el-option>
            </el-select>
          </el-input>
        </el-form-item>
        <el-form-item label="支持类型" prop="rule_type" style="text-align: left;">
          <el-switch class="add-pane-switch" v-model="formData.need_https" inactive-text="HTTPS"></el-switch>
          <el-switch class="add-pane-switch" v-model="formData.need_strip_uri" inactive-text="strip_uri"></el-switch>
          <el-switch class="add-pane-switch" v-model="formData.need_websocket" inactive-text="Websocket"></el-switch>
        </el-form-item>
        <el-form-item label="URL重写" prop="rule_type">
          <el-input type="textarea" :autosize="DefaultTextArea" v-model="formData.url_rewrite"></el-input>
        </el-form-item>
        <el-form-item label="Header转换" prop="rule_type">
          <el-input type="textarea" :autosize="DefaultTextArea" v-model="formData.header_transfor"></el-input>
        </el-form-item>
      </el-form>
      <el-form class="content" @submit.native.prevent v-if="step.active===2" key="12" label-width="98px"
               label-position="left"
               label-suffix="："
               v-model="formData">
        <el-form-item label="IP白名单">
          <el-input v-model="formData.white_list" v-focus></el-input>
        </el-form-item>
        <el-form-item label="IP黑名单">
          <el-input v-model="formData.black_list"></el-input>
        </el-form-item>
        <el-form-item label="客户端限流">
          <el-input v-model="formData.clientip_flow_limit"></el-input>
        </el-form-item>
        <el-form-item label="服务端限流">
          <el-input v-model="formData.service_flow_limit"></el-input>
        </el-form-item>
        <el-form-item label="主机白名单">
          <el-input v-model="formData.white_host_name"></el-input>
        </el-form-item>
        <el-form-item label="开启授权" style="text-align: left;">
          <el-switch class="add-pane-switch" v-model="formData.open_auth"></el-switch>
        </el-form-item>
      </el-form>
      <el-form @submit.native.prevent class="content" v-if="step.active===3" label-width="120px" v-model="formData"
               label-position="left"
               label-suffix="："
               key="10">
        <el-form-item label="服务名称" prop="service_name">
          <el-input v-focus v-model="formData.service_name"></el-input>
        </el-form-item>
        <el-form-item label="服务描述" prop="service_desc">
          <el-input type="textarea" :autosize="DefaultTextArea"
                    v-model="formData.service_desc"></el-input>
        </el-form-item>
      </el-form>
    </template>
    <template v-slot:success="step">
      成功 {{ step.active }}
    </template>
    <template v-slot:error="step">
      {{ '您在第' + (step.active + 1) + '步失败了' }}
    </template>
    <template v-slot:last="step">
      <el-button @click="last(step.active)" type="primary" plain>
        <v-icon name="angle-double-left" scale="0.8"/>
        上一步
      </el-button>
    </template>
    <template v-slot:next="step">
      <el-button @click="next(step.active)" type="primary" plain>下一步<i class="el-icon--right">
        <v-icon name="angle-double-right" scale="0.8"/>
      </i></el-button>
    </template>
    <template v-slot:submit="step">
      <el-button @click="submit(step.active)" type="primary">
        <v-icon name="check" scale="0.8"/>
        提交
      </el-button>
    </template>
    <template v-slot:complete>
    </template>
  </StepsPane>
</template>

<script lang="ts">
import Vue from 'vue'
import StepsPane from '@/components/StepsPane.vue'
import {StepItem, TextAreaSize} from '@/mixins/model'
import {AddHttpServiceInput} from '@/repositories/repo'

class Service {
  id!: number
}

const DefaultTextArea = new TextAreaSize()

export default Vue.extend({
  name: 'AddPane',
  components: {StepsPane},
  props: {
    tempData: {
      type: Object
    }
  },
  data() {
    return {
      DefaultTextArea: DefaultTextArea,
      service: this.tempData as Service,
      formData: new AddHttpServiceInput(),
      active: 0,
      stepsItems: [
        new StepItem('填写服务信息'),
        new StepItem('填写服务详细'),
        new StepItem('填写访问控制信息'),
        new StepItem('填写负载均衡信息'),
      ] as StepItem[],
      isError: false,
      animate: 'slide-fade'
    }
  },
  directives: {
    focus: {
// 指令的定义
      inserted: function (el) {
        const e = el.getElementsByTagName("input")
        let i = 0
        for (i = 0; i < e.length; i++) {
          const ec = e.item(i)
          if (ec !== null) {
            if (ec.parentElement === el) {
              ec.focus()
              break
            }
          }
        }
      }
    }
  },
  methods: {
    stepsChange(val: number) {
      this.active = val
    },
    submit() {
      alert('submit')
      // this.stepsItems[this.stepsItems.length - 1].status = 'error'
    },
    complete() {
      // 发射信号出去告知tab 改标签页已完成 可以关闭 或 进行其他操作
      this.$emit('complete')
    },
    next(active: number) {
      console.log(active)
      // this.animate = "slide-fade"
      this.stepsItems[1].status = 'error'
    },
    last() {
      // this.animate = "slide-fade-back"
    },
  }
})
</script>

<style scoped lang="stylus">
.content
  width 60%

.slide-fade-enter-active
  transition: all 0.5s ease

.slide-fade-enter
  transform: translateX(300px);
  opacity: 0;

//.slide-fade-leave-active
//  transition: all 0.5s ease
//
//.slide-fade-leave-to
//  transform: translateX(-300px);
//  opacity: 0;


.add-pane-switch
  margin-right 1em
</style>
