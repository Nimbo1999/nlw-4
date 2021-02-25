import { createContext, ReactNode, useState, useContext, useEffect } from 'react';
import { ChallengesContext } from '../ChallengesContext';

let countdownTimeOut: NodeJS.Timeout;
const INITIAL_TIME = 1;
// const INITIAL_TIME = 0.1 * 60;

interface CountDownContextData {
    hasFinished: boolean,
    minutes: number,
    seconds: number,
    isActive: boolean,
    startCountdown: () => void,
    resetCountDown: () => void,
}

interface CountDownProviderProps {
    children: ReactNode,
}

export const CountdownContext = createContext({} as CountDownContextData);

export const CountdownProvider = ({children}: CountDownProviderProps) => {
    const { startNewChallenge } = useContext(ChallengesContext);

    const [time, setTime] = useState(INITIAL_TIME);
    const [isActive, setIsActive] = useState(false);

    const [hasFinished, setHasFinished] = useState(false);
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;

    function startCountdown() {
        setIsActive(true);
    }

    function resetCountDown() {
        clearTimeout(countdownTimeOut);
        setIsActive(false);
        setHasFinished(false);
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
        <CountdownContext.Provider value={{
            hasFinished,
            minutes,
            seconds,
            isActive,
            startCountdown,
            resetCountDown,
        }}>
            {children}
        </CountdownContext.Provider>
    );
}
