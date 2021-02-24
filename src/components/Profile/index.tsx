import { ProfileContainer, ProfileDiv, ProfileImage } from './styled';

const Profile = () => {

    return (
        <ProfileContainer>
            <ProfileImage src="https://github.com/nimbo1999.png" />
            <ProfileDiv>
                <strong>Matheus Lopes</strong>
                <p>
                    <img src="icons/level.svg" alt="level up" />
                    Level 1
                </p>
            </ProfileDiv>

        </ProfileContainer>
    );
}

export default Profile;