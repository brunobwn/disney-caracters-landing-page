import { useEffect } from 'react';
import { useSelector } from 'react-redux';
import CardBoard from './components/CardBoard/CardBoard';
import CharacterModal from './components/CharacterModal/CharacterModal';
import LoadingCircle from './components/Loading/Loading';
import { getCharacters } from './store/models/characterSlice';
import { RootState, useAppDispatch } from './store/store';

function App() {
	const dispatch = useAppDispatch();
	const { loading } = useSelector((state: RootState) => state.characterSlice);

	useEffect(() => {
		dispatch(getCharacters());
	}, [dispatch]);

	return (
		<>
			{loading ? <LoadingCircle full={true} /> : <CardBoard />}
			<CharacterModal />
		</>
	);
}

export default App;
