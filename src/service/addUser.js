import https from '../utils/request'
const addUser = {
    namespaced:true,
    state: {
        tableDate:[],
        tableData:[],
        tableDatb:[],
        tableDatc:[]
    },
    mutations: {
        setListId(state, data){
            state.tableDate = data;
        },
        setListUser(state, data){
            state.tableData = data
        },
        setListView(state, data){
            state.tableDatb = data
        },
        setListApi(state, data){
            state.tableDatc = data
        }
    },
    actions: {
        //添加用户
        getList(state, {user_name, user_pwd}){
            https.post('/api/user', {user_name, user_pwd}).then(res=>{
                if(res.data.code === 1){
                    console.log(res.data.msg)
                }
            })
        },
        //更新用户
        upDate(state, {user_name, user_pwd, user_id}){
            https.put('/api/user/user', {user_name, user_pwd, user_id}).then(res=>{
                if(res.data.code === 1){
                    console.log(res.data.msg)
                }
            })
        },
        //添加身份
        getId(state, {identity_text}){
            https.get('/api//user/identity/edit', {identity_text}).then(res=>{
                if(res.data.code === 1){
                    console.log(res.data.msg)
                }
            })
        },
        //添加api接口权限
        getApi(state, {api_authority_text, api_authority_url, api_authority_method}){
            https.get('/api//user/authorityApi/edit', {api_authority_text, api_authority_url, api_authority_method}).then(res=>{
                if(res.data.code === 1){
                    console.log(res.data.msg)
                }
            })
        },
        //添加视图接口权限
        getView(state, {view_authority_text}){
            https.get('api/user/authorityView/edit', {view_authority_text}).then(res=>{
                if(res.data.code === 1){
                    console.log(res.data.msg)
                }
            })

        },
        //给身份设定api接口权限
        updataApi(state, {identity_id, api_authority_id}){
            https.post('/api/user/setIdentityApi', {identity_id, api_authority_id}).then(res=>{
                if(res.data.code === 1){
                    console.log(res.data.msg)
                }
            })
        },
        //给身份设定视图权限
        updataView(state, {identity_id, view_authority_id}){
            https.post('/api/user/setIdentityView', {identity_id, view_authority_id}).then(res=>{
                if(res.data.code === 1){
                    console.log(res.data.msg)
                }
            })
        },
        getListId({commit}){
            https.get('/api/user/identity').then(res=>{
                if(res.data.code === 1){
                    commit('setListId', res.data.data)
                }
            })
        },
        getListUser({commit}){
            https.get('/api/user/user').then(res=>{
                if(res.data.code === 1){
                    commit('setListUser', res.data.data)
                }
            })
        },
        getListView({commit}){
            https.get('/api/user/view_authority').then(res=>{
                if(res.data.code === 1){
                    commit('setListView', res.data.data)
                }
            })
        },
        getListApi({commit}){
            https.get('/api/user/api_authority').then(res=>{
                if(res.data.code === 1){
                    commit('setListApi', res.data.data)
                }
            })
        }

    },

}
export default addUser;
