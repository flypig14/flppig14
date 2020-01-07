import axios from 'axios';
import {Notification} from 'element-ui';
import status from '../config/status';  
import cookie from 'js-cookie';
import Router from '../router/index';
//  const pending = {};
//  const CancelToken = axios.CancelToken;
//  const removePending = (key,isRequest=false)=>{
//      if(pending[key]&&isRequest){
//         pending[key]('取消重复请求')
//      }
//      delete pending[key]
//  };
const instance = axios.create({
    baseURL:process.env.API,
    timeout:5000
});
//请求拦截器
instance.interceptors.request.use(function(config){
 //白名单
 let writeArr=['/api/registry','/api/login'];
 if(!writeArr.includes(config.url)){
     let token = cookie.get('token');
     if(!token){
         Router.replace('/login')
     }
     config.headers['authorization']=token;
 }
 return config;
},function(error){
    return Promise.reject(error);
});
// 响应拦截器
instance.interceptors.response.use(function(response){
//  let requestData = getRequestIdentify(response.config);
//  removePending(requestData)
//  return {
//      code:response.status,
//      message:response.statusText,
//      data:response.data
//  }
return response;
},function(error){
    //响应错误，返回code值
    // let errData={
    //     code:err.response.status,
    //     message:err.message
    // };
   Notification({
      message : status[err.response.status]
   })
    return Promise.reject(err)
});
export default {
    get(url,params){
        return instance.get(url,{params})
    },
    post(url,params){
        return instance.post(url,params)
    }
}
