import axios from "axios";
window.axios = axios;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";

import { createApp } from "vue";
import { createPinia } from 'pinia'
import {router} from './router/index.js'
import App from "./App.vue";

const app = createApp(App);
const store = createPinia()
app.use(router).use(store).mount('#app')
