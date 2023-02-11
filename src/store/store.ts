import { configureStore } from "@reduxjs/toolkit";
import { useDispatch } from "react-redux";
import characterSlice from "./models/characterSlice";

const store = configureStore({
  reducer: {
    characterSlice
  }
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export const useAppDispatch: () => AppDispatch = useDispatch

export default store