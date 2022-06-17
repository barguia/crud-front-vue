<template>
  <div :class="classes">
    <div :class="getValidationClass">
      <div class="form-check" v-for="(item, index) in items" :key="index">
        <input :type="getType"
               :class="getInputClass" :id="name" :name="name" :placeholder="placeholder" :value="item[optionValue]">
        <label :for="name" class="form-check-label">{{ item[optionLabel] }}</label>
      </div>
    </div>
    <FieldFeedback :errors="errors" :accurates="accurates" />
  </div>
</template>

<script>
import FieldFeedback from "@/components/Form/FieldFeedback";
export default {
  name: "InputRadioCheckbox",
  components: {
    FieldFeedback
  },

  props: {
    label: {
      type: String,
      required: true
    },
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
    optionValue: {
      type: String,
      default: 'id'
    },
    items: {
      type: [Object, Array]
    },
    optionLabel: {
      type: String,
      required: true
    },
    type: {
      type: String,
      default: 'text'
    }
  },
  computed: {
    getType() {
      if (this.type == 'radio') return this.type;
      return 'checkbox'
    },
    getClassSize() {
      if (this.size) return `form-check-input form-control-${this.size}`
      return 'form-check-input'
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
