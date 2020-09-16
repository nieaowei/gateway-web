<template>
  <div>
    <el-table border v-loading="loading" :data="appData.list" :max-height="tableHeight" highlight-current-row>
      <el-table-column prop="id" label="Id" fixed="left" min-width="70px"></el-table-column>
      <el-table-column prop="app_id" label="AppId" fixed="left" min-width="100px"></el-table-column>
      <el-table-column prop="name" label="租户名称" min-width="80px"></el-table-column>
      <el-table-column prop="secret" label="秘钥" min-width="280px"></el-table-column>
      <el-table-column prop="qpd" label="日请求量" min-width="80px"></el-table-column>
      <el-table-column prop="qps" label="QPS" min-width="80px"></el-table-column>
      <el-table-column label="操作" fixed="right" min-width="150px" align="center">
        <template slot="header">
          <el-button
              @click="getTenantList"
              size="mini"
              icon="el-icon-refresh-right">
            刷新
          </el-button>
        </template>
        <template slot-scope="scope">
          <el-button size="mini" type="primary" @click="statisticTenant(scope.row)">统计</el-button>
          <el-button size="mini" type="primary" @click="editTenant(scope.row)">修改</el-button>
          <el-popconfirm title="确定删除 ？" @onConfirm="deleteTenant(scope.row)" style="margin-left: 10px;">
            <el-button size="mini" slot="reference" type="danger">删除</el-button>
          </el-popconfirm>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
        v-show="appData.total>0"
        :total="appData.total"
        :page-size.sync="query.page_size"
        :current-page.sync="query.page_no"
        class="body-content-page"
        background
        layout="total,sizes,prev, pager, next"
        @size-change="getTenantList"
        @current-change="getTenantList"
    >
    </el-pagination>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import ApiExec, {
  GetAppListInput, GetAppListOutput,
  AppListItem, DeleteAppOutput, DeleteAppInput
} from "@/repositories/repo";

export class TenantListPaneData {
  input = ''
  constructor() {
    this.input = ''
  }
}

export default Vue.extend({
  name: "TenantListPane",
  props: {
    tempData: {
      type: TenantListPaneData,
      default: () => new TenantListPaneData()
    }
  },
  data() {
    return {
      appData: new GetAppListOutput(),
      loading: false,
      query: new GetAppListInput(1, 10, ''),
      tableHeight: document.documentElement.clientHeight - 50 - 62 - 41 - 16 - 32 - 50 - 30
    }
  },
  computed: {
    input: function (): string {
      return this.tempData.input
    }
  },
  watch: {
    input: {
      handler: function (val: string, oldVal: string) {
        if (oldVal !== val) {
          this.query.info = val
          this.getTenantList()
        }
      }
    }
  },
  created() {
    this.getTenantList()
  },
  mounted() {
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const that = this
    setInterval(function () {
      that.tableHeight = document.documentElement.clientHeight - 50 - 62 - 41 - 16 - 32 - 50 - 30
    }, 500)
  },
  methods: {
    getTenantList() {
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const that = this
      this.loading = true
      ApiExec<GetAppListOutput>(this.$axios, this.query).then(
          value => {
            this.appData = value
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
    deleteTenant(appListItem: AppListItem) {
      ApiExec<DeleteAppOutput>(this.$axios,new DeleteAppInput(appListItem.id)).then(
          value => {
            this.$message.success('删除成功')
            const index = this.appData.list.indexOf(appListItem)
            this.appData.list.splice(index, 1)
          }
      ).catch(
          reason => {
            this.$message.error(reason)
          }
      )
    },
    editTenant(row: AppListItem) {
      this.$emit("edit-tenant", row)
    },
    statisticTenant(item: AppListItem){
      this.$emit('statistic-tenant',item)
    }
  }
})
</script>

<style scoped lang="stylus">

.body-content-page
  margin-top 1em

</style>
