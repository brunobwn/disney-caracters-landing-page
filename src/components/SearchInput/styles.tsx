import styled from 'styled-components';

export const InputContainer = styled.div`
	width: 100%;
	max-width: 45rem;
	position: absolute;
	top: 2rem;
	left: 50%;
	transform: translateX(-50%);
	padding: 0 1rem;
	z-index: 100;
	opacity: 0.8;
	transition: all 250ms ease-in;

	&:has(:focus, :hover, :active) {
		opacity: 1;
	}
`;

export const BigInput = styled.input`
	width: 100%;
	padding: 1rem;
	font-size: 1.2rem;
	background-color: white;
	border-radius: 1rem;
	color: #222;
	box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
	border: 2px solid rgba(0, 0, 0, 0.8);
`;

export const DropDownContainer = styled.ul`
	width: 100%;
	border-radius: 1rem;
	font-size: 1.2rem;
	background-color: white;
	border-radius: 1rem;
	color: #222;
	margin-top: 0.5rem;
	border: 1px solid rgba(0, 0, 0, 0.2);
	box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
	max-height: 13rem;
	overflow: auto;
`;

export const DropDownItem = styled.li`
	width: 100%;
	padding: 1rem;
	box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
	&:hover {
		background-color: rgba(0, 0, 0, 0.1);
		cursor: pointer;
	}
`;
