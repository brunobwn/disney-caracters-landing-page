import { useEffect, useState } from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import styled from 'styled-components';

const grid = { rows: 15, columns: 20 };
const possibleSpotsOld = Array(grid.rows * grid.columns)
	.fill(1)
	.map((_, i) => i + 1);

function createPossiblePositions(size: number) {
	return Array(size)
		.fill(1)
		.map((_, i) => i + 1);
}
const possibleSpots = {
	x: createPossiblePositions(grid.columns),
	y: createPossiblePositions(grid.rows),
};

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

function App() {
	const [caracters, setCaracters] = useState([]);
	function suffleArray(data: []) {
		const newData = Array(data.length);
		const pos = Math.floor(Math.random() * data.length);
	}

	async function getCaracters() {
		const caracters = await fetch('https://thronesapi.com/api/v2/Characters')
			.then((res) => res.json())
			.then((data) => {
				setCaracters(data);
			});
	}

	useEffect(() => {
		getCaracters();
	}, []);

	function getRandomXPosition() {
		const pos = Math.floor(Math.random() * possibleSpots.x.length);
		possibleSpots.x.slice(pos, 1);
		console.log(possibleSpots.x[pos]);
		return possibleSpots.x[pos];
	}

	function getRandomYPosition() {
		const pos = Math.floor(Math.random() * possibleSpots.y.length);
		possibleSpots.y.slice(pos, 1);
		console.log(possibleSpots.y[pos]);
		return possibleSpots.y[pos];
	}
	return (
		<ScrollContainer className="fullscreen grabbable">
			<BigContainer>
				{caracters.map((char) => (
					<Card gridRow={getRandomXPosition()} gridColumn={getRandomYPosition()} />
				))}
			</BigContainer>
		</ScrollContainer>
	);
}

export default App;
