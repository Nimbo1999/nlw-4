import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CompletedChallengerContainer } from './styled';

const CompletedChallenges = () => {
    const { challengesCompleted } = useContext(ChallengesContext);

    return (
        <CompletedChallengerContainer>
            <span>Desafios completos</span>
            <span>{challengesCompleted}</span>
        </CompletedChallengerContainer>
    );
}

export default CompletedChallenges;
