
const questiontype = {
    namespaced:true,
    state: {
        tableData:[]
    },
    mutations: {
        setlist(state, payload){
            state.tableData = payload
        }
        
    },
    actions: {
        getData({commit}, data){
          
            commit("setlist", data)
            
        }
    },
    
}



export default questiontype
