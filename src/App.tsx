import { useEffect } from 'react';
import { useSelector } from 'react-redux/es/exports';
import CardBoard from './components/CardBoard/CardBoard';
import SearchInput from './components/SearchInput/SearchInput';
import { getCharacters } from './store/models/characterSlice';
import { RootState, useAppDispatch } from './store/store';

function App() {

	const { characters } = useSelector((state: RootState) => state.characterSlice)
	const dispatch = useAppDispatch()

	useEffect(()=>{
		dispatch(getCharacters())
	},[dispatch])
	
	return (
		<>
			<SearchInput />
			<CardBoard />
		</>
	);
}

export default App;
