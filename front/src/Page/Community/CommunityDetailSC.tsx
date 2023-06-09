import styled from 'styled-components';

export const CommunityDetailMain = styled.div`
    padding: 100px;

    & h1 {
        display: flex;
        justify-content: center;
        margin: 1em;
        font-size : 2em;
        font-weight : bold;
        color: #3d2c8d;
    }

    & h3 {
        display: flex;
        justify-content: center;
        margin: 1em;
        font-size : 14px;
        font-weight : bold;
        color: #3d2c8d;
    }
`;

export const StyledBulletPoint = styled.div`
    background-color: #c996cc;
    border-radius: 20px;
    width: 100px;
    padding: 11px;
    font-weight: bold;
    font-size: 14px;
    line-height: 18px;
    text-align: center;
    color: #ffffff;
`;

export const TitleItem = styled.div`
    margin: 0 auto;
`

export const CommunityDetailTitle1 = styled.div`
    width: 80%;
    display: flex;
    padding: 20px;
    margin: 0 auto;
    & div {
        padding: 10px 10px;
        font-weight: bold;
        font-size: 14px;
        align-items: center;
    }
`;

export const CommunityDetailTitle2 = styled.div`
    width: 80%;
    display: flex;
    padding: 0 0 0 30px;
    margin: 0 auto;
    justify-content: flex-end;

    & div {
        padding: 10px 10px;
        font-weight: bold;
        font-size: 14px;
    }
`;

export const CommunityDetailContent = styled.div`
    width: 80%;
    display: flex;
    padding: 20px;
    margin: 0 auto;
    justfy-content: center;
    background: rgba(201, 150, 204, 0.5);
`;

export const ButtonDiv = styled.div`
    width: 80%;
    display: flex;
    padding: 0 0 0 30px;
    margin: 0 auto;
    justify-content: flex-end;

    & button {
        padding: 10px;
        width: 7%;
        color: white;
        background-color: #916bbf;
        border: 1px solid white;
        border-radius: 10px;
        :hover  {
            background-color: #c996cc;
        }
    }
`;

export const CommunityCommentTitle = styled.div`
    width: 80%;
    display: flex;
    padding: 20px 20px 20px 0px;
    margin: 0 auto;
    & h3 {
        justify-content: left;
    };
`;

export const CommunityCommentWrite = styled.div`
    width: 80%;
    display: flex;
    padding: 0px 20px;
    margin: 0 auto;
    justfy-content: center;
    align-items: center;

    & h4 {
        width: 10%;
        padding: 10px;
        margin: 5px;
        display: inline;
        text-align: center;
        font-weight : bold;
        font-size : 12px;
    };

    & div {
        position: relative;
        width: 80%;
        margin-top: 40px;
        margin-bottom: 5px;
        margin-right: 5px;
    }

    & input {
        font-size: 15px;
        color: #222222;
        width: 300px;
        border: none;
        border; bottom: solid #aaaaaa 1px;
        padding-bottom: 10px;
        padding-left: 10px;
        position: relative;
        background: none;
        z-index: 5;
    }

    & input::placeholder { color: #aaaaaa; }
    & input:focus { outline: none; }

    & span {
        display: block;
        position: absolute;
        bottom: 0;
        left: 0%;
        background-color: #666;
        width: 0;
        height: 2px;
        border-radius: 2px;
        transition: 0.5s;
    }

    & label {
        position: absolute;
        color: #aaa;
        left: 10px;
        font-size: 20px;
        bottom: 8px;
        transition: all .2s;
    }

    & input:focus ~ label, input:valid ~ label {
        font-size: 16px;
        bottom: 40px;
        color: #666;
        font-weight: bold;
    }

    & input:focus ~ span, input:valid ~ span {
        width: 100%;
    }

    & button {
        padding: 10px;
        width: 7%;
        color: white;
        background-color: #916bbf;
        border: 1px solid white;
        border-radius: 10px;
        :hover  {
            background-color: #c996cc;
        }
    };
`

export const CommunityCommentList = styled.div`
    width: 80%;
    display: flex;
    padding: 0px 20px;
    margin: 0 auto;
    justfy-content: center;
    align-items: center;
    background: rgba(201, 150, 204, 0.5);

    & h4 {
        width: 10%;
        padding: 10px;
        margin: 5px;
        display: inline;
        text-align: center;
        font-weight : bold;
        font-size : 12px;
    };

    & p {
        // width: 75%;
        width: 80%;
        padding: 10px;
        margin: 5px;
        display: inline;
        vertical-align: middle;
    };

    & button {
        padding: 10px;
        width: 7%;
        color: white;
        background-color: #916bbf;
        border: 1px solid #916bbf;
        border-radius: 10px;
        :hover  {
            background-color: #c996cc;
        }
    };
`;