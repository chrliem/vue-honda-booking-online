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
/* Development */
// Vue.prototype.$api = 'http://127.0.0.1:8000/api';

/*Production */
Vue.prototype.$api = 'https://be.bintang-group.co.id:8000/api'


new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')
