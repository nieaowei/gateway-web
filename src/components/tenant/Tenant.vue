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
import NavBody from '@/components/base/NavBody.vue'

export default Vue.extend({
  name: 'Tenant',
  components: {NavBody}
})
</script>

<style scoped>

</style>