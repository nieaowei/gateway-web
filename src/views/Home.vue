<template>
  <div class="home">
    <el-button type="success" v-on:click="test"></el-button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'Home',
  components: {},
  methods: {
    test (): void {
      console.log('123')
      this.$axios('http://www.baidu.com')
    }
  }
})
</script>
