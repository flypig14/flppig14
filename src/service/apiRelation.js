import https from '../utils/request'

const apiRelation = {
    namespaced:true,
    state: {
        tableData:[]
    },
    mutations: {
        setList(state, data){
            state.tableData = data
        }
    },
    actions: {
        getList({commit}){
            https.get('/api/user/identity_api_authority_relation').then(res=>{
                if(res.data.code === 1){
                    commit('setList', res.data.data)
                }
            })
        }
    }
};
export default apiRelation
