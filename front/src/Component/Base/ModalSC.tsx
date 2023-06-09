import styled from "styled-components";

export const ModalContainer = styled.div`
    width : 100%
    height: 100%
    border : 1px solid black;
    align-items : center;
    justify-content: center;
    position : fixed;
`;

export const DialogBox = styled.div`
    position : fixed;
    top: 50%;
    left: 25%;
    width: 800px;
    height: 400px;
    display: flex;
    ailgn-items: center;
    border: 2px solid black ;
    border-radius: 3px;
    box-shadow: 0 0 30px rgba(30, 30, 30, 0.185);
    box-sizing: border-box;
    z-index: 10000;
`;

export const Backdrop = styled.div`
    width: 100vw;
    height: 100vh;
    position : fixed;
    top:0;
    backgroud-color: rgba(0,0,0,0.2)
`;
