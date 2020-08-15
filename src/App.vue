<template>
  <div id="app">
    <transition name="slide-fade" mode="out-in">
      <router-view/>
    </transition>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  name: 'App',
  components: {},
  data() {
    return {}
  }
})
</script>

<style lang="stylus">
#app
  font-family Avenir, Helvetica, Arial, sans-serif
  -webkit-font-smoothing antialiased
  -moz-osx-font-smoothing grayscale
  text-align center
  color #2c3e50
  position absolute
  top 0
  bottom 0
  height 100%
  width 100%

.slide-fade-enter-active
.slide-fade-leave-active
  transition: all 0.5s ease

.slide-fade-enter
  transform: translateX(300px);
  opacity: 0;


.slide-fade-leave-to
  transform: translateX(-300px);
  opacity: 0;

</style>
