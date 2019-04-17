import Vue from 'vue'
import App from './App'
import router from './router'
import lazyload from 'vue-lazyload'

import def_loading_img from './assets/image/loading.gif'

import axios from 'axios'
require('./mock/mock.js')

Vue.config.productionTip = false

// axios是不能在组件使用的，所以axios改写成vue的原型属性，在组件中进行数据请求时可以使用：this.$http.get.then(res=>{}).catch(err=>{})
Vue.prototype.$http = axios

Vue.use(lazyload, {
  loading: def_loading_img
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
})
