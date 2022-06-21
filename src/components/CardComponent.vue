<template>
  <div class="card">
    <div class="card-header" v-if="header">
      <h4 :class="classHeader">{{ header }}</h4>
    </div>
    <div class="card-body">
      <slot/>
    </div>
  </div>
</template>

<script>
export default {
  name: "CardComponent",
  props: {
    header: String,
    classHeader: String,
    classBody: String
  }
}
</script>

<style scoped>

</style>