import https from '../utils/request'
const apiPower = {
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
            https.get('/api/user/api_authority').then(res=>{
                if(res.data.code === 1){
                    commit('setList', res.data.data)
                }
            })
        }
    }
};
export default apiPower
