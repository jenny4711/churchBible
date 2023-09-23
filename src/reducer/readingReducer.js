import { createSlice } from '@reduxjs/toolkit';
const initialState ={
  reading:[],
  loading:false,
  error:"",
  adminAll:[]
 
}
const readingSlice = createSlice({
  name:'reading',
  initialState,
  reducers:{
    allRequest(state,action){
      state.loading = true;
      state.qt=null;
      state.error ="";
    },
    allFail(state,action){
      state.loading=false;
      state.error=action.payload;
    },
    addingReadingSuccess(state,action){
      state.loading=false;
    },
    gettingReadingSuccess(state,action){
      state.reading=action.payload;
    },
    deleteSuccess(state,action){
      state.loading=false;
    
    },
    adminShowAllSuccess(state,action){
      state.adminAll=action.payload
    }
   
  }
})

export const readingActionss = readingSlice.actions
export default readingSlice.reducer