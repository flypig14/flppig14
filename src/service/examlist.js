
const examlist = {
    namespaced:true,
    state: {
        tableData:[],
        type:[],
        options:[]
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
