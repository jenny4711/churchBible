import api from '../utils/api'
import { userActionss } from '../reducer/userReducer'

const loginWithToken =()=> async (dispatch)=>{
  try{
   
    const response = await api.get('/user/getToken')
    console.log(response,'response!!!')
    if(response.status !==200)throw new Error(response.error)
    dispatch(userActionss.loginTokenSuccess(response.data))
  }catch(error){
    dispatch(userActionss.loginWithTokenFail(error))
  }
}

const loginWithEmail=({email,password})=>async (dispatch)=>{
  try{
    dispatch(userActionss.loginRequest())
    sessionStorage.removeItem("token");
    const res = await api.post('/auth/login',{email,password});
    if(res.status !==200)throw new Error(res.error);
    sessionStorage.setItem("token",res.data.token)
    dispatch(userActionss.loginSuccess(res.data))
  }catch(error){
    dispatch(userActionss.loginFail(error.error))
  }
}

const logout =()=> async (dispatch)=>{
  sessionStorage.removeItem('token')
  dispatch(userActionss.logout())
}

const registerUser =
({email,name,season,password,level},navigate)=> async (dispatch)=>{
  try{
    dispatch(userActionss.registerUserRequest())
    const res = await api.post('/user',{email,name,season:season?season:'normal',password,level})
    console.log(res,'resres!!!!')
    if(res.status !== 200)throw new Error(res.error)
    dispatch(userActionss.registerUserSuccess())
  }catch(error){
    dispatch(userActionss.registerUserFail(error.error))
    navigate('/login')
  }

}
const adminShowAll=()=>async (dispatch)=>{
  try{
    const res = await api.get('/user/adminR')
    console.log(res,'userAdmin!!!!!!!')

  }catch(error){
    dispatch(userActionss.registerUserFail(error.error))
  }
}

export const userActions = {
  loginWithToken,
  loginWithEmail,
  logout,
  registerUser,
  adminShowAll,
};