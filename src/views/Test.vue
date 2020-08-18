<template>
  <el-button @click="change(4)"></el-button>
</template>

<script lang="ts">
import Vue from 'vue'


export default Vue.extend({
  name: "Test",
  data() {
    return {
      obj: {
        b: 1,
        a: 0
      }
    }
  },
  computed:{
    a: function(): number{
      return this.obj.a
    }
  },
  watch:{
    a: {
      handler: function (val,oldVal) {
        console.log(val)
        console.log(oldVal)
      }
    }
  },
  methods: {
    change(v: number) {
      this.obj.a=v
    }
  }
})
</script>

<style scoped lang="stylus">
.slide-fade-enter-active
  transition all 0.5s ease

.slide-fade-enter
  transform translateX(300px)
  opacity 0
</style>
