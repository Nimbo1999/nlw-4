import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { LevelUpContainer, Overlay, LevelUpButton } from './styled';

const LevelUpModal = () => {
    const { level, isLevelUpModalOpen, closeLevelUpModal } = useContext(ChallengesContext);

    if (isLevelUpModalOpen) return (
        <Overlay>
            <LevelUpContainer>
                <header>{level}</header>

                <strong>Parabéns</strong>
                <p>Você alcançou um novo level.</p>

                <LevelUpButton
                    aria-label="Fechar Modal"
                    onClick={closeLevelUpModal}
                >
                    <img src="/icons/close.svg" alt="Fechar Modal" />
                </LevelUpButton>
            </LevelUpContainer>
        </Overlay>
    );

    return null;
}

export default LevelUpModal;
