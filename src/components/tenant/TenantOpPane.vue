<template>
  <el-form @submit.native.prevent class="content" v-if="step.active===0" label-width="120px" v-model="formData"
           label-position="left"
           label-suffix="："
           key="10">
    <el-form-item label="租户ID" prop="service_name">
      <el-input v-focus v-model="formData.service_name"></el-input>
    </el-form-item>
    <el-form-item label="租户名称" prop="service_desc">
      <el-input type="textarea" :autosize="DefaultTextArea" v-model="formData.service_desc"/>
    </el-form-item>
    <el-form-item label="QPS" prop="service_desc">
      <el-input type="textarea" :autosize="DefaultTextArea" v-model="formData.service_desc"/>
    </el-form-item>
    <el-form-item label="日流量" prop="service_desc">
      <el-input type="textarea" :autosize="DefaultTextArea" v-model="formData.service_desc"/>
    </el-form-item>
    <el-form-item label="服务描述" prop="service_desc">
      <el-input type="textarea" :autosize="DefaultTextArea" v-model="formData.service_desc"/>
    </el-form-item>
  </el-form>
</template>

<script lang="ts">
import Vue from 'vue'
import {TextAreaSize} from "@/mixins/model";

const DefaultTextArea = new TextAreaSize()

export default Vue.extend({
  name: "TenantOpPane",
  data() {
    return {
      DefaultTextArea: DefaultTextArea,
      formData: {},
    }
  }
})
</script>

<style scoped>

</style>
