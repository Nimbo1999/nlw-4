import styled, { css } from 'styled-components';

const ContdownContainer = styled.div`
    display: flex;
    align-items: center;
    font-family: Rajdhani;
    font-weight: 600;
    color: ${({ theme }) => theme.pallet.title};

    > div {
        flex: 1;

        display: flex;
        align-items: center;
        justify-content: space-evenly;

        background-color: ${({ theme }) => theme.pallet.white};
        box-shadow: 0 0 ${({ theme }) => theme.spacing(7.5)} rgba(0, 0, 0, 0.05);
        border-radius: 5px;
        font-size: 8.5rem;
        text-align: center;

        span {
            flex: 1;
            border-right: 1px solid #f0f1f3;

            &:last-child {
                border-left: 1px solid #f0f1f3;
            }
        }
    }
`;

const Divider = styled.span`
    font-size: 6.25rem;
    margin: 0 0.5rem;
`;

interface CountDownButton {
    active?: boolean,
}

const CountdownButton = styled.button<CountDownButton>`
    width: 100%;
    height: 5rem;

    margin-top: 2rem;

    display: flex;
    align-items: center;
    justify-content: center;

    border: 0;
    border-radius: 5px;

    background-color: ${({ theme }) => theme.pallet.blue};
    color: ${({ theme }) => theme.pallet.white};

    font-size: 1.25rem;
    font-weight: 600;

    transition: background-color 200ms linear;

    &:not(:disabled):hover {
        background-color: ${({ theme }) => theme.pallet.blueDark};
    }

    ${({ active }) => active && css`
        background-color: ${({ theme }) => theme.pallet.white};
        color: ${({ theme }) => theme.pallet.title};

        &:hover {
            background-color: ${({ theme }) => theme.pallet.red};
            color: ${({ theme }) => theme.pallet.white};
        }
    `}

    &:disabled {
        cursor: default;
        background-color: ${({theme}) => theme.pallet.white};
        color: ${({theme}) => theme.pallet.title};
    }
`;

export { ContdownContainer, Divider, CountdownButton };
