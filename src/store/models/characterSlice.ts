import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import axios from 'axios';
import Character from '../types/character';

const apiURL = 'https://thronesapi.com/api/v2/Characters';

// ----------- Função Async Thunk pra buscar os personagens na API --------------

export const getCharacters = createAsyncThunk('/getCharacters', async () => {
	const response: Character[] = await axios
		.get(apiURL)
		.then((res) => res.data)
		.catch((err) => console.log(err));

	return response;
});

// ---------- Interface e constante para o estado inicial do Slice --------------

interface CharacterInitialState {
	characters: Character[] | null;
	loading: boolean;
	activeCharacter: Character | null;
	isModalOpen: boolean;
}

const initialState = {
	characters: null,
	loading: false,
	activeCharacter: null,
	isModalOpen: false,
} as CharacterInitialState;

// ------------------------ Criação do Slice ------------------------------------

const characterSlice = createSlice({
	name: 'characters',
	initialState,
	reducers: {},
	extraReducers(builder) {
		builder
			.addCase(getCharacters.pending, (state, action) => {
				state.loading = true;
			})
			.addCase(getCharacters.fulfilled, (state, action: PayloadAction<Character[]>) => {
				state.characters = action.payload;
				state.loading = false;
			})
			.addCase(getCharacters.rejected, (state, action) => {
				state.loading = false;
			});
	},
});
export default characterSlice.reducer;
