import https from "../utils/request"

const user = {
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
            https.get('/api/user/user').then(res=>{
                if(res.data.code === 1){
                    commit('setList', res.data.data)
                    // this.tableData = res.data.data.slice(0, this.page);
                    // this.total = res.data.data.length;
                }
            })
        }
    }
}

export default user
