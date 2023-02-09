import { useState, useEffect, useRef } from 'react';
import styled from 'styled-components';
import './App.css';

interface Position {
	x: number;
	y: number;
}

function App() {
	const bigContainerRef = useRef<HTMLDivElement>(null);
	const [scrollPosition, setScrollPosition] = useState<Position>({ x: 0, y: 0 });
	const [mousePos, setMousePos] = useState<Position>({ x: 0, y: 0 });

	const handleMouseMove = (event: MouseEvent) => {
		setMousePos({ x: event.clientX, y: event.clientY });
		window.scrollTo(event.clientX, event.clientY);
	};

	const handleMouseDown = (event: MouseEvent) => {
		setMousePos({ x: event.clientX, y: event.clientY });
		window.scrollTo(event.clientX, event.clientY);
	};
	useEffect(() => {
		window.addEventListener('mousemove', handleMouseMove);

		return () => {
			window.removeEventListener('mousemove', handleMouseMove);
		};
	}, []);
	return (
		<BigContainer ref={bigContainerRef}>
			{[...Array(50)].map((item) => (
				<Card />
			))}
		</BigContainer>
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
