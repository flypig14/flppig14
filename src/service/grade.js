// import $http from "../utils/request"
const grade = {
    namespaced:true,
    state: {
        tableData:[],
        classData:[],
        nameData:[]
    },
    mutations: {
        setlist(state, payload){
            state.tableData = payload
        },
        setClass(state, payload){
            state.classData = payload
        },
        setName(state, payload){
            state.nameData = payload
        }
        
    },
    actions: {
        getData({commit}, data){
            commit("setlist", data)
        },
        getClass({commit}, data){
            commit('setClass', data)
        },
        getName({commit}, data){
            commit('setName', data)
        }
        
    
    }
}

export default grade
