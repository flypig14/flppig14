import Vue from 'vue'
import Vuex from 'vuex'
import grade from "../service/grade"
import room from "../service/room"
import list from "../service/list"
import student from "../service/student"
import questiontype from "../service/questiontype"


Vue.use(Vuex)

export default new Vuex.Store({

    modules: {
        grade,
        questiontype,
        room,
        student,
        list
    }
})
