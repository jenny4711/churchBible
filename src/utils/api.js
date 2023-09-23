import axios from 'axios'
const REACT_APP_LOCAL_BACKEND=process.env.REACT_APP_LOCAL_BACKEND;
console.log('proxy',REACT_APP_LOCAL_BACKEND)

const api = axios.create({
  baseURL:`${REACT_APP_LOCAL_BACKEND}/api`,
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