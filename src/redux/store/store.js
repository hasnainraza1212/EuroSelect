import { configureStore } from '@reduxjs/toolkit'
import userReducer from '../userSlice.js/userSlice'

export const store = configureStore({
  reducer: {
    usersData:userReducer
  },
})