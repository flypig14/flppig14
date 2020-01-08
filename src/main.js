import Vue from 'vue'
import App from './App.vue'
import router from './router'
<<<<<<< HEAD
import store from './store/modules'
=======
import store from './store/module'
>>>>>>> 6c06f4dc3d3a8a6848f8ec7754817437a30f48c0
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import http from "./utils/request"

Vue.prototype.$http = http

Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
