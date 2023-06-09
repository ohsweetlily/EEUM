import styled from "styled-components";

export const EmotionDiv = styled.div`
    margin : 1em;
    font-size : 1.5em;

`

export const JouranlDetailMain = styled.div`

    text-align : center;
    padding : 1em;

    & hr {
        width : 50%
    }

    & h1 {
        margin : 1em;
    }

    & h2 {
        margin : 0.5em;
        font-size : 1.5em;
    }

    & h3 {
        margin : 1em;
        }

    & h4 {
        font-size : 3em;
        margin-bottom : 1em;
    }

    & button {
        padding : 1em;
        width : 10%;
        color : white;
        background-color : #916BBF;
        border : 1px solid white;
        border-Radius : 10px;
        : hover {
            background-color : #C996CC;
        }
    }
`

export const JournalDetail = styled.div`
    display : flex;
    justify-content : center;

    & img {
        width : 200px;
        margin : 1em;
    }

    & div {
        width : 30%;
        text-align : center;
        margin : 1rem;
        padding : 10rem;
    }
`
