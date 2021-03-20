import Vue from 'vue'
import App from './App.vue'
import router from './router'
import './vant/vant.js'
import axios from 'network/axios.js'

Vue.config.productionTip = false

Vue.prototype.$bus = new Vue()

Vue.prototype.$axios = axios


new Vue({
    router,
    render: h => h(App)
}).$mount('#app')