<template>
  <day-line-chart :today="today" :yesterday="yesterday" :id="this.tempData.id"></day-line-chart>
</template>

<script lang="ts">
import Vue from 'vue'
import DayLineChart from '@/components/base/DayLineChart.vue'
import ApiExec, {
  GetServiceStatInput,
  GetServiceStatOutput, GetTenantStatInput, GetTenantStatOutput
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
  name: "TenantStatisticPane",
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
    ApiExec<GetTenantStatOutput>(this.$axios, new GetTenantStatInput(this.tempData.id)).then(
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
