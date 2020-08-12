<template>
  <div>
    <el-table border v-loading="loading" :data="serviceData.list" :max-height="tableHeight">
      <el-table-column prop="id" label="服务ID" fixed="left" min-width="50px"></el-table-column>
      <el-table-column prop="service_name" label="服务名称" min-width="80px"></el-table-column>
      <el-table-column prop="service_desc" label="服务描述" min-width="280px"></el-table-column>
      <el-table-column prop="load_type" label="类型" min-width="80px"></el-table-column>
      <el-table-column prop="address" label="服务地址" min-width="150px"></el-table-column>
      <el-table-column prop="qpd" label="QPS" min-width="80px"></el-table-column>
      <el-table-column prop="qps" label="日请求量" min-width="80px"></el-table-column>
      <el-table-column prop="total_node" label="节点数量" min-width="80px"></el-table-column>
      <el-table-column label="操作" fixed="right" min-width="150px" align="center">
        <div class="table-op">
          <el-button size="mini" type="primary">统计</el-button>
          <el-button size="mini" type="primary">修改</el-button>
          <el-button size="mini" type="danger">删除</el-button>
        </div>
      </el-table-column>
    </el-table>
    <el-pagination
      v-show="serviceData.total>0"
      :total="serviceData.total"
      :page-size.sync="query.page_size"
      :current-page.sync="query.page_no"
      class="body-content-page"
      background
      layout="total,sizes,prev, pager, next"
      @size-change="getServiceList"
      @current-change="getServiceList"
      >
    </el-pagination>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { GetServiceListInput, ServiceListOutput } from '@/repositories/repo'
export default Vue.extend({
  name: 'ServiceListPane',
  data () {
    return {
      serviceData: {} as ServiceListOutput,
      loading: false,
      query: new GetServiceListInput(1, 10),
      tableHeight: document.documentElement.clientHeight - 50 - 62 - 41 - 16 - 32 - 50 - 30
    }
  },
  created () {
    this.getServiceList()
  },
  mounted () {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const that = this
    console.log(this.$refs.bodyheader)
    setInterval(function () {
      that.tableHeight = document.documentElement.clientHeight - 50 - 62 - 41 - 16 - 32 - 50 - 30
    }, 500)
    // window.onresize = function () {
    //   const a = document.getElementById('home-header')
    //   let vala = 0
    //   const b = document.getElementById('body-header')
    //   let valb = 0
    //   if (a !== null && b !== null) {
    //     vala = Number(a.style.height.split('px')[0])
    //     valb = Number(b.style.height.split('px')[0])
    //     console.log(a.style.height)
    //     console.log(b.style.height)
    //   }
    //
    //   that.tableHeight = document.documentElement.clientHeight - 50 - 62 - 41 - 16 - 32 - 50
    // }
  },
  methods: {
    getServiceList () {
      this.loading = true
      this.query.Exec(this.$axios).then(
        value => {
          if (value.data.errno === 0) {
            this.serviceData = value.data.data
            this.$message({ type: 'success', message: '获取成功' })
          }
        }
      ).catch(
        reason => {
          this.$message({ type: 'error', message: '网络错误' })
        }
      ).finally(
        () => {
          this.loading = false
        }
      )
    }
    // sizeChange (size: number) {
    //   this.getServiceList(new GetServiceListInput(1, size))
    // },
    // currentChange (page: any) {
    //   console.log(page)
    //   this.query.Exec()
    // },
    // prevClick (page: any) {
    //   console.log(page)
    // },
    // nextClick (page: any) {
    //   console.log(page)
    // }
  }
})
</script>

<style scoped lang="stylus">
.table-op
  //display flex
  //flex-direction row
  //justify-content center
  //align-items center

</style>
