import styled, { css } from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
    height: 100%;
    background: linear-gradient(-90deg, #000, #1a1a1a);
    display: flex;
    justify-content: center;
    align-items: center;
`;

export const Content = styled.div`
    max-width: 700px;
    text-align: center;

    form { 
        display: flex;
        flex-direction: column;
        margin-top: 30px;
        background: #fff;
        padding: 30px;
        width: 500px;
        border-radius: 7px;

        input {
            background: rgba(0, 0, 0, 0.4);
            border: 0;
            border-radius: 4px;
            height: 44px;
            padding: 0 15px;
            color: #fff;
            margin: 0 0 10px;

            &::placeholder {
                color: rgba(255, 255, 255, 0.7);
            }
        }

        span {
            color: #fb6f91;
            align-self: flex-start;
            margin: 0 0 10px;
            font-weight: bold;
        }

        button {
            margin: 5px 0 0;
            height: 44px;
            background: #000;
            font-weight: bold;
            color: #fff;
            border: 0;
            border-radius: 4px;
            font-size: 16px;
            transition: background 0.2s;

            ${props => props.loading && 
            css`
                svg {
                    animation: ${rotate} 2s linear infinite;
                }
            `}


            &:hover {
                background: ${darken(0.03, '#3a3a3a')};
            }
        }

        a {
            color: #000;
            margin-top: 15px;
            font-size: 16px;
            font-weight: 700;
            opacity:  0.8;

            &:hover {
                opacity: 1;
            }
        }
    }
`;