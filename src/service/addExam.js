import https from "../utils/request"

const addExam = {
    namespaced:true,
    state: {
        type:[],
        options:[]
    },
    mutations: {
        setType(state, data){
            state.type = data
        },
        setOpt(state, data){
            state.options = data
        }
    },
    actions: {
        getType({commit}){
            https.get('/api/exam/examType').then(res=>{
                if(res.data.code === 1){
                    commit('setType', res.data.data)
                    // this.tableData = res.data.data.slice(0, this.page);
                    // this.total = res.data.data.length;
                }
            })
        },
        getOpt({commit}){
            https.get('/api/exam/getQuestionsType').then(res=>{
                if(res.data.code === 1){
                    commit('setOpt', res.data.data)
                    // this.tableData = res.data.data.slice(0, this.page);
                    // this.total = res.data.data.length;
                }
            })
        }
    }
}

export default addExam
