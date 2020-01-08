import $http from "../utils/request"
const student = {
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
        getData({commit}){
            $http.get("/api/manger/student").then(res=>{
                if(res.data.code === 1){
                    commit("setlist", res.data.data)
                }
            })
        }
    }
    

}

export default student
