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
        },
        submitFn(room_text){
            $http.post("/api/manger/room", {room_text}).then(res=>{
                if(res.data.code === 1){
                    alert(res.data.msg)
                }else{
                    alert(res.data.msg)
                }
            })
            
        }
    }
    

}

export default room
