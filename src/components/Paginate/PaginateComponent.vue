<template>
  <div>
    <div class="d-flex justify-content-between">
      <div>
        <ButtonComponent disabled estilo="success">
          {{ config.total }} Registros
        </ButtonComponent>
      </div>
      <div>
        <OptionComponent
          :config="config"
          @page="atualizaPage($event)"
        />
      </div>
    </div>

    <slot/>

    <OptionComponent
      :config="config"
      @page="atualizaPage($event)"
    />
  </div>
</template>

<script>
import OptionComponent from "@/components/Paginate/OptionComponent";
export default {
  name: "PaginateComponent",
  components: {
    OptionComponent
  },
  data() {
    return {
      config: {
        total: 50,
        per_page: 15,
        current_page: 1,
        last_page: 50,
        prev_page: '',
        next_page: 2,
        from: 1,
        to: 15,
      }
    }
  },
  methods: {
    atualizaPage(pageId) {
      this.config.current_page = parseInt(pageId)
      this.config.prev_page = parseInt(pageId) >= 1 ? parseInt(pageId - 1) : null
      this.config.next_page = parseInt(pageId) < parseInt(this.config.last_page) ? parseInt(pageId + 1) : null
    },
  }
}
</script>

<style scoped>

</style>