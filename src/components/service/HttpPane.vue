<template>
  <StepsPane v-bind:steps="stepsItems" v-on:steps-change="stepsChange" v-on:complete="complete">
    <template v-slot:content>
      <el-form class="content" v-if="active===0" label-width="100px" v-model="formData">
        <el-form-item label="服务名称" prop="service_name">
          <el-input autofocus v-model="formData.service_name"></el-input>
        </el-form-item>
        <el-form-item label="服务描述" prop="service_desc">
          <el-input type="textarea" :autosize="{ minRows: 3, maxRows: 10 }" v-model="formData.service_desc"></el-input>
        </el-form-item>
      </el-form>
      <el-form class="content" v-if="active===1" label-width="120px" v-model="formData" label-position="left"
               label-suffix="：">
        <el-form-item label="接入类型" prop="rule_type">
          <el-input autofocus v-model="formData.rule">
            <el-select v-model="formData.rule_type" slot="prepend" placeholder="请选择">
              <el-option label="路径" value="0"></el-option>
              <el-option label="域名" value="1"></el-option>
            </el-select>
          </el-input>
        </el-form-item>
        <el-form-item label="支持类型" prop="rule_type">
          <el-switch v-model="formData.need_https" inactive-text="HTTPS"></el-switch>
          <el-switch v-model="formData.need_strip_uri" inactive-text="strip_uri"></el-switch>
          <el-switch v-model="formData.need_websocket" inactive-text="Websocket"></el-switch>
        </el-form-item>
        <el-form-item label="URL重写" prop="rule_type">
          <el-input v-model="formData.url_rewrite"></el-input>
        </el-form-item>
        <el-form-item label="Header转换" prop="rule_type">
          <el-input v-model="formData.header_transfor"></el-input>
        </el-form-item>
      </el-form>
      <el-form class="content" v-if="active===2">
        <el-form-item>
          <el-input></el-input>
        </el-form-item>
      </el-form>
      <el-form class="content" v-if="active===3">
        <el-form-item>
          <el-input></el-input>
        </el-form-item>
      </el-form>
    </template>
    <template v-slot:success>
      成功
    </template>
    <template v-slot:error>
      失败
    </template>
    <template v-slot:last>
      <el-button>上一步</el-button>
    </template>
    <template v-slot:next>
      <el-button>下一步</el-button>
    </template>
    <template v-slot:submit>
      <el-button @click="submit">提交</el-button>
    </template>
    <template v-slot:complete>
      <el-button>关闭</el-button>
    </template>
  </StepsPane>
</template>

<script lang="ts">
import Vue from 'vue'
import StepsPane from '@/components/StepsPane.vue'
import {StepItem} from '@/mixins/model'
import {AddHttpServiceInput} from '@/repositories/repo'

class Service {
  id!: number
}

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
      service: this.tempData as Service,
      formData: {} as AddHttpServiceInput,
      active: 0,
      stepsItems: [
        {
          title: '填写服务信息'
        },
        {
          title: '填写服务详细'
        },
        {
          title: '填写访问控制信息'
        },
        {
          title: '填写负载均衡信息'
        }
      ] as StepItem[],
      isError: false
    }
  },
  methods: {
    stepsChange(val: number) {
      this.active = val
    },
    submit() {
      alert('submit')
      this.stepsItems[this.stepsItems.length - 1].status = 'error'
    },
    complete() {
      alert('complete')
      this.$emit('complete')
    }
  }
})
</script>

<style scoped lang="stylus">
.content
  width 60%

.slide-fade-enter-active
  transition: all 1s ease

.slide-fade-enter
  transform: translateX(300px);
  opacity: 0;
</style>
