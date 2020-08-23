<template>
  <day-line-chart :today="today" :yesterday="yesterday" :id="this.tempData.id"></day-line-chart>
</template>

<script lang="ts">
import Vue from 'vue'
import DayLineChart from '@/components/base/DayLineChart.vue'
import ApiExec, {
  GetServiceStatInput,
  GetServiceStatOutput
} from "@/repositories/repo";

export class StatisticPaneData {
  id = 0

  constructor(props?: any) {
    if (props !== undefined) {
      if (props.id !== undefined) {
        this.id = props.id
      }
    }
  }

}

export default Vue.extend({
  name: "StatisticPane",
  components: {DayLineChart},
  props: {
    tempData: {
      type: StatisticPaneData,
      default: new StatisticPaneData()
    }
  },
  data() {
    return {
      today: [] as number[],
      yesterday: [] as number[]
    }
  },
  created() {
    ApiExec<GetServiceStatOutput>(this.$axios, new GetServiceStatInput(this.tempData.id)).then(
        value => {
          this.today = value.today_list
          this.yesterday = value.yesterday_list
        }
    )
  }
})
</script>

<style scoped>

</style>
