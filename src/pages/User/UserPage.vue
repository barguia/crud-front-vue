<template>
  <div>
    <h2>User list</h2>
    <table class="table table-sm table-bordered">
      <tr>
        <th>id</th>
        <th>Name</th>
        <th>E-mail</th>
        <th>Created</th>
      </tr>
      <tr v-for="(user, index) in getUsers" :key="index">
        <td>{{ user.id }}</td>
        <td>{{ user.name }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.created_at }}</td>
      </tr>
    </table>
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";

export default {
  name: "UserPage",
  components: {

  },
  created() {
    this.getUserList()
  },
  computed: {
    ...mapGetters('usuario', ['getUsers'])
  },

  methods: {
    ...mapActions('usuario', ['getUserList'])
  }
}
</script>

<style scoped>

</style>