<template>
  <div class="mb-3">
    <label :for="name" class="form-label mb-1" v-if="label">{{ label }}</label>
    <input :type="type"
      :class="getInputClass" :id="name" :name="name" :placeholder="placeholder" :value="modelValue"
      @input="updatedValue"
    >
    <FieldFeedback :errors="errors" :accurates="accurates" />
  </div>
</template>

<script>
import FieldFeedback from "@/components/Form/FieldFeedback";

export default {
  name: "InputComponent",
  components: {
    FieldFeedback
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
    modelValue: String,
    type: {
      type: String,
      default: 'text'
    }
  },
  methods: {
    updatedValue($event) {
      this.$emit("update:modelValue", $event.target.value);
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
    },
  }
}
</script>

<style scoped>

</style>