import https from '../utils/request'
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
        getList({commit}){
            https.get('/api/exam/exam').then(res=>{
                if(res.data.code === 1){
                    commit('setList', res.data.exam)
                }
            })
        },
        getType({commit}){
            https.get('/api/exam/examType').then(res=>{
                if(res.data.code === 1){
                    commit('setType', res.data.data)
                    // this.tableData = res.data.data.slice(0, this.page);
                    // this.total = res.data.data.length;
                }
            })
        },
        getData({commit}){
            https.get('/api/exam/subject').then(res=>{
                if(res.data.code === 1){
                    commit('setData', res.data.data)
                    // this.tableData = res.data.data.slice(0, this.page);
                    // this.total = res.data.data.length;
                }
            })
        },
    },
};
export default examlist
