import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import './assets/css/main.css'
import mitt from 'mitt'
import axios from 'axios'
import VueAxios from 'vue-axios'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

const emitter = mitt();
const app = createApp(App)

app.use(router)
app.mount('#app')

app.config.globalProperties.$BootstrapVue = BootstrapVue;
app.config.globalProperties.$BootstrapVueIcons = BootstrapVueIcons;
app.config.globalProperties.emitter = emitter;
app.config.globalProperties.VueAxios = VueAxios;
app.config.globalProperties.axios = axios;






