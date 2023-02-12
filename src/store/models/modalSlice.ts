import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import Character from '../types/character';

// ---------- Interface e constante para o estado inicial do Slice --------------

interface modalState {
	activeCharacter: Character | null;
	isModalOpen: boolean;
}

const initialState = {
	activeCharacter: null,
	isModalOpen: false,
} as modalState;

// ------------------------ Criação do Slice ------------------------------------

const modalSlice = createSlice({
	name: 'modal',
	initialState,
	reducers: {
		selectCharacter: (state, action: PayloadAction<Character>) => {
			state.activeCharacter = action.payload;
			state.isModalOpen = true;
		},
		deselectCharacter: (state) => {
			state.isModalOpen = false;
			state.activeCharacter = null;
		},
	},
});
export const { selectCharacter, deselectCharacter } = modalSlice.actions;
export default modalSlice.reducer;
