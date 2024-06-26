import { configureStore } from '@reduxjs/toolkit'
import dataSlice from '../feature/dataSlice'


export const store = configureStore({
  reducer: {
    storeData : dataSlice
},
})

