import { AnimatePresence } from 'framer-motion';
import { useEffect, useState, ChangeEvent, useRef } from 'react';
import { ImSearch } from 'react-icons/im';
import useDebounce from '../../hooks/useDebounce';
import { BigInput, DropDownContainer, DropDownItem, InputContainer } from './styles';
import { useSelector } from 'react-redux/es/exports';
import { RootState } from '../../store/store';
import Character from '../../store/types/character';

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

type SearchInputProps = {
	refs: HTMLDivElement[] | null;
};

function SearchInput({ refs }: SearchInputProps) {
	const [filterInput, setFilterInput] = useState('');
	const [selected, setSelected] = useState(false);

	const [filteredData, setFilteredData] = useState<Character[] | null>(null);
	const filterInputDebounce = useDebounce(filterInput, 300);

	const inputRef = useRef<HTMLInputElement>(null);

	const { characters } = useSelector((state: RootState) => state.characterSlice);

	useEffect(() => {
		handleFilter();
	}, [filterInputDebounce]);

	function handleFilter() {
		if (!filterInput) {
			setFilteredData(null);
			return;
		}
		const newfilteredData = characters?.filter((char) =>
			String(char.fullName?.toLowerCase()).includes(String(filterInput.toLowerCase()))
		);

		if (newfilteredData && newfilteredData.length > 0) {
			setFilteredData(newfilteredData);
			return;
		}

		setFilteredData(null);
	}

	function handleCharacterClick(char: Character) {
		setFilteredData(null);
		setFilterInput(char.fullName ?? '');
		setSelected(true);
		const findRef = refs?.find((ref) => ref.id === `#${char.id}`);
		if (findRef) {
			findRef.scrollIntoView({ behavior: 'smooth', block: 'center', inline: 'center' });
		}
		handleInputBlur();
	}

	function handleInputBlur() {
		inputRef.current?.blur();
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
				ref={inputRef}
			/>
			<ImSearch
				size={16}
				style={{ position: 'absolute', right: '2rem', top: '1.2rem', color: '#222' }}
			/>
			{filteredData && !selected && (
				<AnimatePresence>
					<DropDownContainer variants={list} initial="hidden" animate="visible">
						{filteredData.map((char) => (
							<DropDownItem key={char.id} onClick={() => handleCharacterClick(char)} variants={item}>
								{char.fullName}
							</DropDownItem>
						))}
					</DropDownContainer>
				</AnimatePresence>
			)}
		</InputContainer>
	);
}

export default SearchInput;
