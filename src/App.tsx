import ScrollContainer from 'react-indiana-drag-scroll';
import styled from 'styled-components';

const grid = { rows: 15, columns: 20 };

type gridType = {
	rows: number;
	columns: number;
};

function createPossiblePositions(grid: gridType) {
	const possibles = [];
	for (let i = 1; i <= grid.rows; i++) {
		for (let j = 1; j <= grid.columns; j++) {
			possibles.push([i, j]);
		}
	}
	return possibles;
}

const BigContainer = styled.div`
	min-width: 1024px;
	width: 200vw;
	aspect-ratio: 1 / 1;
	padding: 5rem;
	display: grid;
	grid-template-columns: repeat(${grid.columns}, 1fr);
	grid-template-rows: repeat(${grid.rows}, 1fr);
	gap: 2rem;
`;

interface CardProps {
	gridRow: number;
	gridColumn: number;
}

const Card = styled.div.attrs((props: CardProps) => ({
	gridRow: props.gridRow,
	gridColumn: props.gridColumn,
}))`
	border-radius: 1rem;
	background-color: #fff;
	grid-row: ${(props) => props.gridRow};
	grid-column: ${(props) => props.gridColumn};
`;

const EmptyCard = styled.div``;

interface IPosition {
	x: number;
	y: number;
}
const possibleSpotsInitial = createPossiblePositions(grid);

function App() {
	const possibleSpots = possibleSpotsInitial;
	const caracters = Array(53).fill(1);

	function getRandomPosition() {
		const posIndex = Math.floor(Math.random() * possibleSpots.length);
		const pos = possibleSpots[posIndex];
		possibleSpots.slice(posIndex, 1);
		return pos;
	}

	return (
		<ScrollContainer className="fullscreen grabbable">
			<BigContainer>
				{caracters.map((char, i) => {
					const [x, y] = getRandomPosition();
					return <Card key={i} gridRow={x} gridColumn={y} />;
				})}
			</BigContainer>
		</ScrollContainer>
	);
}

export default App;
