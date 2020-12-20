import Vue from 'vue'
import axios from 'axios'
import store from './store/index.js'
import App from './App'
import router from './router'

Vue.config.productionTip = false
Vue.prototype.$axios = axios


new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
