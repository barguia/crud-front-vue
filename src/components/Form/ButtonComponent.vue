<template>
  <button :class="getClass" :type="type"><slot/></button>
</template>

<script>
export default {
  name: "ButtonComponent",
  data() {
    return {
      zisesPermitidos: ['sm', 'lg'],
    }
  },
  props: {
    type: String,
    estilo: {
      type: String,
      default: 'primary'
    },
    size: {
      type: String
    }
  },
  computed: {
    getSize() {
      if (this.size && this.zisesPermitidos.indexOf(this.size)) {
        return `btn-${this.size}`
      }
      return ''
    },
    getClass() {
      return `btn btn-${this.estilo} ${this.getSize}`
    }
  }
}
</script>

<style scoped>

</style>