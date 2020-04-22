import styled from 'styled-components';

export const Container = styled.div`
    height: 100%;
    background: linear-gradient(-90deg, #d4d4d4, #e1e1e1);
    display: flex;
    justify-content: center;
    align-items: center;  
`;

export const UserInfo = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    line-height: 30px;

    button {
        height: 45px;
        width: 100px;
        border: none;
        border-radius: 7px;
        background-color: #000;
        color: #fff;
        margin: 15px auto;
    }
`;
