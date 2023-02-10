import ScrollContainer from 'react-indiana-drag-scroll';
import styled from 'styled-components';

function App() {
	return (
		<ScrollContainer className="fullscreen grabbable">
			<BigContainer>
				{[...Array(50)].map((item) => (
					<Card />
				))}
			</BigContainer>
		</ScrollContainer>
	);
}

export default App;

const BigContainer = styled.div`
	width: 200vw;
	height: 200vh;
	display: grid;
	grid-template-columns: repeat(8, 10vw);
	grid-template-rows: repeat(8, 10vw);
	grid-auto-flow: dense;
	gap: 1rem;
`;

const View = styled.div`
	width: 100vw;
	height: 100vh;
	background-color: #c2d2d2;
`;

const Card = styled.div`
	border-radius: 1rem;
	background-color: #fff;
`;
