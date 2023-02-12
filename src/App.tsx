import { useEffect } from 'react';
import CardBoard from './components/CardBoard/CardBoard';
import { getCharacters } from './store/models/characterSlice';
import { useAppDispatch } from './store/store';

function App() {
	const dispatch = useAppDispatch();
	useEffect(() => {
		dispatch(getCharacters());
	}, [dispatch]);

	return (
		<>
			<CardBoard />
		</>
	);
}

export default App;
