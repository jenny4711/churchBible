import { createSlice } from '@reduxjs/toolkit';
const initialState={
  qt:{},
  loading:false,
  error:""
};
const qtSlice=createSlice({
  name:'qt',
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
    addingQtSuccess(state,action){
      state.loading=false;
    },
    gettingQtSuccess(state,action){
      state.qt = action.payload;
    },
    deleteSuccess(state,action){
      state.loading=false;
    
    }

  }
});
export const qtActionss = qtSlice.actions
export default qtSlice.reducer