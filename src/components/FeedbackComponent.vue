<template>
  <div :class="typeFeedback" v-show="errors || accurates">
    <div v-for="(message, index) in messages" :key="index">{{ message }}</div>
  </div>
</template>
<script>
export default {
  name: "FeedbackComponent",
  props: {
    errors: Array,
    accurates: Array,
  },
  computed: {
    typeFeedback() {
      if (this.errors && this.errors.length > 0) return 'invalid-feedback'
      if (this.accurates && this.accurates.length > 0) return 'valid-feedback'
      return ''
    },
    messages() {
      if (this.errors && this.errors.length > 0) return this.errors
      if (this.accurates && this.accurates.length > 0) return this.accurates

      return []
    }

  }
}
</script>

<style scoped>

</style>