import { configureStore } from '@reduxjs/toolkit';
import { useDispatch } from 'react-redux';
import characterSlice from './models/characterSlice';
import modalSlice from './models/modalSlice';

const store = configureStore({
	reducer: {
		characterSlice,
		modalSlice,
	},
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;

export default store;
