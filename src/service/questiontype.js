import $http from "../utils/request"
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
        getData({commit}){
            $http.get("/api/exam/getQuestionsType").then(res=>{
                if(res.data.code === 1){
                    commit("setlist", res.data.data)
                }
            })
        },
        setData(state, {text, sort}){
            console.log({text, sort})
            $http.get("/api/exam/insertQuestionsType", {text, sort} 
            ).then(res=>{
                if(res.data.code === 1){
                    alert("添加成功")
                }
            })
        }
    }

}

export default questiontype
