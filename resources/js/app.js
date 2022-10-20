import axios from "axios";

window.axios = axios;
window.axios.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
axios.defaults.baseURL = 'http://127.0.0.1:8000/'

import { createApp } from "vue";
import moment from 'moment';
import { createPinia } from 'pinia'
import {router} from './router/index.js'
import App from "./App.vue";



const app = createApp(App);
const store = createPinia()
app.use(router).use(store).mount('#app')

moment.locale('nl');
app.config.globalProperties.$moment=moment;
