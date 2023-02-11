import { AnimatePresence } from 'framer-motion';
import { useEffect, useState, ChangeEvent } from 'react';
import useDebounce from '../../hooks/useDebounce';
import { BigInput, DropDownContainer, DropDownItem, InputContainer } from './styles';
const chars = [
	'Fulano1',
	'Fulano142',
	'Ciclano1',
	'Joano1',
	'Joana1',
	'Ciclano2',
	'Joano3',
	'Joana3',
	'Ciclano4',
	'Joano44',
	'Joana55',
	'Ciclano67',
	'Joano123',
	'Joano56223',
];

const inputContainer = {
	visible: { opacity: 1 },
	hidden: { opacity: 0 },
};

const list = {
	visible: { opacity: 1, y: 0 },
	hidden: { opacity: 0, y: -100 },
};

const item = {
	visible: { opacity: 1 },
	hidden: { opacity: 0 },
};

function SearchInput() {
	const [filterInput, setFilterInput] = useState('');
	const [selected, setSelected] = useState(false);

	const [filteredData, setFilteredData] = useState<string[] | null>(null);
	const filterInputDebounce = useDebounce(filterInput, 700);

	useEffect(() => {
		handleFilter();
	}, [filterInputDebounce]);

	function handleFilter() {
		if (!filterInput) {
			setFilteredData(null);
			return;
		}
		const newfilteredData = chars.filter((nome) =>
			String(nome.toLowerCase()).includes(String(filterInput.toLowerCase()))
		);

		if (newfilteredData.length > 0) {
			setFilteredData(newfilteredData);
			return;
		}

		setFilteredData(null);
	}

	function handleCharacterClick(nome: string) {
		setFilteredData(null);
		setFilterInput(nome);
		setSelected(true);
	}

	const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
		setFilterInput(event.target.value);
		if (selected) setSelected(false);
	};

	return (
		<InputContainer
			variants={inputContainer}
			initial="hidden"
			animate="visible"
			transition={{ delay: 1.5 }}
		>
			<BigInput
				type="text"
				placeholder="Encontre seu personagem nos 7 reinos de Westeros"
				value={filterInput}
				onChange={handleChange}
			/>
			{filteredData && !selected && (
				<AnimatePresence>
					<DropDownContainer variants={list} initial="hidden" animate="visible">
						{filteredData.map((nome, i) => (
							<DropDownItem key={i} onClick={() => handleCharacterClick(nome)} variants={item}>
								{nome}
							</DropDownItem>
						))}
					</DropDownContainer>
				</AnimatePresence>
			)}
		</InputContainer>
	);
}

export default SearchInput;
