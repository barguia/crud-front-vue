<template>
  <div :class="classes">
    <label :for="name" class="form-label" v-if="label">{{ label }}</label>
    <select :class="getClass" :id="name" :name="name" @change="updatedSelected">
      <option value="">Selecione</option>
      <option v-for="(item, index) in items" :key="index"
        :value="item[optionValue]"
        :selected="item[optionValue] == modelValue"

      >{{ item[optionLabel] }}</option>
    </select>
    <FieldFeedback :errors="errors" :accurates="accurates" />
  </div>
</template>

<script>
import FieldFeedback from "@/components/Form/FieldFeedback";
export default {
  name: "SelectComponent",
  components:{
    FieldFeedback
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
    modelValue: {
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
  },
  methods: {
    updatedSelected($event) {
      console.log($event.target.value)
      this.$emit('update:modelValue', $event.target.value)
    }
  }
}
</script>

<style scoped>

</style>