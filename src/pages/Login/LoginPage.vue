<template>
  <div class="w-50 mx-auto">
    <CardComponent
        header="Bem vindo ao sistema" classHeader="text-center m-0"
        class="mt-3"
    >
      <InputComponent
          name="email"
          v-model="user.email"
          placeholder="Digite o login"
          type="email"
          label="Email"
      />
      <InputComponent
          name="password"
          v-model="user.password"
          placeholder="Password"
          type="password"
          label="Digite sua senha"
          class="mb-2"
      />

      <ButtonComponent type="submit" @click="logar(user)">
        Login
      </ButtonComponent>

    </CardComponent>


  </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: "LoginPage",
  data() {
    return {
      user: {}
    }
  },
  created() {

  },
  methods: {
    ...mapActions(['logar']),
  }

}
</script>

<style scoped>

</style>