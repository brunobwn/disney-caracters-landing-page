import styled from 'styled-components';
import { motion } from 'framer-motion';

export const InputContainer = styled(motion.div)`
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
	padding: 1rem 2.5rem 1rem 1rem;
	font-size: 1.2rem;
	background-color: white;
	border-radius: 0.3rem;
	color: #222;
	box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
	border: 1px solid rgba(212, 212, 212, 0.925);
`;

export const DropDownContainer = styled(motion.ul)`
	width: 100%;
	border-radius: 0.3rem;
	font-size: 1.2rem;
	background-color: white;
	color: #424242;
	margin-top: 0.5rem;
	border: 1px solid rgba(212, 212, 212, 0.925);
	box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.5);
	max-height: 12rem;
	overflow: auto;

	scrollbar-width: thin;
	scrollbar-color: #cfcfcf96 #dfe9eb;
	scrollbar-gutter: stable;
	scroll-snap-type: y mandatory;
	scroll-snap-align: start;

	&::-webkit-scrollbar {
		width: 5px;
	}
	&::-webkit-scrollbar-track {
		border-radius: 20px;
		background-color: #fff;
		border: 20px solid transparent;
	}

	&::-webkit-scrollbar-track:hover {
		background-color: #fff;
	}

	&::-webkit-scrollbar-track:active {
		background-color: #fff;
	}

	&::-webkit-scrollbar-thumb {
		border-radius: 5px;
		background-color: #979797;
		border: 2px solid transparent;
	}

	&::-webkit-scrollbar-thumb:hover {
		background-color: #8c8c8c;
	}

	&::-webkit-scrollbar-thumb:active {
		background-color: #515151;
	}
`;

export const DropDownItem = styled(motion.li)`
	width: 100%;
	padding: 1rem;
	box-shadow: 0px 1px 2px rgba(0, 0, 0, 0.05);
	scroll-snap-align: start none;
	&:hover {
		background-color: rgba(0, 0, 0, 0.1);
		cursor: pointer;
	}
`;
