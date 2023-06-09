import styled from "styled-components";

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-between;
  flex-grow: 1;
`;

export const PageUl = styled.ul`
  display: flex;
  gap: 8px;
  justify-content: center;
`;

export const PageLi = styled.li`
  display: inline-block;
  padding: 8px 0;
  text-align: center;
  width: 32px;
  height: 32px;
  border-radius: 4px;
  background: white;
  border: 1px solid black;
  color: black;
  cursor: pointer;
  user-select: none;

  &:hover {
    border-color: black;
  }

  &[aria-current] {
    background: white;
    border: 1px solid black;
    color: white;
  }
`;

export const Empty = styled.div`
  width: 103px;
`;