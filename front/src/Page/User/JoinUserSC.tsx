import styled from "styled-components";

export const JoinContainer = styled.div`
    margin: 1em;
`;

export const InfoTitle = styled.div`
    margin : 0.5em 0 0.5em 0;
    text-align: center;
    color: #3d2c8d;
    font-weight: bold;
    font-size: 30px;
`;

export const JoinDiv1 = styled.div`
    display: flex;
    flex-direction: column;
    width: 35em;
    background: rgba(201, 150, 204, 0.5);
    margin: 20px auto;
    padding: 30px;
`;

export const JoinDiv2 = styled.div`
    display: flex;
    flex-direction: column;
    width: 35em;
    background: rgba(201, 150, 204, 0.5);
    margin: 20px auto;
    padding: 30px;
`;

export const JoinItem = styled.div`
    display: block;
    flex-direction: row;
    width: 32em;
    & label {
        display: block;
        margin: 10px;
        color: #3d2c8d;
    }
    .First {
        display: flex;
        flex-direction: row;
    }
    .Second {
        display: flex;
        flex-direction: row;
        margin-left: 0.5em;
    }
    & p {
        margin: 0.5em;
        color: #3d2c8d;
    }

    & button {
        border: none;
        height: 30px;
        margin-top: 10px;
    }

    .Confirm {
        margin: 0.5em;
        color : #ff4c4c;
    }
`;

export const DefaultInput = styled.input`
    margin: 10px;
    border: solid 1px #3d2c8d;
    width: 34em;
    height: 30px;
`;

export const NameInput = styled.input`
    margin: 10px 2.9em 10px 10px;
    border: solid 1px #3d2c8d;
    width: 15em;
    height: 30px;
`;

export const BirthInput = styled.input`
    width: 10em;
    margin: 10px 0.85em 10px 10px;
    border: solid 1px #3d2c8d;
    height: 30px;
`;

export const AddressInput = styled.input`
    margin: 10px 2.9em 10px 10px;
    border: solid 1px #3d2c8d;
    width: 15em;
    height: 30px;
`;

export const ProfileInput = styled.input`
    margin: 10px;
    width: 34em;
    height: 30px;
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

export const CancelButton = styled.button`
    margin : 2em;
    padding : 1em;
    width : 15%;
    background: #ffffff;
    border: 1px solid #3d2c8d;
    border-Radius : 10px;
`;

