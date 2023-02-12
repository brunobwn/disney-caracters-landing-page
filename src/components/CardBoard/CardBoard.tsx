import { useRef, useEffect } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import { createPossiblePositions } from './helpers';
import { BigContainer, Card, grid } from './styles';
import { useSelector } from 'react-redux/es/exports';
import { RootState } from '../../store/store';

export const possibleSpotsInitial = createPossiblePositions(grid);
type CardBoardProps = {
	children: React.ReactElement;
};
function CardBoard({ children }: CardBoardProps) {
	const scrollContainer = useRef<HTMLDivElement>(null);
	const { characters } = useSelector((state: RootState) => state.characterSlice);

	const possibleSpots = possibleSpotsInitial;

	function getRandomPosition() {
		const posIndex = Math.floor(Math.random() * possibleSpots.length);
		const pos = possibleSpots[posIndex];
		possibleSpots.slice(posIndex, 1);
		return pos;
	}

	useEffect(() => {
		if (scrollContainer.current) {
			const totalWidth = scrollContainer.current.scrollWidth;
			const totalHeight = scrollContainer.current.scrollHeight;
			const scrollWidth = (totalWidth - window.innerWidth) / 2;
			const scrollHeight = (totalHeight - window.innerHeight) / 2;
			scrollContainer.current.scrollTo(scrollWidth, scrollHeight);
		}
	}, []);

	function getRandomMs() {
		return Math.random() * 3;
	}

	return (
		<ScrollContainer className="fullscreen grabbable" innerRef={scrollContainer}>
			<BigContainer>
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
								initial={{ opacity: 0, size: 0.3 }}
								animate={{ opacity: 1, size: [1.5, 1] }}
								transition={{ delay: getRandomMs() }}
								id={`${char.fullName}`}
							/>
						);
					})}
			</BigContainer>
			{children}
		</ScrollContainer>
	);
}

export default CardBoard;
