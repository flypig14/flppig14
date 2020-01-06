import Vue from 'vue'
import Vuex from 'vuex'
import home from './modules/home'
import login from './modules/login'
import registry from './modules/registry'


Vue.use(Vuex)

export default new Vuex.Store({
    state: {
    },
    mutations: {
    },
    actions: {
    },
    modules: {
        home,
        login,
        registry
    }
})
