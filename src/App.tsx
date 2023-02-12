import { useEffect } from 'react';
import CardBoard from './components/CardBoard/CardBoard';
import SearchInput from './components/SearchInput/SearchInput';
import { getCharacters } from './store/models/characterSlice';
import { useAppDispatch } from './store/store';

function App() {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(getCharacters());
	}, [dispatch]);

	return (
		<>
			<SearchInput />
			<CardBoard />
		</>
	);
}

export default App;
