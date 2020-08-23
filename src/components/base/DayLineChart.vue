<template>
  <el-card>
    <div :id="'line'+this.id.toString()" style="width: 100%;height: 30em;"></div>
  </el-card>
</template>

<script lang="ts">
import Vue from 'vue'
import echarts, {ECharts} from "echarts"


export default Vue.extend({
  name: "DayLineChart",
  props: {
    id: {
      type: Number
    },
    today: {
      type: Array,
      default: () => [] as number[]
    },
    yesterday: {
      type: Array,
      default: () => [] as number[]
    }
  },
  data() {
    return {
      myChart1: {} as ECharts
    }
  },
  watch: {
    today: {
      deep: true,
      handler: function (val: number[]) {
        this.myChart1.setOption({
          series: [
            {data: this.yesterday as number[]},
            {data: val as number[]}
          ]
        })
      }
    },
    yesterday: {
      deep: true,
      handler: function (val: number[]) {
        this.myChart1.setOption({
          series: [
            {data: val as number[]},
            {data: this.today as number[]}
          ]
        })
      }
    }
  },
  mounted() {
    this.myChart1 = echarts.init(document.getElementById('line' + this.id.toString()) as HTMLDivElement, 'macarons');
    // const myChart1 = echarts.init(document.getElementById('line') as HTMLDivElement, 'macarons');
    const option1 = {
      title: {
        text: '日流量统计'
      },
      tooltip: {
        trigger: 'axis' as "axis" | "none" | "item" | undefined,
        axisPointer: {
          type: 'cross' as "line" | "cross" | "shadow" | "none" | undefined
        },
        padding: [5, 10]
      },
      legend: {
        data: ['昨日', '今日']
      },
      xAxis: {
        data: [
          '00:00',
          '01:00',
          '02:00',
          '03:00',
          '04:00',
          '05:00',
          '06:00',
          '07:00',
          '08:00',
          '09:00',
          '10:00',
          '11:00',
          '12:00',
          '13:00',
          '14:00',
          '15:00',
          '16:00',
          '17:00',
          '18:00',
          '19:00',
          '20:00',
          '21:00',
          '22:00',
          '23:00'
        ],
        boundaryGap: true,
        axisTick: {
          show: true,
          alignWithLabel: true
        }
      },
      yAxis: {},
      series: [
        {
          name: '昨日',
          type: 'line',
          data: this.yesterday as number[],
          smooth: true
        },
        {
          name: '今日',
          type: 'line',
          data: this.today as number[],
          smooth: true
        }]
    };
    // 使用刚指定的配置项和数据显示图表。
    this.myChart1.setOption(option1);
    // eslint-disable-next-line @typescript-eslint/no-this-alias
    const that = this
    window.addEventListener('resize', function () {
      that.myChart1.resize()
    })

    // this.$axios.get('/api/service/stat?service_id=9').then(
    //     value => {
    //       this.today = value.data.data.today_list
    //       this.yesterday = value.data.data.yesterday_list
    //       myChart1.setOption({
    //         series:[
    //           {data:this.yesterday},{data:this.today}
    //         ]
    //       })
    //     }
    // )
  }
})
</script>

<style scoped>

</style>
