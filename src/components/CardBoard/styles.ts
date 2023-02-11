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
}

export const Card = styled.div.attrs((props: CardProps) => ({
	gridRow: props.gridRow,
	gridColumn: props.gridColumn,
}))`
	border-radius: 1rem;
	background-color: #fff;
	grid-row: ${(props) => props.gridRow};
	grid-column: ${(props) => props.gridColumn};
`;

export const EmptyCard = styled.div``;
