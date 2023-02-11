import { BigInput, DropDownContainer, DropDownItem, InputContainer } from './styles';
const chars = ['Fulano', 'Ciclano', 'Joano', 'Joano'];
function SearchInput() {
	return (
		<InputContainer>
			<BigInput type="text" placeholder="Encontre seu personagem nos 7 reinos de Westeros" />
			<DropDownContainer>
				{chars.map((nome, i) => (
					<DropDownItem key={i}>{nome}</DropDownItem>
				))}
			</DropDownContainer>
		</InputContainer>
	);
}

export default SearchInput;
