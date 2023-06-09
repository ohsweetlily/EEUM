import styled from "styled-components";

export const Header = styled.header`
    font-size: 20px;
    background-color: #ffffff;
    color: white;
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    align-items: center;

    & a {
        padding: 1em;
        text-decoration: none;
        color: black;
        vertical-align: middle;
    }

    & img {
        padding: 0;
        width: 7em;
        margin: 0;
    }
    & div {
        position: absolute;
        right: 2em;
    }

    & button {
        border : none;
        background-color: #ffffff;
        font-size: 20px;
        cursor:pointer
    }
    .LogoutDiv {
        display: flex;
        align-items: center;
    }
`;
