/* eslint-disable */
import Vue from 'vue'
import App from './App.vue'
import vuetify from '@/plugins/vuetify'
import router from './router'
import axios from 'axios'
import moment from 'moment'
import 'material-design-icons-iconfont/dist/material-design-icons.css'
import VueCompositionApi from '@vue/composition-api'
import { VueRecaptcha } from 'vue-recaptcha'


Vue.config.productionTip = false
Vue.prototype.$http = axios;
/* Development */
// Vue.prototype.$api = 'http://127.0.0.1:8000/api';
// Vue.prototype.$baseURL = 'http://127.0.0.1:8000'
/*Production */
Vue.prototype.$api = 'https://be.bintang-group.co.id/api'
Vue.prototype.$baseURL = 'https://be.bintang-group.co.id'
// Vue.prototype.$api = 'http://booking.bintang-group.co.id:8000/api'

Vue.use(VueCompositionApi)
Vue.component('vue-recaptcha', VueRecaptcha)

new Vue({
  vuetify,
  router,
  render: h => h(App),
}).$mount('#app')

