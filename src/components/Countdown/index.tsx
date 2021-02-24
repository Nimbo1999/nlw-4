import { useState, useEffect } from 'react';
import { ContdownContainer, Divider, CountdownButton } from './styled';

const Countdown = () => {
    const [time, setTime] = useState(25 * 60);
    const [active, setActive] = useState(false);

    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    const [ minuteLeft, minuteRight ] = String(minutes).padStart(2, '0').split('');
    const [ secondLeft, secondRight ] = String(seconds).padStart(2, '0').split('');

    function startCountdown() {
        setActive(true);
    }

    useEffect(() => {

        if (active && time > 0) {
            setTimeout(() => {
                setTime(time - 1);
            }, 1000);
        }

    }, [active, time]);

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

            <CountdownButton type="button" onClick={startCountdown}>
                Iniciar um ciclo
            </CountdownButton>
        </>
    );
}

export default Countdown;
