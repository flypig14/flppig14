// import axios from 'axios';
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
// const instance = axios.create({
//     baseURL:process.env.API,
//     timeout:5000
// });
// //请求拦截器
// instance.interceptors.request.use(function(config){
//  //白名单
//  let writeArr=['/api/registry','/api/login'];
//  if(!writeArr.includes(config.url)){
//      let token = JSON.parse(localStorage.getItem('info'));
//      config.headers.token=token
//  }
//  return config;
// },function(error){
//     return Promise.reject(error);
// });
// //响应拦截器
// instance.interceptors.response.use(function(response){
const instance = axios.create({
    baseURL:process.env.API,
    timeout:5000
});
//请求拦截器
instance.interceptors.request.use(function(config){
    //白名单
    let writeArr = ['/api/registry', '/api/login'];
    if(!writeArr.includes(config.url)){
        let token = cookie.get('token');
        if(!token){
            Router.replace('/login')
        }
        config.headers['authorization'] = token;
    }
    return config;
}, function(error){
    return Promise.reject(error);
});
// 响应拦截器
instance.interceptors.response.use(function(response){

    return response;
<<<<<<< HEAD
}, function(error){
    Notification({
        message : status[err.response.status]
    })
    return Promise.reject(error)
=======
>>>>>>> 6c06f4dc3d3a8a6848f8ec7754817437a30f48c0
}, function(err){
    //响应错误，返回code值
   
    Notification({
        message : status[err.response.status]
    })
    return Promise.reject(err)
});
export default {
    get(url, params){
        return instance.get(url, {params})
    },
    post(url, params){
        return instance.post(url, params)
    }
}
