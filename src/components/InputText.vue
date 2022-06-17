<template>
  <div :class="classes">
    <label :for="name" class="form-label" v-if="label">{{ label }}</label>
    <input :type="type"
      :class="getInputClass" :id="name" :name="name" :placeholder="placeholder" :value="value">
    <FeedbackComponent :errors="errors" :accurates="accurates" />
  </div>
</template>

<script>
import FeedbackComponent from "@/components/FeedbackComponent";
export default {
  name: "InputComponent",
  components: {
    FeedbackComponent
  },

  props: {
    label: String,
    placeholder: String,
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
    value: String,
    classes: String,
    type: {
      type: String,
      default: 'text'
    }
  },
  computed: {
    getClassSize() {
      if (this.size) return `form-control form-control-${this.size}`
      return 'form-control'
    },
    getValidationClass() {
      if (this.errors && this.errors.length > 0) return 'is-invalid'
      if (this.accurates && this.accurates.length > 0) return 'is-valid'
      return ''
    },
    getInputClass() {
      return `${this.getClassSize} ${this.getValidationClass}`
    }
  }
}
</script>

<style scoped>

</style>