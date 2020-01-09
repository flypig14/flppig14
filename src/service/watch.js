import https from "../utils/request"

const watch = {
    namespaced:true,
    state: {
        data:[],
        type:[],
        questype:[],
        options:[]
    },
    mutations: {
        setList(state, data){
            state.data = data
        },
        setData(state, data){
            state.type = data
        },
        setType(state, data){
            state.questype = data
        },
        setOpt(state, data){
            state.options = data
        }
    },
    actions: {
        getList({commit}){
            https.get('/api/exam/questions/new').then(res=>{
                if(res.data.code === 1){
                    commit('setList', res.data.data)
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

export default watch
