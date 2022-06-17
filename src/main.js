import 'bootstrap/dist/css/bootstrap.css';
import { createApp } from 'vue'
import router from "@/router";
import App from './App.vue'

import InputText from "@/components/Form/InputText";
import SelectValue from "@/components/Form/SelectValue";
import InputRadioCheckbox from "@/components/Form/InputRadioCheckbox";


const app = createApp(App)
app.use(router)
app.component('InputText', InputText)
app.component('SelectValue', SelectValue)
app.component('InputRadioCheckbox', InputRadioCheckbox)
app.mount('#app')

import "bootstrap/dist/js/bootstrap.js"

