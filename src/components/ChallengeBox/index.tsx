import { useContext } from 'react';

import { ChallengesContext } from '../../contexts/ChallengesContext';
import { CountdownContext } from '../../contexts/CountDownContext';

import { ChallengeBoxContainer, ChallengeNotActive, ChallengeActive, ChallengeButton } from './styled';

export  default function ChallengeBox() {
    const { activeChallenge, resetChallenge, completeChallenge } = useContext(ChallengesContext);
    const { resetCountDown } = useContext(CountdownContext);

    function handleChallengeSucceeded() {
        completeChallenge();
        resetCountDown();
    }

    function handleChallengeFailed() {
        resetChallenge();
        resetCountDown();
    }

    return (
        <ChallengeBoxContainer>
            { activeChallenge ? (
                <ChallengeActive>
                    <header>Ganhe {activeChallenge.amount} xp</header>

                    <main>
                        <img src={`icons/${activeChallenge.type}.svg`} />
                        <strong>Novo desafio</strong>
                        <p>{activeChallenge.description}</p>
                    </main>

                    <footer>
                        <ChallengeButton type="button" failed onClick={handleChallengeFailed}>
                            Falhei
                        </ChallengeButton>

                        <ChallengeButton type="button" onClick={handleChallengeSucceeded}>
                            Completei
                        </ChallengeButton>
                    </footer>

                </ChallengeActive>
            ) : (
                <ChallengeNotActive>
                    <strong>Finalize um ciclo para receber um desafio</strong>

                    <p>
                        <img src="icons/level-up.svg" alt="level-up" />
                        Avance de level completando desafios.
                    </p>
                </ChallengeNotActive>
            )}
        </ChallengeBoxContainer>
    );
};
