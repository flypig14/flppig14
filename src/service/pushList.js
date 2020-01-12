// import https from '../util/request'
const pushList = {
    namespaced:true,
    state:{
        data:[],
        list:[],
        options:[]
    },
    mutations:{
        setData(state, data){
            state.data = data
        },
        setList(state, data){
            state.list = data
        },
        setOpt(state, data){
            state.options = data
        }
        
    },
    actions:{
        getData({commit}, data){
            commit("setData", data)
        },
        getList({commit}, data){
            commit("setList", data)
        },
        getOpt({commit}, data){
            commit("setOpt", data)
        }
       
    }
}
export default pushList
