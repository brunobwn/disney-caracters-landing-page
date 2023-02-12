import styled from 'styled-components';

export const customStyles = {
	content: {
		top: '50%',
		left: '50%',
		right: 'auto',
		bottom: 'auto',
		marginRight: '-50%',
		transform: 'translate(-50%, -50%)',
		color: '#222',
		zIndex: 1000,
		width: '100%',
		maxWidth: '43rem',
	},
};

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	padding: 1rem;
	gap: 1rem;
`;

export const PictureContainer = styled.div`
	object-fit: contain;
	object-position: center;
	overflow: hidden;
	display: grid;
	place-items: center;
	border-radius: 0.7rem;
	box-shadow: 3px 3px 5px rgba(0, 0, 0, 0.1);
	max-height: 25rem;
	flex-grow: 1;
	& img {
		width: 100%;
	}
`;

export const HouseContainer = styled.div`
	object-fit: contain;
	object-position: center center;
	overflow: hidden;
	display: grid;
	place-items: center;
`;

export const ContentContainer = styled.div`
	flex-grow: 1;
	display: flex;
	justify-content: space-between;
	align-content: space-between;
`;

export const ButtonClose = styled.button`
	background: transparent;
	color: #222;
	opacity: 0.6;
	position: absolute;
	top: 10px;
	right: 10px;
	border: none;
	outline: none;
	transition: all 250ms ease;

	&:hover {
		opacity: 1;
		cursor: pointer;
	}
`;
