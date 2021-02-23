import styled from 'styled-components';

const HeaderWrapper = styled.header`
    display: flex;
    align-items: center;
`;

const Span = styled.span`
    font-size: 1rem;
`;

const Divider = styled.div`
    flex: 1;
    height: ${({theme}) => theme.spacing(.5)};
    border-radius: ${({theme}) => theme.spacing(.5)};
    background-color: ${({ theme }) => theme.pallet.grayLine};
    margin: 0 1.5rem;
    position: relative;
`;

interface XpBar {
    experience?: number
}

const CurrentXpBar = styled.div<XpBar>`
    width: ${({ experience = 0 }) => `${experience}%`};
    height: ${({theme}) => theme.spacing(.5)};
    border-radius: ${({theme}) => theme.spacing(.5)};
    background-color: ${({ theme }) => theme.pallet.green};
`;

const CurrentXpText = styled.span<XpBar>`
    position: absolute;
    left: ${({ experience = 0 }) => `${experience}%`};
    top: ${({theme}) => theme.spacing(1.5)};
    transform: translateX(-50%);
    display: ${({ experience }) => experience ? 'inline-block' : 'none' }
`;

export { HeaderWrapper, Span, Divider, CurrentXpBar, CurrentXpText };
