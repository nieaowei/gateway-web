<template>
  <NavBody>
    <template v-slot:header>
    </template>
    <template v-slot:content>
      <el-row style="width: 100%;height: 50%;">
        <el-col :xs="12" :sm="12" :md="12" :lg="6" :xl="6"
                v-for="(card,key) in cards" :key="key">
          <icon-total-card :icon="card.icon" :label="card.label" :color="card.color"></icon-total-card>
        </el-col>
      </el-row>
      <el-row>
        <el-col>
          <div id="line"></div>
        </el-col>
        <el-col>
        </el-col>
      </el-row>
    </template>
  </NavBody>
</template>

<script lang="ts">
import Vue from 'vue'
import NavBody from '@/components/base/NavBody.vue'
import IconTotalCard, {IconTotalCardData} from '@/components/base/IconTotalCard.vue'
export default Vue.extend({
  name: 'Dashboard',
  components: {NavBody, IconTotalCard},
  data: function () {
    return {
      cards: [
        {
          label: '服务数',
          content: 0,
          icon: 'list-ol',
          color: '#2c9442'
        },
        {
          label: '当日请求量',
          content: 0,
          icon: 'eye',
          color: '#c35160'
        },
        {
          label: '当日QPS',
          content: 0,
          icon: 'search',
          color: '#3b4899'

        },
        {
          label: '租户数',
          content: 0,
          icon: 'user-friends',
          color: '#996f3b'

        }
      ] as IconTotalCardData[]
    }
  },
  mounted() {
    // this.$echarts.init(document.getElementById('line'))
  }
})
</script>

<style scoped lang="stylus">
.el-card
  margin 15px

//color #F22947

//min-width 20%
</style>
