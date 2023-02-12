import { motion } from 'framer-motion';
import styled from 'styled-components';
import { gridType } from './helpers';
import westerosBackground from './../../assets/westeros-background.jpg';

export const grid: gridType = { rows: 20, columns: 20 };

export const BigContainer = styled.div`
	min-width: 1024px;
	width: 200vw;
	aspect-ratio: 1 / 1;
	padding: 5rem;
	display: grid;
	grid-template-columns: repeat(${grid.columns}, 1fr);
	grid-template-rows: repeat(${grid.rows}, 1fr);
	gap: 2rem;
	background-image: url(${westerosBackground});
	background-position: center;
	background-size: cover;
`;

export interface CardProps {
	gridRow: number;
	gridColumn: number;
	imageUrl: string;
}

export const Card = styled(motion.div).attrs((props: CardProps) => ({
	gridRow: props.gridRow,
	gridColumn: props.gridColumn,
	imageUrl: props.imageUrl,
}))`
	border-radius: 1rem;
	background-color: #222;
	grid-row: ${(props) => props.gridRow};
	grid-column: ${(props) => props.gridColumn};
	cursor: pointer;
	background-image: url(${(props) => props.imageUrl});
	background-size: cover;
	opacity: 0.8;
	box-shadow: 3px 3px 10px rgba(0, 0, 0, 0.2);
	transition: all 250ms ease;
	filter: grayscale(0.8);
	&:hover {
		opacity: 1;
		filter: grayscale(0);
		box-shadow: 3px 3px 10px rgba(255, 255, 255, 0.2);
	}
`;
