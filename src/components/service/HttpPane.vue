<template>
  <div>
    <el-form>
      <el-form-item>
        <el-input></el-input>
        <el-button>提交</el-button>
      </el-form-item>
    </el-form>
    <span>{{ this.tempData }}</span>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

class Service {
  id!: number
}
export default Vue.extend({
  name: 'AddPane',
  props: {
    tempData: {
      type: Object
    }
  },
  data () {
    return {
      service: this.tempData as Service
    }
  }
})
</script>

<style scoped>

</style>
