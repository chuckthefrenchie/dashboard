// import Vue from 'vue'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { BootstrapVue, BootstrapVueIcons } from 'bootstrap-vue'
import './assets/css/main.css'

// import './assets/main.css'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap-vue/dist/bootstrap-vue.css'

// Vue.use(BootstrapVue)
// Vue.use(BootstrapVueIcons)

const app = createApp(App)

app.use(router)
app.mount('#app')

// app.provide('$BootstrapVue', BootstrapVue);
// app.provide('$BootstrapVueIcons', BootstrapVueIcons);
app.config.globalProperties.$BootstrapVue = BootstrapVue;
app.config.globalProperties.$BootstrapVueIcons = BootstrapVueIcons;


