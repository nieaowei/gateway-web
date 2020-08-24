<template>
  <NavBody>
    <template v-slot:header>
    </template>
    <template v-slot:content>
      <el-row style="height: auto;">
        <el-col :xs="12" :sm="12" :md="12" :lg="6" :xl="6" style="height: auto;"
                v-for="(card,key) in cards" :key="key">
          <icon-total-card :icon="card.icon" :label="card.label" :color="card.color"
                           :content="card.content"></icon-total-card>
        </el-col>
      </el-row>
      <el-row style="height: auto;">
        <el-col :xs="24" :sm="24" :md="24" :lg="16" :xl="16" style="height: auto;">
          <day-line-chart :today="today" :id="0" :yesterday="yesterday"></day-line-chart>
        </el-col>
        <el-col :xs="24" :sm="24" :md="24" :lg="8" :xl="8" style="height: auto;">
          <total-pie-chart v-on:total="total"></total-pie-chart>
        </el-col>
      </el-row>
    </template>
  </NavBody>
</template>

<script lang="ts">
import Vue from 'vue'
import NavBody from '@/components/base/NavBody.vue'
import IconTotalCard, {IconTotalCardData} from '@/components/base/IconTotalCard.vue'
import DayLineChart from '@/components/base/DayLineChart.vue'
import TotalPieChart from '@/components/dashboard/TotalPieChart.vue'
import ApiExec, {GetServiceStatInput, GetServiceStatOutput} from "@/repositories/repo";

require('echarts/theme/macarons')

export default Vue.extend({
  name: 'Dashboard',
  components: {NavBody, IconTotalCard, DayLineChart, TotalPieChart},
  data: function () {
    return {
      today: [] as number[],
      yesterday: [] as number[],
      cards: [
        {
          label: '服务数',
          content: 0,
          icon: 'list-ol',
          color: '#5ec9ca'
        },
        {
          label: '当日请求量',
          content: 0,
          icon: 'eye',
          color: '#b8a5de'
        },
        {
          label: '当日QPS',
          content: 0,
          icon: 'search',
          color: '#5fb4ee'

        },
        {
          label: '租户数',
          content: 0,
          icon: 'user-friends',
          color: '#c19562'
        }
      ] as IconTotalCardData[]
    }
  },
  mounted() {
    ApiExec<GetServiceStatOutput>(this.$axios,new GetServiceStatInput()).then(
        value => {
          this.today = value.today_list
          this.yesterday = value.yesterday_list
        }
    )
  },
  methods: {
    total(t: number) {
      this.$set(this.cards[0], 'content', t)
    }
  }
})
</script>

<style scoped lang="stylus">
.el-card
  margin 15px

</style>
