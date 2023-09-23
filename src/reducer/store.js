import { configureStore } from '@reduxjs/toolkit'
import userReducer from './userReducer';
import qtReducer from './qtReducer'
import readingReducer from './readingReducer';

const store = configureStore({
  reducer:{
    user:userReducer,
    qt:qtReducer,
    reading:readingReducer,
  },
})

export default store;