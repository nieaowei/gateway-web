<template>
  <div>
    <el-table border v-loading="loading" :data="serviceData.list" :max-height="tableHeight" highlight-current-row>
      <el-table-column prop="id" label="服务ID" fixed="left" min-width="70px"></el-table-column>
      <el-table-column prop="service_name" label="服务名称" min-width="80px"></el-table-column>
      <el-table-column prop="service_desc" label="服务描述" min-width="280px"></el-table-column>
      <el-table-column prop="load_type" label="类型" min-width="80px"></el-table-column>
      <el-table-column prop="address" label="服务地址" min-width="150px"></el-table-column>
      <el-table-column prop="qpd" label="QPS" min-width="80px"></el-table-column>
      <el-table-column prop="qps" label="日请求量" min-width="80px"></el-table-column>
      <el-table-column prop="total_node" label="节点数量" min-width="80px"></el-table-column>
      <el-table-column label="操作" fixed="right" min-width="150px" align="center">
        <template slot="header">
          <el-button
              @click="getServiceList"
              size="mini"
              icon="el-icon-refresh-right">
            刷新
          </el-button>
        </template>
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="statisticService(scope.row)">统计</el-button>
          <el-button size="mini" type="primary" @click="editService(scope.row)">修改</el-button>
          <el-popconfirm title="确定删除 ？" @onConfirm="deleteService(scope.row)" style="margin-left: 10px;">
            <el-button size="mini" slot="reference" type="danger">删除</el-button>
          </el-popconfirm>
        </template>
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
import ApiExec, {
  DeleteServiceInput,
  GetServiceListInput,
  GetServiceListOutput,
  ServiceListItem,
} from '@/repositories/repo'

export class ServiceListPaneData {
  input = ''
  constructor() {
    this.input = ''
  }
}

export default Vue.extend({
  name: 'ServiceListPane',
  props: {
    tempData: {
      type: ServiceListPaneData,
      default: () => new ServiceListPaneData()
    }
  },
  data() {
    return {
      serviceData: {} as GetServiceListOutput,
      loading: false,
      query: new GetServiceListInput(1, 10, ''),
      tableHeight: document.documentElement.clientHeight - 50 - 62 - 41 - 16 - 32 - 50 - 30
    }
  },
  computed:{
    input: function (): string {
      return this.tempData.input
    }
  },
  watch: {
    input: {
      handler: function (val: string,oldVal: string) {
        console.log(val)
        console.log(oldVal)
        if (oldVal!==val){
          this.query.info = val
          this.getServiceList()
        }
      }
    }
  },
  created() {
    this.getServiceList()
  },
  mounted() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const that = this
    setInterval(function () {
      that.tableHeight = document.documentElement.clientHeight - 50 - 62 - 41 - 16 - 32 - 50 - 30
    }, 500)
  },
  methods: {
    getServiceList() {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const that = this
      this.loading = true
      ApiExec<GetServiceListOutput>(this.$axios,this.query).then(
          value => {
            this.serviceData = value
            this.$message({type: 'success', message: '获取成功'})
          }
      ).catch(
          reason => {
            this.$message({type: 'error', message: reason})
          }
      ).finally(
          () => {
            setTimeout(function () {
              that.loading = false
            }, 500)
          }
      )
    },
    deleteService(service: ServiceListItem) {
      ApiExec<string>(this.$axios,new DeleteServiceInput(service.id)).then(
          value => {
            this.$message.success('删除成功')
            const index = this.serviceData.list.indexOf(service)
            this.serviceData.list.splice(index, 1)
          }
      ).catch(
          reason => {
            this.$message.error(reason)
          }
      )
    },
    editService(row: ServiceListItem) {
      this.$emit("edit-service", row)
    },
    statisticService(item: ServiceListItem){
      this.$emit('statistic-service',item)
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
.body-content-page
  margin-top 1em

</style>
