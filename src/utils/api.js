import axios from 'axios'
const REACT_APP_BACKEND_PROXY=process.env.REACT_APP_BACKEND_PROXY;
console.log('proxy',REACT_APP_BACKEND_PROXY)

const api = axios.create({
  baseURL:`${REACT_APP_BACKEND_PROXY}/api`,
  headers:{
    "Content-Type":"application/json"
  },
});

api.interceptors.request.use(
  (request)=>{
    console.log("Starting Request",request);
    const token = sessionStorage.getItem("token")
    if(token){
      request.headers.authorization = `Bearer ${token}`;
    }
    return request;
  },
  (error)=>{
    console.log('request ERROR',error)
    return Promise.reject(error)
  }
)


api.interceptors.response.use(
  (response)=>{
    return response
  },
  (error)=>{
    const errData = error.response ? error.response.data : error;
    console.log('response ERROR',errData);
    return Promise.reject(errData);
  }
)


export default api;