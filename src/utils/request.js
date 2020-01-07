// import axios from 'axios';
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
//  let requestData = getRequestIdentify(response.config);
//  removePending(requestData)
//  return {
//      code:response.status,
//      message:response.statusText,
//      data:response.data
//  }
// },function(error){
//     //响应错误，返回code值
//     if(err&&err.response){
//         switch(err.response.status){
//             case 400:
//                 err.message='错误请求'
//                 break
//             case 401:
//                 err.message='未授权，请重新登录'
//                 break
//             case 403:
//                 err.message='服务器拒绝请求。'
//                 break
//             case 404:
//                 err.message=' 服务器找不到请求的网页。'
//                 break
//             case 405:
//                 err.message='禁用请求中指定的方法。'
//                 break
//             case 406:
//                 err.message='无法使用请求的内容特性响应请求的网页。'
//                 break
//             case 407:
//                 err.message='此状态代码与 401（未授权）类似，但指定请求者应当授权使用代理。'
//                 break
//             case 408:
//                 err.message='服务器等候请求时发生超时。'
//                 break
//             case 409:
//                 err.message='服务器在完成请求时发生冲突。 服务器必须在响应中包含有关冲突的信息。'
//                 break
//             case 410:
//                 err.message='如果请求的资源已永久删除，服务器就会返回此响应。'
//                 break
//             case 411:
//                 err.message='服务器不接受不含有效内容长度标头字段的请求。'
//                 break
//             case 412:
//                 err.message='服务器未满足请求者在请求中设置的其中一个前提条件。'
//                 break
//             case 413:
//                 err.message='服务器无法处理请求，因为请求实体过大，超出服务器的处理能力。'
//                 break
//             case 414:
//                 err.message='请求的 URI（通常为网址）过长，服务器无法处理。 '
//                 break
//             case 415:
//                 err.message='请求的格式不受请求页面的支持。 '
//                 break
//             case 416:
//                 err.message='如果页面无法提供请求的范围，则服务器会返回此状态代码。'
//                 break
//             case 417:
//                 err.message='服务器未满足"期望"请求标头字段的要求。'
//                 break
//             case 500:
//                 err.message='服务器遇到错误，无法完成请求。 '
//                 break
//             case 501:
//                 err.message='服务器不具备完成请求的功能。 例如，服务器无法识别请求方法时可能会返回此代码。 '
//                 break
//             case 502:
//                 err.message='服务器作为网关或代理，从上游服务器收到无效响应'
//                 break
//             case 503:
//                 err.message='服务器目前无法使用（由于超载或停机维护）。 通常，这只是暂时状态。'
//                 break
//             case 504:
//                 err.message='服务器作为网关或代理，但是没有及时从上游服务器收到请求。'
//                 break
//             case 505:
//                 err.message='服务器不支持请求中所用的 HTTP 协议版本。'
//                 break
//             default:
//                 err.message=`连接错误${err.response.status}`
//         }
//         let errData={
//             code:err.response.status,
//             message:err.message
//         }
//     }
//     return Promise.reject(err)
// });
// export default {
//     get(url,params){
//         return instance.get(url,{params})
//     },
//     post(url,params){
//         return instance.post(url,params)
//     }
// }