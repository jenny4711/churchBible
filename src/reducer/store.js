import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userReducer';
import qtReducer from './qtReducer'

const store = configureStore({
  reducer:{
    user:userReducer,
    qt:qtReducer,
  },
})

export default store;