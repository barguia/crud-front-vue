<template>
  <nav>
    <ul class="pagination">
      <li class="page-item">
        <button class="page-link" @click="emitPage(config.prev_page)" :disabled="!config.prev_page">Previous</button>
      </li>
      <li class="page-item" v-for="(page, index) in pages"
          :key="index"
          :class="page == config.current_page ? 'active' : ''"
      >
        <button class="page-link" @click="emitPage(page)" >{{ page }}</button>
      </li>
      <template v-if="pages.indexOf(config.last_page) === -1">
        <li class="page-item">
          <span class="space">...</span>
        </li>
        <li class="page-item" :class="config.current_page == config.last_page ? 'active' : ''">
          <button class="page-link" @click="emitPage(config.last_page)" >{{ config.last_page }}</button>
        </li>
      </template>
      <li class="page-item" :disabled="!config.next_page">
        <button class="page-link" @click="emitPage(config.next_page)">Next</button>
      </li>
    </ul>
  </nav>
</template>

<script>
export default {
  name: "OptionComponent",
  props: {
    config: Object,
  },
  data() {
    return {
      length_paginate: 6,
    }
  },
  computed: {
    pages() {
      var pages = []
      let diff = this.config.last_page - this.config.current_page
      var i = this.config.current_page

      if (diff <= this.length_paginate) {
        i = this.config.last_page >= this.length_paginate ? this.config.last_page - this.length_paginate : 1
      }

      for (i; i <= this.config.last_page; i++) {
        pages.push(i)
        if (pages.length == this.length_paginate) break;
      }

      return pages
    }
  },
  methods: {
    emitPage(pageId) {
      if (pageId) this.$emit('page', pageId)
    }
  }

}
</script>

<style scoped>
.space {
  padding: 0.375rem 0.75rem;
  margin-left: 0.375rem;
  margin-right: 0.375rem;
  position: relative;
  display: block;
  color: #0d6efd;
  background-color: #fff;
  border: 1px solid #dee2e6;
  /*transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out, border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;*/
}
</style>