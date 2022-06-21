<template>
  <div class="w-50 mx-auto">
    <CardComponent
        header="Bem vindo ao sistema" classHeader="text-center m-0"
        class="mt-3"
    >
      <InputComponent
          name="login"
          placeholder="Digite o login"
          type="text"
          label="Login"
      />
      <InputComponent
          name="password"
          placeholder="Password"
          type="password"
          label="Digite sua senha"
          class="mb-2"
      />
      <ButtonComponent type="submit">
        Login
      </ButtonComponent>

    </CardComponent>


  </div>
</template>

<script>
import CardComponent from "@/components/CardComponent";
export default {
  name: "LoginPage",
  components: {CardComponent}

}
</script>

<style scoped>

</style>