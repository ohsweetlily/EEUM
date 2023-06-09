import styled from "styled-components";

export const LoginContainer = styled.div`
    margin: 50px;
    display: flex;
    flex-direction: column;
`;

export const InfoDiv = styled.div`
    margin: 20px auto;
    padding: 10px;
`;

export const AddedDiv = styled.div`
    margin: 20px auto;
    padding: 10px;

    & button {
        margin: 20px;
        color: #c996cc;
        font-weight: bold;
        background: none;
        border: none;
        cursor: pointer;
    }
`;

export const LoginItem = styled.div`
    display: block;

    & input {
        margin: 10px;
        border: solid 1px #3d2c8d;
        border-radius : 10px;
        width: 400px;
        height: 50px;
    }
    & input::placeholder {
        font-weight: bold;
        color: gray;
        text-align: center;
    }
`;

export const ButtonDiv = styled.div`
    padding: auto;
    display: flex;
    justify-content: center;
`;

export const ConfirmButton = styled.button`
    margin : 2em;
    padding : 1em;
    width : 15%;
    color : white;
    background-color : #916BBF;
    border : 1px solid white;
    border-Radius : 10px;
    : hover {
        background-color : #C996CC;
`;
