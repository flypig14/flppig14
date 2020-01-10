// import $http from "../utils/request"
const grade = {
    namespaced:true,
    state: {
        tableData:[],
        classData:[],
        nameData:[]
    },
    mutations: {
        setlist(state, payload){
            state.tableData = payload
        },
        setClass(state, payload){
            state.classData = payload
        },
        setName(state, payload){
            state.nameData = payload
        }
        
    },
    actions: {
        getData({commit}, data){
            commit("setlist", data)
        },
        getClass({commit}, data){
            commit('setClass', data)
        },
        getName({commit}, data){
            commit('setName', data)
        }
        //添加班级
        //     addClass(state, {grade_name, room_id, subject_id}){
        //         $http.post('/api/manger/grade', {grade_name, room_id, subject_id}).then(res=>{
        //             if(res.data.code === 1){
        //                 alert(res.data.msg)
        //             }else{
        //                 alert('失败')
        //             }
        //         })
        //     },
        //     //编辑班级
        //     changeClass(state, {room_id, room_text}){
        //         $http.put('/api/manger/room/update', {room_id, room_text}).then(res=>{
        //             if(res.data.code === 1){
        //                 alert(res.data.msg)
        //             }else{
        //                 console.log(res)
        //             }
        //         })
        //     }
        // }
    
    }
}

export default grade
