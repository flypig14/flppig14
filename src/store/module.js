import Vue from 'vue'
import Vuex from 'vuex'
import grade from "../service/grade"
import room from "../service/room"
import list from "../service/list"
import student from "../service/student"
import questiontype from "../service/questiontype"
import userData from '../service/userData'
import idData from '../service/idData'
import apiPower from '../service/apiPower'
import apiRelation from '../service/apiRelation'
import viewPower from '../service/viewPower'
import addUser from '../service/addUser'


Vue.use(Vuex)

export default new Vuex.Store({

    modules: {
        grade,
        questiontype,
        room,
        student,
        list,
        userData,
        idData,
        apiPower,
        apiRelation,
        viewPower,
        addUser
    }
})
