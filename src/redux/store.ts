import { configureStore } from '@reduxjs/toolkit'
import shapesReducer from './shapesSlice'

const store = configureStore({
  reducer: shapesReducer
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch

export default store