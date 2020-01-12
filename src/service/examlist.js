
const examlist = {
    namespaced:true,
    state: {
        tableData:[],
        type:[],
        options:[],
        list:[],
        detail:[],
        newdata:[]
    },
    mutations: {
        setList(state, data){
            state.tableData = data
            state.newdata = data
        },
        setType(state, data){
            state.type = data
        },
        setData(state, data){
            state.options = data
        },
        searchFn(state, {exam_name, subject_text}){
         
            if(exam_name && subject_text){
                console.log(typeof exam_name, subject_text)
                let aa = state.newdata.filter(item=>{
                    if(item.exam_name === exam_name && item.subject_text === subject_text){
                        console.log(item)
                        return item
                    }
                })
                state.tableData = aa
            }
            
        },
        setDetail(state, payload){
            state.detail = payload
        }
        
    },
    actions: {
        getList({commit}, data){
            commit('setList', data)
        },
        getType({commit}, data){

            commit('setType', data)

        },
        getData({commit}, data){

            commit('setData', data)
        },
        getDetail({commit}, data){
            commit("setDetail", data)
        }
    },
};
export default examlist
