<template>
  <NavBody>
    <template v-slot:header>
      <div>Header</div>
    </template>
    <template v-slot:content>
      Content
    </template>
  </NavBody>
</template>

<script lang="ts">
import Vue from 'vue'
import NavBody from '@/components/NavBody.vue'
export default Vue.extend({
  name: 'Dashboard',
  components: { NavBody }
})
</script>

<style scoped>

</style>
