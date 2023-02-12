import { useRef, useEffect } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import { createPossiblePositions } from './helpers';
import { BigContainer, Card, grid } from './styles';
import { useSelector } from 'react-redux/es/exports';
import { RootState } from '../../store/store';
import SearchInput from '../SearchInput/SearchInput';

export const possibleSpotsInitial = createPossiblePositions(grid);

function CardBoard() {
	const { characters } = useSelector((state: RootState) => state.characterSlice);
	const scrollContainer = useRef<HTMLDivElement>(null);
	const cardsRef = useRef<HTMLDivElement[]>([]);

	const possibleSpots = possibleSpotsInitial;

	function getRandomPosition() {
		const posIndex = Math.floor(Math.random() * possibleSpots.length);
		const pos = possibleSpots[posIndex];
		possibleSpots.slice(posIndex, 1);
		return pos;
	}

	useEffect(() => {
		cardsRef.current = cardsRef.current.slice(0, characters?.length);
	}, [characters]);

	// EM DUVIDA SE FICA ON => SCROLLA PARA MEIO DO MAPA
	// useEffect(() => {
	// 	if (scrollContainer.current) {
	// 		const totalWidth = scrollContainer.current.scrollWidth;
	// 		const totalHeight = scrollContainer.current.scrollHeight;
	// 		const scrollWidth = (totalWidth - window.innerWidth) / 2;
	// 		const scrollHeight = (totalHeight - window.innerHeight) / 2;
	// 		scrollContainer.current.scrollTo(scrollWidth, scrollHeight);
	// 	}
	// }, []);

	function getRandomMs() {
		return Math.random() * 3;
	}

	function handleCardClick(id: number, ref: HTMLDivElement) {
		ref.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
	}

	return (
		<>
			<ScrollContainer className="fullscreen grabbable" innerRef={scrollContainer}>
				<BigContainer transition={{ delayChildren: 5 }}>
					{characters &&
						characters.map((char, i) => {
							const [x, y] = getRandomPosition();
							return (
								<Card
									key={i}
									gridRow={x}
									gridColumn={y}
									imageUrl={char.imageUrl ?? ''}
									whileHover={{ scale: 1.1 }}
									whileTap={{ scale: 0.95 }}
									initial={{
										opacity: 0,
										size: 0.3,
									}}
									animate={{
										opacity: 1,
										size: [1.5, 0.8, 1],
										transition: {
											delay: getRandomMs(),
										},
									}}
									id={`#${char.id}`}
									ref={(el) => {
										if (el) return (cardsRef.current[i] = el);
									}}
									onClick={() => handleCardClick(char.id, cardsRef.current[i])}
								/>
							);
						})}
				</BigContainer>
			</ScrollContainer>
			<SearchInput refs={cardsRef.current} />
		</>
	);
}

export default CardBoard;
