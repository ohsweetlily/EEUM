import styled from "styled-components";

export const ListTable = styled.table`
    width: 100%;
    font-size: 16px;
    margin-bottom: 40px;
`;

export const TableHead = styled.thead`
    background-color: #916bbf;
    border: 1px solid #ffffff;
    border-width: 1px 0px;

    th {
        padding: 24px 32px;
        font-weight: bold;
        color: #ffffff;
    }
`;

export const TableBody = styled.tbody`
    tr {
        font-weight: 400;
        color: #000000;
        // cursor: pointer;

        td {
            padding: 24px 32px;
            text-align: center;
            vertical-align: middle;
        }
    }

    tr:hover {
        background-color: rgba(145, 107, 191, 0.1);
        font-color: #000000;
    }
`;

export const LoadingDiv = styled.div`
    height: 30vh;
    width : 70vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
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
    margin: auto;
`;

export const CommunityListMain = styled.div`
    padding: 2em;

    & h1 {
        text-align: center;
        margin: 1em;
        font-size: 2em;
        font-weight: bold;
        color: #3d2c8d;
    }
`;

export const ButtonDiv = styled.div`
    display: flex;
    justify-content: right;
    padding: 1em;

    & button {
        margin: 2em;
        padding: 1em;
        width: 7%;
        color: white;
        background-color: #916bbf;
        border: 1px solid white;
        border-radius: 10px;
        font-size: 0.75em;
        :hover {
            background-color: #c996cc;
        }
    }
`;

export const Button = styled.div`
    display: flex;
    justify-content: center;
    padding: 2em;

    & button {
        border: none;
        padding: 10px;
        margin: 1em;
        border-radius: 10px;
        :hover  {
            color: white;
            background-color: #c996cc;
        }
    }
`;
