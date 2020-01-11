import https from "../utils/request"

const watch = {
    namespaced:true,
    state: {
        data:[],
        type:[],
        questype:[],
        options:[],
        list:[]
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
        },
        searchVn(state, {exam_name, questions_type_text}){
            if(exam_name || questions_type_text){
                state.data.filter(item=>{
                    if(item.exam_name === exam_name || item.questions_type_text === questions_type_text){
                        state.list.push(item);
                        return state.data = state.list;
                    }
                })
            }
            console.log(state.data, state.list)
        }
    },
    actions: {
        getList({commit}){
            https.get('/api/exam/questions/new').then(res=>{
                if(res.data.code === 1){
                    commit('setList', res.data.data);
                    console.log(res.data.data)
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
