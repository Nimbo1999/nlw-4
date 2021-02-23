import { HeaderWrapper, Divider, Span, CurrentXpBar, CurrentXpText } from './styled';

const ExperienceBar = () => (
    <HeaderWrapper>
        <Span>0 xp</Span>
        <Divider>
            <CurrentXpBar experience={50}/>
            <CurrentXpText experience={50}>300 XP</CurrentXpText>
        </Divider>
        <Span>600 xp</Span>
    </HeaderWrapper>
);

export default ExperienceBar;
