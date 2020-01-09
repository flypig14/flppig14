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
<<<<<<< HEAD
import watch from '../service/watch'
import addExam from '../service/addExam'

=======
import addUser from '../service/addUser'
>>>>>>> list


Vue.use(Vuex)

export default new Vuex.Store({

    modules: {
        grade,
        questiontype,
        room,
        student,
<<<<<<< HEAD
        examlist,
=======
        list,
>>>>>>> list
        userData,
        idData,
        apiPower,
        apiRelation,
        viewPower,
<<<<<<< HEAD
        watch,
        addExam
=======
        addUser
>>>>>>> list
    }
})
