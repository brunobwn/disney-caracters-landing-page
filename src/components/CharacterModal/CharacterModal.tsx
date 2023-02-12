import Modal from 'react-modal';
import { useSelector } from 'react-redux';
import { deselectCharacter } from '../../store/models/modalSlice';
import { RootState, useAppDispatch } from '../../store/store';
import { RiCloseCircleLine } from 'react-icons/ri';
import {
	ButtonClose,
	Container,
	ContentContainer,
	customStyles,
	HouseContainer,
	PictureContainer,
} from './styles';

Modal.setAppElement('#root');

function CharacterModal() {
	const { activeCharacter, isModalOpen } = useSelector((state: RootState) => state.modalSlice);
	const dispatch = useAppDispatch();
	return (
		<Modal
			isOpen={isModalOpen}
			onRequestClose={() => dispatch(deselectCharacter())}
			style={customStyles}
			overlayClassName="Overlay"
		>
			{activeCharacter ? (
				<Container>
					<ButtonClose onClick={() => dispatch(deselectCharacter())}>
						<RiCloseCircleLine size={20} />
					</ButtonClose>
					<PictureContainer>
						<img src={activeCharacter.imageUrl!} alt={activeCharacter.fullName!} />
					</PictureContainer>

					<ContentContainer>
						<div>
							<h2>{activeCharacter.fullName!}</h2>
							<span>{activeCharacter.title!}</span>
						</div>
						<HouseContainer>
							<p>{activeCharacter.family!}</p>
						</HouseContainer>
					</ContentContainer>
				</Container>
			) : null}
		</Modal>
	);
}

export default CharacterModal;
