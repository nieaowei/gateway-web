<template>
  <div style="width: 100%;display: flex;flex-direction: column;justify-content: center;align-items: center;">
    <el-form @submit.native.prevent class="content" label-width="120px" v-model="formData"
             label-position="left"
             label-suffix="："
             key="10">
      <el-form-item label="租户ID" prop="service_name">
        <el-input autofocus v-model="formData.app_id" />
      </el-form-item>
      <el-form-item label="租户名称" prop="service_desc">
        <el-input v-model="formData.name" />
      </el-form-item>
      <el-form-item label="QPS" prop="service_desc">
        <el-input v-model.number="formData.qps" />
      </el-form-item>
      <el-form-item label="日流量" prop="service_desc">
        <el-input v-model.number="formData.qpd" />
      </el-form-item>
      <el-form-item>
        <el-button>提交</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {TextAreaSize} from "@/mixins/model"
import {AddAppInput} from "@/repositories/repo"

export enum TenantOpPaneOp {
  ADD = 'add',
  EDIT = 'edit'
}

export class TenantOpPaneData {
  id?: number
  op?: TenantOpPaneOp = TenantOpPaneOp.ADD

  constructor(addPaneData: TenantOpPaneData) {
    this.id = addPaneData.id
    this.op = addPaneData.op
  }
}

const DefaultTextArea = new TextAreaSize()

export default Vue.extend({
  name: "TenantOpPane",
  data() {
    return {
      DefaultTextArea: DefaultTextArea,
      formData: new AddAppInput(),
    }
  }
})
</script>

<style scoped lang="stylus">
.content
  width 60%
</style>
