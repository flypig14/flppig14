import Vue from 'vue'
import Vuex from 'vuex'
import userData from '../service/userData'
import idData from '../service/idData'
import apiPower from '../service/apiPower'
import apiRelation from '../service/apiRelation'
import viewPower from '../service/viewPower'


Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        userData,
        idData,
        apiPower,
        apiRelation,
        viewPower
    }
})
