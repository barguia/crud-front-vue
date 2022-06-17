<template>
  <BootstrapLayout>
    <router-view/>
  </BootstrapLayout>
</template>

<script>
import BootstrapLayout from '@/layouts/BootstrapLayout'
export default {
  name: 'App',
  components: {
    BootstrapLayout
  },

}
</script>

<style>
#app {

}
</style>
