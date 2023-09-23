import api from '../utils/api'
import { readingActionss } from '../reducer/readingReducer'

const addReading=({title,main,feelingContent},navigate)=>async (dispatch)=>{
  try{
    dispatch(readingActionss.allRequest())
    const res = await api.post('/reading',{title,main,feelingContent})
    if(res.status !==200)throw new Error(res.error)
    dispatch(readingActionss.addingReadingSuccess())
  navigate('/mypage')
  }catch(error){
    dispatch(readingActionss.allFail(error.error))
  }
}

const getReading=()=>async (dispatch)=>{
  try{
    dispatch(readingActionss.allRequest())
    const res = await api.get('/reading')
   
    if(res.status !==200)throw new Error(res.error)
    dispatch(readingActionss.gettingReadingSuccess(res.data.data))
  }catch(error){
    dispatch(readingActionss.allFail(error.error))
  }
}

const deletedReading=(id)=>async (dispatch)=>{
  try{
    dispatch(readingActionss.allRequest())
    const res= await api.delete(`/reading/${id}`)
   
    if(res.status !== 200)throw new Error(res.error)
    dispatch(readingActionss.deleteSuccess())
  dispatch(getReading())
  }catch(error){
    dispatch(readingActionss.allFail(error.error))
  }
}

const adminShowAll=()=>async (dispatch)=>{
  try{
    dispatch(readingActionss.allRequest())
    const res = await api.get('/reading/adminR')
   
    dispatch(readingActionss.adminShowAllSuccess(res.data.data))
  }catch(error){
    dispatch(readingActionss.allFail(error.error))
  }
}

export const readingActions={
  addReading,
  getReading,
  deletedReading,
  adminShowAll,
  
}
