<template>
  <div :class="classes">
    <label :for="name" class="form-label" v-if="label">{{ label }}</label>
    <select :class="getClass" :id="name" :name="name" :value="value">
      <option value="">Selecione</option>
      <option v-for="(item, index) in items" :key="index"
        :value="item[optionValue]"
        :selected="item[optionValue] == value"
      >{{ item[optionLabel] }}</option>
    </select>
    <FeedbackComponent :errors="errors" :accurates="accurates" />
  </div>
</template>

<script>
import FeedbackComponent from "@/components/FeedbackComponent";
export default {
  name: "InputComponent",
  components:{
    FeedbackComponent
  },
  props: {
    label: String,
    name: {
      type: String,
      required: true
    },
    errors: Array,
    accurates: Array,
    readOnly: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    },
    size: String,
    value: {
      type: String,
      default: ''
    },
    classes: String,
    items: {
      type: [Object, Array]
    },
    optionValue: {
      type: String,
      default: 'id'
    },
    optionLabel: {
      type: String,
      required: true
    }
  },
  computed: {
    getClassSize() {
      if (this.size) return `form-control form-control-${this.size}`

      return 'form-control'
    },
    getClassError() {
      if (this.errors && this.errors.length > 0) return 'is-invalid'
      return ''
    },
    getClass() {
      return `${this.getClassSize} ${this.getClassError}`
    }
  }
}
</script>

<style scoped>

</style>