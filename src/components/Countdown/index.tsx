import { useContext } from 'react';
import { CountdownContext } from '../../contexts/CountDownContext';

import { ContdownContainer, Divider, CountdownButton } from './styled';

const Countdown = () => {
    const {
        minutes,
        seconds,
        hasFinished,
        isActive,
        startCountdown,
        resetCountDown
    } = useContext(CountdownContext);

    const [ minuteLeft, minuteRight ] = String(minutes).padStart(2, '0').split('');
    const [ secondLeft, secondRight ] = String(seconds).padStart(2, '0').split('');

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
