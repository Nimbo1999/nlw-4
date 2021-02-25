import { useContext } from 'react';
import { ChallengesContext } from '../../contexts/ChallengesContext';
import { ProfileContainer, ProfileDiv, ProfileImage } from './styled';

const Profile = () => {
    const { level } = useContext(ChallengesContext);

    return (
        <ProfileContainer>
            <ProfileImage src="https://github.com/nimbo1999.png" />
            <ProfileDiv>
                <strong>Matheus Lopes</strong>
                <p>
                    <img src="icons/level.svg" alt="level up" />
                    Level {level}
                </p>
            </ProfileDiv>

        </ProfileContainer>
    );
}

export default Profile;