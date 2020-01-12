import https from "../utils/request"

const watch = {
    namespaced:true,
    state: {
        data:[],
        type:[],
        questype:[],
        options:[],
        list:[],
        newdata:[]
    },
    mutations: {
        setList(state, data){
            state.data = data
            state.newdata = data
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
            console.log(exam_name, questions_type_text)
            if(exam_name && questions_type_text){
                let aa = state.newdata.filter(item=>{
                    if(item.exam_name === exam_name && item.questions_type_text === questions_type_text){
                        return item;
                    }
                })
                // console.log(aa)
                state.data = aa
                // console.log(this.list)
                // console.log(state.data, state.newdata)
                // console.log(data)
            }

        }

    },
    actions: {
        getList({commit}, data){
        
            commit('setList', data);
                  
        },
        getData({commit}){
            https.get('/api/exam/subject').then(res=>{
                if(res.data.code === 1){
                    commit('setData', res.data.data)
                   
                }
            })
        },
        getType({commit}){
            https.get('/api/exam/examType').then(res=>{
                if(res.data.code === 1){
                    commit('setType', res.data.data)
                    
                }
            })
        },
        getOpt({commit}){
            https.get('/api/exam/getQuestionsType').then(res=>{
                if(res.data.code === 1){
                    commit('setOpt', res.data.data)
                    
                }
            })
        },
        
    }
}

export default watch
