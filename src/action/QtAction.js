import api from '../utils/api'
import { qtActionss } from '../reducer/qtReducer'

const addQt=({date,main,meditContent},navigate)=>async (dispatch)=>{
  try{
 dispatch(qtActionss.allRequest())
 const res = await api.post('/qt',{date,main,meditContent})
 console.log(res,'!!!!!!!qt')
 if(res.status !==200) throw new Error(res.error)
 dispatch(qtActionss.addingQtSuccess())
navigate('/mypage')

  }catch(error){
    dispatch(qtActionss.allFail(error.error))
  }
}

const getQt=()=>async (dispatch)=>{
  try{
    dispatch(qtActionss.allRequest())
    const res = await api.get('/qt')
    if(res.status !== 200)throw new Error(res.error)
    console.log(res.data,'getQt!!!!!!!!!!!!!!!!!!!!!!!!')
    dispatch(qtActionss.gettingQtSuccess(res.data))
  }catch(error){
    dispatch(qtActionss.allFail(error.error))
  }
}

const deleteQt=(id)=>async(dispatch)=>{
  try{
    dispatch(qtActionss.allRequest())
    const res = await api.delete(`/qt/${id}`)
    if(res.status !== 200)throw new Error(res.error)
    dispatch(qtActionss.deleteSuccess())
  dispatch(getQt())
  }catch(error){
    dispatch(qtActionss.allFail(error.error))
  }
}

const adminShowQt =()=>async (dispatch)=>{
  try{
    dispatch(qtActionss.allRequest())
    const res = await api.get(`/qt/adminQ`)
    dispatch(qtActionss.adminShowAllSuccess(res.data.data))
    
    
  }catch(error){
    dispatch(qtActionss.allFail(error.error))
  }
}



export const qtActions ={
  addQt,
  getQt,
  deleteQt,
  adminShowQt,
 
  
}