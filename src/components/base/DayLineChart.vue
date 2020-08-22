<template>
  <el-card>
    <div id="line" style="width: 100%;height: 25em;"></div>
  </el-card>
</template>

<script lang="ts">
import Vue from 'vue'
import echarts from "echarts"


export default Vue.extend({
  name: "DayLineChart",
  props: {
    today: {
      type: Array,
      default: () => [0] as number[]
    },
    yesterday: {
      type: Array,
      default: () => [0] as number[]
    }
  },
  // data(){
  //   return{
  //     today:[],
  //     yesterday:[]
  //   }
  // },
  mounted() {
    const myChart1 = echarts.init(document.getElementById('line') as HTMLDivElement, 'macarons');
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
    myChart1.setOption(option1);
    window.addEventListener('resize', function () {
      myChart1.resize()
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
