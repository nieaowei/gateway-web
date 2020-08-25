<template>
  <el-card>
    <div id="pie" style="width: 100%;height: 30em;"></div>
  </el-card>
</template>

<script lang="ts">
import Vue from 'vue'
import echarts from "echarts";
import ApiExec, {GetServiceAmountInput, GetServiceAmountOutput} from "@/repositories/repo";

class PieData {
  name = '标签'
  value = 0

  constructor(n: string, v: number) {
    this.name = n
    this.value = v
  }
}

export default Vue.extend({
  name: "TotalPieChart",
  data() {
    return {
      pieData: [] as PieData[]
    }
  },
  created() {

  },
  mounted() {
    const myChart = echarts.init(document.getElementById('pie') as HTMLDivElement, 'macarons')
    const option = {
      title: {
        text: '服务类型占比'
      },
      tooltip: {
        formatter: '{a} <br/>{b} : {c} ({d}%)'
      },
      legend: {
        left: 'center',
        bottom: '10',
        // data: this.chartData.legend
      },
      series: [
        {
          name: '服务占比',
          type: 'pie',
          // roseType: 'radius',
          radius: '55%',
          center: ['50%', '42%'],
          data: this.pieData,
          animationEasing: 'cubicInOut',
          animationDuration: 2600
        }
      ]
    };
    myChart.setOption(option);
    window.addEventListener('resize', function () {
      myChart.resize()
    })

    ApiExec<GetServiceAmountOutput>(this.$axios, new GetServiceAmountInput()).then(
        value => {
          this.pieData.push(new PieData('TCP', value.TCP))
          this.pieData.push(new PieData('HTTP', value.HTTP))
          this.pieData.push(new PieData('GRPC', value.GRPC))
          myChart.setOption({
            series: [{
              data: this.pieData
            }]
          })
        }
    )


  }
})
</script>

<style scoped lang="stylus">

</style>
