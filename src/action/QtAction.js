import api from '../utils/api'
import { qtActionss } from '../reducer/qtReducer'

const addQt=({date,main,meditContent},navigate)=>async (dispatch)=>{
  try{
 dispatch(qtActionss.allRequest())
 const res = await api.post('/qt',{date,main,meditContent})
 console.log(res,'!!!!!!!qt')
 if(res.status !==200) throw new Error(res.error)
 dispatch(qtActionss.addingQtSuccess())
navigate('/')

  }catch(error){
    dispatch(qtActionss.allFail(error.error))
  }
}

const getQt=()=>async (dispatch)=>{
  try{}catch(error){}
}

const deleteQt=(id)=>async(dispatch)=>{
  try{}catch(error){}
}

export const qtActions ={
  addQt,
  getQt,
  deleteQt,
}