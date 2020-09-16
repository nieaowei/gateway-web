<template>
  <div v-loading="loading"
      style="width: 100%;padding-top: 1em; display: flex;flex-direction: column;justify-content: center;align-items: center;">
    <el-form @submit.native.prevent class="content" label-width="120px" v-model="formData"
             label-position="left"
             label-suffix="："
             key="10">
      <el-form-item label="租户ID" prop="service_name">
        <el-input autofocus v-model="formData.app_id"/>
      </el-form-item>
      <el-form-item label="租户名称" prop="service_desc">
        <el-input v-model="formData.name"/>
      </el-form-item>
      <el-form-item label="QPS" prop="service_desc">
        <el-input v-model.number="formData.qps"/>
      </el-form-item>
      <el-form-item label="日流量" prop="service_desc">
        <el-input v-model.number="formData.qpd"/>
      </el-form-item>
      <el-form-item>
        <el-button type="warning" >
          <v-icon name="times" scale="0.8"/>
          关闭
        </el-button>
        <el-button @click="submit" type="primary" >
          <v-icon name="check" scale="0.8"/>
          提交
        </el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import {TextAreaSize} from "@/mixins/model"
import ApiExec, {
  AddAppInput,
  AddAppOutput, GetAppDetailInput,
  UpdateAppInput,
  UpdateAppOutput, UpdateGprcServiceInput, UpdateHttpServiceInput, UpdateTcpServiceInput
} from "@/repositories/repo"

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
  props: {
    tempData: {
      type: TenantOpPaneData,
      default: () => new TenantOpPaneData({})
    }
  },
  data() {
    return {
      loading:false,
      DefaultTextArea: DefaultTextArea,
      formData: this.tempData.op === TenantOpPaneOp.ADD ? new AddAppInput() : new UpdateAppInput(),
    }
  },
  mounted() {
    if (this.tempData !== null && this.tempData != undefined) {
      if (this.tempData.op === TenantOpPaneOp.EDIT) {
        //去网络操作获取数据
        this.loading = true
        const that = this
        // eslint-disable-next-line @typescript-eslint/camelcase
        ApiExec<any>(this.$axios, new GetAppDetailInput(this.tempData.id)).then(
            value => {
              if (this.formData instanceof UpdateAppInput){
                value.id = this.tempData.id
                this.formData = new UpdateAppInput(value)
                // this.formData = value
                return
              }
            }
        ).finally(
            () => {
              setTimeout(function () {
                that.loading = false
              }, 500)
            }
        )

      }
    }
  },
  methods: {
    complete() {
      // 发射信号出去告知tab 改标签页已完成 可以关闭 或 进行其他操作
      this.$emit('complete')
    },
    submit: function () {
      if (this.tempData.op === TenantOpPaneOp.ADD) {
        ApiExec<AddAppOutput>(this.$axios, this.formData).then(
            value => {
              this.$message.success('添加成功')
              this.complete()
            }
        ).catch(
            reason => {
              this.$message.error(reason)
            }
        )
        return
      } else if (this.tempData.op === TenantOpPaneOp.EDIT) {
        alert('edit')
        ApiExec<UpdateAppOutput>(this.$axios, this.formData).then(
            value => {
              this.$message.success('修改成功')
              this.complete()
            }
        ).catch(
            reason => {
              this.$message.error(reason)
            }
        )
        return
      }

    }
  }
})
</script>

<style scoped lang="stylus">
.content
  width 60%
</style>
