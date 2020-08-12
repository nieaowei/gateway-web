<template>
  <div>
    <el-table border>
      <el-table-column prop="service_id" label="服务ID"></el-table-column>
      <el-table-column prop="service_name" label="服务名称"></el-table-column>
      <el-table-column prop="service_desc" label="服务描述"></el-table-column>
      <el-table-column prop="service_type" label="类型"></el-table-column>
      <el-table-column prop="service_address" label="服务地址"></el-table-column>
      <el-table-column prop="qpc" label="QPS"></el-table-column>
      <el-table-column prop="qds" label="日请求量"></el-table-column>
      <el-table-column prop="node" label="节点数量"></el-table-column>
      <el-table-column label="操作">
        <button>统计</button>
        <button>修改</button>
        <button>删除</button>
      </el-table-column>
    </el-table>
    <el-pagination
      class="body-content-page"
      background
      layout="total,sizes,prev, pager, next"
      :total="1000">
    </el-pagination>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'ServiceListPane'
})
</script>

<style scoped>

</style>
