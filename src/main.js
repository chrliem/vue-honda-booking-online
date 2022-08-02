/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import router from './router'
import axios from 'axios'
import moment from 'moment'
import 'material-design-icons-iconfont/dist/material-design-icons.css'

Vue.config.productionTip = false

Vue.prototype.$http = axios;
Vue.prototype.$api = 'http://127.0.0.1:8000/api';

// import Echo from 'laravel-echo';

// import Pusher from 'pusher-js';
// window.Pusher = Pusher;

// window.Echo = new Echo({
//     broadcaster: 'pusher',
//     key: 'bed65d5b27af405706d0',
//     wsHost: process.env.VUE_APP_WEBSOCKETS_SERVER,
//     wsPort: 6001,
//     forceTLS: false,
//     disableStats: true
// });

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')
