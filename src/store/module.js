import Vue from 'vue'
import Vuex from 'vuex'
import grade from "../service/grade"
import room from "../service/room"
import examlist from "../service/examlist"
import student from "../service/student"
import questiontype from "../service/questiontype"
import userData from '../service/userData'
import idData from '../service/idData'
import apiPower from '../service/apiPower'
import apiRelation from '../service/apiRelation'
import viewPower from '../service/viewPower'
import watch from '../service/watch'
import addExam from '../service/addExam'
import addUser from '../service/addUser'
import paper from '../service/paper'
import detail from '../service/detail'
import pushList from '../service/pushList'


Vue.use(Vuex)

export default new Vuex.Store({

    modules: {
        grade,
        questiontype,
        room,
        student,
        examlist,
        userData,
        idData,
        apiPower,
        apiRelation,
        viewPower,
        watch,
        addExam,
        addUser,
        paper,
        detail,
        pushList
    }
})
