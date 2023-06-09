import styled from "styled-components";

export const Home = styled.div`
    border : 1px solid white;
`

export const Intro1 = styled.div`
    background-image : url('Img/Main.jpg');
    background-repeat : no-repeat;
    background-size : 125%;
    background-position : center;
    padding : 25em 0;
    text-align : center;
    }
`

export const Intro2 = styled.div`
    padding : 5rem 0;
    background-Color : #3D2C8D;
    color : white;
    text-align : center;

    & img {
        margin : 1em;
        width : 25%
    }

    & div {
        margin : 1em;
        font-size : 2em;
        & h1 {
            margin : 0.3em;
        }
    }
`

export const Intro3 = styled.div`
    padding : 25rem 0;
    background-image : url('Img/Community.jpg');
    background-size : 100%;
    background-repeat : no-repeat;
    background-position : center;
    color : white;
    text-align : center;

    & h1 {
        font-size : 6em;
    }
`

export const Intro4 = styled.div`
    padding : 5rem 0;
    background-Color : #C996CC;
    color : white;
    text-align : center;

    & img {
        margin : 1em;
        width : 40%
    }

    & div {
        margin : 1em;
        font-size : 2em;
        & h1 {
            margin : 0.3em;
        }
    }
`