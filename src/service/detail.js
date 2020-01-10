const detail = {
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
            console.log(data);
          
            commit("setData", data)
        }
    }
}
export default detail
