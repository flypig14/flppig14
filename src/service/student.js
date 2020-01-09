import $http from "../utils/request"
const student = {
    namespaced:true,
    state: {
        tableData:[],
        grade:[],
        room:[]
    },
    mutations: {
        setlist(state, payload){
            state.tableData = payload
        },
        setData(state, payload){
            state.grade = payload
        },
        setroom(state, payload){
            state.room = payload
        }
        
    },
    actions: {
        getData({commit}){
            $http.get("/api/manger/student").then(res=>{
                if(res.data.code === 1){
                    commit("setlist", res.data.data)
                }
            })
        },
        getgrade({commit}){
            $http.get("/api/manger/grade").then(res=>{
                if(res.data.code === 1){
                    commit("setData", res.data.data)
                }
            })
        },
        getroom({commit}){
            $http.get("/api/manger/room").then(res=>{
                if(res.data.code === 1){
                    commit("setroom", res.data.data)
                }
            })
        }
    }
    

}

export default student
