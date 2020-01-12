const paper = {
    namespaced:true,
    state:{
        tableData:[]
    },
    mutations:{
        setData(state, payload){
            state.tableData = payload
        }
    },
    actions:{
        getData({commit}, data){
           
          
            commit("setData", data)
        }
    }
}
export default paper
