import styled, { css } from 'styled-components';

const ChallengeBoxContainer = styled.div`
    height: 100%;
    background-color: ${({theme}) => theme.pallet.white};
    border-radius: 5%;
    box-shadow: 0 0 60px rgba(0, 0, 0, 0.05);

    padding: 1.5rem 2rem;

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    text-align: center;

`;

const ChallengeNotActive = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;

    strong {
        font-size: 1.5rem;
        font-weight: 500;
        line-height: 1.4;
    }

    p {
        display: flex;
        flex-direction: column;
        align-items: center;
        line-height: 1.4;
        max-width: 70%;
        margin-top: 3rem;
    }

    img {
        margin-bottom: 1rem;
    }
`;

const ChallengeActive = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;

    header {
        color: ${({theme}) => theme.pallet.blue};
        font-weight: 600;
        font-size: 1.25rem;
        padding: 0 2rem 1.5rem;
        border-bottom: 1px solid ${({theme}) => theme.pallet.grayLine};
    }

    main {
        flex: 1;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;

        strong {
            font-size: 2rem;
            font-weight: 600;
            color: ${({theme}) => theme.pallet.title};
            margin: 1.5rem 0 1rem;
        }

        p {
            line-height: 1.5;
        }
    }

    footer {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 1rem;
    }
`;


interface ChallengeButtonI {
    failed?: boolean;
}

const ChallengeButton = styled.button<ChallengeButtonI>`
    height: 3rem;

    display: flex;
    align-items: center;
    justify-content: center;
    
    border: 0;
    border-radius: 5px;

    color:${({theme}) => theme.pallet.white};

    font-size: 1rem;
    font-weight: 600;

    background-color: ${({ theme }) => theme.pallet.red};

    transition: filter 0.2s;

    ${({ failed }) => !failed && css`
        background-color: ${({ theme }) => theme.pallet.green};
    `}

    &:hover {
        filter: brightness(0.9);
    }
`;

export { ChallengeBoxContainer, ChallengeNotActive, ChallengeActive, ChallengeButton };
