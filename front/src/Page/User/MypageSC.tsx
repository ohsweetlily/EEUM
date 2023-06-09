import styled from "styled-components";

export const MypageContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

export const TitleDiv = styled.div`
    margin : 2em 2em 1em 2em;
    border-bottom : 1px grey solid;
    padding-bottom : 10px;
  
  & ul {
    list-style-type : none;
    
  }

  & li {
    display : inline;
  }
  
  & a {
    text-decoration : none;
    color : black;
  }
`
