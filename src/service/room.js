import $http from "../utils/request"
const room = {
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
            $http.get("/api/manger/room").then(res=>{
                if(res.data.code === 1){
                    commit("setlist", res.data.data)
                }
            })
        }
    }
    

}

export default room
