<template>
  <div class="row">
    <InputText
        label="Teste"
        name="text"
        :errors="[]"
        value="Eduardo Barbelino da Purificação"
        classes="col-md-3"
        size="sm"
        type="boob"
    />

    <InputText
        label="Teste"
        name="text"
        :errors="['Erro Alexsandra não é feia']"
        :accurates="[]"
        value="Eduardo Barbelino da Purificação"
        classes="col-md-3"
        size="sm"
        type="date"
    />
    <SelectValue
        label="Teste"
        name="select"
        option-label="campo"

        :errors="[]"
        :accurates="['Sucesso']"
        classes="col-md-3"
        size="sm"
        :items="[{id: 1, campo: 'teste'},{id: 2, campo: 'teste 2'},]"
        value="1"
    />
  </div>

</template>

<script>

import InputText from "@/components/InputText";
import SelectValue from "@/components/SelectValue";

export default {
  name: 'App',
  components: {
    InputText,
    SelectValue
  }
}
</script>

<style>
#app {

}
</style>
