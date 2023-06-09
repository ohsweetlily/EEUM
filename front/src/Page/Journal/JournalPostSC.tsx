import styled from "styled-components";

export const JournalPostFrame = styled.div`
    border : 1px solid black;
`

export const JournalPostMain = styled.div`

    & h1 {
        display : flex;
        justify-Content : center;
        margin : 1em;
        font-size : 2em;
        color : #3D2C8D;
    }

    & p {
        text-align : center;
    }

    & input {
        padding : 1em;
        margin : 1em;
        width : 20%
    }
`

export const TitleDate = styled.div`
    display : flex;
    justify-Content : center;

    & input {
        text-align : center;
        width : 20em;
        font-size : 1.5em;
        border : none;
        border-radius : 8px;
    }
`

export const TitleDate2 = styled.div`
    display : flex;
    justify-content : center;

    & input {
        text-align : center;
        width : 10em;
        border : 1px solid black;
        border-radius : 8px;
    }
`

export const JournalPost = styled.div`
    display : flex;
    justify-Content : center;
    padding : 1em;

    & textarea {
        width : 40%;
        height : 20rem;
        border : 1px solid #3D2C8D;
        border-radius : 10px;
        text-align : center;
        font-size : 1.5em;
        ::placeholder {
            padding : 9rem;
        }
    }
`

export const ButtonDiv = styled.div`
    display : flex;
    justify-Content : center;

    & button {
        margin : 2em;
        padding : 1em;
        width : 20%;
        color : white;
        background-color : #916BBF;
        border : 1px solid white;
        border-Radius : 10px;
        : hover {
            background-color : #C996CC;
        }
    }
`