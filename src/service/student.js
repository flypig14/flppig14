import $http from "../utils/request"
const student = {
    namespaced:true,
    state: {
        tableData:[],
        grade:[],
        room:[],
        list:[]
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
        },
        serachFn(state, {student_name, student_id, grade_name, room_text}){
            if(student_name || student_id || grade_name || room_text){
                state.tableData.filter(item=>{
                    if(item.student_name === student_name || item.student_id === student_id || item.grade_name === grade_name || item.room_text === room_text){
                        state.list.push(item);
                        return state.tableData = state.list;                
                    }    
                })
            }
        },
        
    },
    actions: {
        getData({commit}, data){
            commit("setlist", data)
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
        },
        delList(state, {id}){
            $http.delete(`/api/manger/student/${id}`).then(res=>{
                if(res.data.code === 1){
                    console.log(res)
                }
            })
        }
    }
    

}

export default student
