
const examlist = {
    namespaced:true,
    state: {
        tableData:[],
        type:[],
        options:[],
        list:[],
    },
    mutations: {
        setList(state, data){
            state.tableData = data
        },
        setType(state, data){
            state.type = data
        },
        setData(state, data){
            state.options = data
        },
        searchFn(state, {exam_name, subject_text}){
            console.log(state.tableData)
            if(exam_name || subject_text){
                state.tableData.filter(item=>{
                    if(item.exam_name === exam_name || item.subject_text === subject_text){
                        state.list.push(item);
                        console.log(state.list)
                        return state.tableData = state.list;
                        
                    }
                })
            }
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

        }
    },
};
export default examlist
