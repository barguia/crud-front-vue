import 'bootstrap/dist/css/bootstrap.css';
import { createApp } from 'vue'
import router from "@/router";
import App from './App.vue'

import InputComponent from "@/components/Form/InputComponenet";
import SelectComponent from "@/components/Form/SelectComponent";
import InputRadioCheckbox from "@/components/Form/InputRadioCheckbox";
import CardComponent from "@/components/CardComponent";
import ButtonComponent from "@/components/Form/ButtonComponent";
import PaginateComponent from "@/components/Paginate/PaginateComponent";

const app = createApp(App)
app.use(router)
app.component('InputComponent', InputComponent)
app.component('SelectComponent', SelectComponent)
app.component('InputRadioCheckbox', InputRadioCheckbox)
app.component('CardComponent', CardComponent)
app.component('ButtonComponent', ButtonComponent)
app.component('PaginateComponent', PaginateComponent)

app.mount('#app')

import "bootstrap/dist/js/bootstrap.js"

