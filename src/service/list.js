import $http from "../utils/request"
const list = {
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
            $http.get("/api//exam/exam").then(res=>{
                if(res.data.code === 1){
                    commit("setlist", res.data.data)
                }
            })
        }
    }
    

}

export default list
