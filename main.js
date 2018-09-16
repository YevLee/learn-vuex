// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import axios from 'axios'



Vue.config.productionTip = false
Vue.prototype.axios = axios;
//axios.defaults.baseURL="/apis";


//阿里矢量图标

import "./iconFont/iconfont.css"


import store from "./vuex/store.js"

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
