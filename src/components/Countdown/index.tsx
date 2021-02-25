import { useState, useEffect, useContext } from 'react';

import { ChallengesContext } from '../../contexts/ChallengesContext';

import { ContdownContainer, Divider, CountdownButton } from './styled';

let countdownTimeOut: NodeJS.Timeout;
const INITIAL_TIME = 0.1 * 60;

const Countdown = () => {
    const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(INITIAL_TIME);
    const [isActive, setIsActive] = useState(false);

    const [hasFinished, setHasFinished] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [ minuteLeft, minuteRight ] = String(minutes).padStart(2, '0').split('');
    const [ secondLeft, secondRight ] = String(seconds).padStart(2, '0').split('');

    function startCountdown() {
        setIsActive(true);
    }

    function resetCountDown() {
        clearTimeout(countdownTimeOut);
        setIsActive(false);
        setTime(INITIAL_TIME);
    }

    useEffect(() => {

        if (isActive && time > 0) {
            countdownTimeOut = setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        } else if (isActive && time === 0) {
            setHasFinished(true);
            setIsActive(false);
            startNewChallenge();
        }

    }, [isActive, time]);

    return (
        <>
            <ContdownContainer>
                <div>
                    <span>{minuteLeft}</span>
                    <span>{minuteRight}</span>
                </div>

                <Divider>:</Divider>

                <div>
                    <span>{secondLeft}</span>
                    <span>{secondRight}</span>
                </div>
            </ContdownContainer>

            { hasFinished ? (
                <CountdownButton disabled>
                    Ciclo encerrado
                </CountdownButton>
            ) : (
                <>
                    { isActive ? (
                        <CountdownButton type="button" onClick={resetCountDown} active>
                            Abandonar cíclo
                        </CountdownButton>
                    ) : (
                        <CountdownButton type="button" onClick={startCountdown}>
                            Iniciar um ciclo
                        </CountdownButton>
                    )}
                </>
            )}

        </>
    );
}

export default Countdown;
