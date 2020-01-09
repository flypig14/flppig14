
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
            // $http.get("/api/exam/getQuestionsType").then(res=>{
            //     if(res.data.code === 1){
            commit("setlist", data)
            // }
        }
    },
    
}



export default questiontype
