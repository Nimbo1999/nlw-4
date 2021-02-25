import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { HeaderWrapper, Divider, Span, CurrentXpBar, CurrentXpText } from './styled';

const ExperienceBar = () => {
    const { currentExperience, experienceToNextLevel } = useContext(ChallengesContext);

    const percentToNextLevel = Math.round(currentExperience * 100) / experienceToNextLevel;
    
    return (
        <HeaderWrapper>
            <Span>0 xp</Span>

            <Divider>
                <CurrentXpBar experience={percentToNextLevel}/>

                <CurrentXpText experience={percentToNextLevel}>
                    {currentExperience} xp
                </CurrentXpText>
            </Divider>

            <Span>{experienceToNextLevel} xp</Span>
        </HeaderWrapper>
    );
}
export default ExperienceBar;
