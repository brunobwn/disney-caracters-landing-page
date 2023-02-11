import { useRef, useEffect } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import { createPossiblePositions } from './helpers';
import { BigContainer, Card, grid } from './styles';

export const possibleSpotsInitial = createPossiblePositions(grid);

function CardBoard() {
	const scrollContainer = useRef<HTMLDivElement>(null);
	const possibleSpots = possibleSpotsInitial;
	const caracters = Array(53).fill(1);

	function getRandomPosition() {
		const posIndex = Math.floor(Math.random() * possibleSpots.length);
		const pos = possibleSpots[posIndex];
		possibleSpots.slice(posIndex, 1);
		return pos;
	}

	useEffect(() => {
		if (scrollContainer.current) {
			scrollContainer.current.scrollTo(Math.random() * 5000, Math.random() * 5000);
		}
	}, []);

	return (
		<ScrollContainer className="fullscreen grabbable" innerRef={scrollContainer}>
			<BigContainer>
				{caracters.map((char, i) => {
					const [x, y] = getRandomPosition();
					return <Card key={i} gridRow={x} gridColumn={y}/>;
				})}
			</BigContainer>
		</ScrollContainer>
	);
}

export default CardBoard;
