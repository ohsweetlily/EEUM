import styled from "styled-components";

export const PostCommunityMain = styled.div`
    padding: 100px;

    & h1 {
        display : flex;
        justify-Content : center;
        margin : 1em;
        font-size : 2em;
        font-weight : bold;
        color: #3d2c8d;
    }
`

export const Title = styled.div`
    width : 100%;
    padding : 25px 100px;
    display : flex;
    // justify-Content : space-between;
    
    & select {
        // text-align : center;
        padding : 1em;
        margin : 1em;
        margin-right : 50px;
        width : 10%;
    }

    & input {
        padding : 1em;
        margin : 1em;
        width : 65%;
    }
`

export const PostCommunity = styled.div`
    // display : flex;
    // justify-Content : center;
    padding : 25px 100px;   
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